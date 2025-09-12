import { TrendingUp, Users, Clock, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const StatsSection = () => {
  const { t } = useLanguage();
  const stats = [
    {
      icon: TrendingUp,
      value: "70%",
      label: "Improved Project Coordination",
      description: "Students report significantly better team organization"
    },
    {
      icon: Clock,
      value: "30%",
      label: "Reduction in Delays", 
      description: "Fewer missed deadlines and last-minute rushes"
    },
    {
      icon: Users,
      value: "50%",
      label: "Tool Consolidation",
      description: "Replace multiple scattered apps with one solution"
    },
    {
      icon: Award,
      value: "85%",
      label: "Student Satisfaction",
      description: "Higher quality projects and reduced stress levels"
    }
  ];

  return (
    <section id="stats" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Proven
            <span className="text-primary ml-3">
              Impact
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from students and teams who've transformed their 
            project management with UniProyect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-gradient-to-br from-card to-primary/5 rounded-2xl p-8 shadow-elegant hover:shadow-primary transition-all duration-500 border border-border/50 animate-fade-in-up hover:scale-105 hover:border-primary/30 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300">
                <stat.icon className="h-10 w-10 text-primary group-hover:text-accent transition-colors" />
              </div>
              
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                {stat.value}
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{stat.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Reviews Section */}
        <div id="reviews" className="mt-20">
          <div className="text-center mb-12 animate-fade-in-up">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              {t.reviewsTitle}
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.reviewsSubtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-gradient-to-br from-card to-secondary/20 rounded-3xl p-8 shadow-primary border border-border/50 animate-fade-in-up hover:shadow-accent transition-all duration-500 hover:scale-105">
              <div className="text-center">
                <div className="text-lg font-semibold text-foreground mb-4 leading-relaxed">
                  "UniProyect completely transformed how our team handles academic projects. 
                  No more missed deadlines or scattered communication."
                </div>
                
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">M</span>
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-foreground">María González</div>
                    <div className="text-sm text-muted-foreground">Computer Science Student, Universidad Nacional</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-gradient-to-br from-card to-primary/5 rounded-3xl p-8 shadow-primary border border-border/50 animate-fade-in-up hover:shadow-accent transition-all duration-500 hover:scale-105" style={{animationDelay: '0.1s'}}>
              <div className="text-center">
                <div className="text-lg font-semibold text-foreground mb-4 leading-relaxed">
                  "The Kanban boards and progress tracking features are game-changers. 
                  Our group projects are now organized and stress-free."
                </div>
                
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center">
                    <span className="text-accent font-semibold">C</span>
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-foreground">Carlos Mendoza</div>
                    <div className="text-sm text-muted-foreground">Engineering Student, Universidad de Chile</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-gradient-to-br from-card to-accent/5 rounded-3xl p-8 shadow-primary border border-border/50 animate-fade-in-up hover:shadow-accent transition-all duration-500 hover:scale-105" style={{animationDelay: '0.2s'}}>
              <div className="text-center">
                <div className="text-lg font-semibold text-foreground mb-4 leading-relaxed">
                  "Finally, a tool designed for students! The Google Calendar sync 
                  and smart notifications keep our entire team on track."
                </div>
                
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold">A</span>
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-foreground">Ana Rodríguez</div>
                    <div className="text-sm text-muted-foreground">Business Student, Universidad de Buenos Aires</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-20 text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Our Vision for Latin America
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              To become the reference platform for academic project management 
              across all universities in Latin America, empowering students to 
              achieve excellence through better collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;