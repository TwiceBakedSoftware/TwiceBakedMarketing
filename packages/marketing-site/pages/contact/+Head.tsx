import { createCanonicalUrl, createPageTitle } from "../../lib/seo";

export function Head() {
  const title = createPageTitle("Contact");
  const description =
    "Contact TwiceBakedSoftware for a direct discovery call, with in-person meetings available across Central Kentucky by request.";
  const canonicalUrl = createCanonicalUrl("/contact");

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
