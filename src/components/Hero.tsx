import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations('Hero');
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-canvas-dark">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 bg-[#010506]">
        <Image 
          src="/hero-bg.jpg" 
          alt="Congregação da Igreja Batista Farol"
          fill
          priority
          className="object-cover object-[center_40%] opacity-40 grayscale-[20%]"
        />
      </div>
      
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 md:px-12 pt-20 pb-20">
        <h1 className="text-[52px] md:text-[72px] lg:text-[90px] text-white font-sans font-bold leading-[1.05] tracking-[-1px] whitespace-pre-line">
          {t('headline')}
        </h1>
        
        <p className="mt-6 md:mt-8 text-lg md:text-xl font-medium text-white/90 max-w-[42ch] text-pretty">
          {t('eyebrow')}
        </p>
        
        <div className="flex flex-row gap-3 mt-8 w-full md:w-auto">
          <a href="#visita" className="flex-1 md:flex-none text-center justify-center text-[11px] sm:text-[13px] md:text-sm font-semibold tracking-wider uppercase text-brand-ink bg-[#faf9f5] px-3 sm:px-6 md:px-8 py-3.5 transition-colors hover:bg-white cursor-pointer rounded-sm">
            {t('btn_plan_visit')}
          </a>
          <Link href="/ministerios" className="flex-1 md:flex-none text-center justify-center text-[11px] sm:text-[13px] md:text-sm font-semibold tracking-wider uppercase text-white bg-transparent border border-white px-3 sm:px-6 md:px-8 py-3.5 transition-colors hover:bg-white/10 cursor-pointer rounded-sm">
            {t('btn_get_involved')}
          </Link>
        </div>
      </div>
    </section>
  );
}
