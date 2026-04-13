import { ButtonCTA } from "../../../components/ButtonCTA";
import { Container } from "../../../components/Container";

export function Hero() {
  return (
    <section className="tb-hero">
      <Container>
        <div className="tb-hero-grid">
          <div>
            <div className="tb-hero-chapter">
              <span className="tb-label">
                Central Kentucky · Custom internal software
              </span>
            </div>

            <h1 className="tb-hero-title">
              <span className="line">Custom software</span>
              <span className="line">
                for teams
                <span className="echo" aria-hidden="true">
                  for teams
                </span>
              </span>
              <span className="line">
                drowning in <em>spreadsheets.</em>
              </span>
            </h1>

            <div className="tb-hero-proof-inline">
              <span>40% faster intake</span>
              <span>30% fewer delays</span>
              <span>50% fewer revisions</span>
            </div>

            <div className="tb-hero-actions">
              <ButtonCTA
                href="/contact"
                label="Book a discovery call"
                trackingId="home-hero-primary"
                variant="primary"
              />
              <ButtonCTA
                href="/case-studies"
                label="See case studies"
                trackingId="home-hero-secondary"
                variant="ghost"
              />
              <p className="tb-hero-status">
                Now taking projects · 4 to 8 week first release
              </p>
            </div>
          </div>

          <svg className="tb-hero-wheat" aria-hidden="true">
            <use href="#tb-i-wheat" />
          </svg>

          <aside className="tb-hero-aside">
            <svg
              className="tb-hero-seal"
              viewBox="0 0 160 160"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="tb-seal-path"
                  d="M 80,80 m -62,0 a 62,62 0 1,1 124,0 a 62,62 0 1,1 -124,0"
                />
              </defs>
              <circle className="ring" cx="80" cy="80" r="74" />
              <circle className="ring" cx="80" cy="80" r="68" />
              <text>
                <textPath href="#tb-seal-path" startOffset="0">
                  TWICE BAKED SOFTWARE · CENTRAL KENTUCKY · EST. MMXX ·
                </textPath>
              </text>
              <text x="80" y="94" textAnchor="middle" className="mark">
                tb
              </text>
            </svg>

            <p className="tb-hero-caption">
              A boutique software studio making custom internal systems for
              service, trades, and owner-led teams — in four to eight weeks,
              with direct builder access.
            </p>

            <ul>
              <li>Requests scattered across email, texts, and spreadsheets</li>
              <li>Missed handoffs between front office and operations</li>
              <li>No reliable status view for owners or managers</li>
              <li>Reporting takes manual cleanup every week</li>
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  );
}
