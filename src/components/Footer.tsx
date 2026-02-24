import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useScrollToSection } from '../utils/navigation';

const Footer = () => {
  const scrollToSection = useScrollToSection();
  const quickLinks = ['Home', 'Gallery', 'Blog', 'About',];
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/p/Fastcolors-61566794944064/' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: 'https://www.instagram.com/fastcolorsretail/' },
    { icon: Linkedin, href: '#' }
  ];

  return (
    <footer className="bg-[#0a1d37] text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Info */}
          <div className="text-left">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">F</span>
              </div>
              <span className="text-white font-bold text-xl">FastColors</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              FastColors delivers premium sublimation printing with vibrant sublimation prints, durable fabrics, precise stitching, quick turnaround, personalized designs, reliable quality, and comfortable fits for every team.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded flex items-center justify-center transition-colors"
                  >
                    <Icon size={18} className="text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left">
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="text-left">
            <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-blue-500 flex-shrink-0 mt-1" size={18} />
                <span className="text-sm leading-relaxed">
                  72, KNP Subramaniam Nagar Pudur, Pirivu, Dharapuram Road, Tiruppur, Tamil Nadu 641604
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-500 flex-shrink-0" size={18} />
                <a href="tel:+917812865788" className="text-sm hover:text-white transition-colors">
                  +91 7812 865 788
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-blue-500 flex-shrink-0" size={18} />
                <a href="mailto:fastcolorsfashion@gmail.com" className="text-sm hover:text-white transition-colors">
                  fastcolorsfashion@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8">
          <p className="text-gray-500 text-xs text-center">
            &copy; 2026 FAST COLORS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
