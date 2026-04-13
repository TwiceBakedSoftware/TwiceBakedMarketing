import { createCanonicalUrl, createPageTitle } from "../../lib/seo";

export function Head() {
  const title = createPageTitle("Privacy");
  const description =
    "Privacy information for visitors and prospects engaging with TwiceBakedSoftware.";
  const canonicalUrl = createCanonicalUrl("/privacy");

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
    </>
  );
}
