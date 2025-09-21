import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "გიორგი მ.",
    role: "მძღოლი",
    content: "DCD.ge-მ ჩემი კარიერა შეცვალა. ახლა მუშაობა მაქვს საუკეთესო კომპანიებთან და ვარ კმაყოფილი ჩემი შემოსავლით.",
    rating: 5,
    avatar: "GM"
  },
  {
    name: "ნინო კ.",
    role: "დისპეტჩერი",
    content: "ძალიან მარტივი და სანდო პლატფორმაა. სწრაფად ვიპოვე შესაბამისი მძღოლები ჩემი კომპანიისათვის.",
    rating: 5,
    avatar: "NK"
  },
  {
    name: "ლევან ს.",
    role: "ტრანსპორტის კომპანია",
    content: "ეს არის საუკეთესო გადაწყვეტა ჩვენი ბიზნესისათვის. 24/7 მხარდაჭერა და სანდო სერვისი.",
    rating: 5,
    avatar: "LS"
  }
];

const companies = [
  { name: "ბაგრატიონი ლოჯისტიკს", logo: "BL" },
  { name: "თბილისი ტრანსპორტი", logo: "TT" },
  { name: "საქართველოს ლოჯისტიკა", logo: "SL" },
  { name: "კავკასია შიპინგი", logo: "KS" },
];

const SocialProofSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Companies Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-gray-500 text-sm mb-8 georgian-text">
            ჩვენზე ენდობიან წამყვანი კომპანიები
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {companies.map((company, index) => (
              <div 
                key={index}
                className="flex items-center justify-center p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-accent rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">{company.logo}</span>
                </div>
                <span className="text-gray-600 font-medium text-sm georgian-text">{company.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 georgian-text">
            რას ამბობენ ჩვენი მომხმარებლები
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto georgian-text">
            ათასობი კმაყოფილი მომხმარებელი ყოველდღიურად იყენებს DCD.ge-ს
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-professional group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="flex items-start mb-4">
                <Quote className="w-8 h-8 text-brand-primary opacity-50 mr-2 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-gray-700 leading-relaxed mb-4 georgian-text">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-cta rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-semibold text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 georgian-text">{testimonial.name}</div>
                  <div className="text-sm text-gray-500 georgian-text">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-brand-primary-light to-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 georgian-text">
              შეუერთდი ათასობით კმაყოფილ მომხმარებელს
            </h3>
            <p className="text-gray-600 mb-6 georgian-text">
              დარეგისტრირდი ახლა და დაიწყე წარმატებული კარიერა DCD.ge-სთან ერთად
            </p>
            <button className="btn-hero georgian-text">
              დარეგისტრირდი უფასოდ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;