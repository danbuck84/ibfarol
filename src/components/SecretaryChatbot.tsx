"use client";

import React, { useState, useRef, useEffect, FormEvent } from "react";
import { useLocale } from "next-intl";
import { CHURCH_CONSTANTS, SecretaryAction } from "@/lib/churchKnowledge";

type UiMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  action?: SecretaryAction | null;
  timestamp: string;
};

type ActivePanel = "chat" | "counseling_form" | "pastor_form";

function dispatchBrowserEmailNotification(action: SecretaryAction) {
  try {
    if (action.type === "SCHEDULE_COUNSELING") {
      const { name, contact, modality, preferredTime, reason } = action.payload;
      fetch(`https://formsubmit.co/ajax/${CHURCH_CONSTANTS.pastorEmail}`, {
        method: "POST",
        keepalive: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Tipo: "Agendamento de Aconselhamento (Secretária Virtual)",
          Nome: name,
          Contato: contact,
          Modalidade: modality || "A combinar",
          Disponibilidade: preferredTime || "A combinar",
          Resumo: reason || "Não informado",
          _subject: `Agendamento de Aconselhamento IBFarol — ${name}`,
          _template: "table",
          _captcha: "false",
        }),
      }).catch(() => {});
    } else if (action.type === "MESSAGE_PASTOR") {
      const { name, contact, subject, message } = action.payload;
      fetch(`https://formsubmit.co/ajax/${CHURCH_CONSTANTS.pastorEmail}`, {
        method: "POST",
        keepalive: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Tipo: "Mensagem ao Pastor (Secretária Virtual)",
          Nome: name,
          Contato: contact,
          Assunto: subject || "Mensagem via Secretária Virtual",
          Mensagem: message,
          _subject: `Nova mensagem ao Pastor IBFarol — ${name}`,
          _template: "table",
          _captcha: "false",
        }),
      }).catch(() => {});
    }
  } catch {
    // Ignore client network errors
  }
}

