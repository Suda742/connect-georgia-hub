import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-sm shadow-md" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-cta rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="text-xl font-bold text-brand-primary georgian-text">
              DCD.ge
            </span>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-600 hover:text-brand-primary transition-colors duration-300 georgian-text"
            >
              როგორ მუშაობს
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-600 hover:text-brand-primary transition-colors duration-300 georgian-text"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-brand-primary transition-colors duration-300 georgian-text"
            >
              კონტაქტი
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="hidden sm:inline-flex text-brand-primary hover:text-brand-primary-dark georgian-text"
            >
              შესვლა
            </Button>
            <Button className="btn-hero georgian-text">
              დარეგისტრირდი
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;