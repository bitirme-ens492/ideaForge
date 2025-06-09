export function buildPrompt(
  stageName: string,
  questionsAndAnswers: { question: string; answer: string }[],
  previousStages: { stage: string; question: string; answer: string }[] = []
): string {
  const previousFormatted = previousStages.map((qa, index) => 
    `${index + 1}. [${qa.stage}] Question: ${qa.question}\n   Answer: ${qa.answer}`
  ).join("\n\n") || "No prior stages completed yet.";

  const currentFormatted = questionsAndAnswers.map((qa, index) => 
    `${index + 1}. Question: ${qa.question}\n   Answer: ${qa.answer}`
  ).join("\n\n");

  return `
You are reviewing a user's responses for the "${stageName}" Stage of a design thinking entrepreneurship platform.

Project Context:
This platform is an AI-powered entrepreneurship development environment designed to help users systematically refine, validate, and scale their business ideas.

The platform is built around the Design Thinking methodology and is structured into seven key stages: Understand, Observe, Define Point of View, Ideate, Prototype, Test, and Reflect.

Each stage is supported by a modular learning architecture combined with real-time feedback mechanisms powered by large language models (LLMs). Users are guided through rigorous conceptual design, user observation, synthesis, prototyping, and testing phases, ensuring iterative validation of assumptions and market needs.

The platform promotes hypothesis-driven innovation, encourages empirical learning, and provides structured evaluation frameworks to systematically reduce uncertainty and build scalable, sustainable business models.

Below is a summary of the user's previous progress across earlier stages:
${previousFormatted}

Now, here are the user's responses for the current "${stageName}" stage:
${currentFormatted}

Your job is to give feedback considering the current stage while also ensuring continuity, logical consistency, and strategic progression from earlier stages.

If the answer is irrelevant to the questions write: 
"Please ensure to provide more detailed and insightful analysis for the questions." in both positiveFeedback and constructiveFeedback.

Respond in STRICT JSON format like this:
{
  "positiveFeedback": "...",
  "constructiveFeedback": "..."
}
`;
}
