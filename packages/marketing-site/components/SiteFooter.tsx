import { siteConfig } from "../content/site";
import { Container } from "./Container";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="tb-footer">
      <Container>
        <div className="tb-footer-inner">
          <p>
            © {year} · {siteConfig.legalName}
          </p>
          <p>
            <em>Set in Fraunces &amp; DM Sans</em>
          </p>
          <div className="tb-footer-links">
            <a href={`mailto:${siteConfig.contactEmail}`}>
              Email {siteConfig.contactName}
            </a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
