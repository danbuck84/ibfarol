"use client";

import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations('Header');
  const tf = useTranslations('Footer'); // Reuse footer translations for dropdowns
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname.startsWith(path) ? "border-brand-primary text-brand-primary" : "border-transparent text-[#B4BDBD] hover:text-white hover:border-white/30";
  };

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-8 px-8 py-3.5 bg-brand-canvas-dark/95 backdrop-blur-md border-b border-white/10">
      <Link href="/" className="flex items-center border-none">
        <Image src="/logo-header.png" alt={t('alt_logo')} width={120} height={38} className="h-[38px] w-auto" />
      </Link>
      
      <nav className="hidden md:flex items-center gap-7">
        
        {/* Sobre */}
        <div className="relative group">
          <Link href="/sobre" className={`text-sm decoration-transparent pb-2 border-b-2 transition-colors flex items-center gap-1 ${isActive('/sobre')}`}>
            {t('nav_about')}
          </Link>
          <div className="absolute top-full left-0 mt-0 w-48 bg-brand-canvas-dark border border-white/10 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
            <Link href="/sobre" className="block px-4 py-2 text-sm text-[#B4BDBD] hover:text-white hover:bg-white/5">{tf('col2_l1')}</Link>
            <Link href="/sobre" className="block px-4 py-2 text-sm text-[#B4BDBD] hover:text-white hover:bg-white/5">{tf('col2_l2')}</Link>
          </div>
        </div>

        {/* Recursos */}
        <div className="relative group">
          <Link href="/recursos" className={`text-sm decoration-transparent pb-2 border-b-2 transition-colors flex items-center gap-1 ${isActive('/recursos')}`}>
            {t('nav_resources')}
          </Link>
          <div className="absolute top-full left-0 mt-0 w-48 bg-brand-canvas-dark border border-white/10 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
            <Link href="/recursos" className="block px-4 py-2 text-sm text-[#B4BDBD] hover:text-white hover:bg-white/5">{tf('col3_l1')}</Link>
            <Link href="/recursos" className="block px-4 py-2 text-sm text-[#B4BDBD] hover:text-white hover:bg-white/5">{tf('col3_l2')}</Link>
            <Link href="/recursos" className="block px-4 py-2 text-sm text-[#B4BDBD] hover:text-white hover:bg-white/5">{tf('col3_l3')}</Link>
            <Link href="/recursos" className="block px-4 py-2 text-sm text-[#B4BDBD] hover:text-white hover:bg-white/5">{tf('col3_l4')}</Link>
            <Link href="/#agenda" className="block px-4 py-2 text-sm text-[#B4BDBD] hover:text-white hover:bg-white/5">{tf('col3_l5')}</Link>
          </div>
        </div>

        <Link href="/ministerios" className={`text-sm decoration-transparent pb-2 border-b-2 transition-colors ${isActive('/ministerios')}`}>
          {t('nav_ministries')}
        </Link>
        <Link href="/#contribua" className={`text-sm decoration-transparent pb-2 border-b-2 transition-colors ${isActive('/#contribua')}`}>
          {t('nav_give')}
        </Link>
        <Link href="/#visita" className={`text-sm decoration-transparent pb-2 border-b-2 transition-colors ${isActive('/#visita')}`}>
          {t('nav_contact')}
        </Link>
      </nav>
      
      <div className="flex items-center">
        <Link href="/#visita" className="font-semibold text-brand-on-primary bg-brand-primary border border-brand-primary px-4 py-3 rounded-md transition-colors hover:bg-brand-primary-deep cursor-pointer">
          {t('btn_plan_visit')}
        </Link>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
