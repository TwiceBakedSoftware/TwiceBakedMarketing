import { Section } from "../../components/Section";

export default function Page() {
  return (
    <Section
      eyebrow="Privacy"
      title="Privacy policy"
      body="TwiceBakedSoftware uses minimal analytics and only collects information voluntarily shared through scheduling and email."
    >
      <article className="tb-card">
        <h3>What we collect</h3>
        <p>
          Basic website usage events and contact details you provide when
          booking or emailing us.
        </p>
        <h3>How we use it</h3>
        <p>
          To respond to inquiries, improve site performance, and understand
          which services visitors care about most.
        </p>
        <h3>Data sharing</h3>
        <p>
          We do not sell personal data. Scheduling and analytics providers may
          process data per their policies.
        </p>
      </article>
    </Section>
  );
}
