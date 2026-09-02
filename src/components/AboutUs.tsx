import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations('AboutUs');
  return (
    <section className="py-20 px-8 bg-brand-ink" id="sobre">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="bg-[#111] border border-white/10 p-10 md:p-14 rounded-2xl shadow-xl flex flex-col items-center text-center">
          <h3 className="text-3xl md:text-4xl font-black tracking-widest text-brand-primary mb-6 uppercase">{t('mission_title')}</h3>
          <p className="text-lg md:text-xl text-[#B4BDBD] leading-relaxed max-w-sm">{t('mission_text')}</p>
        </div>
        <div className="bg-[#111] border border-white/10 p-10 md:p-14 rounded-2xl shadow-xl flex flex-col items-center text-center">
          <h3 className="text-3xl md:text-4xl font-black tracking-widest text-brand-primary mb-6 uppercase">{t('vision_title')}</h3>
          <p className="text-lg md:text-xl text-[#B4BDBD] leading-relaxed max-w-sm">{t('vision_text')}</p>
        </div>
      </div>
    </section>
  );
}
