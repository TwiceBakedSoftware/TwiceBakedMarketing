import type { ReactNode } from "react";
import { usePageContext } from "vike-react/usePageContext";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const { urlPathname } = usePageContext();
  const isActive =
    href === "/" ? urlPathname === href : urlPathname.startsWith(href);

  return (
    <a
      href={href}
      className={isActive ? "tb-nav-link is-active" : "tb-nav-link"}
    >
      {children}
    </a>
  );
}
