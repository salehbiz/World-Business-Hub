import React from 'react';
import { Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand */}
          <div className="col-span-1 md:col-span-5">
            <a href="#" className="text-2xl font-bold tracking-tight text-white block mb-6">
              World Business <span className="text-gold-500">Hub</span>
            </a>
            <p className="text-muted text-sm leading-relaxed max-w-md mb-8 opacity-80">
              Empowering nations and organizations with tailored advisory services, innovative financing structures, and actionable strategies that drive sustainable development.
            </p>
            <div className="flex gap-4">
              {/* LinkedIn Social Link */}
              <a 
                href="https://www.linkedin.com/company/dr-usman-zafar/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all cursor-pointer border border-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} fill="currentColor" className="stroke-none" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="col-span-1 md:col-span-3 md:col-start-7">
            <h4 className="text-white font-bold mb-6 text-sm tracking-wide uppercase">Company</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Team', 'Services', 'Expertise', 'Articles'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} onClick={() => onNavigate(item.toLowerCase() === 'home' ? 'home' : item.toLowerCase())} className="text-muted hover:text-gold-500 text-[0.85rem] transition-colors block">
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <button onClick={() => onNavigate('contact')} className="text-muted hover:text-gold-500 text-[0.85rem] transition-colors block">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="text-white font-bold mb-6 text-sm tracking-wide uppercase">Contact</h4>
            <ul className="space-y-3 text-[0.85rem] text-muted">
              <li className="flex items-start gap-3">
                <span className="text-gold-500 mt-0.5">📍</span>
                <span>Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold-500">✉️</span>
                <a href="mailto:advisor@usmanzafar.com" className="hover:text-white">advisor@usmanzafar.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600">
          <p>&copy; {new Date().getFullYear()} World Business Hub FZE. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;