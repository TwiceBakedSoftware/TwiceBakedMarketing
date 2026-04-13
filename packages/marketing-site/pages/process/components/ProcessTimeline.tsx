import { processSteps } from "../../../content/process";

const romans = ["i.", "ii.", "iii.", "iv.", "v.", "vi.", "vii.", "viii."];

export function ProcessTimeline() {
  return (
    <ol className="tb-service-list">
      {processSteps.map((step, index) => (
        <li key={step.id}>
          <div className="tb-service-num">
            {romans[index] ?? `${index + 1}.`}
          </div>
          <div className="tb-service-name">{step.title}</div>
          <div className="tb-service-desc">
            <p>{step.description}</p>
            {step.outputs.length > 0 ? (
              <ul className="tb-service-outputs">
                {step.outputs.map((output) => (
                  <li key={output}>{output}</li>
                ))}
              </ul>
            ) : null}
          </div>
          <div className="tb-service-meta">
            <span>Duration</span>
            <em>{step.duration}</em>
            <span className="tb-service-meta-gap">Client role</span>
            <em>{step.clientInvolvement}</em>
          </div>
        </li>
      ))}
    </ol>
  );
}
