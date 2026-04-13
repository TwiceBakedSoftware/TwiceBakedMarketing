import { trackEvent } from "../lib/analytics";

export type ButtonCTAProps = {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  trackingId: string;
};

export function ButtonCTA({
  label,
  href,
  variant = "primary",
  trackingId,
}: ButtonCTAProps) {
  const className = `tb-button tb-button-${variant}`;

  return (
    <a
      className={className}
      href={href}
      onClick={() => {
        trackEvent("cta_click", {
          location: trackingId,
          label,
          destination: href,
        });

        if (href.includes("calendly.com") || href.startsWith("/contact")) {
          trackEvent("booking_open", {
            location: trackingId,
            label,
            destination: href,
            provider: "calendly",
          });
        }
      }}
    >
      {label}
    </a>
  );
}
