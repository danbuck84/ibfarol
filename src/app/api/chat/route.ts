import { NextRequest, NextResponse } from "next/server";
import {
  buildSecretarySystemPrompt,
  CHURCH_CONSTANTS,
  extractActionFromReply,
  generateLocalFallbackReply,
  SecretaryAction,
} from "@/lib/churchKnowledge";

type ChatMessage = {
  id?: string;
  role: "user" | "assistant" | "system";
  content: string;
};

const OPENROUTER_FREE_NEMOTRON_MODELS = [
  "nvidia/nemotron-3.5-super-vl:free",
  "nvidia/nemotron-3-nano-omni-30b-a3b-reasoning:free",
  "nvidia/nemotron-3.5-lightning:free",
  "nvidia/nemotron-3-ultra-550b-a55b:free",
  "openrouter/free",
];

// Deprecated OpenRouter model IDs that now return 404
const DEPRECATED_NEMOTRON_IDS = new Set([
  "nvidia/llama-3.3-nemotron-super-49b-v1:free",
  "nvidia/llama-3.1-nemotron-ultra-253b-v1:free",
  "nvidia/nemotron-nano-12b-v2-vl:free",
  "nvidia/llama-3.1-nemotron-nano-8b-v1:free",
]);

/**
 * Ensures message history starts with 'user' (removing initial UI welcome bubble if needed)
 * and strictly alternates user / assistant roles so OpenRouter templates never reset context.
 */
function normalizeConversationHistory(rawMessages: ChatMessage[]): {
  role: "user" | "assistant";
  content: string;
}[] {
  const valid = rawMessages
    .filter(
      (m) =>
        m &&
        m.id !== "welcome" &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0
    )
    .map((m) => ({
      role: m.role as "user" | "assistant",
      content: m.content.trim(),
    }));

  // Drop any leading assistant messages before the first user message
  while (valid.length > 0 && valid[0].role === "assistant") {
    valid.shift();
  }

  // Merge consecutive messages of the same role to preserve strict user/assistant alternation
  const normalized: { role: "user" | "assistant"; content: string }[] = [];
  for (const msg of valid) {
    const prev = normalized[normalized.length - 1];
    if (prev && prev.role === msg.role) {
      prev.content = `${prev.content}\n\n${msg.content}`;
    } else {
      normalized.push({ ...msg });
    }
  }

  return normalized.slice(-24);
}

