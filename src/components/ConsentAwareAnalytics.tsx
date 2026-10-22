"use client";
import { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import {
  CONSENT_CHANGE_EVENT,
  GA_MEASUREMENT_ID,
  deleteAnalyticsCookies,
  getConsent,
  type ConsentLevel,
} from "@/lib/cookieConsent";

// Official GA opt-out flag: when true, gtag.js stops sending any data.
const GA_DISABLE_KEY = `ga-disable-${GA_MEASUREMENT_ID}`;

function applyConsent(level: ConsentLevel | null) {
  const allowed = level === "all";
  (window as unknown as Record<string, boolean>)[GA_DISABLE_KEY] = !allowed;
  if (!allowed) deleteAnalyticsCookies();
  return allowed;
}

// Loads Google Analytics only after the visitor accepts analytics cookies.
// If the visitor later switches to "essential only", tracking stops and GA cookies are removed.
export default function ConsentAwareAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(applyConsent(getConsent()));

    const onChange = (e: Event) => {
      const level = (e as CustomEvent<ConsentLevel>).detail;
      setEnabled(applyConsent(level));
    };
    window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
  }, []);

  if (!enabled) return null;
  return <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />;
}
