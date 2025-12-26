import React from 'react';
import { SectionHeader, FadeIn, Button, SectionModule } from '../components/UI';
import { Target, Globe, Layers, Handshake, Check, Briefcase, Award, TrendingUp, Zap, ArrowUpRight } from 'lucide-react';

export const Mission: React.FC = () => {
  const pillars = [
    { icon: <Target />, title: "Precision", desc: "Tailored Strategies" },
    { icon: <Zap />, title: "Innovation", desc: "Future Financing" },
    { icon: <TrendingUp />, title: "Growth", desc: "Economic Expansion" },
    { icon: <Globe />, title: "Impact", desc: "Global Reach" },
  ];

  return (
    <SectionModule className="!py-16" id="mission">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        
        {/* Left: Main Mission Statement */}
        <div className="lg:col-span-7 flex flex-col justify-center">
           <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-[0.65rem] font-bold uppercase tracking-[0.2em] w-fit mb-6 shadow-[0_0_15px_rgba(201,162,39,0.1)]">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-pulse"></span>
                Our Purpose
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-[1.1] tracking-tighter font-sans">
                Empowering Nations, <br/>
                <span className="text-white/40">Building Legacies.</span>
              </h2>
              
              <p className="text-base md:text-lg text-muted font-light leading-relaxed max-w-xl font-sans mb-8">
                We bridge the gap between ambitious government visions and tangible economic reality. Our mission is to provide the strategic architecture for sustainable development and inclusive growth.
              </p>
              
              {/* Micro Social Proof */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                 <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                       <div key={i} className="w-9 h-9 rounded-full border border-white/10 bg-dark-800 flex items-center justify-center text-xs text-muted hover:scale-110 transition-transform hover:z-10 hover:border-gold-500/50">
                          <Globe size={12} className="opacity-50" />
                       </div>
                    ))}
                 </div>
                 <span className="text-xs font-medium text-white/50 uppercase tracking-wider">Partnering with global leaders</span>
              </div>
           </FadeIn>
        </div>

        {/* Right: Interactive 2x2 Bento Grid (SaaS Style) */}
        <div className="lg:col-span-5">
           <div className="grid grid-cols-2 gap-4">
              {pillars.map((p, i) => (
                 <FadeIn key={i} delay={i * 100}>
                    <div className="group relative p-5 rounded-[1.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-gold-500/30 transition-all duration-300 h-full flex flex-col items-start gap-4 overflow-hidden shadow-lg hover:shadow-gold-500/5 cursor-default">
                       
                       {/* Hover Gradient Background */}
                       <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 via-gold-500/0 to-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                       
                       <div className="relative w-full flex justify-between items-start">
                          <div className="w-10 h-10 rounded-xl bg-dark-900 border border-white/10 flex items-center justify-center text-white/70 group-hover:text-gold-500 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-inner">
                             {React.cloneElement(p.icon as React.ReactElement<any>, { size: 18 })}
                          </div>
                          <ArrowUpRight size={14} className="text-white/20 group-hover:text-gold-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                       </div>
                       
                       <div className="relative mt-2">
                          <h3 className="text-white font-bold text-base mb-1 font-sans group-hover:translate-x-1 transition-transform">{p.title}</h3>
                          <p className="text-[0.65rem] text-muted uppercase tracking-wider font-sans opacity-70 group-hover:opacity-100 transition-opacity">{p.desc}</p>
                       </div>
                    </div>
                 </FadeIn>
              ))}
           </div>
        </div>
      </div>
    </SectionModule>
  );
};

