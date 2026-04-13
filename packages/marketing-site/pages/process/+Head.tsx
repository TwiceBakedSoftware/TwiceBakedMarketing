import { createCanonicalUrl, createPageTitle } from "../../lib/seo";

export function Head() {
  const title = createPageTitle("Process");
  const description =
    "TwiceBakedSoftware uses a practical process with direct human collaboration, from discovery through launch, including optional in-person sessions.";
  const canonicalUrl = createCanonicalUrl("/process");

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
