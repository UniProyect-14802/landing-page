import { Button } from "@/components/ui/button";
import { Calendar, Users, Target, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-dashboard.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-32 pb-20 gradient-subtle overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                {t.heroTitle}
                <span className="text-primary ml-3">
                  {t.heroSubtitle}
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t.heroDescription}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Google Calendar Sync</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full">
                <Users className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Team Collaboration</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full">
                <Target className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Progress Tracking</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
                {t.startLearning}
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
                {t.watchDemo}
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary">70%</div>
                <div className="text-sm text-muted-foreground">Improved Coordination</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary">30%</div>
                <div className="text-sm text-muted-foreground">Fewer Delays</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary">50%</div>
                <div className="text-sm text-muted-foreground">Tool Reduction</div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative">
              <img
                src={heroImage}
                alt="UniProyect Dashboard Interface"
                className="w-full rounded-2xl shadow-accent animate-float"
              />
              <div className="absolute inset-0 gradient-hero opacity-10 rounded-2xl"></div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-card rounded-xl p-4 shadow-elegant animate-pulse-glow border border-border">
              <div className="text-sm font-medium text-foreground">Project Due</div>
              <div className="text-xs text-muted-foreground">2 days remaining</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-elegant animate-pulse-glow border border-border">
              <div className="text-sm font-medium text-foreground">Team Status</div>
              <div className="text-xs text-primary">85% Complete</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;