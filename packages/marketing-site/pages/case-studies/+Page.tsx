import { Section } from "../../components/Section";
import { caseStudies } from "../../content/caseStudies";
import { CaseStudyCard } from "./components/CaseStudyCard";

export default function Page() {
  return (
    <Section
      eyebrow="Case studies"
      title="Operational wins from custom internal apps"
      body="Examples are anonymized by request, but include realistic team profile, timeline, implementation scope, and measurable outcomes."
    >
      <div className="tb-card-grid">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </Section>
  );
}
