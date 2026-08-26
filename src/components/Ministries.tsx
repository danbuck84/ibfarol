import { useTranslations } from "next-intl";

export default function Ministries() {
  const t = useTranslations('Ministries');
  return (
    <section className="py-20 px-8" id="ministerios">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-16">
          <p className="text-sm font-semibold tracking-[2.52px] uppercase text-brand-primary-ink mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.1] tracking-[-1px] m-0 text-brand-ink max-w-[20ch]">
            {t('headline')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Internal Ministries */}
          <div>
            <h3 className="text-2xl font-bold text-brand-ink mb-2">{t('internal_title')}</h3>
            <p className="text-brand-body mb-8">{t('internal_desc')}</p>
            
            <ul className="space-y-4">
              <li className="bg-white border border-brand-hairline p-6 rounded-lg font-semibold text-lg text-brand-ink shadow-sm">
                {t('min_louvor')}
              </li>
              <li className="bg-white border border-brand-hairline p-6 rounded-lg font-semibold text-lg text-brand-ink shadow-sm">
                {t('min_recepcao')}
              </li>
              <li className="bg-white border border-brand-hairline p-6 rounded-lg font-semibold text-lg text-brand-ink shadow-sm">
                {t('min_infantil')}
              </li>
              <li className="bg-white border border-brand-hairline p-6 rounded-lg font-semibold text-lg text-brand-ink shadow-sm">
                {t('min_limpeza')}
              </li>
            </ul>
          </div>

          {/* External Ministries */}
          <div>
            <h3 className="text-2xl font-bold text-brand-ink mb-2">{t('external_title')}</h3>
            <p className="text-brand-body mb-8">{t('external_desc')}</p>
            
            <ul className="space-y-4">
              <li className="bg-white border border-brand-hairline p-6 rounded-lg font-semibold text-lg text-brand-ink shadow-sm">
                {t('min_agape')}
              </li>
              <li className="bg-brand-canvas-soft border border-brand-hairline p-6 rounded-lg font-semibold text-lg text-brand-mute shadow-sm border-dashed">
                {t('min_jiujitsu')}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
