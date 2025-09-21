import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "რა არის DCD.ge?",
    answer: "DCD.ge არის ინოვაციური პლატფორმა, რომელიც აკავშირებს მძღოლებს და დისპეტჩერებს საქართველოში. ჩვენი მიზანია შევუქმნათ სანდო, უსაფრთხო და ეფექტური გარემო ტრანსპორტის სფეროს ყველა მონაწილისათვის."
  },
  {
    question: "როგორ მუშაობს DCD.ge?",
    answer: "პროცესი ძალიან მარტივია: 1) დარეგისტრირდი და შეავსე შენი პროფილი, 2) ჩვენი AI სისტემა მოგიძებნის საუკეთესო შესაბამისობას, 3) დაიწყე მუშაობა სანდო პარტნიორებთან. ყველაფერი ღია და გამჭვირვალეა."
  },
  {
    question: "რაოდენ უსაფრთხოა პლატფორმა?",
    answer: "უსაფრთხოება ჩვენი მთავარი პრიორიტეტია. ყველა მომხმარებელი გადის ვერიფიკაციის პროცესს, ვამოწმებთ დოკუმენტებს და რეიტინგებს. გვაქვს 24/7 მონიტორინგი და მხარდაჭერის სერვისი."
  },
  {
    question: "რამდენი ღირს რეგისტრაცია?",
    answer: "რეგისტრაცია DCD.ge-ზე სრულიად უფასოა. ჩვენ ვიღებთ მცირე კომისიას მხოლოდ წარმატებული თანამშრომლობის შემთხვევაში. ეს ნიშნავს, რომ ჩვენ გაქვთ ინტერესი თქვენს წარმატებაში."
  },
  {
    question: "რა სერვისები გაქვთ მძღოლებისათვის?",
    answer: "მძღოლებისათვის ვთავაზობთ: სანდო დისპეტჩერულ კომპანიებთან დაკავშირების შესაძლებლობას, გამჭვირვალე ანაზღაურების სისტემას, 24/7 მხარდაჭერას, ასევე ტრენინგებსა და განვითარების პროგრამებს."
  },
  {
    question: "რა სერვისები გაქვთ დისპეტჩერებისათვის?",
    answer: "დისპეტჩერებისათვის ვთავაზობთ: მძღოლთა ფართო ბაზას, რეიტინგისა და რეკომენდაციების სისტემას, ავტომატურ შესაბამისობების მოძებნას, ხელშეკრულებების მართვის ინსტრუმენტებს და ბიზნეს ანალიტიკას."
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 georgian-text">
            ხშირად დასმული კითხვები
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto georgian-text">
            ყველაფერი, რაც უნდა იცოდე DCD.ge-ს შესახებ
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="card-professional border-none"
              >
                <AccordionTrigger className="text-left hover:no-underline group py-6">
                  <div className="flex items-center w-full">
                    <div className="w-8 h-8 bg-brand-primary-light rounded-full flex items-center justify-center mr-4 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                      <span className="font-semibold text-brand-primary group-hover:text-white text-sm">
                        {index + 1}
                      </span>
                    </div>
                    <span className="text-lg font-semibold text-gray-900 georgian-text flex-1 pr-4">
                      {faq.question}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-6">
                  <div className="ml-12 pr-4">
                    <p className="text-gray-600 leading-relaxed georgian-text">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 georgian-text">
              კვლავ გაქვს კითხვები?
            </h3>
            <p className="text-gray-600 mb-6 georgian-text">
              ჩვენი მხარდაჭერის გუნდი 24/7 მზადაა დაგეხმაროს
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary georgian-text">
                დაგვიკავშირდი
              </button>
              <button className="btn-hero georgian-text">
                დარეგისტრირდი ახლა
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;