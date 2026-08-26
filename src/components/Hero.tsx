import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations('Hero');
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-canvas-dark">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 bg-[#010506]">
        <div 
          className="w-full h-full bg-slate-800 opacity-50 bg-cover bg-center" 
          style={{ backgroundImage: "url('/hero-bg-placeholder.jpg')" }}
        ></div>
      </div>
      
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12 pt-20 pb-20">
        <h1 className="text-[52px] md:text-[72px] lg:text-[90px] text-white font-serif font-medium leading-[1.05] tracking-tight whitespace-pre-line">
          {t('headline')}
        </h1>
        
        <p className="mt-8 text-sm md:text-base font-bold tracking-[1.5px] uppercase text-white">
          {t('eyebrow')}
        </p>
        
        <div className="flex flex-wrap gap-4 mt-8">
          <button className="text-[13px] md:text-sm font-semibold tracking-wider uppercase text-brand-ink bg-[#faf9f5] px-6 md:px-8 py-3.5 transition-colors hover:bg-white cursor-pointer rounded-sm">
            {t('btn_plan_visit')}
          </button>
          <button className="text-[13px] md:text-sm font-semibold tracking-wider uppercase text-white bg-transparent border border-white px-6 md:px-8 py-3.5 transition-colors hover:bg-white/10 cursor-pointer rounded-sm">
            {t('btn_get_involved')}
          </button>
        </div>
      </div>
    </section>
  );
}
