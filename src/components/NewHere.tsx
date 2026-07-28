import { useTranslations } from "next-intl";

export default function NewHere() {
  const t = useTranslations('NewHere');
  return (
    <section className="py-16 px-8" id="novo">
      <div className="max-w-7xl mx-auto max-w-[1280px]">
        <div className="mb-10 max-w-[60ch]">
          <p className="text-sm font-semibold tracking-[2.52px] uppercase text-brand-primary-ink mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-[28px] md:text-[36px] font-normal leading-[34px] md:leading-[40px] tracking-[-0.9px] m-0 text-balance">
            {t('headline')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-white border border-brand-hairline rounded-lg overflow-hidden flex flex-col">
            <div className="h-[180px]">
              <div className="ph">
                <span>{t('card1_alt')}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold leading-[28px] m-0">{t('card1_title')}</h3>
              <p className="mt-2 text-base leading-[26px] text-brand-body">
                {t('card1_desc')}
              </p>
            </div>
          </article>
          
          <article className="bg-white border border-brand-hairline rounded-lg overflow-hidden flex flex-col">
            <div className="h-[180px]">
              <div className="ph">
                <span>{t('card2_alt')}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold leading-[28px] m-0">{t('card2_title')}</h3>
              <p className="mt-2 text-base leading-[26px] text-brand-body">
                {t('card2_desc')}
              </p>
            </div>
          </article>
          
          <article className="bg-white border border-brand-hairline rounded-lg overflow-hidden flex flex-col">
            <div className="h-[180px]">
              <div className="ph">
                <span>{t('card3_alt')}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold leading-[28px] m-0">{t('card3_title')}</h3>
              <p className="mt-2 text-base leading-[26px] text-brand-body">
                {t('card3_desc')}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
