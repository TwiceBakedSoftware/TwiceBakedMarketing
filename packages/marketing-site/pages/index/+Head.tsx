import { siteConfig } from "../../content/site";
import { createCanonicalUrl, createPageTitle } from "../../lib/seo";

export function Head() {
  const title = createPageTitle(
    "Custom Internal Software for Central Kentucky Operations Teams",
  );
  const description =
    "TwiceBakedSoftware helps service and operations teams replace spreadsheet-heavy workflows with practical internal software, usually in 4 to 8 weeks.";
  const canonicalUrl = createCanonicalUrl("/");

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta
        property="og:image"
        content={`${siteConfig.siteUrl}/og-cover.svg`}
      />
    </>
  );
}
