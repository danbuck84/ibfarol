import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations('AboutUs');
  return (
    <section className="py-20 px-8 bg-brand-ink" id="sobre">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="flex flex-col items-start text-left">
          <h3 className="text-3xl md:text-4xl font-black tracking-widest text-white mb-6 uppercase">{t('mission_title')}</h3>
          <p className="text-lg md:text-xl text-[#B4BDBD] leading-relaxed max-w-sm">{t('mission_text')}</p>
        </div>
        <div className="flex flex-col items-start text-left">
          <h3 className="text-3xl md:text-4xl font-black tracking-widest text-white mb-6 uppercase">{t('vision_title')}</h3>
          <p className="text-lg md:text-xl text-[#B4BDBD] leading-relaxed max-w-sm">{t('vision_text')}</p>
        </div>
      </div>
    </section>
  );
}
