import React, { useState } from 'react';
import { SectionHeader, FadeIn, Button, SectionModule, Slider } from '../components/UI';
import { ArrowRight, Activity, Building, Cpu, Globe2, BookOpen, Coins, Users2, Building2, Heart, Hammer, Leaf, GraduationCap, Home, Bus, Mic2 } from 'lucide-react';

// Services Data (Updated IDs to match specific URL requirements)
const servicesData = [
  { 
    id: 'board-advisory-and-market-acceleration-services', 
    title: "Board Advisory & Market Acceleration", 
    desc: "Strategic guidance for business growth and market expansion through expert advisory services.", 
    icon: <Activity />
  },
  { 
    id: 'smart-cities-strategic-advisory-services', 
    title: "Smart Cities Strategic Advisory", 
    desc: "Comprehensive consulting for urban development and smart infrastructure implementation.", 
    icon: <Building />
  },
  { 
    id: 'artificial-intelligenceai-advisory-services', 
    title: "Artificial Intelligence Advisory", 
    desc: "Expert AI strategy and implementation guidance for digital transformation initiatives.", 
    icon: <Cpu />
  },
  { 
    id: 'keynotes-and-public-speaking-services', 
    title: "Keynotes & Public Speaking", 
    desc: "Inspiring global audiences with insights on economic trends, digital transformation, and future readiness.", 
    icon: <Mic2 />
  },
  { 
    id: 'academic-advisory-accreditation', 
    title: "Academic Advisory & Accreditation", 
    desc: "Educational institution guidance and accreditation support for academic excellence.", 
    icon: <BookOpen />
  },
  { 
    id: 'fund-raising-services', 
    title: "Fund Raising Services", 
    desc: "Strategic fundraising support and investor relations for startups and growing businesses.", 
    icon: <Coins />
  },
  { 
    id: 'executive-training-coaching', 
    title: "Executive Training & Coaching", 
    desc: "Leadership development and executive coaching for professional growth and success.", 
    icon: <Users2 />
  },
];

interface ServicesProps {
  onServiceClick: (id: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onServiceClick }) => {
  const [activeId, setActiveId] = useState('board-advisory-and-market-acceleration-services');
  const activeService = servicesData.find(s => s.id === activeId) || servicesData[0];

  return (
    <SectionModule id="services">
      <SectionHeader title="Professional Advisory Services" subtitle="Tailored solutions for complex challenges" eyebrow="Our Solutions" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
        {/* Left: Interactive List */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          {servicesData.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveId(s.id)}
              className={`text-left px-6 py-5 rounded-2xl transition-all duration-500 ease-out-expo flex items-center gap-4 group relative overflow-hidden font-sans ${
                activeId === s.id 
                  ? 'bg-white/[0.03] border border-gold-500/30 text-white shadow-lg translate-x-4' 
                  : 'bg-transparent border border-transparent text-muted hover:bg-white/[0.02] hover:text-white hover:border-white/5 hover:translate-x-2'
              }`}
            >
              {/* Active Indicator Glow */}
              {activeId === s.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-transparent pointer-events-none opacity-50 animate-pulse-soft"></div>
              )}

              <div className={`transition-all duration-300 transform group-hover:scale-110 ${activeId === s.id ? 'text-gold-500 scale-110' : 'text-muted group-hover:text-white'}`}>
                {React.cloneElement(s.icon as React.ReactElement<any>, { size: 20 })}
              </div>
              <span className="text-sm font-semibold tracking-wide flex-1 relative z-10">{s.title}</span>
              
              {activeId === s.id && <ArrowRight size={16} className="text-gold-500 animate-pulse" />}
            </button>
          ))}
        </div>

        {/* Right: Active Detail Panel */}
        <div className="lg:col-span-7">
          <div 
             key={activeId} 
             className="h-full glass-module rounded-[2.5rem] p-10 md:p-16 flex flex-col justify-center items-start relative overflow-hidden bg-dark-800/50 animate-fade-in"
          >
             {/* Glow */}
             <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-[100px] animate-pulse-slow"></div>
             
             <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-600 text-dark-900 flex items-center justify-center mb-8 shadow-lg shadow-gold-500/20 transform transition-transform hover:rotate-3 duration-500">
                   {React.cloneElement(activeService.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight font-sans">{activeService.title}</h3>
                <p className="text-base md:text-lg text-muted font-light leading-relaxed mb-10 tracking-tight font-sans">
                  {activeService.desc}
                </p>
                
                <Button 
                  variant="secondary" 
                  className="group/btn !px-8 hover:bg-gold-500/10 hover:border-gold-500/30" 
                  onClick={() => onServiceClick(activeService.id)}
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
             </div>
          </div>
        </div>
      </div>
    </SectionModule>
  );
};

