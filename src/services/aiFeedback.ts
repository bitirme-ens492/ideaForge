import { Stage } from "@/types";

// Function to generate AI feedback based on stage and answers
export const generateAIFeedback = async (stage: Stage, answers: Record<string, string>) => {
  // In a production environment, this would call an actual LLM API
  // For now, we'll simulate AI feedback based on the stage and answers
  
  const feedback = simulateFeedback(stage, answers);
  
  // Simulate network delay to make it feel like it's processing
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return feedback;
};

// Simulate AI feedback for different stages
const simulateFeedback = (stage: Stage, answers: Record<string, string>) => {
  switch (stage) {
    case "define":
      return simulateDefineFeedback(answers);
    case "understand":
      return simulateUnderstandFeedback(answers);
    case "observe":
      return simulateObserveFeedback(answers);
    case "ideate":
      return simulateIdeateFeedback(answers);
    case "prototype":
      return simulatePrototypeFeedback(answers);
    case "test":
      return simulateTestFeedback(answers);
    case "reflect":
      return simulateReflectFeedback(answers);
    default:
      return generateDefaultFeedback();
  }
};

// Specifically simulate feedback for the Define stage
const simulateDefineFeedback = (answers: Record<string, string>) => {
  // Check for quality of POV statement
  const hasPOV = answers.povStatement && answers.povStatement.length > 20;
  const hasTargetUser = answers.targetUser && answers.targetUser.length > 10;
  const hasUserNeed = answers.userNeed && answers.userNeed.length > 10;
  const hasBarrier = answers.barrier && answers.barrier.length > 10;
  
  // Calculate quality score 0-10
  let qualityScore = 0;
  if (hasPOV) qualityScore += 4;
  if (hasTargetUser) qualityScore += 2;
  if (hasUserNeed) qualityScore += 2;
  if (hasBarrier) qualityScore += 2;
  
  // Evaluate the POV quality
  const povQuality = evaluatePOVQuality(answers.povStatement || "");
  qualityScore = Math.min(10, qualityScore + povQuality);
  
  // Generate appropriate feedback based on quality score
  let positiveFeedback = "";
  let constructiveFeedback = "";
  let suggestions = [];
  
  // Positive feedback
  if (qualityScore >= 8) {
    positiveFeedback = `Your Point of View statement is well-structured and clearly articulates who your user is, what they need, and why. You've done a great job of synthesizing your research into an actionable problem statement. The clarity of your user description and their barriers will make ideation more focused.`;
  } else if (qualityScore >= 5) {
    positiveFeedback = `Your Point of View has good elements that will help guide your solution development. You've identified a specific user and their core need, which provides a solid foundation for ideation.`;
  } else {
    positiveFeedback = `You've made a good start in defining your problem. You've begun to identify your target user and acknowledge that they have specific needs to be addressed.`;
  }
  
  // Constructive feedback based on what's missing or could be improved
  if (!hasPOV || povQuality < 2) {
    constructiveFeedback = `Your POV statement could be more structured. Try using the format "[User] is experiencing [problem] because [cause/insight]" to make it clearer and more actionable. Make sure to connect the user directly to their specific need and the underlying reason.`;
    suggestions.push({
      id: "pov-structure",
      title: "Point-of-View Statement Structure",
      description: "Learn how to format POV statements that drive innovation",
      url: "#pov"
    });
  } else if (!hasTargetUser || !hasUserNeed) {
    constructiveFeedback = `Your definition of the user or their need lacks specificity. Try to be more concrete about who exactly is experiencing the problem and what their primary goal is. Specific user needs lead to more focused solutions.`;
    suggestions.push({
      id: "persona-template",
      title: "User Persona Development",
      description: "Tools for creating more specific user descriptions",
      url: "#persona"
    });
  } else if (!hasBarrier || povQuality < 3) {
    constructiveFeedback = `The barrier or insight in your POV could be more clearly articulated. What is the root cause or insight that explains why this need isn't being met? Understanding the "why" behind the problem is crucial for innovative solutions.`;
    suggestions.push({
      id: "context-mapping",
      title: "Context Mapping Guide",
      description: "Techniques to uncover deeper insights about user barriers",
      url: "#contextmapping"
    });
  } else if (qualityScore < 8) {
    constructiveFeedback = `Consider how your POV might be reframed as "How Might We" questions to open up more solution possibilities. HMW questions can help you explore different aspects of your problem in the ideation phase.`;
    suggestions.push({
      id: "hmw-guide",
      title: "How Might We Question Framing",
      description: "Transform your POV into actionable design questions",
      url: "#hmw"
    });
  }
  
  // Add a second suggestion for scores below 7
  if (qualityScore < 7) {
    suggestions.push({
      id: "question-analysis",
      title: "Question Analysis Builder",
      description: "Break down complex problems into manageable parts",
      url: "#questionanalysis"
    });
  }
  
  // Determine if it's good enough to proceed
  const approved = qualityScore >= 6;
  
  return {
    positiveFeedback,
    constructiveFeedback,
    suggestions,
    approved
  };
};

