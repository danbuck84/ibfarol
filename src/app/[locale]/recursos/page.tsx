import { Suspense } from "react";
import Header from "@/components/Header";
import ReadingPlan from "@/components/ReadingPlan";
import ResourceLibrary from "@/components/ResourceLibrary";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/routing";
import { getTranslations, getLocale } from "next-intl/server";
import { getResourceLibrary } from "@/lib/resourceLibrary";

export default async function RecursosPage() {
  const t = await getTranslations("Recursos");
  const locale = await getLocale();
  const isEn = locale === "en";
  const libraryItems = await getResourceLibrary();

  return (
    <>
      <Header />
      <main className="min-h-[70vh]">
        <section className="pt-16 pb-6 px-6 md:px-8 max-w-[1280px] mx-auto">
          <h1 className="text-[40px] font-bold text-brand-ink mb-10">{t("title")}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

          {/* Spotify Playlists Strip (Main Worship + Farol Kids) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://open.spotify.com/playlist/3n76y1PIXbhw5NoiOq4JA8?si=83f6432026ef4525"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 bg-white p-5 rounded-xl border border-brand-hairline shadow-xs hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-brand-ink flex items-center justify-center shrink-0 border border-brand-hairline overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/farollouvor.png" alt="Louvor" className="w-full h-full object-contain p-2" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-ink text-base md:text-lg group-hover:text-brand-primary-ink transition-colors">
                    {isEn ? "Sunday Worship Playlist" : "Playlist de Louvores"}
                  </h3>
                  <p className="text-xs md:text-sm text-brand-body">
                    {isEn
                      ? "The songs we sing together as a church on Sundays."
                      : "As músicas que cantamos juntos nos cultos de domingo."}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#191414] text-white text-xs font-bold shrink-0">
                <svg className="w-4 h-4 text-[#1DB954]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.62 18.661 12.9c.42.18.6.78.3 1.14zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                <span>Spotify</span>
              </span>
            </a>

            <a
              href="https://open.spotify.com/playlist/2InHUcZFQTbEVi3nmZgn00?si=2f0202c8adf54a2b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 bg-white p-5 rounded-xl border border-brand-hairline shadow-xs hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-brand-ink flex items-center justify-center shrink-0 border border-brand-hairline overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/farolkids1.png" alt="Farol Kids" className="w-full h-full object-contain p-2" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-ink text-base md:text-lg group-hover:text-brand-primary-ink transition-colors">
                    {isEn ? "Farol Kids Playlist" : "Playlist Farol Kids"}
                  </h3>
                  <p className="text-xs md:text-sm text-brand-body">
                    {isEn
                      ? "Biblical children's worship songs for the whole family."
                      : "Louvores infantis bíblicos para as crianças e toda a família."}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#191414] text-white text-xs font-bold shrink-0">
                <svg className="w-4 h-4 text-[#1DB954]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.62 18.661 12.9c.42.18.6.78.3 1.14zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                <span>Spotify</span>
              </span>
            </a>
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
