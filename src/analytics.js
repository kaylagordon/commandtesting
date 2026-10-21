// Google Analytics 4 placeholder.
// Leave GA4_MEASUREMENT_ID empty until a GA4 property exists.
// initAnalytics() does nothing until that value is a non-empty measurement id.
export const GA4_MEASUREMENT_ID = '';

export function initAnalytics() {
  const id = (GA4_MEASUREMENT_ID || '').trim();
  if (!id || typeof window === 'undefined' || typeof document === 'undefined') return;
  if (window.__commandGa4Loaded) return;
  window.__commandGa4Loaded = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  gtag('js', new Date());
  gtag('config', id);
}
