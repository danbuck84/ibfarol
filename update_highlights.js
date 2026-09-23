const fs = require('fs');

let code = fs.readFileSync('src/components/HighlightsCarousel.tsx', 'utf8');

// Import Link
if (!code.includes('import { Link }')) {
  code = code.replace(
    'import { getTranslations } from "next-intl/server";',
    `import { getTranslations } from "next-intl/server";\nimport { Link } from "@/i18n/routing";`
  );
}

// Replace <a href="/sermoes" with <Link href="/sermoes"
code = code.replace('<a href="/sermoes"', '<Link href="/sermoes"');
code = code.replace('Acessar Arquivo</span>\n                </div>\n              </a>', 'Acessar Arquivo</span>\n                </div>\n              </Link>');

// Replace Podcast with Playlist de Louvores
const podcastBlockRegex = /\{\/\* Spotify Podcast \*\/\}[\s\S]*?<\/a>/;
const playlistHtml = `{/* Spotify Playlist */}
              <a href="https://open.spotify.com/playlist/7febx03V2BfDHGR7Qdxv5r?si=f4d6de968b1f4733" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white p-4 rounded-xl border border-brand-hairline shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-20 h-20 bg-[#191414] rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-10 h-10 text-[#1DB954]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.62 18.661 12.9c.42.18.6.78.3 1.14zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-brand-ink text-lg">Playlist de Louvores</h4>
                  <p className="text-sm text-brand-body line-clamp-2">As músicas que cantamos juntos todos os domingos.</p>
                  <span className="text-xs font-bold text-[#1DB954] uppercase mt-2 block group-hover:underline">Ouvir agora</span>
                </div>
              </a>`;

code = code.replace(podcastBlockRegex, playlistHtml);

fs.writeFileSync('src/components/HighlightsCarousel.tsx', code);
