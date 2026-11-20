import { NextRequest, NextResponse } from "next/server";
import {
  buildSecretarySystemPrompt,
  CHURCH_CONSTANTS,
  extractActionFromReply,
  generateLocalFallbackReply,
  SecretaryAction,
} from "@/lib/churchKnowledge";

type ChatMessage = {
  role: "user" | "assistant" | "system";
  content: string;
};

const OPENROUTER_FREE_NEMOTRON_MODELS = [
  "nvidia/llama-3.3-nemotron-super-49b-v1:free",
  "nvidia/llama-3.1-nemotron-ultra-253b-v1:free",
  "nvidia/nemotron-nano-12b-v2-vl:free",
  "nvidia/llama-3.1-nemotron-nano-8b-v1:free",
  "openrouter/free",
];

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
          ? `Thank you, **${name}**! I have registered your **Biblical Counseling** request and forwarded your details (**${contact}** • *${modality || "To be arranged"}* • *${preferredTime || "Flexible"}*) directly to **Pastor Gustavo Santos**.\n\nTo lock in an exact time slot on his calendar right away, you can also click the **Calendly** button below:`
          : `Muito obrigada, **${name}**! Já registrei sua solicitação de **Aconselhamento Bíblico** e encaminhei seus dados (**${contact}** • *${modality || "A combinar"}* • *${preferredTime || "A combinar"}*) diretamente para o **Pr. Gustavo Santos**.\n\nSe você já quiser reservar o dia e horário exatos na agenda dele, basta clicar no botão do **Calendly** abaixo:`;
        return NextResponse.json({
          reply,
          action: directAction,
          modelUsed: "direct-action",
        });
      }

      if (directAction.type === "MESSAGE_PASTOR") {
        const { name, contact } = directAction.payload;
        const reply = isEn
          ? `Thank you, **${name}**! Your message has been sent directly to **Pastor Gustavo Santos** (${CHURCH_CONSTANTS.pastorEmail}). He will get back to you via **${contact}** as soon as possible.`
          : `Muito obrigada, **${name}**! Sua mensagem foi encaminhada diretamente para o **Pr. Gustavo Santos** (${CHURCH_CONSTANTS.pastorEmail}). Assim que possível, ele responderá pelo contato informado (**${contact}**).`;
        return NextResponse.json({
          reply,
          action: directAction,
          modelUsed: "direct-action",
        });
      }
    }

    const rawMessages: ChatMessage[] = Array.isArray(body.messages) ? body.messages : [];
    const sanitizedMessages = rawMessages
      .filter(
        (m) =>
          m &&
          (m.role === "user" || m.role === "assistant") &&
          typeof m.content === "string" &&
          m.content.trim().length > 0
      )
      .slice(-14);

    const lastUserMessage =
      [...sanitizedMessages].reverse().find((m) => m.role === "user")?.content || "";

    const openRouterKey =
      process.env.OPENROUTER_API_KEY || process.env.NEXT_PUBLIC_OPENROUTER_API_KEY || "";
    const nvidiaKey = process.env.NVIDIA_API_KEY || "";

    const systemPrompt = buildSecretarySystemPrompt(locale);

    // 1. OpenRouter (Primary — supports 100% free NVIDIA Nemotron models)
    if (openRouterKey) {
      const customModel = process.env.OPENROUTER_MODEL?.trim();
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
              messages: [{ role: "system", content: systemPrompt }, ...sanitizedMessages],
              temperature: 0.4,
              max_tokens: 900,
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
          if (action) {
            await notifyPastorServerSide(action);
          }

          return NextResponse.json({
            reply: cleanReply || generateLocalFallbackReply(lastUserMessage, locale),
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
              messages: [{ role: "system", content: systemPrompt }, ...sanitizedMessages],
              temperature: 0.4,
              max_tokens: 900,
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          const rawContent: string = data?.choices?.[0]?.message?.content || "";
          if (rawContent.trim()) {
            const { cleanReply, action } = extractActionFromReply(rawContent);
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
      } catch (err) {
        console.warn("NVIDIA NIM error:", err);
      }
    }

    // 3. Built-in Intelligent Church Knowledge Fallback (works even without API key)
    const fallbackReply = generateLocalFallbackReply(lastUserMessage, locale);
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
          "Desculpe, ocorreu uma instabilidade momentânea. Você também pode falar conosco pelo WhatsApp (12) 99162-6321.",
        action: null,
      },
      { status: 200 }
    );
  }
}
