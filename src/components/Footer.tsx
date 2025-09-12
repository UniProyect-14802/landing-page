import { Rocket, Mail, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Rocket className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">UniProyect</span>
            </div>
            <p className="text-white/70">
              Transforming academic collaboration across Latin America with 
              purpose-built project management tools.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#features" className="hover:text-white transition-smooth">Features</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Demo</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">API</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition-smooth">For Students</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">For Universities</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">For Enterprises</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Integration</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white transition-smooth">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Documentation</a></li>
              <li><a href="#contact" className="hover:text-white transition-smooth">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-smooth">Status</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="text-white/70 text-sm">
            © 2025 UniProyect. All rights reserved. Built with Power Apps.
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-white/70 hover:text-white transition-smooth">
              <Mail className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-smooth">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-white/70 hover:text-white transition-smooth">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;