import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutUs() {
  const t = useTranslations('AboutUs');
  return (
    <section id="sobre" className="w-full bg-[#faf9f5] pt-28 pb-32 px-8">
      
      {/* Welcome Message */}
      <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center mb-24">
        <h3 className="text-sm font-semibold tracking-[3px] text-brand-primary mb-4 uppercase">
          {t('eyebrow')}
        </h3>
        <h2 className="text-3xl md:text-[40px] font-bold text-brand-ink leading-[1.2] mb-6 uppercase">
          {t('headline')}
        </h2>
        <p className="text-lg md:text-xl text-brand-body leading-relaxed max-w-[700px] text-balance italic">
          {t('p1')}
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Missão Card */}
        <div className="flex flex-col bg-white">
          <div className="relative h-[300px] md:h-[350px] w-full">
            <Image 
              src="/hero-bg-mobile.jpg" 
              alt="Missão" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="bg-[#181d1e] p-10 md:p-14 text-center flex-grow flex flex-col justify-center items-center">
            <h3 className="text-lg md:text-xl font-medium tracking-[3px] text-brand-primary mb-6 uppercase">
              {t('mission_title')}
            </h3>
            <p className="text-base md:text-lg text-white/90 leading-[1.8] font-light max-w-sm italic">
              {t('mission_text')}
            </p>
          </div>
        </div>

        {/* Visão Card */}
        <div className="flex flex-col bg-white">
          <div className="relative h-[300px] md:h-[350px] w-full">
            <Image 
              src="/hero-bg-desktop.jpg" 
              alt="Visão" 
              fill 
              className="object-cover"
            />
          </div>
          <div className="bg-[#111516] p-10 md:p-14 text-center flex-grow flex flex-col justify-center items-center">
            <h3 className="text-lg md:text-xl font-medium tracking-[3px] text-brand-primary mb-6 uppercase">
              {t('vision_title')}
            </h3>
            <p className="text-base md:text-lg text-white/90 leading-[1.8] font-light max-w-sm italic">
              {t('vision_text')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
