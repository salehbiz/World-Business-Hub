import React, { useState } from 'react';
import { SectionHeader, FadeIn, Button, SectionModule } from '../components/UI';
import { Quote, CheckCircle2, ChevronDown, User, Briefcase, Globe, TrendingUp, Zap, Building2 } from 'lucide-react';

export const About: React.FC = () => {
  const orbitItems = [
    { icon: <Briefcase size={18} />, text: "Strategy" },
    { icon: <Globe size={18} />, text: "Global" },
    { icon: <TrendingUp size={18} />, text: "Growth" },
    { icon: <Zap size={18} />, text: "Innovation" },
    { icon: <Building2 size={18} />, text: "Govt." },
  ];

  return (
    <SectionModule id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Text */}
        <div>
          <SectionHeader title="About World Business Hub" align="left" className="!mb-8" eyebrow="Who We Are" />
          <FadeIn delay={100}>
            <p className="text-[0.95rem] md:text-base text-muted leading-relaxed font-light mb-10 tracking-tight opacity-90 text-justify font-sans">
              At World Business Hub, we are a boutique consulting and advisory firm based in the United Arab Emirates, dedicated to shaping the future of economies worldwide. We specialize in guiding governments, private organizations, and development agencies to drive sustainable economic growth and transformative development projects.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Sustainable economic growth",
                "Specialize in guiding governments",
                "100+ Projects Delivered",
                "Secured Multi Million Dollar Investments"
              ].map((text, i) => (
                <FadeIn key={i} delay={300 + (i * 50)}>
                   <div className="group flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-gold-500/20 transition-all duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0 group-hover:scale-150 transition-transform"></div>
                      <span className="text-xs font-medium text-white tracking-wide font-sans">{text}</span>
                   </div>
                </FadeIn>
              ))}
           </div>
        </div>

        {/* Right Visual Module: Animated Orbital Ecosystem */}
        <div className="relative h-[500px] w-full flex items-center justify-center">
           <FadeIn delay={200} className="w-full h-full flex items-center justify-center relative">
              
              {/* Center Glow */}
              <div className="absolute w-[200px] h-[200px] bg-gold-500/10 rounded-full blur-[70px] animate-pulse-glow" />

              {/* Decorative Static Rings */}
              <div className="absolute w-[280px] h-[280px] rounded-full border border-white/5" />
              <div className="absolute w-[420px] h-[420px] rounded-full border border-dashed border-white/10 opacity-40 animate-[spin_60s_linear_infinite_reverse]" />

              {/* Central Hub */}
              <div className="relative z-20 w-28 h-28 rounded-full glass-module flex items-center justify-center border border-gold-500/20 shadow-[0_0_40px_rgba(201,162,39,0.15)] group">
                 <div className="absolute inset-0 bg-gold-500/5 rounded-full animate-pulse"></div>
                 <div className="flex flex-col items-center">
                    <span className="text-3xl font-bold text-white font-sans tracking-tight leading-none group-hover:scale-110 transition-transform duration-500">WBH</span>
                    <span className="text-[0.6rem] text-gold-500 uppercase tracking-widest mt-1 font-bold">Hub</span>
                 </div>
              </div>

              {/* Orbiting Container */}
              <div className="absolute inset-0 animate-[spin_30s_linear_infinite]">
                 {orbitItems.map((item, i) => {
                    const angle = (360 / orbitItems.length) * i;
                    return (
                       <div
                          key={i}
                          className="absolute top-1/2 left-1/2 w-16 h-16 -ml-8 -mt-8"
                          style={{
                             transform: `rotate(${angle}deg) translateY(-165px)`
                          }}
                       >
                          {/* Item Content (Counter-Rotating) */}
                          <div className="w-full h-full animate-[spin_30s_linear_infinite_reverse] flex flex-col items-center justify-center gap-3 group cursor-default">
                             
                             {/* Icon Bubble */}
                             <div className="relative w-14 h-14 rounded-2xl bg-dark-800/80 border border-white/10 backdrop-blur-md flex items-center justify-center text-gold-500 shadow-[0_4px_20px_rgba(0,0,0,0.5)] group-hover:border-gold-500/50 group-hover:shadow-[0_0_20px_rgba(201,162,39,0.3)] group-hover:bg-dark-800 transition-all duration-300 group-hover:-translate-y-1">
                                {item.icon}
                                {/* Connection Line to Center (Visual Trick) */}
                                <div className="absolute top-full left-1/2 w-[1px] h-[100px] bg-gradient-to-b from-gold-500/20 to-transparent -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                             </div>

                             {/* Label Tag */}
                             <span className="text-[10px] font-bold uppercase tracking-widest text-white/90 bg-dark-950/80 px-3 py-1 rounded-full border border-white/10 shadow-lg group-hover:text-gold-500 transition-colors whitespace-nowrap font-sans">
                                {item.text}
                             </span>
                          </div>
                       </div>
                    );
                 })}
              </div>

           </FadeIn>
        </div>
      </div>
    </SectionModule>
  );
};

