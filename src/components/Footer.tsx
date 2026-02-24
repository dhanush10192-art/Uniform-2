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
    <footer className="bg-navy-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-8">
              <img
                src="/500X1500.png"
                alt="Cricket Jersey Designs Logo"
                className="h-14 w-auto brightness-110"
              />
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed font-medium">
              India's premier sublimation printing facility. We deliver high-definition custom jerseys with vibrant permanent prints and breathable performance fabrics.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-11 h-11 bg-white/5 border border-white/10 hover:bg-uniform-secondary hover:border-transparent rounded-xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
                  >
                    <Icon size={20} className="text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-xl mb-8 uppercase tracking-widest">Navigation</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link)}
                    className="text-gray-400 hover:text-uniform-secondary transition-colors duration-300 font-bold uppercase tracking-tighter text-sm flex items-center justify-center md:justify-start gap-2 group w-full"
                  >
                    <span className="w-1.5 h-1.5 bg-uniform-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services/Trust Tags (Implicitly using About/Gallery links) */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-xl mb-8 uppercase tracking-widest">Our Promise</h3>
            <ul className="space-y-4 text-sm font-medium text-gray-400">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Permanent Color Fusion
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Breathable Performance Fabric
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Precision Custom Stitching
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                Pan-India Delivery
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-bold text-xl mb-8 uppercase tracking-widest">Contact</h3>
            <ul className="space-y-5">
              <li className="flex items-start justify-center md:justify-start gap-4">
                <MapPin className="text-uniform-secondary flex-shrink-0" size={20} />
                <span className="text-sm leading-relaxed">72, KNP Subramaniam Nagar Pudur, Pirivu, Dharapuram Road, Tiruppur, TN 641604</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-4">
                <Phone className="text-uniform-secondary flex-shrink-0" size={20} />
                <a href="tel:+917812865788" className="text-sm hover:text-white transition-colors font-bold">+91 7812 865 788</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-4">
                <Mail className="text-uniform-secondary flex-shrink-0" size={20} />
                <a href="mailto:fastcolorsfashion@gmail.com" className="text-sm hover:text-white transition-colors font-bold lowercase">fastcolorsfashion@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">
              &copy; 2026 FAST COLOURS. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8 text-xs font-bold uppercase tracking-widest">
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
