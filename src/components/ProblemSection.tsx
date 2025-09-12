import { AlertCircle, MessageSquare, Calendar, FileText, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProblemSection = () => {
  const { t } = useLanguage();
  const problems = [
    {
      icon: MessageSquare,
      title: "Scattered Communication",
      description: "Teams struggle with information spread across WhatsApp, email, and multiple platforms."
    },
    {
      icon: Calendar,
      title: "Missed Deadlines", 
      description: "No centralized view of project timelines and important submission dates."
    },
    {
      icon: FileText,
      title: "Lost Progress",
      description: "Work gets duplicated or lost without clear task ownership and progress tracking."
    },
    {
      icon: AlertCircle,
      title: "Academic Stress",
      description: "Poor coordination leads to last-minute rushes and compromised project quality."
    }
  ];

  const solutions = [
    {
      icon: Zap,
      title: "Centralized Hub",
      description: "All project communication, files, and updates in one organized platform."
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Automatic Google Calendar integration with deadline notifications and reminders."
    },
    {
      icon: FileText,
      title: "Visual Progress",
      description: "Kanban boards and dashboards provide clear visibility of who's doing what."
    },
    {
      icon: MessageSquare,
      title: "Seamless Collaboration",
      description: "Built specifically for academic workflows and university project requirements."
    }
  ];

  return (
    <section id="problem" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            {t.problemTitle}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.problemDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-card to-card/50 rounded-2xl p-8 shadow-elegant hover:shadow-accent transition-all duration-500 border border-border/50 animate-fade-in-up hover:scale-105 hover:border-destructive/30 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-destructive/20 to-destructive/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                <problem.icon className="h-8 w-8 text-destructive group-hover:text-destructive/80 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-destructive transition-colors">{problem.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            {t.problemSubtitle}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.problemDescription}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-card to-secondary/20 rounded-2xl p-8 shadow-elegant hover:shadow-primary transition-all duration-500 border border-border/50 animate-fade-in-up hover:scale-105 hover:border-primary/30 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                <solution.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{solution.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;