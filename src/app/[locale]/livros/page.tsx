import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getTranslations } from "next-intl/server";
import fs from 'fs';
import path from 'path';

export default async function LivrosPage() {
  const t = await getTranslations('Livros');
  
  const booksPath = path.join(process.cwd(), 'src/data/books.json');
  let library = [];
  try {
    library = JSON.parse(fs.readFileSync(booksPath, 'utf8'));
  } catch (e) {
    console.error("Error loading books:", e);
  }
  
  return (
    <>
      <Header />
      <main className="min-h-[70vh] bg-brand-canvas py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center md:text-left mb-16">
            <h1 className="text-[40px] font-bold text-brand-ink mb-4">{t('title')}</h1>
            <p className="text-xl text-brand-body">{t('desc')}</p>
          </div>
          
          <div className="space-y-16">
            {library.map((section: any, idx: number) => (
              <section key={idx}>
                <h2 className="text-2xl font-bold text-brand-ink border-b-2 border-brand-primary-ink pb-2 mb-6 inline-block">
                  {section.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {section.books.map((book: any, bIdx: number) => (
                    <div key={bIdx} className="bg-white p-6 rounded-lg border border-brand-hairline shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                      <div className="w-full aspect-[2/3] bg-brand-canvas-soft border border-brand-hairline rounded-md mb-4 flex items-center justify-center overflow-hidden">
                        {book.cover ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                        ) : (
                          <svg className="w-12 h-12 text-brand-mute" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                        )}
                      </div>
                      <h3 className="font-bold text-brand-ink text-lg mb-2 flex-grow leading-tight">{book.title}</h3>
                      <p className="text-brand-body text-sm font-medium pt-2 border-t border-brand-hairline/50">{book.author}</p>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
