import { Stage } from "@/types";

type InsightInput = {
  stage: Stage;
  question: string;
  answer: string;
  aiFeedback?: string;
};

export function buildInsightPrompt(entries: InsightInput[]) {
  const lines = entries.map((e, i) =>
    `${i + 1}. [${e.stage}] Question: ${e.question}\n   Answer: ${e.answer}\n   AI Feedback: ${e.aiFeedback ?? "N/A"}`
  ).join("\n\n");

  return `
You are a design-thinking coach analyzing a user's full 7-stage innovation journey on an entrepreneurship development platform.  
Each stage corresponds to a core phase in the design thinking methodology:  
**Understand, Observe, Define Point of View, Ideate, Prototype, Test, and Reflect.**

Below are the user's full Q&A submissions and the AI feedback they received for each stage:

${lines}

Now, your task is to analyze these submissions and produce a JSON object in the **exact structure and wording** below. However, the content should be **fully personalized and synthesized** based on the actual journey of the user. Use natural, mid-length summaries that reflect how the idea matured through the 7 stages.

## INSTRUCTIONS:

1. In **initialUnderstanding.summary**, describe the user’s original business idea, its focus, scope, and overall structure when first introduced in stages 1–2 (Understand, Observe). Highlight key traits and gaps.

2. In **solutionProgress.summary**, discuss how the idea was refined, what gaps or weak points were improved through Define → Prototype stages, and how feedback contributed to clarity, feasibility, and impact.

3. In **finalJourney.overall**, summarize the end result: how the concept evolved into a mature and well-rounded solution. Mention what the final direction looks like, how well it fits the target users, and its innovation value.

4. The **patterns**, **evolution**, and **achievements** should be detailed and match insights extracted from actual Q&A+feedback history.

## Output Format (DO NOT change structure or key names):

{
  "initialUnderstanding": {
    "summary": "<Describe the original idea, intent, and insights from stages 1-2>",
    "patterns": [
      "<List key observations about stakeholder focus, need clarity, etc.>",
      "<Another pattern from early stages>",
      "<Another early-stage insight>"
    ],
    "evolution": "<Explain how the problem space or user understanding matured between Understand and Observe>"
  },
  "solutionProgress": {
    "summary": "<Describe how the idea evolved through Define to Prototype, with mention of changes, challenges, and improvements>",
    "patterns": [
      "<Pattern observed during mid-stage ideation>",
      "<Pattern regarding feasibility or feedback incorporation>",
      "<Pattern about user alignment or solution direction>"
    ],
    "evolution": "<Summarize how the scattered ideas became a focused solution>"
  },
  "finalJourney": {
    "achievements": [
      "<List major milestones: tested solution, validated assumption, etc.>",
      "<Mention final clarity, impact, or innovation points>"
    ],
    "overall": "<Provide a coherent overview of the final solution and its maturity after all 7 stages>"
  }
}

Respond only in **valid JSON** format. Do not include any extra commentary or explanation.
`;
}

