'use client';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const t = useTranslations('Header');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === 'pt-BR' ? 'en' : 'pt-BR';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button onClick={toggleLocale} className="text-sm font-semibold text-brand-primary-ink border border-brand-primary-ink px-3 py-2 rounded-md transition-colors hover:bg-brand-primary-ink hover:text-white ml-4 cursor-pointer">
      {locale === 'pt-BR' ? t('lang_en') : t('lang_pt')}
    </button>
  );
}