function renderFormattedText(text: string) {
  const lines = text.split("\n");
  return lines.map((line, lineIdx) => {
    const trimmed = line.trim();
    if (!trimmed) {
      return <div key={lineIdx} className="h-2" />;
    }

    const isBullet = /^[-•]\s+/.test(trimmed);
    const cleanLine = isBullet ? trimmed.replace(/^[-•]\s+/, "") : line;

    // Split by bold (**...**), inline code (`...`), or URLs
    const tokenRegex = /(\*\*[^*]+\*\*|`[^`]+`|https?:\/\/[^\s)]+)/g;
    const parts = cleanLine.split(tokenRegex);

    const renderedParts = parts.map((part, idx) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={idx} className="font-semibold text-inherit">
            {part.slice(2, -2)}
          </strong>
        );
      }
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code
            key={idx}
            className="px-1.5 py-0.5 rounded bg-brand-canvas-soft text-brand-ink font-mono text-xs border border-brand-hairline"
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      if (/^https?:\/\//.test(part)) {
        return (
          <a
            key={idx}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-medium text-brand-primary-ink hover:text-brand-ink break-all"
          >
            {part}
          </a>
        );
      }
      return <React.Fragment key={idx}>{part}</React.Fragment>;
    });

    if (isBullet) {
      return (
        <div key={lineIdx} className="flex items-start gap-2 pl-1 my-0.5">
          <span className="text-brand-primary font-bold leading-snug">•</span>
          <span className="leading-snug">{renderedParts}</span>
        </div>
      );
    }

    return (
      <p key={lineIdx} className="leading-relaxed my-0.5">
        {renderedParts}
      </p>
    );
  });
}

export default function SecretaryChatbot() {
  const locale = useLocale();
  const isEn = locale === "en";

  const welcomeMessage: UiMessage = {
    id: "welcome",
    role: "assistant",
    content: isEn
      ? "Hello! Peace be with you! I'm **Clara**, Farol Baptist Church's virtual secretary.\n\nI can answer questions about our church, **schedule Biblical Counseling**, or **send a message / prayer request directly to Pastor Gustavo**.\n\nHow can I help you today?"
      : "Olá! A paz! Sou a **Clara**, secretária virtual da **Igreja Batista Farol**.\n\nPosso tirar dúvidas sobre a igreja, **agendar um Aconselhamento Bíblico** ou **enviar uma mensagem / pedido de oração direto ao Pr. Gustavo**.\n\nComo posso ajudar você hoje?",
    timestamp: "Agora",
  };

  const [isOpen, setIsOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<ActivePanel>("chat");
  const [messages, setMessages] = useState<UiMessage[]>([welcomeMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Counseling quick-form state
  const [cName, setCName] = useState("");
  const [cContact, setCContact] = useState("");
  const [cModality, setCModality] = useState("Presencial na igreja");
  const [cTime, setCTime] = useState("");
  const [cReason, setCReason] = useState("");

  // Pastor message quick-form state
  const [pName, setPName] = useState("");
  const [pContact, setPContact] = useState("");
  const [pSubject, setPSubject] = useState("Mensagem ao Pastor");
  const [pMessage, setPMessage] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const saved = window.sessionStorage.getItem("ibfarol_secretary_chat");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  useEffect(() => {
    try {
      if (messages.length > 1) {
        window.sessionStorage.setItem("ibfarol_secretary_chat", JSON.stringify(messages));
      }
    } catch {
      // Ignore storage errors
    }
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isOpen, activePanel]);

  const sendChatMessage = async (textToSend: string) => {
    const trimmed = textToSend.trim();
    if (!trimmed || isLoading) return;

    const userMsg: UiMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
      timestamp: new Date().toLocaleTimeString(isEn ? "en-US" : "pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const updatedHistory = [...messages, userMsg];
    setMessages(updatedHistory);
    setInput("");
    setIsLoading(true);
    setActivePanel("chat");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          messages: updatedHistory.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      const data = await res.json();
      const action: SecretaryAction | null = data?.action || null;

      if (action) {
        dispatchBrowserEmailNotification(action);
      }

      const assistantMsg: UiMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content:
          data?.reply ||
          (isEn
            ? "Sorry, I couldn't process your request right now."
            : "Desculpe, não consegui processar sua mensagem no momento."),
        action,
        timestamp: new Date().toLocaleTimeString(isEn ? "en-US" : "pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: "assistant",
          content: isEn
            ? "We had a temporary connection issue. Please try again or reach us via WhatsApp at (12) 99162-6321."
            : "Tivemos uma oscilação de conexão. Tente novamente ou fale conosco no WhatsApp (12) 99162-6321.",
          timestamp: "Agora",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCounselingSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!cName.trim() || !cContact.trim() || isLoading) return;

    const actionPayload: SecretaryAction = {
      type: "SCHEDULE_COUNSELING",
      payload: {
        name: cName.trim(),
        contact: cContact.trim(),
        modality: cModality,
        preferredTime: cTime.trim() || (isEn ? "Flexible" : "A combinar"),
        reason: cReason.trim() || (isEn ? "Biblical counseling" : "Aconselhamento bíblico"),
      },
    };

    const summaryUserMsg: UiMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: isEn
        ? `📅 **Counseling Request**\n- **Name:** ${cName}\n- **Contact:** ${cContact}\n- **Format:** ${cModality}\n- **Availability:** ${cTime || "Flexible"}\n- **Topic:** ${cReason || "Confidential"}`
        : `📅 **Solicitação de Aconselhamento**\n- **Nome:** ${cName}\n- **Contato:** ${cContact}\n- **Formato:** ${cModality}\n- **Disponibilidade:** ${cTime || "A combinar"}\n- **Motivo:** ${cReason || "Reservado"}`,
      timestamp: new Date().toLocaleTimeString(isEn ? "en-US" : "pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, summaryUserMsg]);
    setActivePanel("chat");
    setIsLoading(true);

    dispatchBrowserEmailNotification(actionPayload);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          directAction: actionPayload,
        }),
      });
      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: data?.reply,
          action: actionPayload,
          timestamp: new Date().toLocaleTimeString(isEn ? "en-US" : "pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);

      setCName("");
      setCContact("");
      setCTime("");
      setCReason("");
    } finally {
      setIsLoading(false);
    }
  };

  const handlePastorMessageSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!pName.trim() || !pContact.trim() || !pMessage.trim() || isLoading) return;

    const actionPayload: SecretaryAction = {
      type: "MESSAGE_PASTOR",
      payload: {
        name: pName.trim(),
        contact: pContact.trim(),
        subject: pSubject,
        message: pMessage.trim(),
      },
    };

    const summaryUserMsg: UiMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: isEn
        ? `✉️ **Message to Pastor Gustavo**\n- **Name:** ${pName}\n- **Contact:** ${pContact}\n- **Subject:** ${pSubject}\n- **Message:** ${pMessage}`
        : `✉️ **Mensagem ao Pr. Gustavo**\n- **Nome:** ${pName}\n- **Contato:** ${pContact}\n- **Assunto:** ${pSubject}\n- **Mensagem:** ${pMessage}`,
      timestamp: new Date().toLocaleTimeString(isEn ? "en-US" : "pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, summaryUserMsg]);
    setActivePanel("chat");
    setIsLoading(true);

    dispatchBrowserEmailNotification(actionPayload);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          directAction: actionPayload,
        }),
      });
      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: data?.reply,
          action: actionPayload,
          timestamp: new Date().toLocaleTimeString(isEn ? "en-US" : "pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);

      setPName("");
      setPContact("");
      setPMessage("");
    } finally {
      setIsLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([welcomeMessage]);
    setActivePanel("chat");
    try {
      window.sessionStorage.removeItem("ibfarol_secretary_chat");
    } catch {
      // Ignore
    }
  };

  const quickSuggestions = isEn
    ? [
        { label: "🕒 Service Times & Address", prompt: "What are the Sunday service times and church address?" },
        { label: "📖 Weekly Reading Plan", prompt: "What is this week's Bible reading plan?" },
        { label: "🤝 Ministries & Small Groups", prompt: "Tell me about the church ministries and small groups." },
        { label: "💛 PIX & Offerings", prompt: "What are the PIX and bank details for offerings?" },
      ]
    : [
        { label: "🕒 Horários e Endereço", prompt: "Quais são os horários de domingo, programação fixa e o endereço da igreja?" },
        { label: "📖 Plano de Leitura da Semana", prompt: "Qual é o plano de leitura bíblica desta semana?" },
        { label: "🤝 Ministérios e PGs", prompt: "Quais são os ministérios da igreja e como funcionam os Pequenos Grupos?" },
        { label: "💛 PIX e Contribuição", prompt: "Quais são as chaves PIX e dados bancários para ofertas?" },
      ];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2.5rem)] sm:w-[410px] h-[590px] max-h-[calc(100vh-6.5rem)] bg-brand-canvas border border-brand-hairline rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-brand-canvas-dark text-white px-4 py-3.5 flex items-center justify-between border-b border-white/10 shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-brand-on-primary font-bold text-base shadow-sm shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icons/farol-chatbot.png"
                  alt="Farol"
                  className="w-7 h-7 object-contain"
                />
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-brand-canvas-dark" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-sm text-white leading-tight">
                    {isEn ? "Clara • IB Farol Secretary" : "Clara • Secretária IB Farol"}
                  </h3>
                </div>
                <p className="text-[11px] text-[#B4BDBD] leading-tight mt-0.5">
                  {isEn ? "Online • Counseling & Info" : "Online • Atendimento, Agenda e Pastor"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={resetChat}
                title={isEn ? "Reset conversation" : "Nova conversa"}
                className="p-1.5 text-[#B4BDBD] hover:text-white rounded-md hover:bg-white/10 transition-colors cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                aria-label={isEn ? "Close chat" : "Fechar chat"}
                className="p-1.5 text-[#B4BDBD] hover:text-white rounded-md hover:bg-white/10 transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Action Tabs Bar */}
          <div className="bg-brand-canvas-soft border-b border-brand-hairline px-3 py-2 flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => setActivePanel("chat")}
              className={`flex-1 text-xs font-semibold py-1.5 px-2.5 rounded-lg transition-colors cursor-pointer ${
                activePanel === "chat"
                  ? "bg-brand-ink text-white shadow-xs"
                  : "bg-white text-brand-body border border-brand-hairline hover:bg-brand-canvas"
              }`}
            >
              💬 {isEn ? "Chat" : "Conversar"}
            </button>
            <button
              type="button"
              onClick={() => setActivePanel(activePanel === "counseling_form" ? "chat" : "counseling_form")}
              className={`flex-1 text-xs font-semibold py-1.5 px-2.5 rounded-lg transition-colors cursor-pointer ${
                activePanel === "counseling_form"
                  ? "bg-brand-primary text-brand-on-primary shadow-xs"
                  : "bg-white text-brand-body border border-brand-hairline hover:bg-brand-canvas"
              }`}
            >
              📅 {isEn ? "Counseling" : "Aconselhamento"}
            </button>
            <button
              type="button"
              onClick={() => setActivePanel(activePanel === "pastor_form" ? "chat" : "pastor_form")}
              className={`flex-1 text-xs font-semibold py-1.5 px-2.5 rounded-lg transition-colors cursor-pointer ${
                activePanel === "pastor_form"
                  ? "bg-brand-primary text-brand-on-primary shadow-xs"
                  : "bg-white text-brand-body border border-brand-hairline hover:bg-brand-canvas"
              }`}
            >
              ✉️ {isEn ? "Pastor" : "Msg Pastor"}
            </button>
          </div>

          {/* Panel 1: Quick Counseling Appointment Form */}
          {activePanel === "counseling_form" && (
            <div className="flex-1 overflow-y-auto p-4 bg-brand-canvas">
              <div className="bg-white border border-brand-hairline rounded-xl p-4 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-brand-ink text-base">
                    📅 {isEn ? "Schedule Biblical Counseling" : "Agendar Aconselhamento Bíblico"}
                  </h4>
                  <button
                    type="button"
                    onClick={() => setActivePanel("chat")}
                    className="text-xs text-brand-mute hover:text-brand-ink"
                  >
                    {isEn ? "Back" : "Voltar"}
                  </button>
                </div>
                <p className="text-xs text-brand-body mb-4 leading-relaxed">
                  {isEn
                    ? "100% free and confidential with Pastor Gustavo Santos (~1 hour). Fill in below or ask Clara in the chat."
                    : "100% gratuito e confidencial com o Pr. Gustavo Santos (~1h). Preencha abaixo ou peça conversando com a Clara."}
                </p>

                <form onSubmit={handleCounselingSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-brand-ink mb-1">
                      {isEn ? "Your Name *" : "Seu Nome *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={cName}
                      onChange={(e) => setCName(e.target.value)}
                      placeholder={isEn ? "Ex: John Silva" : "Ex: João Silva"}
                      className="w-full text-sm bg-brand-canvas border border-brand-hairline rounded-lg px-3 py-2 text-brand-ink focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-ink mb-1">
                      {isEn ? "WhatsApp or Email *" : "WhatsApp ou E-mail *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={cContact}
                      onChange={(e) => setCContact(e.target.value)}
                      placeholder={isEn ? "(12) 99999-9999 or email" : "(12) 99999-9999 ou seu e-mail"}
                      className="w-full text-sm bg-brand-canvas border border-brand-hairline rounded-lg px-3 py-2 text-brand-ink focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-semibold text-brand-ink mb-1">
                        {isEn ? "Format" : "Modalidade"}
                      </label>
                      <select
                        value={cModality}
                        onChange={(e) => setCModality(e.target.value)}
                        className="w-full text-xs bg-brand-canvas border border-brand-hairline rounded-lg px-2.5 py-2 text-brand-ink focus:outline-none focus:border-brand-primary"
                      >
                        <option value="Presencial na igreja">
                          {isEn ? "In-person (Church)" : "Presencial na igreja"}
                        </option>
                        <option value="Online (Vídeo)">
                          {isEn ? "Online (Video)" : "Online (Vídeo)"}
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-brand-ink mb-1">
                        {isEn ? "Best Days / Time" : "Melhores Dias / Horário"}
                      </label>
                      <input
                        type="text"
                        value={cTime}
                        onChange={(e) => setCTime(e.target.value)}
                        placeholder={isEn ? "Ex: Tue/Thu evening" : "Ex: Terça à noite"}
                        className="w-full text-xs bg-brand-canvas border border-brand-hairline rounded-lg px-2.5 py-2 text-brand-ink focus:outline-none focus:border-brand-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-ink mb-1">
                      {isEn ? "Brief Summary (Confidential)" : "Breve resumo do motivo (Confidencial)"}
                    </label>
                    <textarea
                      rows={3}
                      value={cReason}
                      onChange={(e) => setCReason(e.target.value)}
                      placeholder={
                        isEn
                          ? "In a few lines, share how we can help..."
                          : "Em poucas linhas, conte como podemos caminhar com você..."
                      }
                      className="w-full text-sm bg-brand-canvas border border-brand-hairline rounded-lg px-3 py-2 text-brand-ink focus:outline-none focus:border-brand-primary resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-brand-primary hover:bg-brand-primary-deep text-brand-on-primary font-bold text-sm py-2.5 px-4 rounded-lg transition-colors cursor-pointer shadow-xs"
                  >
                    {isEn ? "Send Counseling Request" : "Confirmar Pedido de Agendamento"}
                  </button>

                  <div className="pt-2 border-t border-brand-hairline text-center">
                    <a
                      href={CHURCH_CONSTANTS.calendlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary-ink hover:underline"
                    >
                      <span>{isEn ? "Or pick an exact slot on Calendly" : "Ou escolha o horário direto no Calendly"}</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Panel 2: Quick Message to Pastor Form */}
          {activePanel === "pastor_form" && (
            <div className="flex-1 overflow-y-auto p-4 bg-brand-canvas">
              <div className="bg-white border border-brand-hairline rounded-xl p-4 shadow-xs">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-brand-ink text-base">
                    ✉️ {isEn ? "Message Pastor Gustavo" : "Enviar Mensagem ao Pr. Gustavo"}
                  </h4>
                  <button
                    type="button"
                    onClick={() => setActivePanel("chat")}
                    className="text-xs text-brand-mute hover:text-brand-ink"
                  >
                    {isEn ? "Back" : "Voltar"}
                  </button>
                </div>
                <p className="text-xs text-brand-body mb-4 leading-relaxed">
                  {isEn
                    ? "Send a message, question, or prayer request directly to Pastor Gustavo Santos."
                    : "Envie um recado, pedido de oração, dúvida pastoral ou aviso de visita diretamente ao Pr. Gustavo Santos."}
                </p>

                <form onSubmit={handlePastorMessageSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-brand-ink mb-1">
                      {isEn ? "Your Name *" : "Seu Nome *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={pName}
                      onChange={(e) => setPName(e.target.value)}
                      placeholder={isEn ? "Ex: Mary Oliveira" : "Ex: Maria Oliveira"}
                      className="w-full text-sm bg-brand-canvas border border-brand-hairline rounded-lg px-3 py-2 text-brand-ink focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-ink mb-1">
                      {isEn ? "WhatsApp or Email for Reply *" : "WhatsApp ou E-mail para retorno *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={pContact}
                      onChange={(e) => setPContact(e.target.value)}
                      placeholder={isEn ? "(12) 99999-9999 or email" : "(12) 99999-9999 ou seu e-mail"}
                      className="w-full text-sm bg-brand-canvas border border-brand-hairline rounded-lg px-3 py-2 text-brand-ink focus:outline-none focus:border-brand-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-ink mb-1">
                      {isEn ? "Subject" : "Assunto"}
                    </label>
                    <select
                      value={pSubject}
                      onChange={(e) => setPSubject(e.target.value)}
                      className="w-full text-xs bg-brand-canvas border border-brand-hairline rounded-lg px-2.5 py-2 text-brand-ink focus:outline-none focus:border-brand-primary"
                    >
                      <option value="Pedido de Oração">
                        {isEn ? "Prayer Request" : "Pedido de Oração"}
                      </option>
                      <option value="Mensagem ao Pastor">
                        {isEn ? "Message to the Pastor" : "Mensagem ao Pastor"}
                      </option>
                      <option value="Dúvida Bíblica / Pastoral">
                        {isEn ? "Biblical / Pastoral Question" : "Dúvida Bíblica / Pastoral"}
                      </option>
                      <option value="Quero Visitar a Igreja">
                        {isEn ? "Planning a Visit" : "Quero Visitar a Igreja"}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-brand-ink mb-1">
                      {isEn ? "Your Message *" : "Sua Mensagem *"}
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={pMessage}
                      onChange={(e) => setPMessage(e.target.value)}
                      placeholder={
                        isEn
                          ? "Write your message or prayer request here..."
                          : "Escreva sua mensagem ou pedido de oração..."
                      }
                      className="w-full text-sm bg-brand-canvas border border-brand-hairline rounded-lg px-3 py-2 text-brand-ink focus:outline-none focus:border-brand-primary resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-brand-primary hover:bg-brand-primary-deep text-brand-on-primary font-bold text-sm py-2.5 px-4 rounded-lg transition-colors cursor-pointer shadow-xs"
                  >
                    {isEn ? "Send to Pastor Gustavo" : "Enviar ao Pr. Gustavo"}
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* Panel 3: Conversation Messages */}
          {activePanel === "chat" && (
            <>
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3.5 bg-brand-canvas">
                {messages.map((msg) => {
                  const isUser = msg.role === "user";
                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                    >
                      <div
                        className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm shadow-xs ${
                          isUser
                            ? "bg-brand-canvas-dark text-white rounded-br-sm"
                            : "bg-white text-brand-ink border border-brand-hairline rounded-bl-sm"
                        }`}
                      >
                        <div className="space-y-1">{renderFormattedText(msg.content)}</div>

                        {/* Action Confirmation Card inside Assistant Message */}
                        {msg.action && msg.action.type === "SCHEDULE_COUNSELING" && (
                          <div className="mt-3 pt-3 border-t border-brand-hairline bg-brand-canvas-soft/70 -mx-2 px-3 py-2.5 rounded-xl">
                            <div className="flex items-center gap-1.5 text-emerald-700 font-bold text-xs mb-1.5">
                              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              <span>
                                {isEn
                                  ? "Counseling Request Sent to Pr. Gustavo!"
                                  : "Solicitação enviada ao Pr. Gustavo!"}
                              </span>
                            </div>
                            <p className="text-[11px] text-brand-body mb-2.5">
                              <strong>{msg.action.payload.name}</strong> ({msg.action.payload.contact}) •{" "}
                              {msg.action.payload.modality}
                            </p>
                            <div className="flex flex-col gap-1.5">
                              <a
                                href={CHURCH_CONSTANTS.calendlyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center gap-1.5 bg-brand-primary hover:bg-brand-primary-deep text-brand-on-primary font-bold text-xs py-2 px-3 rounded-lg transition-colors text-center"
                              >
                                📅{" "}
                                {isEn
                                  ? "Pick Exact Slot on Calendly"
                                  : "Escolher Horário no Calendly"}
                              </a>
                              <a
                                href={`https://wa.me/${CHURCH_CONSTANTS.whatsappNumber}?text=${encodeURIComponent(
                                  `Olá, Pr. Gustavo! Sou ${msg.action.payload.name} (${msg.action.payload.contact}). Gostaria de agendar um aconselhamento bíblico (${msg.action.payload.modality} - ${msg.action.payload.preferredTime}). Assunto: ${msg.action.payload.reason}`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center gap-1.5 bg-brand-ink hover:bg-brand-body text-white font-semibold text-xs py-2 px-3 rounded-lg transition-colors text-center"
                              >
                                💬{" "}
                                {isEn
                                  ? "Also Confirm via WhatsApp"
                                  : "Confirmar também no WhatsApp"}
                              </a>
                            </div>
                          </div>
                        )}

                        {msg.action && msg.action.type === "MESSAGE_PASTOR" && (
                          <div className="mt-3 pt-3 border-t border-brand-hairline bg-brand-canvas-soft/70 -mx-2 px-3 py-2.5 rounded-xl">
                            <div className="flex items-center gap-1.5 text-emerald-700 font-bold text-xs mb-1.5">
                              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                              <span>
                                {isEn
                                  ? "Sent to gustavo@batistafarol.org"
                                  : "Enviado para gustavo@batistafarol.org"}
                              </span>
                            </div>
                            <a
                              href={`https://wa.me/${CHURCH_CONSTANTS.whatsappNumber}?text=${encodeURIComponent(
                                `Olá, Pr. Gustavo! Sou ${msg.action.payload.name} (${msg.action.payload.contact}). ${msg.action.payload.message}`
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-1.5 w-full inline-flex items-center justify-center gap-1.5 bg-brand-ink hover:bg-brand-body text-white font-semibold text-xs py-2 px-3 rounded-lg transition-colors text-center"
                            >
                              💬{" "}
                              {isEn
                                ? "Send Copy on WhatsApp"
                                : "Enviar cópia pelo WhatsApp"}
                            </a>
                          </div>
                        )}
                      </div>
                      <span className="text-[10px] text-brand-mute mt-1 px-1">
                        {msg.timestamp}
                      </span>
                    </div>
                  );
                })}

                {isLoading && (
                  <div className="flex items-start">
                    <div className="bg-white border border-brand-hairline rounded-2xl rounded-bl-sm px-4 py-3 shadow-xs flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-brand-primary animate-bounce" />
                      <span className="w-2 h-2 rounded-full bg-brand-primary animate-bounce [animation-delay:150ms]" />
                      <span className="w-2 h-2 rounded-full bg-brand-primary animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                )}

                {/* Quick suggestion chips when at start of conversation */}
                {messages.length <= 2 && !isLoading && (
                  <div className="pt-2">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-mute mb-2">
                      {isEn ? "Quick suggestions:" : "Perguntas frequentes:"}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {quickSuggestions.map((s, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => sendChatMessage(s.prompt)}
                          className="text-xs bg-white hover:bg-brand-canvas-soft text-brand-ink border border-brand-hairline rounded-full px-3 py-1.5 transition-colors cursor-pointer text-left shadow-2xs"
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  sendChatMessage(input);
                }}
                className="p-3 bg-white border-t border-brand-hairline flex items-center gap-2 shrink-0"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={
                    isEn
                      ? "Ask Clara anything about the church..."
                      : "Pergunte sobre a igreja, aconselhamento..."
                  }
                  disabled={isLoading}
                  className="flex-1 text-sm bg-brand-canvas border border-brand-hairline rounded-xl px-3.5 py-2.5 text-brand-ink placeholder:text-brand-mute focus:outline-none focus:border-brand-primary disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  aria-label={isEn ? "Send message" : "Enviar mensagem"}
                  className="w-10 h-10 rounded-xl bg-brand-primary hover:bg-brand-primary-deep disabled:opacity-40 text-brand-on-primary flex items-center justify-center transition-colors cursor-pointer shrink-0 shadow-xs"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.4} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </form>
            </>
          )}
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isEn ? "Open Virtual Secretary" : "Abrir Secretária Virtual"}
        className="group flex items-center gap-3 bg-brand-canvas-dark hover:bg-black text-white pl-3.5 pr-4 py-3 rounded-full shadow-xl border border-white/15 transition-all duration-200 cursor-pointer hover:scale-[1.02]"
      >
        <div className="relative w-9 h-9 rounded-full bg-brand-primary text-brand-on-primary flex items-center justify-center font-bold shadow-xs shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icons/farol-chatbot.png"
            alt="Farol"
            className="w-6 h-6 object-contain"
          />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-brand-canvas-dark" />
        </div>
        <div className="text-left pr-0.5">
          <p className="text-xs font-bold text-white leading-tight">
            {isEn ? "Virtual Secretary" : "Secretária Virtual"}
          </p>
          <p className="text-[10px] text-brand-primary font-medium leading-tight">
            {isEn ? "Questions & Counseling" : "Dúvidas e Agendamentos"}
          </p>
        </div>
      </button>
    </div>
  );
}