async function notifyPastorServerSide(action: SecretaryAction) {
  try {
    if (action.type === "SCHEDULE_COUNSELING") {
      const { name, contact, modality, preferredTime, reason } = action.payload;
      await fetch(`https://formsubmit.co/ajax/${CHURCH_CONSTANTS.pastorEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "https://batistafarol.org",
          Referer: "https://batistafarol.org/aconselhamento",
        },
        body: JSON.stringify({
          Tipo: "Solicitação de Aconselhamento Bíblico (Secretária Virtual)",
          Nome: name,
          Contato: contact,
          Modalidade: modality || "A combinar",
          Disponibilidade: preferredTime || "A combinar",
          Motivo_Resumo: reason || "Não informado",
          _subject: `Novo Agendamento de Aconselhamento — ${name}`,
          _template: "table",
          _captcha: "false",
        }),
      });
    } else if (action.type === "MESSAGE_PASTOR") {
      const { name, contact, subject, message } = action.payload;
      await fetch(`https://formsubmit.co/ajax/${CHURCH_CONSTANTS.pastorEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: "https://batistafarol.org",
          Referer: "https://batistafarol.org/",
        },
        body: JSON.stringify({
          Tipo: "Mensagem ao Pastor (Secretária Virtual)",
          Nome: name,
          Contato: contact,
          Assunto: subject || "Mensagem via Secretária Virtual",
          Mensagem: message,
          _subject: `Nova mensagem ao Pastor (Secretária Virtual) — ${name}`,
          _template: "table",
          _captcha: "false",
        }),
      });
    }
  } catch (err) {
    console.error("Server-side notification error:", err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const locale: string = body.locale === "en" ? "en" : "pt-BR";
    const isEn = locale === "en";

    // Handle direct inline form submissions (1-click Counseling or Pastor Message form inside chat)
    if (body.directAction) {
      const directAction = body.directAction as SecretaryAction;
      await notifyPastorServerSide(directAction);

      if (directAction.type === "SCHEDULE_COUNSELING") {
        const { name, contact, modality, preferredTime } = directAction.payload;
        const reply = isEn
          ? `Thank you, **${name}**! I have registered your **Biblical Counseling** request and forwarded your details (**${contact}** • *${modality || "To be arranged"}* • *${preferredTime || "Flexible"}*) directly to **Pastor Gustavo Santos**.\n\nRemember God's promise in **Psalm 34:18**: *"The LORD is near to the brokenhearted and saves the crushed in spirit."*\n\nTo lock in an exact time slot on his calendar right away, you can also click the **Calendly** button below:`
          : `Muito obrigada, **${name}**! Já registrei sua solicitação de **Aconselhamento Bíblico** e encaminhei seus dados (**${contact}** • *${modality || "A combinar"}* • *${preferredTime || "A combinar"}*) diretamente para o **Pr. Gustavo Santos**.\n\nLembre-se da promessa da Palavra de Deus em **Salmos 34.18 (NAA)**: *"Perto está o Senhor dos que têm o coração quebrantado e salva os de espírito oprimido."*\n\nSe você já quiser reservar o dia e horário exatos na agenda do Pr. Gustavo, basta clicar no botão do **Calendly** abaixo:`;
        return NextResponse.json({
          reply,
          action: directAction,
          modelUsed: "direct-action",
        });
      }

      if (directAction.type === "MESSAGE_PASTOR") {
        const { name, contact } = directAction.payload;
        const reply = isEn
          ? `Thank you, **${name}**! Your message has been sent directly to **Pastor Gustavo Santos** (${CHURCH_CONSTANTS.pastorEmail}). Our pastor and church family will be praying for you, and he will get back to you via **${contact}** as soon as possible.`
          : `Muito obrigada, **${name}**! Sua mensagem foi encaminhada diretamente para o **Pr. Gustavo Santos** (${CHURCH_CONSTANTS.pastorEmail}). O nosso pastor e a igreja estarão orando por você e, assim que possível, ele responderá pelo contato informado (**${contact}**).`;
        return NextResponse.json({
          reply,
          action: directAction,
          modelUsed: "direct-action",
        });
      }
    }

    const rawMessages: ChatMessage[] = Array.isArray(body.messages) ? body.messages : [];
    const normalizedMessages = normalizeConversationHistory(rawMessages);
    const isOngoingConversation = normalizedMessages.length > 1;

    const lastUserMessage =
      [...normalizedMessages].reverse().find((m) => m.role === "user")?.content || "";

    const openRouterKey =
      process.env.OPENROUTER_API_KEY || process.env.NEXT_PUBLIC_OPENROUTER_API_KEY || "";
    const nvidiaKey = process.env.NVIDIA_API_KEY || "";

    const systemPrompt = buildSecretarySystemPrompt(locale);

    // 1. OpenRouter (Primary — supports 100% free NVIDIA Nemotron 3 / 3.5 models)
    if (openRouterKey) {
      const envModel = process.env.OPENROUTER_MODEL?.trim();
      const customModel =
        envModel && !DEPRECATED_NEMOTRON_IDS.has(envModel) ? envModel : undefined;

      const modelsToTry = customModel
        ? [
            customModel,
            ...OPENROUTER_FREE_NEMOTRON_MODELS.filter((m) => m !== customModel),
          ]
        : OPENROUTER_FREE_NEMOTRON_MODELS;

      for (const model of modelsToTry) {
        try {
          const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${openRouterKey}`,
              "Content-Type": "application/json",
              "HTTP-Referer": "https://batistafarol.org",
              "X-Title": "Igreja Batista Farol - Secretaria Virtual",
            },
            body: JSON.stringify({
              model,
              messages: [{ role: "system", content: systemPrompt }, ...normalizedMessages],
              temperature: 0.45,
              max_tokens: 4096,
            }),
          });

          if (!response.ok) {
            const errText = await response.text();
            console.warn(`OpenRouter model ${model} returned ${response.status}: ${errText}`);
            continue;
          }

          const data = await response.json();
          const rawContent: string = data?.choices?.[0]?.message?.content || "";
          if (!rawContent.trim()) {
            continue;
          }

          const { cleanReply, action } = extractActionFromReply(rawContent);
          if (!cleanReply) {
            continue;
          }

          if (action) {
            await notifyPastorServerSide(action);
          }

          return NextResponse.json({
            reply: cleanReply,
            action,
            modelUsed: model,
          });
        } catch (err) {
          console.warn(`OpenRouter fetch error for model ${model}:`, err);
        }
      }
    }

    // 2. Direct NVIDIA NIM fallback if NVIDIA_API_KEY is configured instead
    if (nvidiaKey) {
      const nvidiaModel =
        process.env.NVIDIA_MODEL?.trim() || "nvidia/llama-3.3-nemotron-super-49b-v1";
      try {
        const response = await fetch(
          "https://integrate.api.nvidia.com/v1/chat/completions",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${nvidiaKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: nvidiaModel,
              messages: [{ role: "system", content: systemPrompt }, ...normalizedMessages],
              temperature: 0.45,
              max_tokens: 4096,
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          const rawContent: string = data?.choices?.[0]?.message?.content || "";
          if (rawContent.trim()) {
            const { cleanReply, action } = extractActionFromReply(rawContent);
            if (cleanReply) {
              if (action) {
                await notifyPastorServerSide(action);
              }
              return NextResponse.json({
                reply: cleanReply,
                action,
                modelUsed: nvidiaModel,
              });
            }
          }
        }
      } catch (err) {
        console.warn("NVIDIA NIM error:", err);
      }
    }

    // 3. Built-in Intelligent Pastoral & Church Knowledge Fallback (never resets an ongoing conversation)
    const fallbackReply = generateLocalFallbackReply(
      lastUserMessage,
      locale,
      isOngoingConversation
    );
    return NextResponse.json({
      reply: fallbackReply,
      action: null,
      modelUsed: "local-knowledge",
      missingApiKey: !openRouterKey && !nvidiaKey,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        reply:
          "Desculpe, ocorreu uma instabilidade momentânea na conexão. Continue falando comigo aqui ou, se preferir, chame no nosso WhatsApp (12) 99162-6321.",
        action: null,
      },
      { status: 200 }
    );
  }
}
