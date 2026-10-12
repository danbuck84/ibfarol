"use client";
import { useTranslations } from "next-intl";

function MinistryCard({ title, leader, role, isInactive = false, icon = "/avatar-placeholder.svg", iconBg = "bg-brand-ink" }: { title: string, leader: string, role: string, isInactive?: boolean, icon?: string, iconBg?: string }) {
  return (
    <li className={`bg-white border ${isInactive ? 'border-dashed border-brand-hairline opacity-70 bg-brand-canvas-soft' : 'border-brand-hairline shadow-sm'} p-6 rounded-lg flex items-center gap-6`}>
      <div className={`w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border border-brand-hairline ${iconBg}`}>
         {/* eslint-disable-next-line @next/next/no-img-element */}
         <img src={icon} alt={title} className="w-full h-full object-contain p-2 drop-shadow-sm" />
      </div>
      <div className="flex-grow">
        <h4 className={`font-semibold text-xl ${isInactive ? 'text-brand-mute' : 'text-brand-ink'}`}>{title}</h4>
        <p className="text-brand-body text-sm mt-1 font-medium">{leader} <span className="opacity-50 mx-1">•</span> {role}</p>
      </div>
    </li>
  );
}

export default function Ministries() {
  const t = useTranslations('Ministries');
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
              <MinistryCard title={t('min_infantil_list')} leader="Débora" role={t('role_leader')} icon="/icons/farolkids1.png" />
              <MinistryCard title={t('min_integracao')} leader="Stephanie" role={t('role_leader')} icon="/icons/farolmembros.png" />
              <MinistryCard title={t('min_louvor_list')} leader="Gustavo" role={t('role_leader')} icon="/icons/farollouvor.png" />
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
