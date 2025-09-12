import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Users, Rocket } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white/10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-white/5 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-white/10 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block">Academic Projects?</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join thousands of students and teams who are already experiencing 
            better coordination, fewer delays, and higher-quality project outcomes.
          </p>
        </div>

        {/* Main CTA */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto mr-4">
            Start Free Trial
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
          <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10 text-lg px-8 py-6 h-auto">
            Schedule Demo
          </Button>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 animate-fade-in-up">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Quick Setup</h3>
            <p className="text-sm text-white/80">Get your team organized in minutes, not hours</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Team Support</h3>
            <p className="text-sm text-white/80">Dedicated assistance for academic teams</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Free Updates</h3>
            <p className="text-sm text-white/80">Continuous improvements based on user feedback</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-white/80 mb-4">
            Questions? We're here to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-white/80">
            <a href="mailto:contact@uniproyect.com" className="hover:text-white transition-smooth">
              contact@uniproyect.com
            </a>
            <span className="hidden sm:block">•</span>
            <span>Available for universities and enterprises</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;