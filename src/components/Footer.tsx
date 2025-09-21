import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-cta rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-bold text-white georgian-text">
                DCD.ge
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed georgian-text">
              საქართველოს წამყვანი პლატფორმა მძღოლებისა და დისპეტჩერების დასაკავშირებლად.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-primary transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-primary transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand-primary transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold georgian-text">სწრაფი ლინკები</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 georgian-text">მთავარი</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors duration-300 georgian-text">როგორ მუშაობს</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors duration-300 georgian-text">FAQ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 georgian-text">ხელშეკრულება</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold georgian-text">სერვისები</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 georgian-text">მძღოლებისათვის</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 georgian-text">დისპეტჩერებისათვის</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 georgian-text">კომპანიებისათვის</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 georgian-text">ტრენინგები</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold georgian-text">კონტაქტი</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-accent" />
                <span className="text-gray-300">+995 555 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-accent" />
                <span className="text-gray-300">info@dcd.ge</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-brand-accent" />
                <span className="text-gray-300 georgian-text">თბილისი, საქართველო</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm georgian-text">
              © 2024 DCD.ge. ყველა უფლება დაცულია.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300 georgian-text">
                კონფიდენციალურობა
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300 georgian-text">
                წესები
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300 georgian-text">
                მხარდაჭერა
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;