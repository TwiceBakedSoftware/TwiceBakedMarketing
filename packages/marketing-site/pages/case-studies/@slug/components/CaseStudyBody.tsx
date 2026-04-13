import type { CaseStudy } from "../../../../content/types";

export function CaseStudyBody({ study }: { study: CaseStudy }) {
  return (
    <article className="tb-case-study-detail">
      <section>
        <h2>Context</h2>
        <ul>
          <li>{study.clientProfile}</li>
          <li>{study.timeline}</li>
          <li>{study.scope}</li>
        </ul>
      </section>
      <section>
        <h2>Approach</h2>
        <p>{study.approach}</p>
      </section>
      <section>
        <h2>Solution</h2>
        <p>{study.solution}</p>
      </section>
      <section>
        <h2>Outcomes</h2>
        <ul>
          {study.outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Tech used</h2>
        <p>{study.tech.join(" · ")}</p>
      </section>
      <p className="tb-muted">{study.anonymizationNote}</p>
    </article>
  );
}
