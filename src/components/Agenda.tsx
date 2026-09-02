"use client";
import { useTranslations } from "next-intl";

export default function Agenda() {
  const t = useTranslations('Agenda');

  return (
    <section id="agenda" className="border-t border-brand-hairline bg-white min-h-[calc(100vh-66px)] flex flex-col justify-center">
      {/* Programação Fixa */}
      <div className="py-20 w-full">
        <div className="max-w-[1280px] w-full mx-auto px-6 md:px-8">
           <div className="mb-12 text-center">
             <p className="text-sm font-semibold tracking-[2.52px] uppercase text-brand-primary-ink mb-4">
               {t('eyebrow')}
             </p>
             <h2 className="text-[28px] md:text-[36px] font-bold leading-[34px] md:leading-[40px] tracking-[-0.9px] m-0 text-brand-ink mb-2">
               {t('fixed_events_title') || "Programação Fixa"}
             </h2>
             <div className="w-12 h-1 bg-brand-primary mx-auto rounded-full mt-6"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg border border-brand-hairline shadow-sm flex flex-col justify-center transition-transform hover:-translate-y-1">
                <h3 className="text-lg font-bold text-brand-ink mb-2">{t('communion_title')}</h3>
                <p className="text-sm font-medium text-brand-primary-ink bg-brand-primary/10 self-start px-3 py-1 rounded-full">{t('communion_time')}</p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-brand-hairline shadow-sm flex flex-col justify-center transition-transform hover:-translate-y-1">
                <h3 className="text-lg font-bold text-brand-ink mb-2">{t('womens_title')}</h3>
                <p className="text-sm font-medium text-brand-primary-ink bg-brand-primary/10 self-start px-3 py-1 rounded-full">{t('womens_time')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-brand-hairline shadow-sm flex flex-col justify-center transition-transform hover:-translate-y-1">
                <h3 className="text-lg font-bold text-brand-ink mb-2">{t('mens_title')}</h3>
                <p className="text-sm font-medium text-brand-primary-ink bg-brand-primary/10 self-start px-3 py-1 rounded-full">{t('mens_time')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-brand-hairline shadow-sm flex flex-col justify-center transition-transform hover:-translate-y-1">
                <h3 className="text-lg font-bold text-brand-ink mb-2">{t('prayer_title')}</h3>
                <p className="text-sm font-medium text-brand-primary-ink bg-brand-primary/10 self-start px-3 py-1 rounded-full">{t('prayer_time')}</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-brand-hairline shadow-sm flex flex-col justify-center transition-transform hover:-translate-y-1">
                <h3 className="text-lg font-bold text-brand-ink mb-2">{t('smallgroups_title')}</h3>
                <p className="text-sm font-medium text-brand-primary-ink bg-brand-primary/10 self-start px-3 py-1 rounded-full">{t('smallgroups_time')}</p>
              </div>

              <div className="bg-transparent p-6 rounded-lg border border-brand-hairline shadow-sm flex flex-col justify-center border-dashed opacity-70">
                <h3 className="text-lg font-bold text-brand-mute mb-2">{t('rest_title')}</h3>
                <p className="text-sm font-medium text-brand-mute bg-gray-100 self-start px-3 py-1 rounded-full">{t('rest_time')}</p>
              </div>
          </div>

          <div className="text-center">
            <a href="https://claude.ai/code/artifact/d9edf148-2b8f-4459-91e6-c40fc2636412" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-ink text-white font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-md hover:bg-black transition-colors shadow-md">
              Ver Calendário Completo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
