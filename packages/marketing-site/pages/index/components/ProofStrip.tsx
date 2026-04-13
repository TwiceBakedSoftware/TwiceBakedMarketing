const proofItems = [
  {
    title: "Get a usable first release quickly",
    detail:
      "Most teams launch meaningful workflow improvements in 4 to 8 weeks.",
  },
  {
    title: "Work directly with the builder",
    detail:
      "No account relay chain between discovery, implementation, and support.",
  },
  {
    title: "Use local context when it helps",
    detail:
      "In-person process mapping across Central Kentucky is available by request.",
  },
];

export function ProofStrip() {
  return (
    <div className="tb-card-grid">
      {proofItems.map((item) => (
        <article key={item.title} className="tb-card tb-proof-item">
          <h3>{item.title}</h3>
          <p>{item.detail}</p>
        </article>
      ))}
    </div>
  );
}
