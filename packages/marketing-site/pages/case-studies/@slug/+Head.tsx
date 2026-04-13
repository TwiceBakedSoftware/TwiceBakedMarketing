import { caseStudies } from "../../../content/caseStudies";
import { createCanonicalUrl, createPageTitle } from "../../../lib/seo";
import { usePageContext } from "vike-react/usePageContext";

export function Head() {
  const { routeParams } = usePageContext();
  const study = caseStudies.find((entry) => entry.slug === routeParams.slug);

  if (!study) {
    const missingTitle = createPageTitle("Case Study Not Found");
    const canonicalUrl = createCanonicalUrl("/case-studies");

    return (
      <>
        <title>{missingTitle}</title>
        <meta
          name="description"
          content="Requested case study was not found."
        />
        <link rel="canonical" href={canonicalUrl} />
      </>
    );
  }

  const title = createPageTitle(study.title);
  const description = study.challenge;
  const canonicalUrl = createCanonicalUrl(`/case-studies/${study.slug}`);

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
