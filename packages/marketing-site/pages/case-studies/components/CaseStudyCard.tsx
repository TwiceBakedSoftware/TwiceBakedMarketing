import { trackEvent } from "../../../lib/analytics";
import type { CaseStudy } from "../../../content/types";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="tb-card tb-case-study-card">
      <p className="tb-eyebrow">{study.sector}</p>
      <h3>{study.title}</h3>
      <p>{study.challenge}</p>
      <p className="tb-muted">
        {study.clientProfile} · {study.timeline}
      </p>
      <ul>
        {study.outcomes.map((outcome) => (
          <li key={outcome}>{outcome}</li>
        ))}
      </ul>
      <p className="tb-muted">{study.anonymizationNote}</p>
      <a
        href={`/case-studies/${study.slug}`}
        className="tb-inline-link"
        onClick={() => {
          trackEvent("case_study_open", {
            location: "case-studies-index",
            slug: study.slug,
          });
        }}
      >
        Read case study
      </a>
    </article>
  );
}
