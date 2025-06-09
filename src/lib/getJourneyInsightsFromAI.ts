export async function getJourneyInsightsFromAI(prompt: string): Promise<{
  initialUnderstanding: { summary: string; patterns: string[]; evolution: string };
  solutionProgress:  { summary: string; patterns: string[]; evolution: string };
  finalJourney:      { achievements: string[]; overall: string };
}> {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type":  "application/json",
      "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a helpful AI journey summarizer." },
        { role: "user",   content: prompt }
      ]
    })
  });

  const data = await res.json();

  if (!res.ok || !data.choices || !data.choices[0]?.message?.content) {
    throw new Error("Failed to get valid response from OpenAI");
  }

  const text = data.choices[0].message.content;

  try {
    return JSON.parse(text);
  } catch (err) {
    throw new Error("Failed to parse AI response as JSON");
  }
}
