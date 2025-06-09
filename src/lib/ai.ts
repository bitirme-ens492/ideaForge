
export async function getFeedbackFromAI(prompt: string): Promise<{ positiveFeedback: string; constructiveFeedback: string }> {
  console.log("Prompt sent to OpenAI:", prompt);

  const offensiveKeywords = [
  // --- Profanity & Hate Speech ---
  "fuck", "shit", "bastard", "asshole", "dick", "piss", "crap", "slut", "bitch", "whore",
  "motherfucker", "son of a bitch", "cunt", "dumbass", "idiot", "retard", "scumbag",
  "moron", "loser", "hate you", "i hate everything", "kill you", "screw you",

  // --- Self-Harm & Suicide ---
  "kill myself", "i want to die", "i want to disappear", "i hate my life", "i want it to end",
  "end it all", "die", "suicide", "i feel empty", "worthless", "no reason to live",
  "cut myself", "cutting", "hurt myself", "self harm", "jump off", "overdose", "i give up",
  "i’m done", "life is meaningless", "can’t take it anymore", "mental breakdown",

  // --- Violence or Threats ---
  "shoot up", "stab", "burn down", "blow up", "beat up", "i will hurt", "i will kill",
  "school shooting", "massacre", "murder", "rape", "terrorist", "explode", "threat",

  // --- Harassment & Discrimination ---
  "racist", "nazi", "jew hater", "homophobe", "transphobe", "go kill yourself",
  "you should die", "go die", "n-word", "faggot", "retarded", "cripple", "slave"
];

  const normalizedPrompt = prompt.toLowerCase();
  const containsUnsafeContent = offensiveKeywords.some(keyword => normalizedPrompt.includes(keyword));

  if (containsUnsafeContent) {
    console.warn("Blocked unsafe prompt due to harmful or offensive content.");
    return {
      positiveFeedback: "Please ensure your response follows respectful and safe communication guidelines.",
      constructiveFeedback: "Your input may contain harmful or inappropriate content. If you’re feeling overwhelmed or distressed, please reach out to a trusted person or mental health professional."
    };
  }

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,

    },
    body: JSON.stringify({
      model: "gpt-4",
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
