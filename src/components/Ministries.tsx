"use client";
import { useTranslations } from "next-intl";

function MinistryCard({ title, leader, phone, role, isInactive = false, btnText, icon = "/avatar-placeholder.svg", iconBg = "bg-brand-canvas-soft" }: { title: string, leader: string, phone: string, role: string, isInactive?: boolean, btnText: string, icon?: string, iconBg?: string }) {
  const cleanPhone = phone.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/55${cleanPhone}`;
  
  return (
    <li className={`bg-white border ${isInactive ? 'border-dashed border-brand-hairline opacity-70 bg-brand-canvas-soft' : 'border-brand-hairline shadow-sm'} p-6 rounded-lg flex flex-col md:flex-row items-center gap-6`}>
      <div className={`w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border border-brand-hairline ${iconBg}`}>
         {/* eslint-disable-next-line @next/next/no-img-element */}
         <img src={icon} alt={title} className="w-full h-full object-contain p-2 drop-shadow-sm" />
      </div>
      <div className="flex-grow text-center md:text-left">
        <h4 className={`font-semibold text-xl ${isInactive ? 'text-brand-mute' : 'text-brand-ink'}`}>{title}</h4>
        <p className="text-brand-body text-sm mt-1 font-medium">{leader} <span className="opacity-50 mx-1">•</span> {role}</p>
      </div>
      <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0">
        <a href={isInactive ? "#" : whatsappUrl} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-colors ${isInactive ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-[#25D366] hover:bg-[#1DA851] text-white'}`}
           onClick={e => isInactive && e.preventDefault()}>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
          {btnText}
        </a>
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
              <MinistryCard title=".JPEG (Jovens)" leader="Gustavo" phone="(12) 99162-6321" role="Líder" btnText={t('btn_whatsapp')} icon="/icons/faroljovens.png" />
              <MinistryCard title="Diaconia" leader="Gustavo" phone="(12) 99162-6321" role="Líder" btnText={t('btn_whatsapp')} icon="/icons/faroldiaconia.png" />
              <MinistryCard title="Eventos" leader="Rose" phone="(12) 98894-0818" role="Líder" btnText={t('btn_whatsapp')} icon="/icons/faroleventos.png" />
              <MinistryCard title="Homens" leader="Gustavo" phone="(12) 99162-6321" role="Líder" btnText={t('btn_whatsapp')} icon="/icons/farolhomens.png" />
              <MinistryCard title="Infantil" leader="Débora" phone="(12) 99147-5318" role="Líder" btnText={t('btn_whatsapp')} icon="/icons/farolkids1.png" />
              <MinistryCard title="Integração" leader="Stephanie" phone="(12) 98188-7745" role="Líder" btnText={t('btn_whatsapp')} icon="/icons/farolmembros.png" />
              <MinistryCard title="Louvor" leader="Gustavo" phone="(12) 99162-6321" role="Líder" btnText={t('btn_whatsapp')} icon="/icons/farollouvor.png" />
              <MinistryCard title="Manutenção" leader="Marco" phone="(12) 99739-0398" role="Líder" btnText={t('btn_whatsapp')} icon="/icons/farolmanutencao.png" />
              <MinistryCard title="Mídia" leader="Talita" phone="(12) 98819-0546" role="Líder" btnText={t('btn_whatsapp')} icon="/icons/farolmidia.png" />
              <MinistryCard title="Mulheres" leader="Amanda" phone="(12) 99612-2402" role="Líder" btnText={t('btn_whatsapp')} icon="/icons/farolmulheres1.png" />
              <MinistryCard title="Som e Multimídia" leader="William" phone="(12) 99164-7935" role="Líder" btnText={t('btn_whatsapp')} icon="/icons/farol2.png" />
            </ul>
          </div>

          {/* External Ministries */}
          <div>
            <h3 className="text-2xl font-bold text-brand-ink mb-2">{t('external_title')}</h3>
            <p className="text-brand-body mb-8">{t('external_desc')}</p>
            
            <ul className="space-y-4">
              <MinistryCard title="Ação Comunitária" leader="Steve" phone="(12) 99779-6271" role="Líder" btnText={t('btn_whatsapp')} icon="/icons/farolamarelo.png" />
              <MinistryCard title="Ágape" leader="Mafê" phone="(11) 94158-4679" role="Líder" btnText={t('btn_whatsapp')} icon="/icons/farolbranco.png" iconBg="bg-brand-ink" />
              <MinistryCard title="Jiu-jitsu" leader="Emerson" phone="(12) 99154-0089" role="Líder" btnText={t('btn_whatsapp')} icon="/icons/farolpreto.png" />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
