"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

interface Book {
  title: string;
  author: string;
  cover?: string;
}

interface BookCategoryProps {
  category: string;
  books: Book[];
}

export default function BookCategory({ category, books }: BookCategoryProps) {
  const t = useTranslations('BookCategories');
  const locale = useLocale();
  const isEn = locale === 'en';
  const [isOpen, setIsOpen] = useState(false);

  const isKidsCategory = category === "Para as Crianças";

  return (
    <section className="bg-white border border-brand-hairline rounded-lg overflow-hidden shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex items-center justify-between p-6 bg-white hover:bg-brand-canvas-soft transition-colors focus:outline-none text-left"
      >
        <h2 className="text-xl md:text-2xl font-bold text-brand-ink m-0 text-left">
          {t(category)}
        </h2>
        <svg 
          className={`w-6 h-6 text-brand-mute transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="p-6 pt-0 border-t border-brand-hairline bg-brand-canvas-soft/30">
          {isKidsCategory && (
            <div className="mt-6 bg-white border border-brand-hairline rounded-xl p-4 md:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-ink flex items-center justify-center shrink-0 border border-brand-hairline overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/farolkids1.png" alt="Farol Kids" className="w-full h-full object-contain p-1.5" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-ink text-base md:text-lg">
                    {isEn ? "Farol Kids Worship Playlist" : "Playlist Farol Kids no Spotify"}
                  </h3>
                  <p className="text-xs md:text-sm text-brand-body">
                    {isEn
                      ? "Biblical children's songs to listen to with your family during the week."
                      : "Louvores infantis bíblicos para ouvir em família durante a semana."}
                  </p>
                </div>
              </div>
              <a
                href="https://open.spotify.com/playlist/2InHUcZFQTbEVi3nmZgn00?si=2f0202c8adf54a2b"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#191414] hover:bg-brand-body text-white text-xs md:text-sm font-bold transition-colors shrink-0"
              >
                <svg className="w-4 h-4 text-[#1DB954]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.62 18.661 12.9c.42.18.6.78.3 1.14zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                <span>{isEn ? "Listen on Spotify" : "Ouvir no Spotify"}</span>
              </a>
            </div>
          )}

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 pt-6">
            {books.map((book, bIdx) => (
              <div key={bIdx} className="bg-white p-3 md:p-5 rounded-lg border border-brand-hairline shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="w-full aspect-[2/3] bg-brand-canvas-soft border border-brand-hairline rounded flex items-center justify-center overflow-hidden mb-3 md:mb-4">
                  {book.cover ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                  ) : (
                    <svg className="w-8 h-8 md:w-12 md:h-12 text-brand-mute" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  )}
                </div>
                <h3 className="font-bold text-brand-ink text-sm md:text-lg mb-1 md:mb-2 flex-grow leading-tight line-clamp-3">{book.title}</h3>
                <p className="text-brand-body text-xs md:text-sm font-medium pt-2 border-t border-brand-hairline/50 line-clamp-1">{book.author}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