// Helper function to evaluate POV statement quality
const evaluatePOVQuality = (povStatement: string): number => {
  let score = 0;
  
  // Check if it includes user, need, and insight components
  if (povStatement.toLowerCase().includes("user") || 
      povStatement.toLowerCase().includes("parent") || 
      povStatement.toLowerCase().includes("person")) {
    score += 1;
  }
  
  if (povStatement.toLowerCase().includes("need") || 
      povStatement.toLowerCase().includes("wants") ||
      povStatement.toLowerCase().includes("requires")) {
    score += 1;
  }
  
  if (povStatement.toLowerCase().includes("because") || 
      povStatement.toLowerCase().includes("due to") ||
      povStatement.toLowerCase().includes("as a result")) {
    score += 1;
  }
  
  // Check if it's structured properly
  if (povStatement.toLowerCase().includes("is experiencing") || 
      povStatement.toLowerCase().includes("needs to") ||
      povStatement.toLowerCase().includes("is trying to")) {
    score += 1;
  }
  
  return score;
};

// Simulate feedback for the Ideate stage
const simulateIdeateFeedback = (answers: Record<string, any>) => {
  // Ensure answers.ideas is a valid array
  if (!Array.isArray(answers.ideas)) {
    console.warn("answers.ideas is not a valid array:", answers.ideas);
    return generateDefaultFeedback();
  }

  const ideas = answers.ideas;
  const hasMinIdeas = ideas.length >= 3;

  let ideaQuality = 0;
  let ideaInnovation = 0;
  let ideaDifferentiation = 0;

  ideas.forEach((idea: any) => {
    const hasTitle = idea?.title?.length > 5;
    const hasBenefit = idea?.benefit?.length > 10;
    const hasUniqueness = idea?.uniqueness?.length > 10;
    const hasRisk = idea?.risk?.length > 10;

    if (hasTitle) ideaQuality += 0.5;
    if (hasBenefit) ideaQuality += 0.5;
    if (hasUniqueness) ideaQuality += 0.5;
    if (hasRisk) ideaQuality += 0.5;

    const innovationKeywords = ['novel', 'unique', 'innovative', 'original', 'creative', 'new approach'];
    const innovationSignals = innovationKeywords.some(keyword =>
      (idea.title + idea.benefit + idea.uniqueness).toLowerCase().includes(keyword)
    );
    if (innovationSignals) ideaInnovation += 1;

    const differentiationKeywords = ['different', 'unlike', 'compared to', 'versus', 'advantage', 'better than'];
    const differentiation = differentiationKeywords.some(keyword =>
      idea.uniqueness?.toLowerCase().includes(keyword)
    );
    if (differentiation) ideaDifferentiation += 1;
  });

  const maxIdeaQuality = ideas.length * 2;
  ideaQuality = Math.min(10, (ideaQuality / maxIdeaQuality) * 10);
  const maxInnovation = ideas.length;
  ideaInnovation = Math.min(10, (ideaInnovation / maxInnovation) * 10);
  const maxDifferentiation = ideas.length;
  ideaDifferentiation = Math.min(10, (ideaDifferentiation / maxDifferentiation) * 10);

  const hasNeed = answers.needStatement?.length > 15;
  const hasApproach = answers.approachStatement?.length > 15;
  const hasBenefit = answers.benefitStatement?.length > 15;
  const hasCompetition = answers.competitionStatement?.length > 15;

  let nabcQuality = 0;
  if (hasNeed) nabcQuality += 2.5;
  if (hasApproach) nabcQuality += 2.5;
  if (hasBenefit) nabcQuality += 2.5;
  if (hasCompetition) nabcQuality += 2.5;

  const selectedIdeaIndex = answers.selectedIdeaIndex || 0;
  const selectedIdea = ideas[selectedIdeaIndex] || null;

  let qualityScore = (ideaQuality * 0.3) + (ideaInnovation * 0.2) + (ideaDifferentiation * 0.2) + (nabcQuality * 0.3);
  qualityScore = Math.min(10, qualityScore);

  let positiveFeedback = "";
  let constructiveFeedback = "";
  let suggestions: any[] = [];

  if (qualityScore >= 8) {
    positiveFeedback = `Your ideation work is excellent! You've presented a diverse set of well-articulated ideas with clear benefits and unique value propositions. Your NABC framework effectively communicates the key aspects of your selected solution.`;
  } else if (qualityScore >= 5) {
    positiveFeedback = `You've made good progress in generating solution ideas. Your ideas address the problem identified in your POV statement, and your NABC framework provides a solid foundation for moving forward.`;
  } else {
    positiveFeedback = `You've started the ideation process and generated some solution concepts. The ideas relate to your problem space and show potential.`;
  }

  if (!hasMinIdeas) {
    constructiveFeedback = `Consider generating more diverse solution ideas (aim for at least 3-5). Try using the SCAMPER technique.`;
    suggestions.push({
      id: "scamper-method",
      title: "SCAMPER Ideation Technique",
      description: "A structured approach to transform existing ideas into new concepts",
      url: "#scamper"
    });
  } else if (ideaInnovation < 5) {
    constructiveFeedback = `Try to explore more innovative ideas. Think about analogies or inspiration from different industries.`;
    suggestions.push({
      id: "blue-ocean",
      title: "Blue Ocean Strategy Canvas",
      description: "Create uncontested market space by breaking the value-cost trade-off",
      url: "#blueocean"
    });
  } else if (ideaDifferentiation < 5) {
    constructiveFeedback = `Clarify how your ideas are different from current solutions. Emphasize the competitive edge.`;
    suggestions.push({
      id: "competition-analysis",
      title: "Competitive Differentiation Framework",
      description: "Techniques for positioning your solution against alternatives",
      url: "#competition"
    });
  } else if (nabcQuality < 7) {
    const weakPart = !hasNeed ? "Need" : !hasApproach ? "Approach" : !hasBenefit ? "Benefit" : "Competition";
    constructiveFeedback = `Your NABC framework could be stronger, especially the ${weakPart} part. Be specific and comparative.`;
    suggestions.push({
      id: "nabc-guide",
      title: "NABC Framework Deep Dive",
      description: "How to craft compelling Need-Approach-Benefit-Competition statements",
      url: "#nabc"
    });
  }

  if (qualityScore < 7) {
    suggestions.push({
      id: "dot-voting",
      title: "2x2 Matrix for Idea Evaluation",
      description: "Prioritize ideas based on impact and feasibility",
      url: "#matrix"
    });
  }

  const approved = qualityScore >= 6 && hasMinIdeas && nabcQuality >= 5;

  return {
    positiveFeedback,
    constructiveFeedback,
    suggestions,
    approved
  };
};


// Simulate feedback for other stages (simplified for this implementation)
const simulateUnderstandFeedback = (answers: Record<string, string>) => {
  return generateDefaultFeedback();
};

const simulateObserveFeedback = (answers: Record<string, string>) => {
  return generateDefaultFeedback();
};

const simulatePrototypeFeedback = (answers: Record<string, string>) => {
  return generateDefaultFeedback();
};

const simulateTestFeedback = (answers: Record<string, string>) => {
  return generateDefaultFeedback();
};

const simulateReflectFeedback = (answers: Record<string, string>) => {
  return generateDefaultFeedback();
};

// Default feedback for stages not specifically implemented
const generateDefaultFeedback = () => {
  return {
    positiveFeedback: "You've made good progress in this stage. Your answers show thoughtful consideration of the key aspects required.",
    constructiveFeedback: "Consider revisiting some of your answers to add more specificity and detail. Concrete examples and clear articulation will strengthen your innovation process.",
    suggestions: [
      {
        id: "general-resource-1",
        title: "Innovation Methods Guide",
        description: "Explore best practices for this stage of the design thinking process",
        url: "#"
      }
    ],
    approved: true
  };
};
