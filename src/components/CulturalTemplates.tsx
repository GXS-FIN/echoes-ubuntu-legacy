
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface TemplateProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  questions: string[];
  category: string;
}

const CulturalTemplates = () => {
  const templates = [
    {
      title: "Family Medical History",
      description: "Document health conditions and treatments that run in your family",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ubuntu-ochre">
          <path d="m19 14-7-7-7 7"></path>
          <path d="M12 21V7"></path>
        </svg>
      ),
      questions: [
        "What health conditions run in our family?",
        "How did our grandparents manage their health issues?",
        "What traditional remedies were used in our family?",
        "Are there any genetic conditions we should be aware of?",
        "What was childbirth like for the women in our family historically?"
      ],
      category: "health"
    },
    {
      title: "Traditional Ceremonies",
      description: "Record the unique customs and rituals practiced in your family",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ubuntu-blue">
          <circle cx="12" cy="8" r="5"></circle>
          <path d="M20 21a8 8 0 0 0-16 0"></path>
        </svg>
      ),
      questions: [
        "How does our family celebrate important milestones?",
        "What rituals are performed during marriages in our culture?",
        "How are births and naming ceremonies conducted?",
        "What funeral rites and traditions does our family observe?",
        "Are there any special annual ceremonies unique to our lineage?"
      ],
      category: "cultural"
    },
    {
      title: "Family Migration Story",
      description: "Document your family's journey and movements across generations",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ubuntu-terracotta">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m12 2 3.44 11h-6.88L12 2Z"></path>
          <path d="M12 22v-3"></path>
          <path d="M12 12v4"></path>
        </svg>
      ),
      questions: [
        "Where did our ancestors originally come from?",
        "Why did our family move from their original location?",
        "What challenges did they face during these moves?",
        "How did migration affect our family's language and customs?",
        "Are there any important landmarks or places of significance to our family history?"
      ],
      category: "history"
    },
    {
      title: "Traditional Recipes",
      description: "Preserve cooking techniques and family recipes",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ubuntu-amber">
          <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path>
          <line x1="6" x2="18" y1="17" y2="17"></line>
        </svg>
      ),
      questions: [
        "What dishes are special to our family celebrations?",
        "How does our family prepare traditional meals?",
        "What ingredients were difficult to find but important in family recipes?",
        "Who taught the cooking techniques in our family?",
        "Have any recipes been adapted over generations or as the family moved?"
      ],
      category: "food"
    },
    {
      title: "Language Heritage",
      description: "Document words, phrases, and expressions from your native language",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ubuntu-forest">
          <path d="M12 2s.4 20 6 20c0 0-3-2-6-2s-6 2-6 2c5.6 0 6-20 6-20"></path>
          <path d="M12 8c-1.5 0-3 .5-3 2 0 1.6 1.3 2 3 2s3-.4 3-2c0-1.5-1.5-2-3-2"></path>
        </svg>
      ),
      questions: [
        "What languages were spoken in our family historically?",
        "What proverbs or sayings were commonly used by our elders?",
        "Are there words or expressions unique to our family or community?",
        "How has our language use changed across generations?",
        "What songs or stories in our native language do you remember?"
      ],
      category: "language"
    },
    {
      title: "Coming of Age Traditions",
      description: "Document rituals and teachings for youth transitioning to adulthood",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-ubuntu-purple">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" x2="22" y1="12" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
      questions: [
        "How were young people prepared for adulthood in our culture?",
        "What ceremonies marked the transition to adulthood?",
        "What skills were considered essential to learn before becoming an adult?",
        "How were these traditions different for boys and girls?",
        "Have these traditions changed over time, and if so, how?"
      ],
      category: "cultural"
    }
  ];

  const handleUseTemplate = (title: string) => {
    toast.success(`Template "${title}" selected. You can now record your story using this template.`);
  };

  const renderTemplate = (template: TemplateProps) => (
    <Card key={template.title} className="ubuntu-card overflow-hidden">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            {template.icon}
          </div>
          <div>
            <CardTitle className="text-lg">{template.title}</CardTitle>
            <CardDescription>{template.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <h4 className="font-medium text-sm mb-2">Suggested questions:</h4>
        <ul className="space-y-2 text-gray-700 text-sm">
          {template.questions.map((question, index) => (
            <li key={index} className="flex items-start">
              <span className="text-ubuntu-terracotta mr-2">•</span>
              <span>{question}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full bg-ubuntu-terracotta hover:bg-ubuntu-terracotta/90"
          onClick={() => handleUseTemplate(template.title)}
        >
          Use This Template
        </Button>
      </CardFooter>
    </Card>
  );
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-ubuntu-terracotta mb-2">Cultural Story Templates</h2>
      <p className="text-gray-600 mb-6">
        Use these templates as guides to help document your family's unique cultural heritage and knowledge.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates.map(renderTemplate)}
      </div>
    </div>
  );
};

export default CulturalTemplates;
