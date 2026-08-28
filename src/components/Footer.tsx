import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="bg-brand-canvas-dark text-[#B4BDBD] py-14 px-8 text-sm leading-[20px]">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Col 1 */}
        <div className="order-last md:order-first mt-8 md:mt-0">
          <Image src="/logo.png" alt={t('alt_logo')} width={140} height={44} className="h-[44px] w-auto" />
          <p className="mt-6 text-xs leading-[18px] text-brand-mute whitespace-pre-line">
            {t('address_short')}
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a href="https://www.instagram.com/ib.farol/" target="_blank" rel="noopener noreferrer" className="text-brand-mute hover:text-white transition-colors" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.youtube.com/@batistafarol" target="_blank" rel="noopener noreferrer" className="text-brand-mute hover:text-white transition-colors" aria-label="YouTube">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
        
        {/* Col 2 */}
        <div>
          <p className="text-sm font-semibold tracking-[2.52px] uppercase text-white mb-4">
            {t('col2_title')}
          </p>
          <ul className="flex flex-col gap-2">
            <li><Link href="/sobre" className="text-[#B4BDBD] hover:text-white transition-colors">{t('col2_l1')}</Link></li>
            <li><Link href="/sobre" className="text-[#B4BDBD] hover:text-white transition-colors">{t('col2_l2')}</Link></li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <p className="text-sm font-semibold tracking-[2.52px] uppercase text-white mb-4">
            {t('col3_title')}
          </p>
          <ul className="flex flex-col gap-2">
            <li><Link href="/recursos" className="text-[#B4BDBD] hover:text-white transition-colors">{t('col3_l1')}</Link></li>
            <li><Link href="/recursos" className="text-[#B4BDBD] hover:text-white transition-colors">{t('col3_l2')}</Link></li>
            <li><Link href="/recursos" className="text-[#B4BDBD] hover:text-white transition-colors">{t('col3_l3')}</Link></li>
            <li><Link href="/recursos" className="text-[#B4BDBD] hover:text-white transition-colors">{t('col3_l4')}</Link></li>
            <li><Link href="/#agenda" className="text-[#B4BDBD] hover:text-white transition-colors">{t('col3_l5')}</Link></li>
          </ul>
        </div>
        
        {/* Col 4 */}
        <div>
          <p className="text-sm font-semibold tracking-[2.52px] uppercase text-white mb-4">
            {t('col4_title')}
          </p>
          <ul className="flex flex-col gap-2">
            <li><Link href="/#visita" className="text-[#B4BDBD] hover:text-white transition-colors">{t('col4_l1')}</Link></li>
            <li><Link href="/sobre" className="text-[#B4BDBD] hover:text-white transition-colors">{t('col4_l2')}</Link></li>
            <li><Link href="/#agenda" className="text-[#B4BDBD] hover:text-white transition-colors">{t('col4_l3')}</Link></li>
            <li><Link href="/ministerios" className="text-[#B4BDBD] hover:text-white transition-colors">{t('col4_l4')}</Link></li>
            <li><Link href="/novosmembros" className="text-[#B4BDBD] hover:text-white transition-colors">{t('col4_l5')}</Link></li>
            <li><Link href="/proximospassos" className="text-[#B4BDBD] hover:text-white transition-colors">{t('col4_l6')}</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-[1280px] mx-auto mt-10 pt-4 border-t border-brand-hairline/20 text-brand-mute text-xs leading-[16px]">
        {t('copyright')}
      </div>
    </footer>
  );
}
