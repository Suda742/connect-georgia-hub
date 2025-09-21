import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Zap } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-16 bg-gradient-to-br from-white via-brand-primary-light to-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-brand-accent/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-brand-primary/10 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Trust indicators */}
            <div className="flex items-center space-x-4 text-body-secondary">
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4 text-brand-success" />
                <span className="georgian-text font-medium">უსაფრთხო</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4 text-brand-success" />
                <span className="georgian-text font-medium">სანდო</span>
              </div>
              <div className="flex items-center space-x-1">
                <Zap className="w-4 h-4 text-brand-success" />
                <span className="georgian-text font-medium">სწრაფი</span>
              </div>
            </div>

            {/* Main headline */}
            <div className="space-y-6">
              <h1 className="text-hero georgian-text">
                იპოვე სანდო{" "}
                <span className="bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent">
                  დისპეტჩერი
                </span>{" "}
                ან მძღოლი მარტივად
              </h1>
              
              <p className="text-subheading georgian-text max-w-lg">
                DCD.ge გეხმარება სწრაფად და უსაფრთხოდ დაკავშირებაში. შეუერთდი ათასობით 
                პროფესიონალს, რომლებიც ჩვენს პლატფორმას ენდობიან.
              </p>
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              <Button 
                className="btn-hero group animate-pulse-glow georgian-text"
                size="lg"
              >
                დარეგისტრირდი ახლა
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <p className="text-body-secondary georgian-text">
                ✓ რეგისტრაცია უფასოა  ✓ მაშინვე დაიწყე მუშაობა  ✓ 24/7 მხარდაჭერა
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-headline font-black text-brand-primary">5000+</div>
                <div className="text-body-secondary georgian-text">რეგისტრირებული</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-headline font-black text-brand-primary">24/7</div>
                <div className="text-body-secondary georgian-text">მხარდაჭერა</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-headline font-black text-brand-primary">99%</div>
                <div className="text-body-secondary georgian-text">კმაყოფილება</div>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10">
              <img 
                src={heroIllustration} 
                alt="DCD.ge - Connect drivers and dispatchers"
                className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl"
              />
            </div>
            
            {/* Floating elements around illustration */}
            <div className="absolute top-10 -left-4 w-16 h-16 bg-brand-accent/20 rounded-full flex items-center justify-center animate-float">
              <Users className="w-8 h-8 text-brand-accent" />
            </div>
            <div className="absolute bottom-10 -right-4 w-12 h-12 bg-brand-success/20 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '0.5s'}}>
              <Shield className="w-6 h-6 text-brand-success" />
            </div>
            <div className="absolute top-1/2 -right-8 w-14 h-14 bg-brand-primary/20 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1.5s'}}>
              <Zap className="w-7 h-7 text-brand-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;