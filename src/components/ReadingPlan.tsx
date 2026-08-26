import { useTranslations } from "next-intl";

export default function ReadingPlan({ compact = false }: { compact?: boolean }) {
  const t = useTranslations('ReadingPlan');
  
  const content = (
    <>
      {!compact && (
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
      )}
      
      <div className="space-y-6">
        {['mon', 'tue', 'wed', 'thu', 'fri', 'sat'].map((dayKey) => {
          const readings = t.raw(`${dayKey}_readings`) as string[];
          return (
            <div key={dayKey} className={`border-b border-brand-hairline-soft ${compact ? 'pb-2' : 'pb-4'}`}>
              <h3 className={`${compact ? 'text-base' : 'text-lg'} font-semibold text-brand-ink`}>{t(dayKey)}</h3>
              <ul className={`mt-1 text-brand-body ${compact ? 'text-sm' : ''}`}>
                {readings.map((reading: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-brand-primary mt-1 leading-none">•</span> 
                    <span className="leading-snug">{reading}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        <div className={compact ? 'pt-1' : 'pt-2'}>
          <h3 className={`${compact ? 'text-base' : 'text-lg'} font-semibold text-brand-ink`}>{t('sun')}</h3>
          <div className={`mt-2 p-4 bg-brand-canvas border-l-4 border-brand-primary rounded-r-lg`}>
            <p className={`${compact ? 'text-sm' : 'text-sm md:text-base'} leading-[1.4] text-brand-body italic`}>
              "{t('sun_prayer')}"
            </p>
          </div>
        </div>
      </div>
    </>
  );

  if (compact) {
    return (
      <div className="bg-white border border-brand-hairline rounded-lg p-6 md:p-8 shadow-sm h-full overflow-y-auto w-full">
        <h2 className="text-2xl font-bold text-brand-ink mb-6">{t('headline')}</h2>
        {content}
      </div>
    );
  }

  return (
    <section className="bg-[#faf9f5] py-16 px-8" id="estudo">
      <div className="max-w-[800px] mx-auto bg-white border border-brand-hairline rounded-lg p-8 md:p-12 shadow-sm">
        {content}
      </div>
    </section>
  );
}
