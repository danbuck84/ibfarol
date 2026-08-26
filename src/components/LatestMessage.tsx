import { useTranslations } from "next-intl";

export default function LatestMessage() {
  const t = useTranslations('LatestMessage');
  return (
    <section className="bg-brand-canvas-soft py-16 px-8" id="recursos">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div className="relative rounded-lg overflow-hidden border border-brand-hairline aspect-video bg-black group cursor-pointer flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" 
            alt={t('video_alt')}
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
          />
          <div className="relative z-10 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        
        <div>
          <p className="text-sm font-semibold tracking-[2.52px] uppercase text-brand-primary-ink mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-[28px] md:text-[36px] font-normal leading-[34px] md:leading-[40px] tracking-[-0.9px] m-0 text-balance">
            {t('headline')}
          </h2>
          
          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs leading-[16px] text-brand-mute font-variant-numeric tabular-nums">
            <span>{t('meta_pastor')}</span>
            <span>{t('meta_date')}</span>
            <span>{t('meta_duration')}</span>
            <span className="inline-block bg-white text-brand-canvas-text-soft border border-brand-hairline rounded-md px-2 py-0.5 text-[13px] leading-[18px] italic">
              {t('meta_scripture')}
            </span>
          </div>
          
          <p className="mt-5 text-lg leading-[28px] text-brand-body max-w-[46ch] text-pretty">
            {t('description')}
          </p>
          
          <div className="flex flex-wrap gap-3 mt-7">
            <button className="font-semibold text-brand-on-primary bg-brand-primary border border-brand-primary px-4 py-3 rounded-md transition-colors hover:bg-brand-primary-deep cursor-pointer">
              {t('btn_watch')}
            </button>
            <button className="font-semibold text-brand-ink bg-brand-canvas border border-brand-hairline px-4 py-3 rounded-md transition-colors hover:bg-gray-50 cursor-pointer">
              {t('btn_all')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
