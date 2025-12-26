import React from 'react';
import { SectionHeader, FadeIn, SectionModule, Button, GlassCard } from '../components/UI';
import { Activity, Building, Cpu, Mic2, BookOpen, Coins, Users2, ArrowRight } from 'lucide-react';

export const servicesList = [
  { 
    id: 'board-advisory', 
    title: "Board Advisory & Market Acceleration", 
    desc: "Strategic guidance for boards and C-suite executives to navigate complex market dynamics and accelerate growth.",
    icon: <Activity />
  },
  { 
    id: 'smart-cities', 
    title: "Smart Cities Strategic Advisory", 
    desc: "Holistic consulting for governments and developers to build cognitive, sustainable, and future-ready urban ecosystems.",
    icon: <Building />
  },
  { 
    id: 'ai-advisory', 
    title: "Artificial Intelligence (AI) Advisory", 
    desc: "Demystifying AI to drive tangible business value, operational transformation, and digital readiness.",
    icon: <Cpu />
  },
  { 
    id: 'keynotes', 
    title: "Keynotes & Public Speaking", 
    desc: "Inspiring global audiences with insights on economic trends, digital transformation, and future readiness.",
    icon: <Mic2 />
  },
  { 
    id: 'academic-advisory', 
    title: "Academic Advisory & Accreditation", 
    desc: "Elevating educational institutions to global standards through strategic partnerships and accreditation support.",
    icon: <BookOpen />
  },
  { 
    id: 'fund-raising', 
    title: "Fund Raising Services", 
    desc: "Bridging the gap between ambitious projects and the right capital partners through strategic investment structuring.",
    icon: <Coins />
  },
  { 
    id: 'executive-training', 
    title: "Executive Training & Coaching", 
    desc: "Forging the next generation of visionary leaders through bespoke coaching and development programs.",
    icon: <Users2 />
  },
];

interface ServicesPageProps {
  onServiceClick: (id: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onServiceClick }) => {
  return (
    <div className="pt-32 pb-20">
      
      {/* --- HERO SECTION --- */}
      <section className="relative container mx-auto px-6 md:px-12 mb-20">
         <FadeIn>
           <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-10 h-[1px] bg-gold-500/50"></div>
                  <span className="text-gold-500 text-sm font-bold tracking-[0.2em] uppercase font-sans">Our Expertise</span>
                  <div className="w-10 h-[1px] bg-gold-500/50"></div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tighter mb-8 font-sans">
                Comprehensive <br/> <span className="gold-gradient-text">Advisory Solutions</span>
              </h1>
              <p className="text-lg md:text-xl text-muted font-light leading-relaxed max-w-2xl mx-auto font-sans">
                We provide end-to-end strategic consulting tailored to the unique challenges of governments, corporations, and institutions.
              </p>
           </div>
         </FadeIn>
         
         {/* Abstract Background Elements */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[100%] bg-gold-500/5 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
      </section>

      {/* --- SERVICES GRID --- */}
      <SectionModule>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, i) => (
               <FadeIn key={service.id} delay={i * 100} className="h-full">
                  <GlassCard className="h-full flex flex-col group hover:bg-white/[0.04] transition-colors border border-white/5 hover:border-gold-500/30">
                     <div className="w-14 h-14 rounded-2xl bg-dark-900 border border-white/10 flex items-center justify-center text-gold-500 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500 group-hover:bg-gold-500 group-hover:text-dark-900">
                        {React.cloneElement(service.icon as React.ReactElement<any>, { size: 24 })}
                     </div>
                     
                     <h3 className="text-xl font-bold text-white mb-4 tracking-tight leading-tight font-sans group-hover:text-gold-500 transition-colors">
                        {service.title}
                     </h3>
                     
                     <p className="text-sm text-muted leading-relaxed opacity-80 mb-8 flex-grow font-sans">
                        {service.desc}
                     </p>
                     
                     <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                        <span className="text-xs font-bold text-white uppercase tracking-widest font-sans">Explore Service</span>
                        <Button 
                           variant="icon" 
                           onClick={() => onServiceClick(service.id)} 
                           className="!p-2 !w-8 !h-8"
                        >
                           <ArrowRight size={14} />
                        </Button>
                     </div>
                  </GlassCard>
               </FadeIn>
            ))}
         </div>
      </SectionModule>

    </div>
  );
};