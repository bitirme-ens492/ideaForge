export function buildPrompt(stageName: string, questionsAndAnswers: { question: string; answer: string }[]): string {
    const questionsFormatted = questionsAndAnswers.map((qa, index) => 
      `${index + 1}. Question: ${qa.question}\n   Answer: ${qa.answer}`
    ).join("\n\n");
  
    return `
  You are reviewing a user's responses for the "${stageName}" Stage of a design thinking entrepreneurship platform.

Project Context:
This platform is an AI-powered entrepreneurship development environment designed to help users systematically refine, validate, and scale their business ideas.

The platform is built around the Design Thinking methodology and is structured into seven key stages: Understand, Observe, Define Point of View, Ideate, Prototype, Test, and Reflect.

Each stage is supported by a modular learning architecture combined with real-time feedback mechanisms powered by large language models (LLMs). Users are guided through rigorous conceptual design, user observation, synthesis, prototyping, and testing phases, ensuring iterative validation of assumptions and market needs.

The platform promotes hypothesis-driven innovation, encourages empirical learning, and provides structured evaluation frameworks to systematically reduce uncertainty and build scalable, sustainable business models.

Feedback must assess not only linguistic quality but also strategic thinking, relevance to entrepreneurial challenges, clarity of hypotheses, and alignment with stage-specific objectives.

Technical depth, practical applicability, and entrepreneurial feasibility must be core evaluation criteria.

Give feedbacks according to the stage.

Each question and its corresponding answer are provided below:
${questionsFormatted}

This part is important if the answer is irrelevant to the questions write "Please ensure to provide more detailed and insightful analysis for the questions." for positiveFeedback and constructiveFeedback.


Responsibilities:
- Evaluate each answer separately according to its corresponding question.
- Provide Positive Feedback for clear, thoughtful, and well-aligned answers.
- Provide Constructive Feedback if the answer is vague, incomplete, or unrelated.
- If an answer is meaningless or irrelevant:
   - In BOTH positiveFeedback and constructiveFeedback, politely instruct the user to focus on the specific question and project context. 

 Respond STRICTLY in this JSON format:
{
  "positiveFeedback": "....",
  "constructiveFeedback": "...."
}

Even if all answers are meaningless, you MUST still respond strictly in JSON format.
Do NOT write anything outside JSON.

  `;
  }
  