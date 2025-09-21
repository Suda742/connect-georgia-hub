import { UserPlus, Users, Briefcase } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "რეგისტრაცია",
    description: "მარტივი რეგისტრაცია 2 წუთში. ატვირთე დოკუმენტები და შეავსე პროფილი.",
    number: "1"
  },
  {
    icon: Users,
    title: "დაკავშირება",
    description: "ჩვენი სისტემა გიპოვის საუკეთესო შესაბამისობას შენი მოთხოვნების მიხედვით.",
    number: "2"
  },
  {
    icon: Briefcase,
    title: "მუშაობის დაწყება",
    description: "დაიწყე თანამშრომლობა სანდო პარტნიორებთან და იაღე წარმატებული კარიერა.",
    number: "3"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-headline-primary georgian-text mb-6">
            როგორ მუშაობს DCD.ge?
          </h2>
          <p className="text-subheading max-w-2xl mx-auto georgian-text">
            სამი მარტივი ნაბიჯი წარმატებული კარიერისათვის სატრანსპორტო სფეროში
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index}
                className="card-step text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  <div className="w-12 h-12 bg-brand-primary-light rounded-full flex items-center justify-center mx-auto -mt-2 icon-float">
                    <Icon className="w-6 h-6 text-brand-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-headline-secondary georgian-text mb-4">
                  {step.title}
                </h3>
                <p className="text-body-primary georgian-text">
                  {step.description}
                </p>

                {/* Connector Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-brand-primary to-transparent opacity-30 z-0" 
                       style={{ width: 'calc(100% - 2rem)', marginLeft: '1rem' }} />
                )}
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-subheading mb-8 georgian-text">
            მზად ხარ დასაწყებად?
          </p>
          <button className="btn-hero georgian-text">
            შეუერთდი DCD.ge-ს ახლავე
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;