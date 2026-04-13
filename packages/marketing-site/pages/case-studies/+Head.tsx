import { createCanonicalUrl, createPageTitle } from "../../lib/seo";

export function Head() {
  const title = createPageTitle("Case Studies");
  const description =
    "Anonymized case studies showing how TwiceBakedSoftware replaces manual internal workflows with reliable web applications.";
  const canonicalUrl = createCanonicalUrl("/case-studies");

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