// Expertise Data (Updated with internal routing slugs)
const expertiseData = [
  { id: "infrastructure-development", title: "Infrastructure Development", desc: "Creating robust foundations for economic growth", icon: <Hammer /> },
  { id: "green-energy-sustainability", title: "Green Energy & Sustainability", desc: "Pioneering renewable energy solutions and sustainable practices for environmental protection", icon: <Leaf /> },
  { id: "education-youth-development", title: "Education & Youth Development", desc: "Empowering future generations through innovative education", icon: <GraduationCap /> },
  { id: "real-estate-mining", title: "Real Estate & Mining", desc: "Strategic development and resource management solutions", icon: <Home /> },
  { id: "transportation-mobility", title: "Transportation & Mobility", desc: "Revolutionizing transportation systems and mobility solutions for connected communities", icon: <Bus /> },
  // Extra items to fill slider if needed
  { id: "smart-cities-sector", title: "Smart Cities & Urban Development", desc: "Building intelligent urban ecosystems for the future", icon: <Building2 /> },
  { id: "healthcare-sector", title: "Healthcare & Public Wellbeing", desc: "Transforming healthcare systems and wellness programs", icon: <Heart /> },
];

interface ExpertiseProps {
  onExpertiseClick?: (id: string) => void;
}

export const Expertise: React.FC<ExpertiseProps> = ({ onExpertiseClick }) => {
  return (
    <SectionModule id="expertise" className="relative">
      <div className="absolute inset-0 bg-dark-800/30 -skew-y-1 transform origin-top-left z-0 h-full w-full pointer-events-none"></div>
      
      <div className="relative z-10 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
         <div>
            <div className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase font-sans mb-2">Our Expertise</div>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tighter font-sans">
              Sectors that define the future
            </h2>
         </div>
         <Button variant="outline" className="hidden md:flex">View All Sectors</Button>
      </div>

      <div className="relative z-10">
        <Slider gap={24}>
          {expertiseData.map((item, idx) => (
            <div 
              key={idx} 
              className="snap-start shrink-0 w-[300px] glass-card rounded-[2rem] p-8 hover:border-gold-500/30 transition-all duration-500 group flex flex-col h-[320px] cursor-pointer hover:-translate-y-2 hover:shadow-2xl"
              onClick={() => onExpertiseClick && onExpertiseClick(item.id)}
            >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gold-500 mb-6 group-hover:bg-gold-500 group-hover:text-dark-900 transition-colors shadow-lg group-hover:rotate-3 duration-500">
                  {React.cloneElement(item.icon as React.ReactElement<any>, { size: 24 })}
                </div>
                <h4 className="text-lg font-bold text-white mb-4 tracking-tight leading-tight font-sans">{item.title}</h4>
                <p className="text-sm text-muted leading-relaxed opacity-80 flex-grow font-sans group-hover:opacity-100 transition-opacity">{item.desc}</p>
                <div className="pt-6 mt-auto border-t border-white/5">
                   <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold-500 group-hover:text-gold-500 transition-all duration-300 group-hover:translate-x-2">
                      <ArrowRight size={14} />
                   </div>
                </div>
            </div>
          ))}
        </Slider>
      </div>
    </SectionModule>
  );
};