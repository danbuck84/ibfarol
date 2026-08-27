import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getTranslations } from "next-intl/server";

export default async function SermoesPage() {
  const t = await getTranslations('Sermoes');
  const sermons = [
    { id: 1, title: "O Propósito de Deus", series: "No Princípio", preacher: "Pr. Gustavo", date: "22 Set 2026", videoId: "dQw4w9WgXcQ" },
    { id: 2, title: "A Queda do Homem", series: "No Princípio", preacher: "Pr. Gustavo", date: "15 Set 2026", videoId: "dQw4w9WgXcQ" },
    { id: 3, title: "Graça Incalculável", series: "Efésios", preacher: "Pr. Gustavo", date: "08 Set 2026", videoId: "dQw4w9WgXcQ" },
    { id: 4, title: "Firmados em Cristo", series: "Efésios", preacher: "Pr. Gustavo", date: "01 Set 2026", videoId: "dQw4w9WgXcQ" },
  ];

  return (
    <>
      <Header />
      <main className="min-h-[70vh] bg-brand-canvas py-20 px-8">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="text-[40px] font-bold text-brand-ink mb-4">{t('title')}</h1>
          <p className="text-xl text-brand-body mb-12">{t('desc')}</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {sermons.map(sermon => (
              <div key={sermon.id} className="bg-white rounded-lg border border-brand-hairline shadow-sm overflow-hidden flex flex-col md:flex-row">
                <div className="w-full md:w-[280px] h-[180px] md:h-auto bg-black relative flex-shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://img.youtube.com/vi/${sermon.videoId}/maxresdefault.jpg`} alt={sermon.title} className="absolute inset-0 w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-center flex-grow">
                  <span className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-2">{sermon.series}</span>
                  <h2 className="text-xl font-bold text-brand-ink leading-snug mb-3">{sermon.title}</h2>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-brand-mute font-medium">
                    <span>{sermon.preacher}</span>
                    <span>•</span>
                    <span>{sermon.date}</span>
                  </div>
                  <div className="mt-5 flex gap-3">
                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-brand-ink font-bold py-2 rounded-md transition-colors text-sm">
                      {t('watch')}
                    </button>
                    <button className="flex-1 bg-[#1DB954]/10 hover:bg-[#1DB954]/20 text-[#1DB954] font-bold py-2 rounded-md transition-colors text-sm">
                      {t('listen')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
