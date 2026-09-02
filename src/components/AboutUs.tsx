import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutUs() {
  const t = useTranslations('AboutUs');
  return (
    <section id="sobre" className="w-full flex flex-col">
      {/* Missão */}
      <div className="flex flex-col md:flex-row w-full min-h-[500px]">
        {/* Text Side (Light) */}
        <div className="w-full md:w-1/2 bg-[#faf9f5] py-20 px-8 md:px-16 lg:px-24 flex flex-col justify-center">
          <h3 className="text-[40px] md:text-[56px] font-black tracking-[-1px] text-brand-ink mb-6 uppercase leading-none">
            {t('mission_title')}
          </h3>
          <p className="text-xl text-brand-body leading-[1.7] max-w-[480px] font-medium text-balance">
            {t('mission_text')}
          </p>
        </div>
        {/* Image Side */}
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-auto bg-slate-200">
          <Image 
            src="/hero-bg-mobile.jpg" 
            alt="Missão" 
            fill 
            className="object-cover"
          />
        </div>
      </div>

      {/* Visão */}
      <div className="flex flex-col md:flex-row-reverse w-full min-h-[500px]">
        {/* Text Side (Dark) */}
        <div className="w-full md:w-1/2 bg-brand-ink py-20 px-8 md:px-16 lg:px-24 flex flex-col justify-center">
          <h3 className="text-[40px] md:text-[56px] font-black tracking-[-1px] text-white mb-6 uppercase leading-none">
            {t('vision_title')}
          </h3>
          <p className="text-xl text-[#B4BDBD] leading-[1.7] max-w-[480px] font-medium text-balance">
            {t('vision_text')}
          </p>
        </div>
        {/* Image Side */}
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-auto bg-gray-900">
          <Image 
            src="/hero-bg-desktop.jpg" 
            alt="Visão" 
            fill 
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
