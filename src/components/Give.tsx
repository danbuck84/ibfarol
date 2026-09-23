"use client";

import { useTranslations } from "next-intl";

export default function Give() {
  const t = useTranslations('Contribua');
  return (
    <div className="w-full bg-[#0a0a0a] rounded-xl overflow-hidden shadow-2xl border border-white/5">
      <div className="flex flex-col">
        {/* Top: QR Code */}
        <div className="p-8 md:p-12 flex items-center justify-center bg-black/50 border-b border-white/5">
          <img src="/pix-qr.png" alt="QR Code PIX" className="w-[180px] h-auto rounded-lg bg-white p-2" />
        </div>

        {/* Bottom: Info */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-bold tracking-[2px] text-[#CED8D7] mb-8 uppercase text-center">
            {t('card_title')}
          </h2>

          <div className="space-y-6">
            {/* CNPJ */}
            <div>
              <p className="text-[10px] font-bold tracking-[2px] uppercase text-[#66716F] mb-1">{t('cnpj_label')}</p>
              <p className="text-xl md:text-2xl font-bold text-brand-primary">61.652.008/0001-27</p>
            </div>

            <div className="w-full h-px bg-white/5"></div>

            {/* Email */}
            <div>
              <p className="text-[10px] font-bold tracking-[2px] uppercase text-[#66716F] mb-1">{t('email_label')}</p>
              <p className="text-lg font-semibold text-white">ofertas@batistafarol.org</p>
            </div>

            <div className="w-full h-px bg-white/5"></div>

            {/* Banco */}
            <div>
              <p className="text-[10px] font-bold tracking-[2px] uppercase text-[#66716F] mb-1">{t('bank_label')}</p>
              <p className="text-base text-white/90">{t('bank_name')}</p>
              <p className="text-base text-white/90">{t('bank_cora')}</p>
              <p className="text-base text-white/90">{t('bank_agency')}</p>
              <p className="text-base text-white/90">{t('bank_account')}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Botões de atalho para cópia */}
      <div className="bg-[#0f0f0f] border-t border-white/5 p-5 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <button onClick={() => navigator.clipboard.writeText("61.652.008/0001-27")} className="bg-white/10 text-white px-5 py-3 rounded hover:bg-white/20 transition-colors w-full sm:w-auto text-xs uppercase tracking-wider font-semibold border border-white/10 hover:border-white/30">
              {t('copy_cnpj')}
          </button>
          <button onClick={() => navigator.clipboard.writeText("ofertas@batistafarol.org")} className="bg-brand-primary text-brand-on-primary px-5 py-3 rounded hover:bg-brand-primary-deep transition-colors w-full sm:w-auto text-xs uppercase tracking-wider font-bold">
              {t('copy_email')}
          </button>
      </div>
    </div>
  );
}
