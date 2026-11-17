"use client";
import { useTranslations, useLocale } from "next-intl";

function MinistryCard({
  title,
  leader,
  role,
  isInactive = false,
  icon = "/avatar-placeholder.svg",
  iconBg = "bg-brand-ink",
  spotifyUrl,
  spotifyLabel,
}: {
  title: string;
  leader: string;
  role: string;
  isInactive?: boolean;
  icon?: string;
  iconBg?: string;
  spotifyUrl?: string;
  spotifyLabel?: string;
}) {
  return (
    <li className={`bg-white border ${isInactive ? 'border-dashed border-brand-hairline opacity-70 bg-brand-canvas-soft' : 'border-brand-hairline shadow-sm'} p-6 rounded-lg flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6`}>
      <div className="flex items-center gap-5 flex-grow">
        <div className={`w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border border-brand-hairline ${iconBg}`}>
           {/* eslint-disable-next-line @next/next/no-img-element */}
           <img src={icon} alt={title} className="w-full h-full object-contain p-2 drop-shadow-sm" />
        </div>
        <div className="flex-grow">
          <h4 className={`font-semibold text-xl ${isInactive ? 'text-brand-mute' : 'text-brand-ink'}`}>{title}</h4>
          <p className="text-brand-body text-sm mt-1 font-medium">{leader} <span className="opacity-50 mx-1">•</span> {role}</p>
        </div>
      </div>

      {spotifyUrl && (
        <a
          href={spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#191414] hover:bg-brand-body text-white text-xs font-bold transition-colors flex-shrink-0"
        >
          <svg className="w-4 h-4 text-[#1DB954]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.54.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.62 18.661 12.9c.42.18.6.78.3 1.14zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
          <span>{spotifyLabel}</span>
        </a>
      )}
    </li>
  );
}

export default function Ministries() {
  const t = useTranslations('Ministries');
  const locale = useLocale();
  const isEn = locale === 'en';

  return (
    <section className="py-20 px-8" id="ministerios">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-16">
          <p className="text-sm font-semibold tracking-[2.52px] uppercase text-brand-primary-ink mb-4">
            {t('eyebrow')}
          </p>
          <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.1] tracking-[-1px] m-0 text-brand-ink max-w-[20ch]">
            {t('headline')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Internal Ministries */}
          <div>
            <h3 className="text-2xl font-bold text-brand-ink mb-2">{t('internal_title')}</h3>
            <p className="text-brand-body mb-8">{t('internal_desc')}</p>
            
            <ul className="space-y-4">
              <MinistryCard title={t('min_jpeg')} leader="Gustavo" role={t('role_leader')} icon="/icons/faroljovens.png" />
              <MinistryCard title={t('min_diaconia')} leader="Gustavo" role={t('role_leader')} icon="/icons/faroldiaconia.png" />
              <MinistryCard title={t('min_eventos')} leader="Rose" role={t('role_leader')} icon="/icons/faroleventos.png" />
              <MinistryCard title={t('min_homens_list')} leader="Gustavo" role={t('role_leader')} icon="/icons/farolhomens.png" />
              <MinistryCard
                title={t('min_infantil_list')}
                leader="Débora"
                role={t('role_leader')}
                icon="/icons/farolkids1.png"
                spotifyUrl="https://open.spotify.com/playlist/2InHUcZFQTbEVi3nmZgn00?si=2f0202c8adf54a2b"
                spotifyLabel={isEn ? "Farol Kids Playlist" : "Playlist Farol Kids"}
              />
              <MinistryCard title={t('min_integracao')} leader="Stephanie" role={t('role_leader')} icon="/icons/farolmembros.png" />
              <MinistryCard
                title={t('min_louvor_list')}
                leader="Gustavo"
                role={t('role_leader')}
                icon="/icons/farollouvor.png"
                spotifyUrl="https://open.spotify.com/playlist/3n76y1PIXbhw5NoiOq4JA8?si=83f6432026ef4525"
                spotifyLabel={isEn ? "Worship Playlist" : "Playlist de Louvores"}
              />
              <MinistryCard title={t('min_manutencao_list')} leader="Marco" role={t('role_leader')} icon="/icons/farolmanutencao.png" />
              <MinistryCard title={t('min_midia_list')} leader="Talita" role={t('role_leader')} icon="/icons/farolmidia.png" />
              <MinistryCard title={t('min_mulheres_list')} leader="Amanda" role={t('role_leader')} icon="/icons/farolmulheres1.png" />
              <MinistryCard title={t('min_som')} leader="William" role={t('role_leader')} icon="/icons/farol2.png" />
            </ul>
          </div>

          {/* External Ministries */}
          <div>
            <h3 className="text-2xl font-bold text-brand-ink mb-2">{t('external_title')}</h3>
            <p className="text-brand-body mb-8">{t('external_desc')}</p>
            
            <ul className="space-y-4">
              <MinistryCard title={t('min_acao_list')} leader="Steve" role={t('role_leader')} icon="/icons/farolamarelo.png" />
              <MinistryCard title={t('min_agape_list')} leader="Mafê" role={t('role_leader')} icon="/icons/farolbranco.png" iconBg="bg-brand-ink" />
              <MinistryCard title={t('min_jiujitsu_list')} leader="Emerson" role={t('role_leader')} icon="/icons/farolpreto.png" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
