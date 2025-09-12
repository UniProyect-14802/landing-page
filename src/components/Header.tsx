import { Button } from "@/components/ui/button";
import { Rocket, Menu, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Rocket className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-primary">
            UniProject
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground hover:text-primary transition-smooth">
            {t.features}
          </a>
          <a href="#problem" className="text-foreground hover:text-primary transition-smooth">
            {t.solutions}
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-smooth">
            {t.pricing}
          </a>
          <a href="#stats" className="text-foreground hover:text-primary transition-smooth">
            {t.impact}
          </a>
          <a href="#reviews" className="text-foreground hover:text-primary transition-smooth">
            {t.reviews}
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
            {t.contact}
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleLanguage}
            className="flex items-center space-x-2"
          >
            <Globe className="h-4 w-4" />
            <span>{language.toUpperCase()}</span>
          </Button>
          <Link to="/login">
            <Button variant="ghost">
              {t.signIn}
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="hero" size="lg">
              {t.getStarted}
            </Button>
          </Link>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </nav>
    </header>
  );
};

export default Header;