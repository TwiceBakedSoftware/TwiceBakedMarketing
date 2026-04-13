import type { FAQItem } from "./types";

export const faqItems: FAQItem[] = [
  {
    question: "What size businesses are the best fit?",
    answer:
      "Teams with 5 to 150 people that have repeatable workflows currently managed by spreadsheets, forms, and shared docs.",
    category: "fit",
  },
  {
    question: "Do you replace our existing tools?",
    answer:
      "Sometimes. We usually integrate with what already works and replace only the brittle parts creating operational drag.",
    category: "process",
  },
  {
    question: "How quickly can we launch something useful?",
    answer:
      "Most projects ship a meaningful first release in 4 to 8 weeks, with phased improvements after launch.",
    category: "timeline",
  },
  {
    question: "Do you offer ongoing support?",
    answer:
      "Yes. We provide handoff documentation, training, and optional support retainers for iterative enhancements.",
    category: "pricing",
  },
  {
    question: "Can we meet in person?",
    answer:
      "Yes. We offer in-person meetings across Central Kentucky by request, and we also support clients beyond the region through remote delivery.",
    category: "process",
  },
];
