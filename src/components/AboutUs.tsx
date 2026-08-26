import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations('AboutUs');
  return (
    <section className="py-16 px-8 bg-white" id="sobre">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-12">
          <p className="text-sm font-semibold tracking-[2.52px] uppercase text-brand-primary-ink mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-[28px] md:text-[36px] font-normal leading-[34px] md:leading-[40px] tracking-[-0.9px] m-0 text-brand-ink mb-6">
            {t('headline')}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-brand-body max-w-[80ch] leading-[28px] text-pretty">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
            <p>{t('p3')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-brand-hairline pt-12">
          <div className="text-left">
            <h3 className="text-xl font-bold tracking-wider text-brand-ink mb-4">{t('mission_title')}</h3>
            <p className="text-base text-brand-body leading-[26px]">{t('mission_text')}</p>
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold tracking-wider text-brand-ink mb-4">{t('vision_title')}</h3>
            <p className="text-base text-brand-body leading-[26px]">{t('vision_text')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
