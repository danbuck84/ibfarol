"use client";
import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";\nimport { translateReadingPlan } from "@/lib/readingPlanI18n";
import { readingPlans, ReadingPlan as ReadingPlanType } from "@/data/readingPlans";

export default function ReadingPlan({ compact = false }: { compact?: boolean }) {
  const t = useTranslations('ReadingPlan');
  
  // Sort plans descending by id (assuming year-week format sorts nicely)
  const sortedPlans = [...readingPlans].sort((a, b) => b.id.localeCompare(a.id));
  const currentPlan = sortedPlans[0];
  const archivedPlans = sortedPlans.slice(1);
  
  // Group archived plans by year
  const archivedByYear = archivedPlans.reduce((acc, plan) => {
    if (!acc[plan.year]) acc[plan.year] = [];
    acc[plan.year].push(plan);
    return acc;
  }, {} as Record<number, ReadingPlanType[]>);

  const [expandedArchiveId, setExpandedArchiveId] = useState<string | null>(null);
  const [expandedYear, setExpandedYear] = useState<string | null>(null);

  const renderPlanContent = (plan: ReadingPlanType, isCompact: boolean) => (
    <>
      {!isCompact && (
        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-[2.52px] uppercase text-brand-primary-ink mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-[28px] md:text-[36px] font-normal leading-[34px] md:leading-[40px] tracking-[-0.9px] m-0 text-brand-ink">
            {t('headline')}
          </h2>
          <p className="mt-3 text-lg text-brand-body font-medium flex flex-col items-center">
            <span>{plan.subtitle}</span>
            {plan.dateRange && <span className="text-sm font-normal text-brand-mute mt-1">{plan.dateRange}</span>}
          </p>
        </div>
      )}
      {isCompact && (
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-brand-ink">{plan.subtitle}</h3>
          {plan.dateRange && <p className="text-sm font-normal text-brand-mute mt-1">{plan.dateRange}</p>}
        </div>
      )}
      
      <div className="space-y-6">
        {plan.days.map((day) => (
          <div key={day.key} className={`border-b border-brand-hairline-soft ${isCompact ? 'pb-2' : 'pb-4'}`}>
            <h3 className={`${isCompact ? 'text-base' : 'text-lg'} font-semibold text-brand-ink`}>{day.name}</h3>
            <ul className={`mt-1 text-brand-body ${isCompact ? 'text-sm' : ''}`}>
              {day.readings.map((reading: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-brand-primary mt-1 leading-none">•</span> 
                  <span className="leading-snug">{reading}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className={isCompact ? 'pt-1' : 'pt-2'}>
          <h3 className={`${isCompact ? 'text-base' : 'text-lg'} font-semibold text-brand-ink`}>{plan.sunday.name}</h3>
          <div className={`mt-2 p-4 bg-brand-canvas border-l-4 border-brand-primary rounded-r-lg`}>
            <p className={`${isCompact ? 'text-sm' : 'text-sm md:text-base'} leading-[1.4] text-brand-body italic`}>
              "{plan.sunday.prayer}"
            </p>
          </div>
        </div>
      </div>
    </>
  );

  if (!currentPlan) return null;

  if (compact) {
    return (
      <div className="bg-white border border-brand-hairline rounded-lg p-6 md:p-8 shadow-sm h-full overflow-y-auto w-full">
        <h2 className="text-2xl font-bold text-brand-ink mb-2">{t('headline')}</h2>
        {renderPlanContent(currentPlan, true)}
      </div>
    );
  }

  return (
    <section className="bg-[#faf9f5] py-16 px-6 md:px-8" id="estudo">
      <div className="max-w-[800px] mx-auto space-y-12">
        {/* CURRENT WEEK */}
        <div className="bg-white border border-brand-hairline rounded-lg p-8 md:p-12 shadow-sm">
          {renderPlanContent(currentPlan, false)}
        </div>

        {/* ARCHIVE */}
        {Object.keys(archivedByYear).length > 0 && (
          <div className="bg-white border border-brand-hairline rounded-lg p-8 md:p-12 shadow-sm">
            <h2 className="text-2xl font-bold text-brand-ink mb-8 text-center uppercase tracking-wider">{t('archive')}</h2>
            
            <div className="space-y-4">
              {Object.keys(archivedByYear).sort((a,b) => Number(b) - Number(a)).map(year => (
                <div key={year} className="border border-brand-hairline rounded-lg overflow-hidden">
                  <button 
                    onClick={() => setExpandedYear(expandedYear === year ? null : year)}
                    className="w-full text-left px-6 py-4 bg-[#FAF9F5] hover:bg-brand-canvas-soft transition-colors flex justify-between items-center font-bold text-brand-primary-ink uppercase tracking-wider"
                  >
                    <span>{year}</span>
                    <svg className={`w-5 h-5 transform transition-transform ${expandedYear === year ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  
                  {expandedYear === year && (
                    <div className="p-4 md:p-6 bg-brand-canvas-soft space-y-4">
                      {archivedByYear[Number(year)].map(plan => (
                        <div key={plan.id} className="border border-brand-hairline rounded-lg overflow-hidden">
                          <button 
                            onClick={() => setExpandedArchiveId(expandedArchiveId === plan.id ? null : plan.id)}
                            className="w-full text-left px-6 py-4 bg-white hover:bg-brand-canvas transition-colors flex justify-between items-center font-semibold text-brand-ink"
                          >
                            <div className="flex flex-col">
                              <span>{plan.subtitle}</span>
                              {plan.dateRange && <span className="text-sm font-normal text-brand-mute mt-1">{plan.dateRange}</span>}
                            </div>
                            <svg className={`w-5 h-5 transform transition-transform ${expandedArchiveId === plan.id ? 'rotate-180' : ''} shrink-0 ml-4`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                          </button>
                          {expandedArchiveId === plan.id && (
                            <div className="p-6 bg-white border-t border-brand-hairline">
                              {renderPlanContent(plan, true)}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
