"use client";
import { useTranslations } from "next-intl";

export default function Give() {
  const t = useTranslations('Give');

  return (
    <section className="py-20 px-8 bg-brand-canvas" id="contribua">
      <div className="max-w-[1000px] mx-auto bg-white rounded-xl border border-brand-hairline shadow-sm overflow-hidden flex flex-col md:flex-row">
        <div className="p-10 md:p-12 md:w-3/5 flex flex-col justify-center">
          <p className="text-sm font-bold text-brand-primary uppercase tracking-wider mb-2">Contribua</p>
          <h2 className="text-3xl font-bold text-brand-ink mb-4">{t('headline') || "Adoração Através da Contribuição"}</h2>
          <p className="text-brand-body text-lg mb-8 leading-relaxed">
            {t('description') || "[Parágrafo curto explicando a visão bíblica sobre por que a igreja recebe ofertas e como isso abençoa a comunidade]"}
          </p>
          
          <div className="bg-brand-canvas-soft border border-brand-hairline p-5 rounded-lg space-y-4">
            <div>
              <p className="text-brand-ink font-bold mb-1">Chave PIX (CNPJ)</p>
              <div className="flex items-center gap-4">
                <code className="bg-white px-3 py-2 border border-brand-hairline rounded text-brand-ink font-mono text-base sm:text-lg flex-grow">
                  61.652.008/0001-27
                </code>
                <button onClick={() => navigator.clipboard.writeText("61.652.008/0001-27")} className="bg-brand-primary text-white px-4 py-2 rounded-md font-bold hover:bg-brand-primary-deep transition-colors">
                  Copiar
                </button>
              </div>
            </div>
            <div>
              <p className="text-brand-ink font-bold mb-1">Chave PIX (E-mail)</p>
              <div className="flex items-center gap-4">
                <code className="bg-white px-3 py-2 border border-brand-hairline rounded text-brand-ink font-mono text-base sm:text-lg flex-grow">
                  ofertas@batistafarol.org
                </code>
                <button onClick={() => navigator.clipboard.writeText("ofertas@batistafarol.org")} className="bg-brand-primary text-white px-4 py-2 rounded-md font-bold hover:bg-brand-primary-deep transition-colors">
                  Copiar
                </button>
              </div>
            </div>
            <p className="text-sm text-brand-mute mt-3 italic font-medium">Igreja Batista Farol · Banco Cora</p>
          </div>
        </div>
        
        <div className="bg-brand-canvas-soft border-l border-brand-hairline p-10 md:w-2/5 flex flex-col items-center justify-center">
          <p className="text-brand-ink font-bold mb-4 text-center">Escaneie o QR Code</p>
          <div className="w-[200px] h-[200px] bg-white border border-brand-hairline rounded-lg p-2 shadow-sm flex items-center justify-center">
            <div className="text-center text-brand-mute">
              [QR CODE]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
