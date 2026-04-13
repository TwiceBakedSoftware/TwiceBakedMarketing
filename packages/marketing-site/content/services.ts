import type { Service } from "./types";

export const services: Service[] = [
  {
    id: "workflow-automation",
    title: "Workflow and approvals",
    summary: "Replace ad-hoc checklists and inbox ping-pong with clear stages, ownership, and audit history.",
    outcomes: [
      "Fewer dropped handoffs",
      "Clear ownership at each stage",
      "Automated reminders and escalation",
    ],
    deliverables: ["Workflow builder", "Role-based approvals", "Status dashboards"],
    timeline: "4 to 8 weeks",
  },
  {
    id: "crm-and-operations",
    title: "CRM and operations hubs",
    summary:
      "Unify customer records, notes, and operational data in one internal system designed around your team.",
    outcomes: [
      "Single source of truth",
      "Faster customer follow-up",
      "Reduced duplicate data entry",
    ],
    deliverables: ["Custom data model", "Searchable records", "Activity timelines"],
    timeline: "6 to 12 weeks",
  },
  {
    id: "forms-and-reporting",
    title: "Forms, intake, and reporting",
    summary:
      "Turn static forms and documents into validated workflows with reporting that leaders can actually use.",
    outcomes: [
      "Cleaner data capture",
      "Real-time reporting",
      "Less spreadsheet wrangling",
    ],
    deliverables: ["Smart forms", "Validation rules", "KPI dashboards"],
    timeline: "3 to 6 weeks",
  },
  {
    id: "ai-enablement",
    title: "AI enablement and custom tools",
    summary:
      "Design practical AI workflows for your team, from internal copilots and assistants to custom tools embedded into your existing operations.",
    outcomes: [
      "Faster drafting and research for repetitive tasks",
      "Better consistency with process-aware AI prompts and guardrails",
      "Clear adoption plans for teams new to AI-enabled workflows",
    ],
    deliverables: [
      "Custom AI utilities",
      "Workflow-integrated prompts and automations",
      "Team adoption workshops",
    ],
    timeline: "2 to 6 weeks",
  },
];
