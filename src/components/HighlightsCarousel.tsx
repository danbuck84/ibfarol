"use client";

import { useTranslations } from "next-intl";
import { useRef, useState, MouseEvent as ReactMouseEvent } from "react";
import ReadingPlan from "./ReadingPlan";

export default function HighlightsCarousel() {
  const t = useTranslations('Highlights');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
    
    // Quick boundary checks
    if (scrollLeft <= 0) {
      setActiveIndex(0);
      return;
    }
    if (scrollLeft + clientWidth >= scrollWidth - 10) {
      setActiveIndex(2);
      return;
    }
    
    const index = Math.round(scrollLeft / (scrollWidth / 3));
    setActiveIndex(Math.min(Math.max(index, 0), 2));
  };

  const handleMouseDown = (e: ReactMouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: ReactMouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="bg-brand-canvas-soft py-16 px-8 overflow-hidden" id="destaques">
      <div className="max-w-[1280px] mx-auto mb-10">
         <h2 className="text-[28px] md:text-[36px] font-bold leading-[34px] md:leading-[40px] tracking-[-0.9px] m-0 text-brand-ink">
            {t('headline')}
          </h2>
      </div>

      <div 
        ref={scrollRef}
        className={`flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 max-w-[1280px] mx-auto scrollbar-hide select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onScroll={handleScroll}
      >
        {/* YouTube Card */}
        <div className="flex-none w-[90vw] md:w-[70vw] lg:w-[600px] snap-center">
          <div className="bg-white border border-brand-hairline rounded-lg overflow-hidden shadow-sm h-[400px] md:h-[450px] flex flex-col pointer-events-none">
            <div className="relative w-full h-[250px] bg-black">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" 
                alt="YouTube"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-center">
              <p className="text-sm font-semibold tracking-[2px] uppercase text-brand-primary-ink mb-2">YouTube</p>
              <h3 className="text-xl font-bold text-brand-ink leading-snug">{t('youtube_title')}</h3>
              <p className="text-brand-body mt-2 line-clamp-2">{t('youtube_desc')}</p>
              <a href="#" className="pointer-events-auto inline-block mt-4 text-brand-primary font-bold hover:underline">{t('btn_watch')}</a>
            </div>
          </div>
        </div>

        {/* Spotify Card */}
        <div className="flex-none w-[90vw] md:w-[70vw] lg:w-[600px] snap-center">
          <div className="bg-white border border-brand-hairline rounded-lg overflow-hidden shadow-sm h-[400px] md:h-[450px] flex flex-col pointer-events-none">
            <div className="relative w-full h-[250px] bg-[#191414] flex items-center justify-center">
               <svg className="w-24 h-24 text-[#1DB954]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.62 18.661 12.9c.42.18.6.78.3 1.14zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
               </svg>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-center">
              <p className="text-sm font-semibold tracking-[2px] uppercase text-[#1DB954] mb-2">Spotify</p>
              <h3 className="text-xl font-bold text-brand-ink leading-snug">{t('spotify_title')}</h3>
              <p className="text-brand-body mt-2 line-clamp-2">{t('spotify_desc')}</p>
              <a href="#" className="pointer-events-auto inline-block mt-4 text-[#1DB954] font-bold hover:underline">{t('btn_listen')}</a>
            </div>
          </div>
        </div>

        {/* Reading Plan Card */}
        <div className="flex-none w-[90vw] md:w-[70vw] lg:w-[450px] snap-center">
           <div className="pointer-events-auto h-[400px] md:h-[450px]">
             <ReadingPlan compact={true} />
           </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-2.5 mt-2">
        {[0, 1, 2].map(idx => (
          <div 
            key={idx} 
            className={`rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-8 h-2 bg-brand-primary' : 'w-2 h-2 bg-brand-hairline/80'}`}
          />
        ))}
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
