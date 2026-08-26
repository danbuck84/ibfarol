import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations('AboutUs');
  return (
    <section className="py-20 px-8 bg-white" id="sobre">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Bloco 1: Quem Somos */}
        <div>
          <p className="text-sm font-semibold tracking-[2.52px] uppercase text-brand-primary-ink mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-[28px] md:text-[36px] font-normal leading-[34px] md:leading-[40px] tracking-[-0.9px] m-0 text-brand-ink mb-6">
            {t('headline')}
          </h2>
          <div className="space-y-4 text-base md:text-lg text-brand-body leading-[28px] text-pretty">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
            <p>{t('p3')}</p>
          </div>
        </div>

        {/* Bloco 2: Missão e Visão */}
        <div className="flex flex-col justify-center gap-12 lg:border-l lg:border-brand-hairline lg:pl-16 pt-8 lg:pt-0 border-t border-brand-hairline lg:border-t-0">
          <div>
            <h3 className="text-xl font-bold tracking-wider text-brand-ink mb-3">{t('mission_title')}</h3>
            <p className="text-base text-brand-body leading-[26px]">{t('mission_text')}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-wider text-brand-ink mb-3">{t('vision_title')}</h3>
            <p className="text-base text-brand-body leading-[26px]">{t('vision_text')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
