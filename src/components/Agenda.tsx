"use client";
import { useTranslations } from "next-intl";
import { currentEvents } from "@/data/events";
import { useEffect, useState, useRef, MouseEvent as ReactMouseEvent } from "react";

export default function Agenda() {
  const t = useTranslations('Agenda');
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setNow(new Date());
  }, []);

  const upcomingEvents = currentEvents
    .filter(e => new Date(e.dateStr) > now)
    .sort((a, b) => new Date(a.dateStr).getTime() - new Date(b.dateStr).getTime());

  // Carousel logic
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: ReactMouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  const handleMouseLeave = () => setIsDragging(false);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: ReactMouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="agenda" className="border-t border-brand-hairline">
      {/* Programação Corrente - Colored Bar */}
      <div className="py-20 bg-brand-canvas-soft border-b border-brand-hairline overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold tracking-[2.52px] uppercase text-brand-primary-ink mb-4">
              {t('eyebrow')}
            </p>
            <h2 className="text-[28px] md:text-[36px] font-bold leading-[34px] md:leading-[40px] tracking-[-0.9px] m-0 text-brand-ink mb-2">
              {t('current_events_title') || "Próximos Eventos"}
            </h2>
            <div className="w-12 h-1 bg-brand-primary mx-auto rounded-full mt-6"></div>
          </div>

          {upcomingEvents.length === 0 ? (
            <p className="text-center text-brand-body italic mb-10">{t('no_events') || "Nenhum evento especial programado no momento."}</p>
          ) : (
            <div 
              ref={scrollRef}
              className={`flex gap-8 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {upcomingEvents.map(event => {
                const d = new Date(event.dateStr);
                const month = d.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '').toUpperCase();
                const day = d.getDate();
                const weekday = d.toLocaleDateString('pt-BR', { weekday: 'long' });
                const time = d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

                return (
                  <div key={event.id} className="flex-none w-[80vw] sm:w-[350px] snap-center flex flex-col items-center text-center px-4">
                    <h3 className="text-3xl font-bold text-brand-ink mb-1">{month} {day}</h3>
                    <div className="w-8 h-[2px] bg-brand-hairline/80 my-4"></div>
                    <h4 className="text-xl font-bold text-brand-ink mb-3 leading-snug">{event.title}</h4>
                    <p className="text-sm font-medium text-brand-mute capitalize mb-6">{weekday} às {time}</p>
                    <button className="bg-brand-primary text-white font-bold uppercase tracking-wider text-xs px-6 py-2.5 rounded hover:bg-brand-primary-deep transition-colors">
                      Detalhes
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Programação Fixa */}
      <div className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
           <div className="mb-12 text-center">
             <h2 className="text-[28px] md:text-[36px] font-bold leading-[34px] md:leading-[40px] tracking-[-0.9px] m-0 text-brand-ink mb-2">
               {t('fixed_events_title') || "Programação Fixa"}
             </h2>
             <div className="w-12 h-1 bg-brand-primary mx-auto rounded-full mt-6"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-brand-canvas-soft p-6 rounded-lg border border-brand-hairline shadow-sm flex flex-col justify-center transition-transform hover:-translate-y-1">
                <h3 className="text-lg font-bold text-brand-ink mb-2">{t('communion_title')}</h3>
                <p className="text-sm font-medium text-brand-primary-ink bg-brand-primary/10 self-start px-3 py-1 rounded-full">{t('communion_time')}</p>
              </div>

              <div className="bg-brand-canvas-soft p-6 rounded-lg border border-brand-hairline shadow-sm flex flex-col justify-center transition-transform hover:-translate-y-1">
                <h3 className="text-lg font-bold text-brand-ink mb-2">{t('womens_title')}</h3>
                <p className="text-sm font-medium text-brand-primary-ink bg-brand-primary/10 self-start px-3 py-1 rounded-full">{t('womens_time')}</p>
              </div>
              
              <div className="bg-brand-canvas-soft p-6 rounded-lg border border-brand-hairline shadow-sm flex flex-col justify-center transition-transform hover:-translate-y-1">
                <h3 className="text-lg font-bold text-brand-ink mb-2">{t('mens_title')}</h3>
                <p className="text-sm font-medium text-brand-primary-ink bg-brand-primary/10 self-start px-3 py-1 rounded-full">{t('mens_time')}</p>
              </div>
              
              <div className="bg-brand-canvas-soft p-6 rounded-lg border border-brand-hairline shadow-sm flex flex-col justify-center transition-transform hover:-translate-y-1">
                <h3 className="text-lg font-bold text-brand-ink mb-2">{t('prayer_title')}</h3>
                <p className="text-sm font-medium text-brand-primary-ink bg-brand-primary/10 self-start px-3 py-1 rounded-full">{t('prayer_time')}</p>
              </div>
              
              <div className="bg-brand-canvas-soft p-6 rounded-lg border border-brand-hairline shadow-sm flex flex-col justify-center transition-transform hover:-translate-y-1">
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

      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
