import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="bg-brand-canvas-dark text-[#B4BDBD] py-14 px-8 text-sm leading-[20px]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12">
        <div>
          <Image src="/logo-footer.png" alt={t('alt_logo')} width={140} height={44} className="h-[44px] w-auto" />
          <p className="mt-4 text-xs leading-[16px] text-brand-mute max-w-[40ch]">
            {t('address_short')}
          </p>
        </div>
        
        <div>
          <p className="text-sm font-semibold tracking-[2.52px] uppercase text-brand-primary mb-4">
            {t('hours_title')}
          </p>
          <ul className="flex flex-col gap-2">
            <li className="flex justify-between gap-3">
              <span>{t('hours_sun')}</span>
              <span className="text-brand-mute tabular-nums">{t('hours_sun_time')}</span>
            </li>
          </ul>
        </div>
        
        <div>
          <p className="text-sm font-semibold tracking-[2.52px] uppercase text-brand-primary mb-4">
            {t('next_steps_title')}
          </p>
          <ul className="flex flex-col gap-2">
            <li><Link href="/sobre" className="text-[#B4BDBD] hover:text-white transition-colors">{t('next_steps_new')}</Link></li>
            <li><Link href="/recursos" className="text-[#B4BDBD] hover:text-white transition-colors">{t('next_steps_resources')}</Link></li>
            <li><Link href="/#contribua" className="text-[#B4BDBD] hover:text-white transition-colors">{t('next_steps_give')}</Link></li>
            <li><a href="#" className="text-brand-primary hover:text-brand-primary-soft transition-colors">{t('whatsapp_link')}</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1280px] mx-auto mt-10 pt-4 border-t border-brand-hairline text-brand-mute text-xs leading-[16px]">
        {t('copyright')}
      </div>
    </footer>
  );
}
