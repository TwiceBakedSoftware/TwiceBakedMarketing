const values = [
  {
    title: "Practical over flashy",
    text: "We optimize for software your team uses every day, not demos that look good once.",
  },
  {
    title: "Local context matters",
    text: "We account for how Central Kentucky teams operate and can meet on-site when it helps unblock decisions.",
  },
  {
    title: "Clarity in delivery",
    text: "Scope, milestones, and tradeoffs stay visible throughout the project.",
  },
  {
    title: "Operational empathy",
    text: "We design around frontline realities, not only management reporting needs.",
  },
];

export function ValuesList() {
  return (
    <div className="tb-card-grid">
      {values.map((value) => (
        <article className="tb-card" key={value.title}>
          <h3>{value.title}</h3>
          <p>{value.text}</p>
        </article>
      ))}
    </div>
  );
}
