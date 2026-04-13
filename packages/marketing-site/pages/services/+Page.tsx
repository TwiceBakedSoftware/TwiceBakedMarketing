import { Section } from "../../components/Section";
import { services } from "../../content/services";
import { ServiceCard } from "./components/ServiceCard";

export default function Page() {
  return (
    <>
      <Section
        eyebrow="Services"
        title="Internal software designed around your operations"
        body="We deliver focused systems for Central Kentucky businesses and remote clients beyond the region, including custom AI-enabled tools and adoption support for operational teams."
      >
        <div className="tb-card-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Engagement model"
        title="Small team, senior attention"
        body="You work directly with experienced builders. We keep scope lean, prioritize measurable impact, and offer in-person working sessions when requested."
        backgroundVariant="warm"
      >
        <div className="tb-card-grid">
          <article className="tb-card">
            <h3>Project sprints</h3>
            <p>
              Best for high-priority systems that need a clear launch target and
              fast delivery cadence.
            </p>
          </article>
          <article className="tb-card">
            <h3>Ongoing improvements</h3>
            <p>
              Best for teams that need continual refinements after a stable core
              system is in production.
            </p>
          </article>
          <article className="tb-card">
            <h3>Technical strategy</h3>
            <p>
              Best for teams planning modernization and wanting implementation
              guidance before development starts.
            </p>
          </article>
          <article className="tb-card">
            <h3>AI adoption consulting</h3>
            <p>
              Best for teams that want practical AI adoption support, from
              use-case discovery and prompt design to process changes and
              teammate enablement.
            </p>
          </article>
        </div>
      </Section>
    </>
  );
}
