export type AnalyticsEventName = "cta_click" | "case_study_open" | "booking_open";

export type AnalyticsPayload = {
  location: string;
  label?: string;
  destination?: string;
  slug?: string;
  provider?: string;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void;
  }
}

export function trackEvent(name: AnalyticsEventName, payload: AnalyticsPayload) {
  if (typeof window === "undefined") {
    return;
  }

  const event = {
    event: name,
    ...payload,
  };

  window.dataLayer?.push(event);
  window.plausible?.(name, { props: payload });

  window.dispatchEvent(new CustomEvent("twicebaked:analytics", { detail: event }));

  if (import.meta.env.DEV) {
    console.info("[analytics]", event);
  }
}
