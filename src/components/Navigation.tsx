import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useScrollToSection } from '../utils/navigation';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Gallery', 'Blog', 'About'];

  const handleNavClick = (item: string) => {
    setIsMobileMenuOpen(false);
    scrollToSection(item);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${isScrolled ? 'shadow-lg' : ''
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button
            onClick={() => handleNavClick('Home')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/500X1500.png"
              alt="Cricket Jersey Designs Logo"
              className="h-12 w-auto"
            />
            <span className="sr-only">Fast Colour Sublimation</span>
          </button>

          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`text-xs font-black uppercase tracking-widest transition-all duration-300 relative group py-2 ${(location.pathname === '/gallery' && item === 'Gallery') || (location.pathname === '/' && item === 'Home' && !isScrolled)
                  ? 'text-uniform-secondary'
                  : 'text-navy-dark hover:text-uniform-secondary'
                  }`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 h-1 bg-uniform-secondary transition-all duration-500 ${(location.pathname === '/gallery' && item === 'Gallery')
                  ? 'w-full'
                  : 'w-0 group-hover:w-full'
                  }`}></span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-black hover:bg-gray-100 rounded-lg transition-all"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-6 py-6 bg-white border-t border-gray-50 shadow-2xl space-y-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className={`block w-full text-left px-5 py-4 rounded-xl transition-all duration-300 font-bold uppercase tracking-widest text-sm ${(location.pathname === '/gallery' && item === 'Gallery') || (location.pathname === '/' && item === 'Home' && !isMobileMenuOpen)
                ? 'bg-uniform-secondary/10 text-uniform-secondary'
                : 'text-gray-700 hover:bg-slate-50 hover:text-uniform-secondary'
                }`}
            >
              <div className="flex items-center justify-between">
                {item}
                <svg className="w-4 h-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
