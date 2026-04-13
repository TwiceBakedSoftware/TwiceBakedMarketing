import { ButtonCTA } from "../../components/ButtonCTA";

export default function Page() {
  return (
    <section className="tb-section">
      <div className="tb-container">
        <p className="tb-eyebrow">Something went sideways</p>
        <h1>Page unavailable</h1>
        <p>That route is missing or an unexpected error occurred.</p>
        <ButtonCTA
          href="/"
          label="Back to home"
          trackingId="error-page-home"
          variant="secondary"
        />
      </div>
    </section>
  );
}
