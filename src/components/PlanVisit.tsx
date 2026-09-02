"use client";
import { useTranslations } from "next-intl";
import { FormEvent, useRef, useState } from "react";

export default function PlanVisit() {
  const t = useTranslations('PlanVisit');
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("submitting");
    
    const formData = new FormData(formRef.current);
    // Netlify Forms requires this hidden field
    formData.append("form-name", "visita");

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      if (res.ok) {
        setStatus("success");
        formRef.current.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="py-16 px-8 bg-brand-canvas border-t border-brand-hairline min-h-[calc(100vh-66px)] flex flex-col justify-center" id="visita">
      <div className="max-w-[1280px] w-full mx-auto">
        <div className="mb-12 text-center md:text-left">
          <p className="text-sm font-semibold tracking-[2.52px] uppercase text-brand-primary-ink mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-[28px] md:text-[36px] font-normal leading-[34px] md:leading-[40px] tracking-[-0.9px] m-0 text-brand-ink mb-6">
            {t('headline')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Map and Address */}
          <div>
            <h3 className="text-xl font-bold tracking-wider text-brand-ink mb-4">{t('address_title')}</h3>
            <p className="text-base text-brand-body leading-[26px] whitespace-pre-line mb-6">
              {t('address_text')}
            </p>
            <div className="w-full h-[300px] bg-slate-100 rounded-md overflow-hidden relative border border-brand-hairline mb-6">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.652174317926!2d-45.89433192389146!3d-23.182885979062327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4ba49ec6e8c7%3A0xc3b8332152843bb3!2sR.%20Othon%20dos%20Santos%20Mercadante%2C%2043%20-%20Vila%20Sinha%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Campos%20-%20SP%2C%2012212-650!5e0!3m2!1sen!2sbr!4v1716922340510!5m2!1sen!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-bold tracking-wider text-brand-ink mb-4">{t('contact_title')}</h3>
            
            {status === "success" ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
                <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <h4 className="text-xl font-bold mb-2">Mensagem Enviada!</h4>
                <p>Obrigado pelo seu contato. Em breve o Pastor Gustavo responderá sua mensagem.</p>
                <button onClick={() => setStatus("idle")} className="mt-6 text-green-700 font-semibold hover:underline">
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} name="visita" data-netlify="true" netlify-honeypot="bot-field" className="space-y-4">
                <input type="hidden" name="form-name" value="visita" />
                <p className="hidden">
                  <label>Não preencha isso se você for humano: <input name="bot-field" /></label>
                </p>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-body mb-1">{t('form_name')}</label>
                  <input type="text" name="name" id="name" required className="w-full border border-brand-hairline rounded-md px-4 py-2 text-brand-ink focus:outline-none focus:border-brand-primary" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-body mb-1">{t('form_email')}</label>
                  <input type="email" name="email" id="email" required className="w-full border border-brand-hairline rounded-md px-4 py-2 text-brand-ink focus:outline-none focus:border-brand-primary" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-body mb-1">{t('form_message')}</label>
                  <textarea name="message" id="message" required rows={5} className="w-full border border-brand-hairline rounded-md px-4 py-2 text-brand-ink focus:outline-none focus:border-brand-primary resize-none"></textarea>
                </div>
                {status === "error" && (
                  <p className="text-red-500 text-sm font-medium">Ocorreu um erro ao enviar. Tente novamente mais tarde.</p>
                )}
                <button 
                  type="submit" 
                  disabled={status === "submitting"}
                  className="w-full font-semibold text-brand-on-primary bg-brand-primary border border-brand-primary px-4 py-3 rounded-md transition-colors hover:bg-brand-primary-deep cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Enviando..." : t('btn_submit')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
