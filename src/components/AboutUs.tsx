import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations('AboutUs');
  return (
    <section className="py-20 px-8 bg-white" id="sobre">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h3 className="text-xl font-bold tracking-wider text-brand-ink mb-3">{t('mission_title')}</h3>
          <p className="text-base text-brand-body leading-[26px]">{t('mission_text')}</p>
        </div>
        <div>
          <h3 className="text-xl font-bold tracking-wider text-brand-ink mb-3">{t('vision_title')}</h3>
          <p className="text-base text-brand-body leading-[26px]">{t('vision_text')}</p>
        </div>
      </div>
    </section>
  );
}
