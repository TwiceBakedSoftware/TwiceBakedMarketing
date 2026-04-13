import { createCanonicalUrl, createPageTitle } from "../../lib/seo";

export function Head() {
  const title = createPageTitle("About");
  const description =
    "Learn about TwiceBakedSoftware, a Central Kentucky consultancy building practical internal web applications with direct human collaboration.";
  const canonicalUrl = createCanonicalUrl("/about");

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
