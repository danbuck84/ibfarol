// Shared helpers for the cookie consent choice (stored in localStorage).
export type ConsentLevel = "all" | "essential";

export const CONSENT_STORAGE_KEY = "cookieConsent";
export const CONSENT_CHANGE_EVENT = "cookie-consent-change";
export const OPEN_PREFERENCES_EVENT = "open-cookie-preferences";

export const GA_MEASUREMENT_ID = "G-GXMT14GY9V";

export function getConsent(): ConsentLevel | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  return value === "all" || value === "essential" ? value : null;
}

export function setConsent(level: ConsentLevel) {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, level);
  window.dispatchEvent(new CustomEvent<ConsentLevel>(CONSENT_CHANGE_EVENT, { detail: level }));
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}

// Removes Google Analytics cookies (_ga, _ga_XXXX) from the current host and parent domains.
export function deleteAnalyticsCookies() {
  const names = document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((name) => name === "_ga" || name.startsWith("_ga_") || name === "_gid" || name === "_gat");

  const hostParts = window.location.hostname.split(".");
  const domains = [""];
  for (let i = 0; i < hostParts.length - 1; i++) {
    domains.push("." + hostParts.slice(i).join("."));
  }

  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain ? `; domain=${domain}` : ""}`;
    }
  }
}
