"use client";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations('AboutUs_Home');
  return (
    <section id="sobre" className="w-full relative z-20 px-6 md:px-8 -mt-24 md:-mt-32 mb-8">
      <div className="max-w-[1280px] w-full mx-auto bg-[#e2d7c9] rounded-2xl shadow-xl p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Big Title */}
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-[60px] font-bold text-brand-ink leading-[1.1] uppercase tracking-tight">
            {t('title')}
          </h2>
        </div>
        
        {/* Right: Text */}
        <div className="text-lg md:text-xl text-brand-ink/90 leading-relaxed font-medium space-y-6 md:pl-8 lg:pl-12">
          <p>
            {t('p1')}
          </p>
          <p>
            {t('p2_prefix')}<Link href="/ministerios" className="text-brand-ink font-bold hover:underline decoration-brand-ink underline-offset-4">{t('p2_link')}</Link>{t('p2_suffix')}
          </p>
        </div>
      </div>
    </section>
  );
}
