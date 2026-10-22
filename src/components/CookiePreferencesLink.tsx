"use client";
import { useTranslations } from "next-intl";
import { openCookiePreferences } from "@/lib/cookieConsent";

// Lets visitors reopen the cookie banner to change their choice at any time.
export default function CookiePreferencesLink({ className }: { className?: string }) {
  const t = useTranslations("CookieBanner");
  return (
    <button type="button" onClick={openCookiePreferences} className={className}>
      {t("manage")}
    </button>
  );
}
