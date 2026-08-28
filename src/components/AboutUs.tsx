import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations('AboutUs');
  return (
    <section className="py-20 px-8 bg-white" id="sobre">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="bg-white border border-brand-hairline p-8 md:p-10 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow">
          <h3 className="text-xl font-bold tracking-wider text-brand-ink mb-4">{t('mission_title')}</h3>
          <p className="text-base text-brand-body leading-[28px]">{t('mission_text')}</p>
        </div>
        <div className="bg-white border border-brand-hairline p-8 md:p-10 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow">
          <h3 className="text-xl font-bold tracking-wider text-brand-ink mb-4">{t('vision_title')}</h3>
          <p className="text-base text-brand-body leading-[28px]">{t('vision_text')}</p>
        </div>
      </div>
    </section>
  );
}
