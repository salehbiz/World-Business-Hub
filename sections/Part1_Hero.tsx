import React, { useEffect, useState } from 'react';
import { Button, FadeIn } from '../components/UI';
import { Globe, Zap, Network, Target } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section id="hero" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden w-full pt-32 pb-20">
        {/* --- Background Treatments --- */}
        <div className="absolute inset-0 bg-dark-900 z-0 pointer-events-none">
           <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-800"></div>
           <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay"></div>
           
           {/* Subtle Gold Ambient Glow - Breathing Animation */}
           <div className="absolute top-[-20%] right-[-10%] w-[1000px] h-[1000px] bg-gold-500/5 rounded-full blur-[150px] animate-pulse-slow"></div>
           <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-gold-500/3 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

           {/* Slow Orbital Lines */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vw] rounded-full border border-white/[0.02] opacity-40 animate-spin-slow"></div>
        </div>
        
        <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 xl:px-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* LEFT: Text Content */}
            <div className="flex flex-col justify-center max-w-2xl">
              <FadeIn delay={150}>
                <div className={`inline-flex items-center gap-3 mb-8 transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                   <div className="w-10 h-[1px] bg-gold-500/50"></div>
                   <span className="text-gold-500 text-sm font-bold tracking-[0.2em] uppercase font-sans">World Business Hub</span>
                </div>
              </FadeIn>
              
              <FadeIn delay={300}>
                <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-normal text-white leading-[1.05] mb-8 tracking-tighter drop-shadow-2xl font-sans">
                  Empowering Nations, <br />
                  <span className="gold-gradient-text">Enabling Futures</span>
                </h1>
              </FadeIn>

              <FadeIn delay={500}>
                <p className="text-base md:text-lg text-muted mb-12 leading-relaxed max-w-lg font-light tracking-tight opacity-90 font-sans">
                  We connect governments, investors, and innovators to drive transformative projects that shape sustainable economic futures.
                </p>
              </FadeIn>

              <FadeIn delay={700}>
                <div className="flex flex-wrap gap-5 mb-12">
                  <Button variant="primary" onClick={() => onNavigate('contact')} className="hover:scale-105 active:scale-95 transition-transform duration-300">
                    Request Consultation
                  </Button>
                  <Button variant="secondary" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth'})}>
                    Explore Services
                  </Button>
                </div>
              </FadeIn>
                
              {/* Micro Stats Chips */}
              <FadeIn delay={900}>
                <div className="flex flex-wrap gap-3">
                  <div className="pill-chip cursor-default font-sans hover:bg-white/10 transition-colors">
                    <Globe size={14} className="text-gold-500"/> Global Reach
                  </div>
                  <div className="pill-chip cursor-default font-sans hover:bg-white/10 transition-colors">
                    <Zap size={14} className="text-gold-500"/> High Impact
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* RIGHT: Visual Card System (Connected Glass) */}
            <div 
              className="relative h-[450px] lg:h-[600px] w-full flex items-center justify-center perspective-1000 transition-transform duration-100 ease-out mt-12 lg:mt-0"
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            >
              <FadeIn delay={400} className="relative w-full h-full flex items-center justify-center scale-[0.65] sm:scale-[0.8] md:scale-100">
                
                {/* Visual Cluster Container */}
                <div className="relative w-[420px] h-[480px]">
                  
                  {/* Layer 1: Back Panel (Abstract Data) */}
                  <div className="absolute top-0 right-0 w-[340px] h-[400px] bg-gradient-to-br from-white/[0.02] to-transparent rounded-[2rem] border border-white/[0.04] backdrop-blur-[2px] transform rotate-[8deg] translate-x-8 translate-y-4 animate-float-slow z-0 opacity-50"></div>
                  
                  {/* Layer 2: Middle Panel (Structure) */}
                  <div className="absolute top-6 right-6 w-[340px] h-[400px] bg-gradient-to-br from-white/[0.04] to-transparent rounded-[2rem] border border-white/[0.06] backdrop-blur-[4px] transform -rotate-[4deg] translate-x-[-10px] animate-float-delayed z-10 opacity-70"></div>

                  {/* Layer 3: Main Front Panel (Focus) */}
                  <div className="absolute top-10 right-10 w-[360px] h-[360px] rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.01] backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.6)] flex flex-col items-center justify-center animate-float z-20 group hover:scale-[1.02] transition-transform duration-700">
                     
                     {/* Ambient Glow Inside Card */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gold-500/10 rounded-full blur-[40px] group-hover:bg-gold-500/20 transition-colors duration-700"></div>

                     {/* Icon Ecosystem */}
                     <div className="relative grid grid-cols-2 gap-10 p-8 z-20">
                        {/* Connection Lines */}
                        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 pointer-events-none opacity-20 overflow-visible" viewBox="0 0 100 100">
                           <line x1="25" y1="25" x2="75" y2="75" stroke="#C9A227" strokeWidth="0.5" />
                           <line x1="75" y1="25" x2="25" y2="75" stroke="#C9A227" strokeWidth="0.5" />
                           <circle cx="50" cy="50" r="2" fill="#C9A227" className="animate-pulse" />
                        </svg>

                        {/* Node 1: Network */}
                        <div className="flex flex-col items-center gap-3">
                           <div className="w-14 h-14 rounded-2xl bg-dark-800/50 border border-gold-500/20 flex items-center justify-center text-gold-500 shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-dark-950 transition-all duration-500">
                              <Network size={22} />
                           </div>
                           <span className="text-[10px] uppercase tracking-widest text-white/70 font-semibold font-sans">Network</span>
                        </div>

                        {/* Node 2: Global */}
                        <div className="flex flex-col items-center gap-3">
                           <div className="w-14 h-14 rounded-2xl bg-dark-800/50 border border-gold-500/20 flex items-center justify-center text-gold-500 shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-dark-950 transition-all duration-500 delay-100">
                              <Globe size={22} />
                           </div>
                           <span className="text-[10px] uppercase tracking-widest text-white/70 font-semibold font-sans">Global</span>
                        </div>

                         {/* Node 3: Impact */}
                        <div className="col-span-2 flex flex-col items-center gap-3 mt-2">
                           <div className="w-14 h-14 rounded-2xl bg-dark-800/50 border border-gold-500/20 flex items-center justify-center text-gold-500 shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-dark-950 transition-all duration-500 delay-200">
                              <Target size={22} />
                           </div>
                           <span className="text-[10px] uppercase tracking-widest text-white/70 font-semibold font-sans">Impact</span>
                        </div>
                     </div>
                  </div>

                  {/* Anchored Badge: "Trusted Advisory" */}
                  <div className="absolute bottom-6 -left-6 z-30 animate-float-delayed">
                     <div className="glass-module px-6 py-3 rounded-full border border-gold-500/20 flex items-center gap-3 backdrop-blur-xl bg-dark-900/80 shadow-2xl hover:border-gold-500/40 transition-all hover:scale-105 cursor-default">
                       <div className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-500 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
                        </div>
                       <span className="text-[11px] font-bold text-white tracking-widest uppercase font-sans">Trusted Advisory</span>
                     </div>
                  </div>
                </div>

              </FadeIn>
            </div>
        </div>
      </section>

      {/* Impact Metrics Bar */}
      <section className="container mx-auto px-6 mb-32 relative z-20">
        <FadeIn delay={800}>
          <div className="glass-module rounded-[2rem] p-10 flex flex-wrap lg:flex-nowrap items-center justify-between gap-8 bg-dark-800/40 backdrop-blur-xl border border-white/5 shadow-2xl hover:bg-dark-800/60 transition-colors duration-500">
             <StatItem number="150+" label="C Level Advisory Services" />
             <div className="hidden lg:block w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
             <StatItem number="350+" label="Smart Government Engagements" />
             <div className="hidden lg:block w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
             <StatItem number="430+" label="Conference Speaking Engagements" />
             <div className="hidden lg:block w-px h-16 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
             <StatItem number="150+" label="Business Development Projects" />
          </div>
        </FadeIn>
      </section>
    </>
  );
};

const StatItem: React.FC<{ number: string, label: string }> = ({ number, label }) => (
  <div className="flex-1 text-center flex flex-col items-center justify-center group cursor-default">
    <span className="text-4xl md:text-5xl font-bold text-white block mb-3 tracking-tighter group-hover:text-gold-500 transition-colors duration-500 font-sans transform group-hover:scale-110 transition-transform">{number}</span>
    <span className="text-xs text-muted font-medium uppercase tracking-widest opacity-80 font-sans group-hover:opacity-100 transition-opacity">{label}</span>
  </div>
);

export default Hero;