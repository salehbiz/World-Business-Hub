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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
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
    { name: 'Keynotes', page: 'keynotes', href: '#' },
    { name: 'Awards', page: 'awards', href: '#' },
    { name: 'Contact', page: 'contact', href: '#' },
  ];

  const handleNavClick = (link: { name: string, page: string, href: string }) => {
    setMobileMenuOpen(false);
    onNavigate(link.page);
    
    if (link.page === 'home' && link.href !== '#hero') {
      setTimeout(() => {
        const element = document.querySelector(link.href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <header 
          className={`w-full max-w-6xl pointer-events-auto transition-all duration-500 ease-out-expo rounded-full px-6 py-3 flex items-center justify-between border ${
            scrolled || mobileMenuOpen
              ? 'bg-dark-900/80 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]' 
              : 'bg-white/5 backdrop-blur-md border-white/5 shadow-lg'
          }`}
        >
          {/* Logo */}
          <div className="flex items-center z-50 shrink-0">
             <button onClick={() => onNavigate('home')} className="block transition-transform hover:scale-105 active:scale-95 duration-300">
               <img 
                 src="https://i.postimg.cc/NMXfkdQq/image-removebg-preview.png" 
                 alt="World Business Hub" 
                 className="h-10 md:h-12 w-auto object-contain"
               />
             </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className={`text-[0.8rem] font-medium px-4 py-2 rounded-full transition-all duration-300 tracking-wide font-sans relative group overflow-hidden ${
                  (currentPage === link.page)
                    ? 'text-white' 
                    : 'text-muted hover:text-white'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                
                {/* Active/Hover State Background */}
                <span className={`absolute inset-0 bg-white/5 rounded-full transition-opacity duration-300 ${currentPage === link.page ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
                
                {/* Underline Animation */}
                {(currentPage === link.page) && (
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 h-0.5 w-3 bg-gold-500 rounded-full"></span>
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTA - STRICTLY desktop only, routes to Contact Page */}
          <div className="hidden lg:block shrink-0 ml-4">
            <Button 
              variant="primary" 
              onClick={() => onNavigate('contact')} 
              className="!py-2 !px-5 !text-[0.75rem] !rounded-full whitespace-nowrap !shadow-none hover:!shadow-lg"
            >
              Request Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white z-50 p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-dark-950/95 backdrop-blur-3xl z-40 transition-all duration-500 ease-out-expo pt-32 px-6 ${
        mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
        <div className="flex flex-col gap-6">
          {navLinks.map((link, i) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link)}
              className="text-2xl font-bold text-white text-left py-4 border-b border-white/5 tracking-tight font-sans active:scale-95 transition-transform origin-left"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.name}
            </button>
          ))}
          <Button variant="primary" onClick={() => { setMobileMenuOpen(false); onNavigate('contact'); }} className="w-full mt-4">
            Request Consultation
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;