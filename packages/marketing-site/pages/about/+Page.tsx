import { ButtonCTA } from "../../components/ButtonCTA";
import { Section } from "../../components/Section";
import { siteConfig } from "../../content/site";
import { ValuesList } from "./components/ValuesList";

export default function Page() {
  return (
    <>
      <Section
        eyebrow="About"
        title="TwiceBakedSoftware"
        body="We are a boutique consultancy serving local businesses in Central Kentucky and growing teams beyond the region."
      >
        <p>
          The name reflects how we work: an initial pass to launch quickly, then
          a second pass to refine based on how your team actually uses it. You
          will work directly with a human builder throughout the project.
        </p>
      </Section>

      <Section
        eyebrow="Values"
        title="How we build with clients"
        body="Senior attention, direct communication, and software that solves operational pain without unnecessary complexity."
        backgroundVariant="warm"
      >
        <ValuesList />
      </Section>

      <Section
        eyebrow="Who we are"
        title={`Hi, I'm ${siteConfig.contactName}`}
        body="The short version: I build software that works in the real world because I have spent my career close to the people and processes it is supposed to support."
      >
        <div className="tb-bio-grid">
          <article className="tb-card tb-bio-intro">
            <p className="tb-bio-kicker">Why I can help</p>
            <h3>I have seen operations from multiple angles</h3>
            <p>
              I&apos;ve worked on developer tooling at Nx, built internal
              workflow systems for industrial operations, and spent time in
              frontline roles where broken processes show up fast.
            </p>
            <p>
              That mix changed how I build. I don&apos;t treat software as a
              feature checklist. I focus on reducing handoff friction,
              clarifying ownership, and making sure teams can trust the system
              on their busiest days.
            </p>
            <p className="mb-0!">
              My technical background in mathematics and computer science helps
              me design strong systems, but practical empathy for how people
              actually work is what makes projects successful.
            </p>
          </article>

          <article className="tb-card">
            <p className="tb-bio-kicker">Born and raised in Danville, KY</p>
            <h3>Why local businesses choose to work with me</h3>
            <p>
              I was born and raised right here in Danville, Kentucky. Supporting
              Central Kentucky businesses is personal, and I care about building
              systems that make day-to-day work easier without stripping out the
              human context behind the process.
            </p>
            <ul className="tb-contact-list">
              <li>You work directly with the builder doing the work</li>
              <li>
                Recommendations are grounded in implementation experience, not
                generic advice
              </li>
              <li>In-person sessions are available across Central Kentucky</li>
            </ul>
            <div className="tb-bio-links">
              <a
                className="tb-button tb-button-secondary"
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="tb-button tb-button-secondary"
                href={siteConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Start"
        title="Tell us about the process you want to improve"
        body="If your team is juggling docs, forms, and spreadsheets, we can help you design a cleaner system with virtual or in-person planning."
      >
        <ButtonCTA
          href="/contact"
          label="Talk with Craigory"
          trackingId="about-bottom-cta"
          variant="primary"
        />
      </Section>
    </>
  );
}
