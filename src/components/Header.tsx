import { Button } from "@/components/ui/button";
import { Rocket, Menu, Globe, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
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
          <a href="#features" className="text-foreground hover:text-primary transition-smooth" aria-label={t.features}>
            {t.features}
          </a>
          <a href="#problem" className="text-foreground hover:text-primary transition-smooth" aria-label={t.solutions}>
            {t.solutions}
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-smooth" aria-label={t.pricing}>
            {t.pricing}
          </a>
          <a href="#stats" className="text-foreground hover:text-primary transition-smooth" aria-label={t.impact}>
            {t.impact}
          </a>
          <a href="#reviews" className="text-foreground hover:text-primary transition-smooth" aria-label={t.reviews}>
            {t.reviews}
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-smooth" aria-label={t.contact}>
            {t.contact}
          </a>
          <a href="#search" className="text-foreground hover:text-primary transition-smooth" aria-label="Búsqueda">
            Búsqueda
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleLanguage}
            className="flex items-center space-x-2"
            aria-label={`Cambiar idioma a ${language === 'en' ? 'Español' : 'English'}`}
          >
            <Globe className="h-4 w-4" />
            <span>{language.toUpperCase()}</span>
          </Button>
          <a href="https://apps.powerapps.com/play/e/default-0e0cb060-09ad-49f5-a005-68b9b49aa1f6/a/feb03cb2-52f0-4625-8adc-353d045e401f?tenantId=0e0cb060-09ad-49f5-a005-68b9b49aa1f6&hint=9c7d8faa-dc8d-4eec-912e-c3fd8b102272&sourcetime=1762355228619#">
            <Button variant="ghost">
              {t.signIn}
            </Button>
          </a>
          <a href="https://apps.powerapps.com/play/e/default-0e0cb060-09ad-49f5-a005-68b9b49aa1f6/a/feb03cb2-52f0-4625-8adc-353d045e401f?tenantId=0e0cb060-09ad-49f5-a005-68b9b49aa1f6&hint=9c7d8faa-dc8d-4eec-912e-c3fd8b102272&sourcetime=1762355228619#">
            <Button variant="hero" size="lg">
              {t.getStarted}
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleLanguage}
            className="flex items-center space-x-1"
            aria-label={`Cambiar idioma a ${language === 'en' ? 'Español' : 'English'}`}
          >
            <Globe className="h-4 w-4" />
            <span className="text-xs">{language.toUpperCase()}</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMobileMenu}
            aria-label="Abrir menú de navegación"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#features" 
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={closeMobileMenu}
                aria-label={t.features}
              >
                {t.features}
              </a>
              <a 
                href="#problem" 
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={closeMobileMenu}
                aria-label={t.solutions}
              >
                {t.solutions}
              </a>
              <a 
                href="#pricing" 
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={closeMobileMenu}
                aria-label={t.pricing}
              >
                {t.pricing}
              </a>
              <a 
                href="#stats" 
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={closeMobileMenu}
                aria-label={t.impact}
              >
                {t.impact}
              </a>
              <a 
                href="#reviews" 
                className="text-foreground hover:text-primary transition-smooth py-2"
                onClick={closeMobileMenu}
                aria-label={t.reviews}
              >
                {t.reviews}
              </a>
              <a 
                 href="#contact" 
                 className="text-foreground hover:text-primary transition-smooth py-2"
                 onClick={closeMobileMenu}
                 aria-label={t.contact}
               >
                 {t.contact}
               </a>
               <a 
                 href="#search" 
                 className="text-foreground hover:text-primary transition-smooth py-2"
                 onClick={closeMobileMenu}
                 aria-label="Búsqueda"
               >
                 Búsqueda
               </a>
              
              <div className="border-t border-border pt-4 mt-4">
                <div className="flex flex-col space-y-3">
                  <a href="https://apps.powerapps.com/play/e/default-0e0cb060-09ad-49f5-a005-68b9b49aa1f6/a/feb03cb2-52f0-4625-8adc-353d045e401f?tenantId=0e0cb060-09ad-49f5-a005-68b9b49aa1f6&hint=9c7d8faa-dc8d-4eec-912e-c3fd8b102272&sourcetime=1762355228619#" onClick={closeMobileMenu}>
                    <Button variant="ghost" className="w-full justify-start">
                      {t.signIn}
                    </Button>
                  </a>
                  <a href="https://apps.powerapps.com/play/e/default-0e0cb060-09ad-49f5-a005-68b9b49aa1f6/a/feb03cb2-52f0-4625-8adc-353d045e401f?tenantId=0e0cb060-09ad-49f5-a005-68b9b49aa1f6&hint=9c7d8faa-dc8d-4eec-912e-c3fd8b102272&sourcetime=1762355228619#" onClick={closeMobileMenu}>
                    <Button variant="hero" className="w-full">
                      {t.getStarted}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
