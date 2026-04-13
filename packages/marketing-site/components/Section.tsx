import type { ReactNode } from "react";
import { Container } from "./Container";

export type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  /**
   * Optional word (or phrase) inside `title` to render as the
   * italic WONK accent. If omitted, the last word is accented.
   * Pass `null` to disable the accent entirely.
   */
  accentWord?: string | null;
  body?: string;
  backgroundVariant?: "default" | "warm" | "soil";
  children?: ReactNode;
};

function renderTitle(title: string, accentWord?: string | null) {
  if (accentWord === null) return title;
  const word =
    accentWord ??
    title
      .split(" ")
      .slice(-1)[0]
      .replace(/[.,;:!?]$/, "");
  if (!word || !title.includes(word)) {
    return title;
  }
  const idx = title.lastIndexOf(word);
  const before = title.slice(0, idx);
  const after = title.slice(idx + word.length);
  return (
    <>
      {before}
      <em>{word}</em>
      {after}
    </>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  accentWord,
  body,
  backgroundVariant = "default",
  children,
}: SectionProps) {
  const headerClass = eyebrow
    ? "tb-section-header tb-section-header--split"
    : "tb-section-header";

  return (
    <section id={id} className={`tb-section tb-section-${backgroundVariant}`}>
      <Container>
        <header className={headerClass}>
          {eyebrow ? (
            <div className="tb-section-header-side">
              <span className="tb-eyebrow">{eyebrow}</span>
            </div>
          ) : null}
          <div className="tb-section-header-main">
            <h2>{renderTitle(title, accentWord)}</h2>
            {body ? <p className="tb-section-body">{body}</p> : null}
          </div>
        </header>
        {children}
      </Container>
    </section>
  );
}
