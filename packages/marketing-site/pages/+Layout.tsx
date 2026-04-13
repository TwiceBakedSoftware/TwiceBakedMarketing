import type { ReactNode } from "react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { SvgSymbols } from "../components/SvgSymbols";

import "../styles/tokens.css";
import "../styles/global.css";
import "./tailwind.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="tb-page-root tb-fade-in">
      <SvgSymbols />
      <SiteHeader />
      <main className="tb-main">{children}</main>
      <SiteFooter />
    </div>
  );
}
