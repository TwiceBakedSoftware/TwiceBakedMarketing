import { ButtonCTA } from "../../components/ButtonCTA";
import { Section } from "../../components/Section";
import { ProcessTimeline } from "./components/ProcessTimeline";

export default function Page() {
  return (
    <>
      <Section
        eyebrow="How we work"
        title="A delivery process built for clarity"
        body="We keep projects practical: fast discovery, iterative builds, and predictable handoff with direct access to the builder doing the work."
      >
        <ProcessTimeline />
      </Section>

      <Section
        eyebrow="Next step"
        title="Bring us your messiest workflow"
        body="In one call, we can usually identify the highest-value first release, expected timeline, and whether an in-person workshop makes sense."
        backgroundVariant="warm"
      >
        <ButtonCTA
          href="/contact"
          label="Talk with Craigory"
          trackingId="process-bottom-cta"
          variant="primary"
        />
      </Section>
    </>
  );
}
