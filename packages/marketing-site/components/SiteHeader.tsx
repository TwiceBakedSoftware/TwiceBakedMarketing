import { navigationItems, siteConfig } from "../content/site";
import { Container } from "./Container";
import { NavLink } from "./NavLink";
import { ThemeToggle } from "./ThemeToggle";

// Brand wordmark: "Twice Baked Software" with italic WONK on "Baked".
// The two-word split mirrors the Fraunces specimen treatment used
// throughout the landing page.
function BrandMark() {
  return (
    <a
      href="/"
      className="tb-brand-mark"
      aria-label={`${siteConfig.companyName} home`}
    >
      <svg className="tb-brand-badge" aria-hidden="true">
        <use href="#tb-i-logo" />
      </svg>
      <span className="tb-brand-text">
        Twice <em>Baked</em> Software
      </span>
    </a>
  );
}

export function SiteHeader() {
  return (
    <header className="tb-header">
      <Container>
        <div className="tb-header-inner">
          <BrandMark />

          <nav aria-label="Primary" className="tb-nav">
            {navigationItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="tb-header-right">
            <ThemeToggle />
            <a href="/contact" className="tb-button-italic">
              Begin a project
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
