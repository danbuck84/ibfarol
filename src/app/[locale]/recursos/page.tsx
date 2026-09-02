import Header from "@/components/Header";
import ReadingPlan from "@/components/ReadingPlan";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export default async function RecursosPage() {
  const t = await getTranslations('Recursos');
  return (
    <>
      <Header />
      <main className="min-h-[70vh]">
        <section className="py-20 px-8 max-w-[1280px] mx-auto">
          <h1 className="text-[40px] font-bold text-brand-ink mb-12">{t('title')}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {/* Sermões */}
            <div className="bg-brand-canvas-soft p-8 rounded-lg border border-brand-hairline flex flex-col">
              <h2 className="text-2xl font-bold text-brand-ink mb-4">{t('sermons_title')}</h2>
              <p className="text-brand-body mb-8 flex-grow">{t('sermons_desc')}</p>
              <Link href="/sermoes" className="inline-block bg-brand-primary text-brand-on-primary font-bold px-6 py-3 rounded-md text-center transition-colors hover:bg-brand-primary-deep">
                {t('sermons_btn')}
              </Link>
            </div>
            
            {/* Materiais de Apoio */}
            <div className="bg-brand-canvas-soft p-8 rounded-lg border border-brand-hairline flex flex-col">
              <h2 className="text-2xl font-bold text-brand-ink mb-4">{t('materials_title')}</h2>
              <p className="text-brand-body mb-8 flex-grow">{t('materials_desc')}</p>
              <a href="https://drive.google.com/drive/folders/1bqcHjARUNoxh1seFbc5YQlEmnqojiASD" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#4285F4] text-white font-bold px-6 py-3 rounded-md text-center transition-colors hover:bg-[#3367D6]">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.23 7.82h6.46l3.23 5.584-3.23 5.585h-6.46l-3.23-5.585 3.23-5.584z"/></svg>
                {t('materials_btn')}
              </a>
            </div>
            
            {/* Artigos */}
            <div className="bg-brand-canvas-soft p-8 rounded-lg border border-brand-hairline flex flex-col">
              <h2 className="text-2xl font-bold text-brand-ink mb-4">{t('articles_title')}</h2>
              <p className="text-brand-body mb-8 flex-grow">{t('articles_desc')}</p>
              <Link href="/artigos" className="inline-block bg-brand-canvas border border-brand-hairline text-brand-ink font-bold px-6 py-3 rounded-md text-center transition-colors hover:bg-gray-50">
                {t('articles_btn')}
              </Link>
            </div>

            {/* Indicações */}
            <div className="bg-brand-canvas-soft p-8 rounded-lg border border-brand-hairline flex flex-col">
              <h2 className="text-2xl font-bold text-brand-ink mb-4">{t('books_title')}</h2>
              <p className="text-brand-body mb-8 flex-grow">{t('books_desc')}</p>
              <Link href="/livros" className="inline-block bg-brand-primary text-white font-bold px-6 py-3 rounded-md text-center transition-colors hover:bg-brand-primary-deep">
                {t('books_btn')}
              </Link>
            </div>
          </div>
        </section>

        <ReadingPlan />
      </main>
      <Footer />
    </>
  );
}
