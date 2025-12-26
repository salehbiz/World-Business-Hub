import React, { useState, useEffect } from 'react';
import { Button } from './UI';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      if (currentPage === 'home') {
        const sections = ['hero', 'services', 'expertise', 'articles', 'contact'];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= 500) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  // Close mobile menu on resize to desktop to prevent ghost elements
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
    { name: 'Home', page: 'home', href: '#hero' },
    { name: 'About', page: 'about', href: '#' },
    { name: 'Team', page: 'team', href: '#' },
    { name: 'Services', page: 'services', href: '#' },
    { name: 'Expertise', page: 'home', href: '#expertise' },
    { name: 'Articles', page: 'home', href: '#articles' },
    { name: 'Contact', page: 'home', href: '#contact' },
  ];

  const handleNavClick = (link: { name: string, page: string, href: string }) => {
    setMobileMenuOpen(false);
    
    if (link.page !== currentPage) {
      onNavigate(link.page);
      if (link.page === 'home' && link.href !== '#hero') {
        setTimeout(() => {
          const element = document.querySelector(link.href);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      if (link.page === 'home') {
        const element = document.querySelector(link.href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    }
  };

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <header 
          className={`w-full max-w-6xl transition-all duration-300 rounded-full px-6 py-3 flex items-center justify-between border ${
            scrolled || mobileMenuOpen
              ? 'bg-dark-900/90 backdrop-blur-xl border-white/10 shadow-2xl' 
              : 'bg-white/5 backdrop-blur-sm border-white/5'
          }`}
        >
          {/* Logo */}
          <div className="flex items-center z-50 shrink-0">
             <button onClick={() => onNavigate('home')} className="text-lg font-bold tracking-tight text-white whitespace-nowrap font-sans text-left">
               World Business <span className="text-gold-500">Hub</span>
             </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className={`text-[0.8rem] font-medium px-4 py-2 rounded-full transition-all duration-300 tracking-wide font-sans ${
                  (currentPage === link.page || (link.page === 'home' && activeSection === link.href.substring(1) && currentPage === 'home'))
                    ? 'text-white' 
                    : 'text-muted hover:text-white'
                }`}
              >
                {link.name}
                {(currentPage === link.page || (link.page === 'home' && activeSection === link.href.substring(1) && currentPage === 'home')) && (
                  <span className="block h-0.5 w-3 bg-gold-500 rounded-full mx-auto mt-0.5"></span>
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTA - Visible only on Desktop */}
          <div className="hidden lg:block shrink-0 ml-4">
            <Button 
              variant="primary" 
              onClick={() => handleNavClick({ name: 'Contact', page: 'home', href: '#contact' })} 
              className="!py-2 !px-5 !text-[0.75rem] !rounded-full whitespace-nowrap"
            >
              Request Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>
      </div>

      {/* Mobile Menu Overlay - Hidden on Desktop (lg:hidden) to prevent ghost button issues */}
      <div className={`lg:hidden fixed inset-0 bg-dark-950 z-40 transition-transform duration-500 pt-32 px-6 ${
        mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link)}
              className="text-xl font-bold text-white text-left py-4 border-b border-white/5 tracking-tight font-sans"
            >
              {link.name}
            </button>
          ))}
          {/* Removed Mobile CTA Button */}
        </div>
      </div>
    </>
  );
};

export default Navbar;