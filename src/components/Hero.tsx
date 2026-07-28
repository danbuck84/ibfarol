import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations('Hero');
  return (
    <section className="relative h-[620px] overflow-hidden bg-brand-canvas-dark">
      <div className="absolute top-0 right-0 bottom-0 left-[46%] hidden md:block">
        <div className="ph">
          <span>{t('image_alt')}</span>
        </div>
      </div>
      <div className="absolute top-0 bottom-0 left-[46%] w-[200px] bg-gradient-to-r from-brand-canvas-dark to-transparent hidden md:block pointer-events-none"></div>
      
      <div className="relative h-full max-w-7xl mx-auto px-8 flex flex-col justify-center pointer-events-none max-w-[1280px]">
        <p className="text-sm font-semibold tracking-[2.52px] uppercase text-brand-primary mb-5">
          {t('eyebrow')}
        </p>
        <h1 className="text-[40px] md:text-[60px] text-white mb-0 max-w-[11ch] leading-[46px] md:leading-[66px] tracking-[-0.65px] text-balance">
          {t('headline')}
        </h1>
        <p className="mt-6 text-lg text-[#B4BDBD] max-w-[38ch] text-pretty leading-[28px]">
          {t('description')}
        </p>
        <div className="flex flex-wrap gap-3 mt-8 pointer-events-auto">
          <button className="font-semibold text-brand-on-primary bg-brand-primary border border-brand-primary px-4 py-3 rounded-md transition-colors hover:bg-brand-primary-deep cursor-pointer">
            {t('btn_plan_visit')}
          </button>
        </div>
      </div>
    </section>
  );
}
