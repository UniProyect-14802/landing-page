import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { useState } from "react";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const features = [
    "Kanban Boards",
    "Progress Dashboards",
    "Google Calendar Sync",
    "Smart Notifications",
    "Team Collaboration",
    "Document Management",
    "Time Tracking",
    "Goal Setting",
    "Unlimited Projects",
    "24/7 Support"
  ];

  return (
    <section id="pricing" className="py-20 gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent
            <span className="text-primary ml-3">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that works best for your academic projects. 
            No hidden fees, no surprises.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12 animate-fade-in-up">
          <div className="bg-card rounded-2xl p-2 border border-border/50 shadow-elegant">
            <div className="flex items-center">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  !isAnnual
                    ? "bg-primary text-primary-foreground shadow-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 relative ${
                  isAnnual
                    ? "bg-primary text-primary-foreground shadow-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Annual
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="max-w-md mx-auto animate-fade-in-up">
          <div className="group bg-gradient-to-br from-card to-secondary/10 rounded-3xl p-8 shadow-elegant hover:shadow-primary transition-all duration-500 border border-border/50 hover:scale-105 hover:border-accent/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full -translate-y-16 translate-x-16"></div>
            
            {/* Popular badge */}
            <div className="absolute top-6 right-6">
              <div className="flex items-center gap-1 bg-gradient-to-r from-primary to-accent text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                <Star className="h-3 w-3 fill-current" />
                Popular
              </div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">UniProyect Pro</h3>
                <p className="text-muted-foreground">Everything you need for academic success</p>
              </div>

              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-primary">
                    ${isAnnual ? "7.95" : "10.00"}
                  </span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Billed annually ($95.40/year)
                  </p>
                )}
              </div>

              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0">
                      <Check className="h-3 w-3 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant="hero" 
                size="lg" 
                className="w-full text-lg py-6 h-auto group-hover:scale-105 transition-transform duration-300"
              >
                Get Started Now
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                14-day free trial • No credit card required
              </p>
            </div>
          </div>
        </div>

        {/* Additional info */}
        <div className="text-center mt-12 animate-fade-in-up">
          <p className="text-muted-foreground mb-4">
            Trusted by thousands of students and academic teams worldwide
          </p>
          <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" />
              <span>Money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;