export const CEOMessage: React.FC = () => {
  return (
    <section id="ceo" className="py-24 relative w-full overflow-hidden border-y border-white/5">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-dark-900 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-900 to-dark-950"></div>
          {/* Futuristic Grid Floor */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-full bg-gold-500/[0.02] blur-[100px]"></div>
      </div>

      <div className="w-full max-w-[95%] mx-auto relative z-10">
        <FadeIn>
           <div className="relative w-full rounded-[3rem] overflow-hidden border border-white/10 bg-dark-800/40 backdrop-blur-xl shadow-2xl">
               {/* Decorative Top Bar */}
               <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"></div>
               
               <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[450px]">
                   
                   {/* Left: Tech Profile Panel */}
                   <div className="lg:col-span-4 bg-white/[0.02] border-b lg:border-b-0 lg:border-r border-white/5 p-10 md:p-14 flex flex-col items-center justify-center relative overflow-hidden group">
                        
                        {/* Tech Background Elements */}
                        <div className="absolute top-0 left-0 p-6 opacity-30">
                           <div className="flex gap-1">
                              <div className="w-1 h-1 bg-gold-500 rounded-full animate-pulse"></div>
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                              <div className="w-1 h-1 bg-white rounded-full"></div>
                           </div>
                        </div>
                        <div className="absolute top-6 right-6 text-[9px] text-white/30 font-mono tracking-widest">ID: EXEC-01</div>
                        <div className="absolute bottom-6 left-6 text-[9px] text-white/30 font-mono tracking-widest flex items-center gap-2">
                           <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                           ONLINE
                        </div>
                        
                        {/* Avatar System */}
                        <div className="relative w-48 h-48 mb-8">
                            <div className="absolute inset-0 bg-gold-500/10 rounded-full blur-[40px] group-hover:bg-gold-500/20 transition-all duration-700"></div>
                            
                            {/* Rotating Rings */}
                            <div className="absolute inset-0 border border-white/10 rounded-full animate-spin-slow-reverse opacity-50"></div>
                            <div className="absolute -inset-2 border border-dashed border-gold-500/20 rounded-full animate-spin-slow"></div>

                            {/* Image Container with Scan Effect */}
                            <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden z-10 shadow-xl group-hover:scale-105 transition-transform duration-500 group-hover:border-gold-500/50">
                                <img 
                                  src="https://wbhholding.com/cdn/shop/files/1756835417480.jpg?v=1758840959&width=400" 
                                  alt="Dr. Usman Zafar" 
                                  className="w-full h-full object-cover filter grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                                />
                                {/* Futuristic Scanline Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold-500/20 to-transparent w-full h-full animate-scan pointer-events-none opacity-50"></div>
                            </div>
                        </div>

                        <div className="text-center relative z-10">
                            <h3 className="text-3xl font-bold text-white tracking-tight mb-3 font-sans group-hover:text-gold-500 transition-colors">Dr. Usman Zafar</h3>
                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-[0.7rem] font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(201,162,39,0.15)]">
                                Chief Executive Officer
                            </div>
                        </div>
                   </div>

                   {/* Right: Vision Quote */}
                   <div className="lg:col-span-8 p-10 md:p-20 flex flex-col justify-center relative bg-gradient-to-br from-transparent to-black/20">
                        {/* Large Background Quote */}
                        <Quote className="absolute top-12 left-12 text-white/[0.03] w-32 h-32 transform -scale-x-100" />
                        
                        <blockquote className="relative z-10 max-w-4xl">
                            <p className="text-2xl md:text-4xl lg:text-[3rem] text-white font-light leading-[1.2] tracking-tight font-sans">
                                <span className="text-gold-500 inline-block -translate-y-4 mr-2 text-4xl opacity-50">"</span>
                                Our mission is clear: to empower nations and organizations to build sustainable, future-ready economies. We thrive at the intersection of innovation, strategy, and investment facilitation.
                                <span className="text-gold-500 inline-block translate-y-4 ml-2 text-4xl opacity-50">"</span>
                            </p>
                        </blockquote>

                        <div className="mt-12 flex items-center gap-6">
                            <div className="h-px w-20 bg-gradient-to-r from-gold-500 to-transparent"></div>
                            <span className="text-xs text-muted uppercase tracking-[0.4em] font-sans opacity-60">Vision Statement</span>
                        </div>
                   </div>
               </div>
           </div>
        </FadeIn>
      </div>
    </section>
  );
};
