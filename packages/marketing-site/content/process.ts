import type { ProcessStep } from "./types";

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    title: "Discovery and process mapping",
    duration: "1 to 2 weeks",
    description:
      "We map your current process, identify bottlenecks, and prioritize the highest-leverage improvements.",
    outputs: ["Workflow map", "Requirements brief", "Delivery plan"],
    clientInvolvement: "Stakeholder interviews and workflow walkthroughs",
  },
  {
    id: "build",
    title: "Build and iterate",
    duration: "2 to 8 weeks",
    description:
      "We ship in short cycles with regular demos so your team can validate the system before full rollout.",
    outputs: ["Working internal app", "Automations", "Feedback backlog"],
    clientInvolvement: "Weekly review and acceptance checkpoints",
  },
  {
    id: "launch",
    title: "Launch, handoff, and support",
    duration: "1 to 2 weeks",
    description:
      "We onboard your team, document key workflows, and make sure ownership is clear post-launch.",
    outputs: ["Training guide", "Admin playbook", "Post-launch support window"],
    clientInvolvement: "Training sessions and rollout communications",
  },
];
