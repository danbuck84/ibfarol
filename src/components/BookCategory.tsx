"use client";

import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-white border border-brand-hairline rounded-lg overflow-hidden shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex items-center justify-between p-6 bg-white hover:bg-brand-canvas-soft transition-colors focus:outline-none"
      >
        <h2 className="text-xl md:text-2xl font-bold text-brand-ink m-0">
          {category}
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
