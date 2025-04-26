import { useState } from "react";
import { Stage, ReflectionQuestion } from "@/types";
import { useAppContext } from "@/context/AppContext";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Check, Loader } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getFeedbackFromAI } from "@/lib/ai";
import { toast } from "sonner";
import { buildPrompt } from "@/lib/promptBuilder";

type ReflectionFormProps = {
  stage: Stage;
  questions: ReflectionQuestion[];
};

export const ReflectionForm: React.FC<ReflectionFormProps> = ({ stage, questions }) => {
  const { progress, updateSubmission, completeStage } = useAppContext();
  const submission = progress.submissions[stage];
  
  const [answers, setAnswers] = useState<Record<string, string>>(submission?.answers || {});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(submission?.feedback || null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const questionsAndAnswers = questions.map((q) => ({
        question: q.question,
        answer: answers[q.id] || "No answer provided.",
      }));
  
      const prompt = buildPrompt(stage, questionsAndAnswers);
  
      const aiFeedback = await getFeedbackFromAI(prompt);
  
      setFeedback({
        id: `feedback-${Date.now()}`,
        createdAt: new Date(),
        positiveFeedback: aiFeedback.positiveFeedback,
        constructiveFeedback: aiFeedback.constructiveFeedback,
        suggestions: [],
        approved: true,
      });
  
      toast.success("Feedback received!");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast.error("Failed to get feedback.");
    }
  
    setIsSubmitting(false);
  };

  const handleContinue = () => {
    completeStage(stage);
  };

  const isFormComplete = questions
    .filter(q => q.required)
    .every(q => answers[q.id] && answers[q.id].trim() !== '');

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {questions.map((question) => (
          <div key={question.id} className="space-y-2">
            <Label htmlFor={question.id} className="text-base font-medium">
              {question.question}
              {question.required && <span className="text-idea-600 ml-1">*</span>}
            </Label>

            {question.type === "text" && (
              <Input
                id={question.id}
                value={answers[question.id] || ""}
                onChange={(e) => setAnswers((prev) => ({ ...prev, [question.id]: e.target.value }))}
                placeholder={question.placeholder}
                required={question.required}
                className="w-full"
              />
            )}

            {question.type === "textarea" && (
              <Textarea
                id={question.id}
                value={answers[question.id] || ""}
                onChange={(e) => setAnswers((prev) => ({ ...prev, [question.id]: e.target.value }))}
                placeholder={question.placeholder}
                required={question.required}
                className="w-full min-h-24"
              />
            )}

            {question.type === "multiChoice" && question.options && (
              <RadioGroup
                value={answers[question.id] || ""}
                onValueChange={(value) => setAnswers((prev) => ({ ...prev, [question.id]: value }))}
                className="space-y-2"
              >
                {question.options.map((option, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <RadioGroupItem value={option} id={`${question.id}-${i}`} />
                    <Label htmlFor={`${question.id}-${i}`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            )}
          </div>
        ))}

        {/* Submit Button */}
        <div className="flex justify-end space-x-4 pt-4">
          <Button
            type="submit"
            className="bg-idea-600 hover:bg-idea-700"
            disabled={!isFormComplete || isSubmitting || !!feedback}
          >
            {isSubmitting ? (
              <>
                <Loader className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit for Feedback"
            )}
          </Button>
        </div>
      </form>

      {/* AI Feedback */}
      {feedback && (
        <div className="space-y-4 mt-8">
          <h3 className="text-xl font-semibold text-gray-900">AI Feedback</h3>

          <Alert variant="default" className="bg-green-50 border-green-200">
            <Check className="h-5 w-5 text-green-600" />
            <AlertTitle className="text-green-800">Positive Feedback</AlertTitle>
            <AlertDescription className="text-green-700">
              {feedback.positiveFeedback}
            </AlertDescription>
          </Alert>

          <Alert variant="default" className="bg-blue-50 border-blue-200">
            <Check className="h-5 w-5 text-blue-600" />
            <AlertTitle className="text-blue-800">Constructive Feedback</AlertTitle>
            <AlertDescription className="text-blue-700">
              {feedback.constructiveFeedback || "No constructive feedback available."}
            </AlertDescription>
          </Alert>

          <div className="flex justify-end mt-6">
            <Button
              onClick={handleContinue}
              className="bg-idea-600 hover:bg-idea-700"
              disabled={!feedback.approved}
            >
              Continue to Next Stage
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
