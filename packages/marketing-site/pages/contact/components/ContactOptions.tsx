import { siteConfig } from "../../../content/site";
import { trackEvent } from "../../../lib/analytics";

export type CalendlyEmbedProps = {
  url: string;
  mode: "inline";
  minHeight: number;
};

export function ContactOptions({ embed }: { embed: CalendlyEmbedProps }) {
  return (
    <div className="tb-contact-grid">
      <article className="tb-card tb-contact-panel">
        <p className="tb-eyebrow">Book directly</p>
        <h3>What to expect on the call</h3>
        <p>
          We will quickly map your current workflow, identify the
          highest-friction steps, and propose a realistic first release.
        </p>
        <ul className="tb-contact-list">
          <li>30 minute discovery call</li>
          <li>In-person options in Central Kentucky</li>
          <li>Clear next-step recommendation</li>
          <li>Direct access to {siteConfig.contactName}</li>
        </ul>
        <div className="tb-contact-actions">
          <a
            className="tb-button tb-button-primary"
            href={siteConfig.calendlyUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => {
              trackEvent("booking_open", {
                location: "contact-page-calendly-link",
                destination: siteConfig.calendlyUrl,
                provider: "calendly",
              });
            }}
          >
            Open booking page
          </a>
          <a
            className="tb-button tb-button-secondary"
            href={`mailto:${siteConfig.contactEmail}?subject=Workflow%20Teardown%20Request&body=Team%20size%3A%0AIndustry%3A%0ACurrent%20workflow%20pain%3A%0ATooling%20used%20today%3A%0ATimeline%3A`}
          >
            Send project brief by email
          </a>
        </div>
        <div className="tb-contact-fallback">
          <h4>If scheduling is blocked on your device</h4>
          <p className="tb-muted">
            Email a short process summary and we will follow up with suggested
            next steps and times.
          </p>
        </div>
        <p className="tb-muted mb-0! mt-4!">
          Questions before booking? Email {siteConfig.contactName} at{" "}
          <a href={`mailto:${siteConfig.contactEmail}`}>
            {siteConfig.contactEmail}
          </a>
          .
        </p>
      </article>

      <article className="tb-contact-embed">
        <iframe
          title="Calendly scheduling"
          src={`${embed.url}?hide_event_type_details=1&hide_gdpr_banner=1`}
          style={{ minHeight: `${embed.minHeight}px` }}
        />
      </article>
    </div>
  );
}
