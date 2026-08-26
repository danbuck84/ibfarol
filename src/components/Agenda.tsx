import { useTranslations } from "next-intl";

export default function Agenda() {
  const t = useTranslations('Agenda');
  return (
    <section className="py-20 px-8 bg-brand-canvas-soft border-t border-brand-hairline" id="agenda">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-12 text-center md:text-left">
          <p className="text-sm font-semibold tracking-[2.52px] uppercase text-brand-primary-ink mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-[28px] md:text-[36px] font-bold leading-[34px] md:leading-[40px] tracking-[-0.9px] m-0 text-brand-ink mb-6">
            {t('headline')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-lg border border-brand-hairline shadow-sm flex flex-col justify-center">
            <h3 className="text-lg font-bold text-brand-ink mb-2">{t('communion_title')}</h3>
            <p className="text-sm font-medium text-brand-primary-ink bg-brand-primary/10 self-start px-3 py-1 rounded-full">{t('communion_time')}</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-brand-hairline shadow-sm flex flex-col justify-center">
            <h3 className="text-lg font-bold text-brand-ink mb-2">{t('womens_title')}</h3>
            <p className="text-sm font-medium text-brand-primary-ink bg-brand-primary/10 self-start px-3 py-1 rounded-full">{t('womens_time')}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-brand-hairline shadow-sm flex flex-col justify-center">
            <h3 className="text-lg font-bold text-brand-ink mb-2">{t('mens_title')}</h3>
            <p className="text-sm font-medium text-brand-primary-ink bg-brand-primary/10 self-start px-3 py-1 rounded-full">{t('mens_time')}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-brand-hairline shadow-sm flex flex-col justify-center">
            <h3 className="text-lg font-bold text-brand-ink mb-2">{t('prayer_title')}</h3>
            <p className="text-sm font-medium text-brand-primary-ink bg-brand-primary/10 self-start px-3 py-1 rounded-full">{t('prayer_time')}</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-brand-hairline shadow-sm flex flex-col justify-center">
            <h3 className="text-lg font-bold text-brand-ink mb-2">{t('smallgroups_title')}</h3>
            <p className="text-sm font-medium text-brand-primary-ink bg-brand-primary/10 self-start px-3 py-1 rounded-full">{t('smallgroups_time')}</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-brand-hairline shadow-sm flex flex-col justify-center border-dashed opacity-70">
            <h3 className="text-lg font-bold text-brand-mute mb-2">{t('rest_title')}</h3>
            <p className="text-sm font-medium text-brand-mute bg-gray-100 self-start px-3 py-1 rounded-full">{t('rest_time')}</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
