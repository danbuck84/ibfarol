"use client";
import { useState, useEffect } from "react";

import { useTranslations } from "next-intl";

export default function CookieBanner() {
  const t = useTranslations('CookieBanner');
  const [isVisible, setIsVisible] = useState(false);
  const [showConfig, setShowConfig] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleConsent = (level: "all" | "essential") => {
    localStorage.setItem("cookieConsent", level);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-brand-ink text-white p-6 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
      {!showConfig ? (
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm text-gray-300 md:max-w-3xl">
            <p className="font-bold text-white mb-2 text-base">{t('title')}</p>
            <p>
              {t('desc')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button 
              onClick={() => setShowConfig(true)}
              className="px-4 py-2.5 text-sm font-semibold rounded-md border border-white/20 hover:bg-white/10 transition-colors w-full sm:w-auto whitespace-nowrap"
            >{t('btn_config')}</button>
            <button 
              onClick={() => handleConsent("essential")}
              className="px-4 py-2.5 text-sm font-semibold rounded-md border border-brand-primary text-brand-primary hover:bg-brand-primary/10 transition-colors w-full sm:w-auto whitespace-nowrap"
            >{t('btn_essential')}</button>
            <button 
              onClick={() => handleConsent("all")} 
              className="px-6 py-2.5 text-sm font-bold rounded-md bg-brand-primary hover:bg-brand-primary-deep text-white transition-colors w-full sm:w-auto whitespace-nowrap"
            >{t('btn_all')}</button>
          </div>
        </div>
      ) : (
        <div className="max-w-[1280px] mx-auto flex flex-col gap-6">
          <div>
            <h3 className="font-bold text-lg mb-2">{t('pref_title')}</h3>
            <p className="text-sm text-gray-300">{t('pref_desc')}</p>
          </div>
          
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-start justify-between gap-4 p-4 rounded-md bg-white/5 border border-white/10">
              <div>
                <p className="font-bold text-white text-sm">{t('ess_title')}</p>
                <p className="text-xs text-gray-400 mt-1">{t('ess_desc')}</p>
              </div>
              <div className="w-10 h-5 bg-brand-primary/50 rounded-full relative opacity-50 cursor-not-allowed">
                <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5"></div>
              </div>
            </div>
            
            <div className="flex items-start justify-between gap-4 p-4 rounded-md bg-white/5 border border-white/10">
              <div>
                <p className="font-bold text-white text-sm">{t('analyt_title')}</p>
                <p className="text-xs text-gray-400 mt-1">{t('analyt_desc')}</p>
              </div>
              <div className="w-10 h-5 bg-white/20 rounded-full relative cursor-pointer" onClick={() => handleConsent("all")}>
                <div className="w-4 h-4 bg-white rounded-full absolute left-0.5 top-0.5"></div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={() => setShowConfig(false)}
              className="px-4 py-2.5 text-sm font-semibold rounded-md border border-white/20 hover:bg-white/10 transition-colors"
            >{t('btn_back')}</button>
            <button 
              onClick={() => handleConsent("essential")}
              className="px-6 py-2.5 text-sm font-bold rounded-md bg-brand-primary hover:bg-brand-primary-deep text-white transition-colors"
            >{t('btn_save')}</button>
          </div>
        </div>
      )}
    </div>
  );
}
