import { faqItems } from "../../../content/faq";

export function FAQList() {
  return (
    <div className="tb-faq-grid">
      {faqItems.map((item) => (
        <details key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
