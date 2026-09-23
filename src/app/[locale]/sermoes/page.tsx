import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { getTranslations } from "next-intl/server";
import { fetchCultos } from "@/lib/youtube";

export default async function SermoesPage() {
  const t = await getTranslations('Sermoes');
  
  // Fetch real videos from YouTube
  const videos = await fetchCultos();

  return (
    <>
      <Header />
      <Breadcrumb items={[{ label: 'Recursos', href: '/recursos' }, { label: 'Mensagens Anteriores' }]} />
      <main className="min-h-[70vh] bg-brand-canvas py-20 px-6 md:px-8">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="text-[32px] md:text-[40px] font-bold text-brand-ink mb-4">{t('title')}</h1>
          <p className="text-lg md:text-xl text-brand-body mb-12">{t('desc')}</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {videos.length === 0 && (
              <p className="text-brand-mute italic">Nenhuma mensagem encontrada no momento.</p>
            )}
            
            {videos.map(video => {
              // Parse date to readable format if needed, but YouTube RSS provides ISO strings
              const dateObj = new Date(video.published);
              const dateStr = dateObj.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
              
              return (
                <a href={video.url} target="_blank" rel="noopener noreferrer" key={video.id} className="bg-white rounded-lg border border-brand-hairline shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col md:flex-row group">
                  <div className="w-full md:w-[280px] h-[200px] md:h-auto bg-black relative flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={video.thumbnail} alt={video.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-red-600/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-center flex-grow">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wider mb-2">YouTube</span>
                    <h2 className="text-lg md:text-xl font-bold text-brand-ink leading-snug mb-3 group-hover:text-brand-primary transition-colors">{video.title}</h2>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-brand-mute font-medium mt-auto">
                      <span>Publicado em {dateStr}</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
