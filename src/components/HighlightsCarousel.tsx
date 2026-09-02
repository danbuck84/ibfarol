import { useTranslations } from "next-intl";

export default function HighlightsCarousel() {
  const t = useTranslations('Highlights');

  return (
    <section className="bg-white py-16" id="destaques">
      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          
          {/* Left Column */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-brand-ink mb-6">Última Mensagem</h2>
            <a href="https://www.youtube.com/@batistafarol" target="_blank" rel="noopener noreferrer" className="block relative bg-black rounded-xl overflow-hidden shadow-sm group h-[300px] md:h-[450px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="https://img.youtube.com/vi/DrmJw_7Z4Gw/maxresdefault.jpg" 
                alt="Último Sermão" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{t('youtube_title')}</h3>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                  <p className="text-white/80 md:text-lg">{t('youtube_desc')}</p>
                  <span className="font-semibold text-white md:ml-auto mt-2 md:mt-0 opacity-0 md:opacity-100 group-hover:opacity-100 transition-opacity">Assistir no YouTube &rarr;</span>
                </div>
              </div>
            </a>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-brand-ink mb-6">Outros Recursos</h2>
            <div className="flex flex-col gap-4">
              
              {/* Spotify Podcast */}
              <a href="https://open.spotify.com/show/3HrOmNVXUmosBJARnDqC4P?si=0feafb769c624480" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white p-4 rounded-xl border border-brand-hairline shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-20 h-20 bg-[#191414] rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-10 h-10 text-[#1DB954]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.62 18.661 12.9c.42.18.6.78.3 1.14zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-brand-ink text-lg">Podcast de Mensagens</h4>
                  <p className="text-sm text-brand-body line-clamp-2">Ouça nossas mensagens e as séries de pregações nos domingos.</p>
                  <span className="text-xs font-bold text-[#1DB954] uppercase mt-2 block group-hover:underline">Ouvir agora</span>
                </div>
              </a>

              {/* Spotify Playlist */}
              <a href="https://open.spotify.com/playlist/7febx03V2BfDHGR7Qdxv5r?si=f4d6de968b1f4733" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white p-4 rounded-xl border border-brand-hairline shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-20 h-20 bg-[#191414] rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-10 h-10 text-[#1DB954]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.62 18.661 12.9c.42.18.6.78.3 1.14zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-brand-ink text-lg">Playlist de Louvores</h4>
                  <p className="text-sm text-brand-body line-clamp-2">As músicas que cantamos juntos todos os domingos.</p>
                  <span className="text-xs font-bold text-[#1DB954] uppercase mt-2 block group-hover:underline">Ouvir agora</span>
                </div>
              </a>

              {/* Reading Plan */}
              <a href="#estudo" className="flex items-center gap-4 bg-white p-4 rounded-xl border border-brand-hairline shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-20 h-20 bg-brand-primary/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-8 h-8 text-brand-primary-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-brand-ink text-lg">Plano de Leitura</h4>
                  <p className="text-sm text-brand-body line-clamp-2">Acompanhe nossa leitura bíblica diária da semana.</p>
                  <span className="text-xs font-bold text-brand-primary-ink uppercase mt-2 block group-hover:underline">Acessar</span>
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
