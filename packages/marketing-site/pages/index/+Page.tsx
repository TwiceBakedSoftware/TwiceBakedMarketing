import { Section } from "../../components/Section";
import { processSteps } from "../../content/process";
import { services } from "../../content/services";
import { FAQList } from "./components/FAQList";
import { Hero } from "./components/Hero";
import { ProofStrip } from "./components/ProofStrip";

export default function Page() {
  return (
    <>
      <Hero />

      <Section
        eyebrow="Why teams call us"
        title="Operational clarity, not another vendor runaround"
        accentWord="clarity"
        body="We scope tightly, ship quickly, and optimize for software your team can trust on the busiest days."
        backgroundVariant="warm"
      >
        <ProofStrip />
      </Section>

      <Section
        eyebrow="Best fit"
        title="Who we work best with"
        accentWord="best"
        body="We are strongest when a team already has real workflow volume, real coordination pain, and clear ownership of outcomes."
      >
        <div className="tb-card-grid">
          <article className="tb-card">
            <h3>Great fit</h3>
            <ul className="tb-simple-list">
              <li>Service, trades, and back-office operations teams</li>
              <li>5 to 150 person organizations with repeatable workflows</li>
              <li>Teams replacing spreadsheet-heavy coordination work</li>
            </ul>
          </article>
          <article className="tb-card">
            <h3>Usually not a fit</h3>
            <ul className="tb-simple-list">
              <li>Consumer startup products needing growth experiments</li>
              <li>Large enterprise RFP-driven procurement cycles</li>
              <li>Design-only projects without implementation ownership</li>
            </ul>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Core services"
        title="Built for real operations"
        accentWord="real"
        body="Internal systems that tie workflows, data, and reporting together for service businesses, trades, and owner-led teams."
      >
        <div className="tb-card-grid">
          {services.map((service) => (
            <article className="tb-card" key={service.id}>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <p className="tb-muted">Typical timeline: {service.timeline}</p>
            </article>
          ))}
        </div>
        <div className="tb-section-actions">
          <a className="tb-button tb-button-primary" href="/contact">
            Book a discovery call
          </a>
          <a
            className="tb-button tb-button-secondary"
            href="mailto:hello@twicebakedsoftware.com?subject=Workflow%20Teardown%20Request"
          >
            Request workflow teardown
          </a>
        </div>
      </Section>

      <Section
        eyebrow="Why choose us"
        title="A practical partner model"
        accentWord="practical"
        body="If your priority is getting useful internal systems live without overbuilding, this is where we differ."
        backgroundVariant="warm"
      >
        <div className="tb-comparison-wrap">
          <table className="tb-comparison-table">
            <thead>
              <tr>
                <th>Decision factor</th>
                <th>TwiceBakedSoftware</th>
                <th>Typical agency</th>
                <th>Spreadsheet status quo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Access to implementation lead</td>
                <td>Direct, from first call through launch</td>
                <td>Often filtered through account layers</td>
                <td>Internal only, no dedicated delivery partner</td>
              </tr>
              <tr>
                <td>Time to useful first release</td>
                <td>Usually 4 to 8 weeks</td>
                <td>Often longer due to broad scope</td>
                <td>Never fully resolved</td>
              </tr>
              <tr>
                <td>Process mapping depth</td>
                <td>Built into discovery and delivery</td>
                <td>Varies by team and scope</td>
                <td>Ad-hoc and tribal</td>
              </tr>
              <tr>
                <td>Central Kentucky in-person option</td>
                <td>Available by request</td>
                <td>Rare for smaller projects</td>
                <td>Not applicable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        eyebrow="Delivery style"
        title="A straightforward process"
        accentWord="straightforward"
        body="Short cycles, direct communication, and practical releases your team can use right away."
        backgroundVariant="soil"
      >
        <div className="tb-card-grid">
          {processSteps.map((step) => (
            <article className="tb-card" key={step.id}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              <p className="tb-muted">Duration: {step.duration}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="FAQ"
        title="Questions we hear early"
        accentWord="early"
        body="If these sound familiar, we can scope the right first milestone in a quick call."
      >
        <FAQList />
        <div className="tb-section-actions">
          <a className="tb-button tb-button-primary" href="/contact">
            Book a discovery call
          </a>
          <a className="tb-button tb-button-ghost" href="/case-studies">
            Read detailed case studies
          </a>
        </div>
      </Section>
    </>
  );
}
