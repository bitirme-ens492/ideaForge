export async function getFeedbackFromAI(prompt: string): Promise<{ positiveFeedback: string; constructiveFeedback: string }> {
  console.log("Prompt sent to OpenAI:", prompt);
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,

    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful feedback assistant." },
        { role: "user", content: prompt }
      ],
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("OpenAI API Error:", errorData);
    throw new Error(errorData.error?.message || "Failed to fetch AI feedback");
  }

  const data = await response.json();
  const textResponse = data.choices[0].message.content;

  try {
    const feedbackJson = JSON.parse(textResponse);
    return feedbackJson;
  } catch (e) {
    console.error("Failed to parse AI response as JSON:", textResponse);
    throw new Error("Invalid AI feedback format");
  }
}
