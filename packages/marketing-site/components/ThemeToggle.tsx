import { useEffect, useState } from "react";

type Mode = "light" | "dark";

/**
 * Mode toggle for the Hearth system. The actual DOM attribute
 * is set pre-hydration by the inline script in +Head.tsx, so
 * this component mounts in a neutral state and then reads the
 * real mode after mount. This avoids hydration mismatch because
 * the server always emits identical JSX regardless of user mode.
 */
export function ThemeToggle() {
  // Start with no mode; the pre-hydration script has already
  // applied the right attribute to <html>. We reflect it into
  // state post-mount so aria-pressed matches on both buttons.
  const [mode, setMode] = useState<Mode | null>(null);

  useEffect(() => {
    const current =
      (document.documentElement.getAttribute("data-theme") as Mode | null) ??
      "light";
    setMode(current);
  }, []);

  const apply = (next: Mode) => {
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("tb-theme", next);
    } catch {
      // storage access can throw in private/embedded contexts; ignore
    }
    setMode(next);
  };

  return (
    <div
      className="tb-mode-toggle"
      role="group"
      aria-label="Theme mode"
      suppressHydrationWarning
    >
      <button
        type="button"
        aria-pressed={mode === "light"}
        onClick={() => apply("light")}
      >
        <svg aria-hidden="true">
          <use href="#tb-i-sun" />
        </svg>
        Light
      </button>
      <button
        type="button"
        aria-pressed={mode === "dark"}
        onClick={() => apply("dark")}
      >
        <svg aria-hidden="true">
          <use href="#tb-i-moon" />
        </svg>
        Dark
      </button>
    </div>
  );
}
