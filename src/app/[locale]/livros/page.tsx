import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookCategory from "@/components/BookCategory";
import Breadcrumb from "@/components/Breadcrumb";
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
      <Breadcrumb items={[{ label: 'Recursos', href: '/recursos' }, { label: 'Indicações de Leitura' }]} />
      <main className="min-h-[70vh] bg-brand-canvas py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center md:text-left mb-16">
            <h1 className="text-[40px] font-bold text-brand-ink mb-4">{t('title')}</h1>
            <p className="text-xl text-brand-body max-w-3xl">{t('desc')}</p>
          </div>
          
          <div className="space-y-4">
            {library.map((section: any, idx: number) => (
              <BookCategory key={idx} category={section.category} books={section.books} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
