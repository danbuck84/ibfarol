import { useTranslations } from "next-intl";

export default function ReadingPlan() {
  const t = useTranslations('ReadingPlan');
  return (
    <section className="bg-[#faf9f5] py-16 px-8" id="estudo">
      <div className="max-w-[800px] mx-auto bg-white border border-brand-hairline rounded-lg p-8 md:p-12 shadow-sm">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-[2.52px] uppercase text-brand-primary-ink mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-[28px] md:text-[36px] font-normal leading-[34px] md:leading-[40px] tracking-[-0.9px] m-0 text-brand-ink">
            {t('headline')}
          </h2>
          <p className="mt-3 text-lg text-brand-body">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="border-b border-brand-hairline-soft pb-4">
            <h3 className="text-lg font-semibold text-brand-ink">{t('mon')}</h3>
            <ul className="mt-2 text-brand-body">
              {t.raw('mon_readings').map((reading: string, idx: number) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-brand-primary">•</span> {reading}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-b border-brand-hairline-soft pb-4">
            <h3 className="text-lg font-semibold text-brand-ink">{t('tue')}</h3>
            <ul className="mt-2 text-brand-body">
              {t.raw('tue_readings').map((reading: string, idx: number) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-brand-primary">•</span> {reading}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-b border-brand-hairline-soft pb-4">
            <h3 className="text-lg font-semibold text-brand-ink">{t('wed')}</h3>
            <ul className="mt-2 text-brand-body">
              {t.raw('wed_readings').map((reading: string, idx: number) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-brand-primary">•</span> {reading}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-b border-brand-hairline-soft pb-4">
            <h3 className="text-lg font-semibold text-brand-ink">{t('thu')}</h3>
            <ul className="mt-2 text-brand-body">
              {t.raw('thu_readings').map((reading: string, idx: number) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-brand-primary">•</span> {reading}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-b border-brand-hairline-soft pb-4">
            <h3 className="text-lg font-semibold text-brand-ink">{t('fri')}</h3>
            <ul className="mt-2 text-brand-body">
              {t.raw('fri_readings').map((reading: string, idx: number) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-brand-primary">•</span> {reading}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-b border-brand-hairline-soft pb-4">
            <h3 className="text-lg font-semibold text-brand-ink">{t('sat')}</h3>
            <ul className="mt-2 text-brand-body">
              {t.raw('sat_readings').map((reading: string, idx: number) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-brand-primary">•</span> {reading}
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2">
            <h3 className="text-lg font-semibold text-brand-ink">{t('sun')}</h3>
            <div className="mt-4 p-6 bg-brand-canvas-soft border-l-4 border-brand-primary rounded-r-lg">
              <p className="text-sm md:text-base leading-[26px] text-brand-body italic">
                "{t('sun_prayer')}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
