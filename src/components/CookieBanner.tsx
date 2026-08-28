"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-brand-ink text-white p-4 md:p-6 z-50 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xl">
      <div className="text-sm">
        <p>
          Utilizamos cookies para oferecer a melhor experiência. Ao continuar navegando, você concorda com o uso de cookies.
        </p>
      </div>
      <button 
        onClick={accept} 
        className="bg-brand-primary hover:bg-brand-primary-deep text-white font-bold py-2 px-6 rounded-md whitespace-nowrap transition-colors w-full md:w-auto"
      >
        Entendi
      </button>
    </div>
  );
}
