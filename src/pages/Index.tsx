
import { useState } from "react";
import { FeedbackForm } from "@/components/FeedbackForm";
import { FeedbackDashboard } from "@/components/FeedbackDashboard";
import { Header } from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface Feedback {
  id: string;
  name: string;
  email: string;
  category: "suggestion" | "bug-report" | "feature-request";
  feedback: string;
  date: Date;
}

const Index = () => {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      category: "suggestion",
      feedback: "It would be great to have dark mode support for better user experience during night time usage.",
      date: new Date("2024-01-15"),
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      category: "bug-report",
      feedback: "The search functionality doesn't work properly when using special characters in the query.",
      date: new Date("2024-01-10"),
    },
    {
      id: "3",
      name: "Mike Johnson",
      email: "mike@example.com",
      category: "feature-request",
      feedback: "Please add export functionality to download feedback data as CSV or PDF format.",
      date: new Date("2024-01-08"),
    },
  ]);

  const handleSubmitFeedback = (feedback: Omit<Feedback, "id" | "date">) => {
    const newFeedback: Feedback = {
      ...feedback,
      id: Date.now().toString(),
      date: new Date(),
    };
    setFeedbacks(prev => [newFeedback, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="submit" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-white shadow-sm">
              <TabsTrigger 
                value="submit" 
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-200"
              >
                Submit Feedback
              </TabsTrigger>
              <TabsTrigger 
                value="dashboard"
                className="data-[state=active]:bg-blue-500 data-[state=active]:text-white transition-all duration-200"
              >
                View Dashboard
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="submit" className="animate-fade-in">
              <FeedbackForm onSubmit={handleSubmitFeedback} />
            </TabsContent>
            
            <TabsContent value="dashboard" className="animate-fade-in">
              <FeedbackDashboard feedbacks={feedbacks} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Index;
