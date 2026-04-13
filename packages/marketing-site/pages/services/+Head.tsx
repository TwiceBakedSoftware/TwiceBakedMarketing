import { createCanonicalUrl, createPageTitle } from "../../lib/seo";

export function Head() {
  const title = createPageTitle("Services");
  const description =
    "Workflow automation, operations hubs, AI enablement, and custom internal tools for Central Kentucky businesses and teams beyond the region.";
  const canonicalUrl = createCanonicalUrl("/services");

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
