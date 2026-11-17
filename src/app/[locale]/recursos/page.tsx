import { Suspense } from "react";
import Header from "@/components/Header";
import ReadingPlan from "@/components/ReadingPlan";
import ResourceLibrary from "@/components/ResourceLibrary";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { getResourceLibrary } from "@/lib/resourceLibrary";

export default async function RecursosPage() {
  const t = await getTranslations("Recursos");
  const libraryItems = await getResourceLibrary();

  return (
    <>
      <Header />
      <main className="min-h-[70vh]">
        <section className="pt-16 pb-8 px-6 md:px-8 max-w-[1280px] mx-auto">
          <h1 className="text-[40px] font-bold text-brand-ink mb-10">{t("title")}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sermões */}
            <div className="bg-brand-canvas-soft p-7 rounded-lg border border-brand-hairline flex flex-col">
              <h2 className="text-2xl font-bold text-brand-ink mb-3">{t("sermons_title")}</h2>
              <p className="text-brand-body mb-6 flex-grow">{t("sermons_desc")}</p>
              <Link
                href="/sermoes"
                className="inline-block bg-brand-primary text-brand-on-primary font-bold px-6 py-3 rounded-md text-center transition-colors hover:bg-brand-primary-deep"
              >
                {t("sermons_btn")}
              </Link>
            </div>

            {/* Materiais de Apoio & EBD */}
            <div className="bg-brand-canvas-soft p-7 rounded-lg border border-brand-hairline flex flex-col">
              <h2 className="text-2xl font-bold text-brand-ink mb-3">{t("materials_title")}</h2>
              <p className="text-brand-body mb-6 flex-grow">{t("materials_desc")}</p>
              <a
                href="#biblioteca"
                className="inline-block bg-brand-ink text-white font-bold px-6 py-3 rounded-md text-center transition-colors hover:bg-brand-body"
              >
                {t("materials_btn")}
              </a>
            </div>

            {/* Artigos */}
            <div className="bg-brand-canvas-soft p-7 rounded-lg border border-brand-hairline flex flex-col">
              <h2 className="text-2xl font-bold text-brand-ink mb-3">{t("articles_title")}</h2>
              <p className="text-brand-body mb-6 flex-grow">{t("articles_desc")}</p>
              <Link
                href="/artigos"
                className="inline-block bg-brand-canvas border border-brand-hairline text-brand-ink font-bold px-6 py-3 rounded-md text-center transition-colors hover:bg-gray-50"
              >
                {t("articles_btn")}
              </Link>
            </div>

            {/* Indicações */}
            <div className="bg-brand-canvas-soft p-7 rounded-lg border border-brand-hairline flex flex-col">
              <h2 className="text-2xl font-bold text-brand-ink mb-3">{t("books_title")}</h2>
              <p className="text-brand-body mb-6 flex-grow">{t("books_desc")}</p>
              <Link
                href="/livros"
                className="inline-block bg-brand-primary text-white font-bold px-6 py-3 rounded-md text-center transition-colors hover:bg-brand-primary-deep"
              >
                {t("books_btn")}
              </Link>
            </div>
          </div>
        </section>

        {/* Interactive Searchable Resource Library (synced from Google Drive) */}
        <Suspense fallback={null}>
          <ResourceLibrary items={libraryItems} />
        </Suspense>

        <ReadingPlan />
      </main>
      <Footer />
    </>
  );
}
