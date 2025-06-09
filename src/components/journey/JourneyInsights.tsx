import { useAppContext } from "@/context/AppContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Lightbulb } from "lucide-react";
import { useEffect, useState } from "react";
import { buildInsightPrompt } from "@/lib/buildInsightPrompt";
import { getJourneyInsightsFromAI } from "@/lib/getJourneyInsightsFromAI";
import { Stage } from "@/types"; // enum

type InsightInput = {
  stage: Stage;
  question: string;
  answer: string;
  aiFeedback?: string;
};

export const JourneyInsights = () => {
  const { progress } = useAppContext();
  const completedCount = progress.completedStages.length;

  const [insights, setInsights] = useState<null | Awaited<ReturnType<typeof getJourneyInsightsFromAI>>>(null);

  useEffect(() => {
    const generateInsights = async () => {
      if (completedCount < 2) return;

      const entries: InsightInput[] = [];

      for (const stage of progress.completedStages) {
        const stageSub = progress.submissions[stage];
        if (!stageSub) continue;

        for (const [question, answer] of Object.entries(stageSub.answers)) {
          entries.push({
            stage,
            question,
            answer,
            aiFeedback: stageSub.feedback?.positiveFeedback,
          });
        }
      }

      const prompt = buildInsightPrompt(entries);
      const result = await getJourneyInsightsFromAI(prompt);
      setInsights(result);
    };

    generateInsights();
  }, [completedCount, progress]);

  if (completedCount < 2 || !insights) return null;

  const showFirstMilestone = completedCount >= 2;
  const showSecondMilestone = completedCount >= 4;
  const showThirdMilestone = completedCount >= 6;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reflection Insights</CardTitle>
        <CardDescription>Key patterns and evolution in your innovation journey</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {showFirstMilestone && (
            <AccordionItem value="milestone-1">
              <AccordionTrigger>
                <div className="flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-amber-500" />
                  <span>Initial Problem Understanding</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-sm">{insights.initialUnderstanding.summary}</p>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Key Patterns</h4>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      {insights.initialUnderstanding.patterns.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Evolution</h4>
                    <p className="text-sm">{insights.initialUnderstanding.evolution}</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          )}

          {showSecondMilestone && (
            <AccordionItem value="milestone-2">
              <AccordionTrigger>
                <div className="flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-amber-500" />
                  <span>Solution Development Progress</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-sm">{insights.solutionProgress.summary}</p>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Key Patterns</h4>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      {insights.solutionProgress.patterns.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Evolution</h4>
                    <p className="text-sm">{insights.solutionProgress.evolution}</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          )}

          {showThirdMilestone && (
            <AccordionItem value="milestone-3">
              <AccordionTrigger>
                <div className="flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-amber-500" />
                  <span>Final Innovation Journey</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p className="text-sm">Congratulations on nearly completing your innovation journey!</p>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Key Achievements</h4>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      {insights.finalJourney.achievements.map((a, i) => (
                        <li key={i}>{a}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-1">Overall Journey</h4>
                    <p className="text-sm">{insights.finalJourney.overall}</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
      </CardContent>
    </Card>
  );
};
