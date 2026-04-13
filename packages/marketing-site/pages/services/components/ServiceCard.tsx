import type { Service } from "../../../content/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="tb-card tb-service-card">
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <ul>
        {service.outcomes.map((outcome) => (
          <li key={outcome}>{outcome}</li>
        ))}
      </ul>
      <p className="tb-muted">
        Deliverables: {service.deliverables.join(" · ")}
      </p>
      <p className="tb-muted">Timeline: {service.timeline}</p>
    </article>
  );
}
