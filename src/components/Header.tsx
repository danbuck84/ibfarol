import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const t = useTranslations('Header');
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-8 px-8 py-3.5 bg-brand-canvas-dark/95 backdrop-blur-md border-b border-white/10">
      <Link href="/" className="flex items-center border-none">
        <Image src="/logo-header.png" alt={t('alt_logo')} width={120} height={38} className="h-[38px] w-auto" />
      </Link>
      <nav className="hidden md:flex items-center gap-7">
        <Link href="/sobre" className="text-sm text-[#B4BDBD] transition-colors hover:text-white">
          {t('nav_about')}
        </Link>
        <Link href="/recursos" className="text-sm text-[#B4BDBD] transition-colors hover:text-white">
          {t('nav_resources')}
        </Link>
        <Link href="/ministerios" className="text-sm text-[#B4BDBD] transition-colors hover:text-white">
          {t('nav_ministries')}
        </Link>
        <Link href="/#contribua" className="text-sm text-[#B4BDBD] transition-colors hover:text-white">
          {t('nav_give')}
        </Link>
        <Link href="/#visita" className="text-sm text-[#B4BDBD] transition-colors hover:text-white">
          {t('nav_contact')}
        </Link>
      </nav>
      <div className="flex items-center">
        <Link href="#visita" className="font-semibold text-brand-on-primary bg-brand-primary border border-brand-primary px-4 py-3 rounded-md transition-colors hover:bg-brand-primary-deep cursor-pointer">
          {t('btn_plan_visit')}
        </Link>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
