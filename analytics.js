/* NatoBytes — Google Analytics 4 (gtag.js)
 *
 * Reports to the GA4 property linked to the "natobytes-web" Firebase project
 * (project number 936670776742). Loaded site-wide via a single <script
 * src="/analytics.js"> tag on each page, so the Measurement ID lives in exactly
 * one place: the MEASUREMENT_ID constant below.
 *
 * SETUP — get the Measurement ID (looks like "G-XXXXXXXXXX"):
 *   1. Firebase console → project "natobytes-web" → ⚙ Project settings →
 *      Integrations → Google Analytics → Enable (accept the GA terms,
 *      pick/create a Google Analytics account). This links a GA4 property.
 *   2. Project settings → General → your Web app → copy the "Measurement ID".
 *   3. Paste it below, replacing the placeholder.
 *
 * Until a real ID is set, this script is inert — it loads nothing and sends
 * no data, so it's safe to ship as-is.
 *
 * NOTE (GDPR follow-up): this runs analytics unconditionally with no consent
 * banner. For EU visitors, consider Google Consent Mode v2 + an opt-in banner
 * here before relying on this in production.
 */
(function () {
  var MEASUREMENT_ID = 'G-TPWC25PWXS'; // GA4 property for natobytes-web

  // Not configured yet — do nothing.
  if (!MEASUREMENT_ID || MEASUREMENT_ID === 'G-XXXXXXXXXX') return;

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + MEASUREMENT_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID);
})();
