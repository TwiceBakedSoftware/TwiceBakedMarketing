/**
 * Hearth motif library. Rendered once at the top of the layout;
 * referenced throughout the site via <use href="#tb-i-*" />.
 * All symbols use currentColor so they recolor per theme.
 */
export function SvgSymbols() {
  return (
    <svg className="tb-svg-hidden" aria-hidden="true">
      <defs>
        {/* Logomark — filled circle inside a ring. Reads as seal,
            loaf-from-above, or printer's bullet. */}
        <symbol id="tb-i-logo" viewBox="0 0 26 26">
          <circle
            cx="13"
            cy="13"
            r="11.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle cx="13" cy="13" r="4" fill="currentColor" />
        </symbol>

        {/* Wheat stalk — single-stroke, hand-plotted grains. */}
        <symbol
          id="tb-i-wheat"
          viewBox="0 0 70 220"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 35 220 Q 34 150 36 90 Q 37 50 36 18" />
          <path
            d="M 36 18 Q 40 10 36 2 Q 32 10 36 18 Z"
            fill="currentColor"
            fillOpacity="0.15"
          />
          <path d="M 36 35 Q 50 28 46 14" />
          <path d="M 36 35 Q 22 28 26 14" />
          <path d="M 35 52 Q 52 45 49 28" />
          <path d="M 35 52 Q 18 45 21 28" />
          <path d="M 35 70 Q 53 63 50 44" />
          <path d="M 35 70 Q 17 63 20 44" />
          <path d="M 35 90 Q 54 83 51 62" />
          <path d="M 35 90 Q 16 83 19 62" />
          <path d="M 36 112 Q 55 105 52 82" />
          <path d="M 36 112 Q 17 105 20 82" />
          <path d="M 36 134 Q 54 127 51 103" />
          <path d="M 36 134 Q 18 127 21 103" />
        </symbol>

        {/* Twice motif — two offset circles for the method metaphor. */}
        <symbol
          id="tb-i-twice"
          viewBox="0 0 120 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <circle cx="54" cy="54" r="44" />
          <circle cx="66" cy="66" r="44" />
          <circle cx="60" cy="60" r="2" fill="currentColor" />
        </symbol>

        {/* Hearth flame. */}
        <symbol
          id="tb-i-flame"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M 24 44 Q 8 36 12 22 Q 16 30 18 26 Q 18 14 24 4 Q 26 16 32 20 Q 38 14 38 26 Q 42 34 36 40 Q 30 44 24 44 Z" />
          <path
            d="M 24 40 Q 17 34 20 26 Q 24 32 26 28 Q 28 22 30 28 Q 33 34 28 38 Q 26 40 24 40 Z"
            fill="currentColor"
            fillOpacity="0.15"
          />
        </symbol>

        {/* Fleuron divider — typographic ornament. */}
        <symbol
          id="tb-i-fleuron"
          viewBox="0 0 72 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        >
          <circle cx="36" cy="9" r="4" fill="currentColor" />
          <circle cx="20" cy="9" r="1.5" fill="currentColor" />
          <circle cx="52" cy="9" r="1.5" fill="currentColor" />
          <path d="M 4 9 Q 14 2 18 9" />
          <path d="M 4 9 Q 14 16 18 9" />
          <path d="M 68 9 Q 58 2 54 9" />
          <path d="M 68 9 Q 58 16 54 9" />
        </symbol>

        {/* Sun + moon for the theme toggle. */}
        <symbol
          id="tb-i-sun"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </symbol>
        <symbol
          id="tb-i-moon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 14.5A8 8 0 019.5 4a7 7 0 1010.5 10.5z" />
        </symbol>
      </defs>
    </svg>
  );
}
