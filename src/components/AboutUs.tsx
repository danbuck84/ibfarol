import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations('AboutUs');
  return (
    <section id="sobre" className="w-full bg-[#faf9f5] py-24 px-8 flex flex-col items-center text-center">
      <div className="max-w-[900px] mx-auto space-y-20">
        
        {/* Missão */}
        <div>
          <h3 className="text-sm font-bold tracking-[3px] text-brand-primary mb-6 uppercase">
            {t('mission_title')}
          </h3>
          <h2 className="text-[32px] md:text-[44px] font-bold text-brand-ink leading-[1.3] text-balance">
            {t('mission_text')}
          </h2>
        </div>

        <div className="w-24 h-[2px] bg-brand-hairline mx-auto"></div>

        {/* Visão */}
        <div>
          <h3 className="text-sm font-bold tracking-[3px] text-brand-primary mb-6 uppercase">
            {t('vision_title')}
          </h3>
          <p className="text-xl md:text-2xl text-brand-body leading-relaxed max-w-[700px] mx-auto text-balance">
            {t('vision_text')}
          </p>
        </div>

      </div>
    </section>
  );
}
