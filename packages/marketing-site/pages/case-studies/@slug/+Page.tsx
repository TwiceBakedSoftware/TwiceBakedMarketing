import { Section } from "../../../components/Section";
import { caseStudies } from "../../../content/caseStudies";
import { ButtonCTA } from "../../../components/ButtonCTA";
import { usePageContext } from "vike-react/usePageContext";
import { CaseStudyBody } from "./components/CaseStudyBody";

export default function Page() {
  const { routeParams } = usePageContext();
  const study = caseStudies.find((entry) => entry.slug === routeParams.slug);

  if (!study) {
    return (
      <Section
        eyebrow="Case study"
        title="That case study could not be found"
        body="The requested case study slug does not exist."
      >
        <ButtonCTA
          href="/case-studies"
          label="Back to case studies"
          trackingId="case-study-missing"
        />
      </Section>
    );
  }

  return (
    <>
      <Section
        eyebrow={study.sector}
        title={study.title}
        body={study.challenge}
      >
        <CaseStudyBody study={study} />
      </Section>
      <Section
        title="Need similar outcomes for your team?"
        accentWord="outcomes"
        body="We can map your current workflow and propose a practical first release."
        backgroundVariant="warm"
      >
        <ButtonCTA
          href="/contact"
          label="Book a discovery call"
          trackingId="case-study-detail-cta"
          variant="primary"
        />
      </Section>
    </>
  );
}