export const WhyChoose: React.FC = () => {
  const cards = [
    { title: "Global Perspective", desc: "Deep understanding of regional and international markets.", icon: <Globe /> },
    { title: "Comprehensive Solutions", desc: "From strategy to execution, we guide every stage.", icon: <Layers /> },
    { title: "Investment Facilitation", desc: "Connecting projects with the right investors and financing models.", icon: <Handshake /> },
    { title: "Strategic Execution", desc: "Actionable roadmaps that deliver tangible results.", icon: <TrendingUp /> },
    { title: "Proven Expertise", desc: "Decades of combined leadership experience.", icon: <Briefcase /> },
    { title: "Excellence Driven", desc: "Commitment to highest standards of quality.", icon: <Award /> },
  ];

  return (
    <SectionModule id="why-choose">
      <SectionHeader title="Why Choose World Business Hub FZE" eyebrow="The WBH Advantage" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <FadeIn key={i} delay={i * 100} className="h-full">
            <div className="h-full glass-card rounded-[2rem] p-8 hover:bg-white/[0.04] transition-all group flex flex-col items-start border border-white/5 hover:border-gold-500/30">
              <div className="w-12 h-12 rounded-2xl bg-dark-900 border border-white/10 text-gold-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform group-hover:border-gold-500/50">
                 {React.cloneElement(card.icon as React.ReactElement<any>, { size: 24 })}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 tracking-tight font-sans">{card.title}</h3>
              <p className="text-muted leading-relaxed text-sm opacity-80 font-sans">{card.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionModule>
  );
};

export const Experience: React.FC = () => {
  return (
    <SectionModule className="border-t border-white/5 bg-dark-800/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left: Content Checklist */}
        <FadeIn className="order-2 lg:order-1">
           <div className="text-gold-500 text-xs font-bold tracking-[0.2em] uppercase font-sans mb-4">Proven Track Record</div>
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tighter leading-[1.1] font-sans">
             Decades of Strategic Leadership
           </h2>
           
           <p className="text-muted mb-10 leading-relaxed text-base font-light tracking-wide max-w-lg font-sans">
             WBH brings 25+ years of global leadership, advising governments and enterprises on digital transformation and market growth strategies that endure.
           </p>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
             {["Award winning advisory", "Expert global team", "International reach", "Tangible results", "25+ years experience", "Trusted by governments"].map((item, i) => (
               <div key={i} className="flex items-center gap-3 text-white group">
                 <div className="w-5 h-5 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center shrink-0 group-hover:bg-gold-500 transition-colors">
                   <Check size={10} className="text-gold-500 group-hover:text-dark-900 font-bold" />
                 </div>
                 <span className="font-medium text-sm tracking-wide opacity-90 font-sans">{item}</span>
               </div>
             ))}
           </div>

           <Button variant="primary" className="!rounded-full !px-10">View Our Work</Button>
        </FadeIn>

        {/* Right: Modern Dashboard Metric Card */}
        <FadeIn delay={200} className="order-1 lg:order-2 flex justify-center lg:justify-end">
           <div className="relative w-full max-w-[500px] perspective-1000 group">
              {/* Back Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gold-500/10 rounded-full blur-[80px] animate-pulse-glow"></div>

              {/* Main Dashboard Card */}
              <div className="relative z-10 glass-module rounded-[2rem] p-8 md:p-12 border border-white/10 bg-gradient-to-br from-dark-800/80 to-dark-900/80 backdrop-blur-xl transform transition-transform duration-700 hover:rotate-x-2 hover:rotate-y-2 shadow-2xl">
                  
                  {/* Card Header */}
                  <div className="flex justify-between items-start mb-8">
                      <div className="flex flex-col">
                          <span className="text-muted text-[0.65rem] uppercase tracking-widest font-bold mb-1">Establishment</span>
                          <span className="text-white font-mono text-sm bg-white/5 px-2 py-1 rounded border border-white/5 inline-block">SINCE 1999</span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center border border-gold-500/20 text-gold-500 shadow-gold-500/20 shadow-lg">
                          <TrendingUp size={18} />
                      </div>
                  </div>

                  {/* Hero Metric */}
                  <div className="mb-10 relative">
                       <h3 className="text-[6rem] md:text-[7rem] font-bold text-white leading-none tracking-tighter drop-shadow-lg">
                          25<span className="text-gold-500 text-5xl md:text-6xl absolute top-2">+</span>
                       </h3>
                       {/* Animated Progress Bar */}
                       <div className="h-1.5 w-full bg-dark-700 mt-4 rounded-full overflow-hidden border border-white/5">
                          <div className="h-full bg-gradient-to-r from-gold-600 to-gold-400 w-[85%] relative shadow-[0_0_20px_rgba(201,162,39,0.5)]">
                              <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 animate-pulse"></div>
                          </div>
                       </div>
                       <p className="text-right text-[0.6rem] text-muted mt-2 font-mono uppercase tracking-widest">Growth Velocity: High</p>
                  </div>

                  {/* Secondary Metrics */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                       <div className="bg-white/[0.02] rounded-xl p-3 border border-white/5 hover:border-gold-500/20 transition-colors">
                          <div className="text-xl font-bold text-white">100%</div>
                          <div className="text-[0.6rem] text-muted uppercase tracking-wider">Client Retention</div>
                       </div>
                       <div className="bg-white/[0.02] rounded-xl p-3 border border-white/5 hover:border-gold-500/20 transition-colors">
                          <div className="text-xl font-bold text-white">50+</div>
                          <div className="text-[0.6rem] text-muted uppercase tracking-wider">Global Partners</div>
                       </div>
                  </div>
              </div>

              {/* Floating Award Badge */}
              <div className="absolute -bottom-6 -left-6 z-20 glass-card px-5 py-3 rounded-xl border border-gold-500/30 bg-dark-900/95 shadow-[0_10px_40px_rgba(0,0,0,0.5)] animate-float-delayed flex items-center gap-3">
                  <div className="p-2 bg-gold-500/10 rounded-lg">
                    <Award className="text-gold-500" size={18} />
                  </div>
                   <div className="flex flex-col">
                       <span className="text-xs font-bold text-white leading-tight">Award Winning</span>
                       <span className="text-[0.6rem] text-muted">Advisory Firm</span>
                   </div>
              </div>
           </div>
        </FadeIn>
      </div>
    </SectionModule>
  );
};