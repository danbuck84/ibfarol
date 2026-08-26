"use client";
import { useTranslations } from "next-intl";
import { currentEvents } from "@/data/events";
import { useEffect, useState } from "react";

export default function Agenda() {
  const t = useTranslations('Agenda');
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setNow(new Date());
  }, []);

  const upcomingEvents = currentEvents
    .filter(e => new Date(e.dateStr) > now)
    .sort((a, b) => new Date(a.dateStr).getTime() - new Date(b.dateStr).getTime());

  const nextEvent = upcomingEvents[0];
  const otherEvents = upcomingEvents.slice(1);

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

        {/* Programação Corrente */}
        <div className="mb-16">
           <h3 className="text-2xl font-bold text-brand-ink mb-6 border-b border-brand-hairline pb-2">{t('current_events_title') || "Programação Corrente"}</h3>
           
           {upcomingEvents.length === 0 ? (
             <p className="text-brand-body italic">{t('no_events') || "Nenhum evento especial programado no momento. Confira nossa programação fixa abaixo!"}</p>
           ) : (
             <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
                {/* Próximo Evento Destacado */}
                {nextEvent && (
                  <div className="bg-brand-primary/10 border border-brand-primary rounded-xl p-8 shadow-sm">
                    <p className="text-sm font-bold text-brand-primary uppercase tracking-wider mb-2">Próximo Evento</p>
                    <h4 className="text-3xl font-bold text-brand-ink mb-2">{nextEvent.title}</h4>
                    <p className="text-lg font-medium text-brand-primary-ink mb-4">
                      {new Date(nextEvent.dateStr).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: 'long', hour: '2-digit', minute: '2-digit' })}
                    </p>
                    <p className="text-brand-body text-lg">{nextEvent.description}</p>
                  </div>
                )}

                {/* Outros Eventos Correntes */}
                {otherEvents.length > 0 && (
                  <div className="space-y-4">
                    {otherEvents.map(event => (
                       <div key={event.id} className="bg-white border border-brand-hairline p-5 rounded-lg shadow-sm">
                          <h4 className="text-lg font-bold text-brand-ink">{event.title}</h4>
                          <p className="text-sm font-medium text-brand-primary mb-2">
                            {new Date(event.dateStr).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })}
                          </p>
                          <p className="text-brand-body text-sm">{event.description}</p>
                       </div>
                    ))}
                  </div>
                )}
             </div>
           )}
        </div>

        {/* Programação Fixa */}
        <div>
           <h3 className="text-2xl font-bold text-brand-ink mb-6 border-b border-brand-hairline pb-2">{t('fixed_events_title') || "Programação Fixa"}</h3>
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

      </div>
    </section>
  );
}
