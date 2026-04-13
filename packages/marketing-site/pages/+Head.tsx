import { siteConfig } from "../content/site";

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.companyName,
  legalName: siteConfig.legalName,
  url: siteConfig.siteUrl,
  email: siteConfig.contactEmail,
};

const serviceLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.companyName,
  url: siteConfig.siteUrl,
  description: siteConfig.summary,
  serviceType: "Custom internal software development",
};

// Pre-hydration theme setter. Runs synchronously during HTML parse
// so the correct [data-theme] attribute is in place before the body
// paints — no flash of light when a dark-mode user loads the page.
const themeInitScript = `
(function(){
  try {
    var stored = localStorage.getItem('tb-theme');
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var mode = stored === 'dark' || stored === 'light'
      ? stored
      : (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', mode);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
`;

export function Head() {
  return (
    <>
      <meta
        name="theme-color"
        content="#f8efdc"
        media="(prefers-color-scheme: light)"
      />
      <meta
        name="theme-color"
        content="#0f1210"
        media="(prefers-color-scheme: dark)"
      />
      <meta name="robots" content="index,follow" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.companyName} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" href="/favicon.svg" />
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: theme init, known safe */}
      <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      <script
        type="application/ld+json"
        /* biome-ignore lint/security/noDangerouslySetInnerHtml: Known safe */
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
      />
      <script
        type="application/ld+json"
        /* biome-ignore lint/security/noDangerouslySetInnerHtml: Known Safe */
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }}
      />
    </>
  );
}
