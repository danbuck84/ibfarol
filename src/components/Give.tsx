"use client";
import { useTranslations } from "next-intl";

export default function Give() {
  const t = useTranslations('Give');

  return (
    <section className="py-20 px-8 bg-brand-canvas" id="contribua">
      <div className="max-w-[800px] mx-auto bg-white rounded-xl border border-brand-hairline shadow-sm overflow-hidden flex flex-col">
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <p className="text-sm font-bold text-brand-primary uppercase tracking-wider mb-2">Contribua</p>
          <h2 className="text-3xl font-bold text-brand-ink mb-4">{t('headline') || "Adoração Através da Contribuição"}</h2>
          <p className="text-brand-body text-lg mb-8 leading-relaxed">
            {t('description') || "[Parágrafo curto explicando a visão bíblica sobre por que a igreja recebe ofertas e como isso abençoa a comunidade]"}
          </p>
          
          <div className="bg-brand-canvas-soft border border-brand-hairline p-5 md:p-8 rounded-lg space-y-6">
            <div>
              <p className="text-brand-ink font-bold mb-2">Chave PIX (CNPJ)</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <code className="bg-white px-4 py-3 border border-brand-hairline rounded text-brand-ink font-mono text-sm sm:text-base flex-grow w-full overflow-x-auto whitespace-nowrap">
                  61.652.008/0001-27
                </code>
                <button onClick={() => navigator.clipboard.writeText("61.652.008/0001-27")} className="bg-brand-primary text-white px-6 py-3 rounded-md font-bold hover:bg-brand-primary-deep transition-colors sm:w-auto w-full flex-shrink-0">
                  Copiar
                </button>
              </div>
            </div>
            <div>
              <p className="text-brand-ink font-bold mb-2">Chave PIX (E-mail)</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <code className="bg-white px-4 py-3 border border-brand-hairline rounded text-brand-ink font-mono text-sm sm:text-base flex-grow w-full overflow-x-auto whitespace-nowrap">
                  ofertas@batistafarol.org
                </code>
                <button onClick={() => navigator.clipboard.writeText("ofertas@batistafarol.org")} className="bg-brand-primary text-white px-6 py-3 rounded-md font-bold hover:bg-brand-primary-deep transition-colors sm:w-auto w-full flex-shrink-0">
                  Copiar
                </button>
              </div>
            </div>
            <p className="text-sm text-brand-mute mt-4 italic font-medium pt-2 border-t border-brand-hairline">Igreja Batista Farol · Banco Cora</p>
          </div>
        </div>
      </div>
    </section>
  );
}
