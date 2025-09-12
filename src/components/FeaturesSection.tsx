import { 
  Kanban, 
  BarChart3, 
  Calendar, 
  Bell, 
  Users, 
  FileText,
  Clock,
  Target
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Kanban,
      title: t.feature1Title,
      description: t.feature1Description,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: BarChart3,
      title: t.feature2Title,
      description: t.feature2Description,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Calendar,
      title: t.feature3Title,
      description: t.feature3Description,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Bell,
      title: t.feature4Title,
      description: t.feature4Description,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: Users,
      title: t.feature5Title,
      description: t.feature5Description,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10"
    },
    {
      icon: FileText,
      title: t.feature6Title,
      description: t.feature6Description,
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10"
    }
  ];

  return (
    <section id="features" className="py-20 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            {t.featuresTitle}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.featuresSubtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-card to-secondary/10 rounded-2xl p-8 shadow-elegant hover:shadow-primary transition-all duration-500 border border-border/50 animate-fade-in-up hover:scale-105 hover:border-accent/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300">
                <feature.icon className={`h-8 w-8 ${feature.color} group-hover:scale-110 transition-transform`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-br from-card to-secondary/20 rounded-3xl p-8 lg:p-12 shadow-primary border border-border/50 animate-fade-in-up hover:shadow-accent transition-all duration-500">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                Built for Both Students
                <span className="text-accent ml-2">
                  and Enterprises
                </span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">Academic Focus</p>
                    <p className="text-sm text-muted-foreground">Tailored for university workflows and academic requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">Enterprise Ready</p>
                    <p className="text-sm text-muted-foreground">Scalable solution for professional project management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <div>
                    <p className="font-medium text-foreground">Cross-Platform</p>
                    <p className="text-sm text-muted-foreground">Works seamlessly across all devices and platforms</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-8 text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                Power Apps
              </div>
              <p className="text-muted-foreground">
                Built on Microsoft's robust platform for enterprise-grade reliability and security
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;