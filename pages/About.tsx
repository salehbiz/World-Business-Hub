import React from 'react';
import { SectionHeader, FadeIn, SectionModule, Button, GlassCard } from '../components/UI';
import { Target, Globe, Zap, Users, Quote, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      
      {/* --- HERO SECTION --- */}
      <section className="relative container mx-auto px-6 md:px-12 mb-24">
         <FadeIn>
           <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-10 h-[1px] bg-gold-500/50"></div>
                  <span className="text-gold-500 text-sm font-bold tracking-[0.2em] uppercase font-sans">About World Business Hub</span>
                  <div className="w-10 h-[1px] bg-gold-500/50"></div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-bold text-white leading-[1.1] tracking-tighter mb-8 font-sans">
                Architects of <br/> <span className="gold-gradient-text">Future Economies</span>
              </h1>
              <p className="text-lg md:text-xl text-muted font-light leading-relaxed max-w-2xl mx-auto font-sans">
                A premium consulting and advisory firm based in the UAE, dedicated to shaping the economic landscape through innovation, strategy, and sustainable development.
              </p>
           </div>
         </FadeIn>
         
         {/* Abstract Background Elements */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[100%] bg-gold-500/5 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
      </section>

      {/* --- COMPANY OVERVIEW --- */}
      <SectionModule className="relative">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight font-sans leading-tight">
                 We bridge the gap between <span className="text-gold-500">ambitious government visions</span> and tangible reality.
               </h2>
               <div className="space-y-6 text-muted font-light leading-relaxed text-[0.95rem] md:text-base text-justify font-sans">
                  <p>
                    World Business Hub (WBH) is a boutique consulting and advisory firm headquartered in the United Arab Emirates. We stand at the forefront of global economic transformation, serving as a trusted partner to governments, private organizations, and international development agencies.
                  </p>
                  <p>
                    Our expertise lies in guiding complex stakeholders through the intricacies of sustainable economic growth. From conceptualizing smart cities to structuring multi-billion dollar PPP models, we provide the strategic architecture necessary for nations to thrive in a rapidly evolving global marketplace.
                  </p>
                  <p>
                    With a deep understanding of both regional nuances and international best practices, WBH delivers solutions that are not only innovative but actionable and enduring. We do not just advise; we enable futures.
                  </p>
               </div>
            </FadeIn>

            <FadeIn delay={200}>
               <div className="relative">
                  <div className="absolute inset-0 bg-gold-500/10 blur-[50px] -z-10"></div>
                  <div className="grid grid-cols-1 gap-6">
                     <GlassCard className="!p-8 border-gold-500/10 flex items-start gap-5">
                        <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center text-gold-500 shrink-0">
                           <Target size={24} />
                        </div>
                        <div>
                           <h3 className="text-xl font-bold text-white mb-2 font-sans">Our Mission</h3>
                           <p className="text-sm text-muted leading-relaxed font-sans">
                              To empower nations and organizations to build sustainable, future-ready economies. We thrive at the intersection of innovation, strategy, and investment facilitation, ensuring every project delivers measurable, long-term impact.
                           </p>
                        </div>
                     </GlassCard>

                     <GlassCard className="!p-8 border-gold-500/10 flex items-start gap-5">
                        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white shrink-0">
                           <Globe size={24} />
                        </div>
                        <div>
                           <h3 className="text-xl font-bold text-white mb-2 font-sans">Our Vision</h3>
                           <p className="text-sm text-muted leading-relaxed font-sans">
                              To be the world's leading catalyst for transformative economic development, recognized for connecting global investors with high-impact government initiatives that redefine the standard of living.
                           </p>
                        </div>
                     </GlassCard>
                  </div>
               </div>
            </FadeIn>
         </div>
      </SectionModule>

      {/* --- LEADERSHIP SECTION --- */}
      <SectionModule className="bg-dark-800/30 border-y border-white/5">
        <SectionHeader title="Leadership" subtitle="Guided by decades of global expertise and a vision for transformative growth." />
        
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="glass-module rounded-[2.5rem] p-8 md:p-12 border border-white/10 bg-dark-900/50 backdrop-blur-xl">
               <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
                  
                  {/* Image Column */}
                  <div className="md:col-span-5 lg:col-span-4 relative group">
                      <div className="absolute inset-0 bg-gold-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-700"></div>
                      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                        <img 
                          src="https://www.usmanzafar.com/cdn/shop/files/IMG_1508_2.jpg?v=1757957865&width=600" 
                          alt="Dr. Usman Zafar" 
                          className="w-full h-auto object-cover filter grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                           <div className="text-gold-500 text-xs font-bold uppercase tracking-widest mb-1">Founder & CEO</div>
                           <div className="text-white font-bold text-xl font-sans">Dr. Usman Zafar</div>
                        </div>
                      </div>
                  </div>

                  {/* Bio Column */}
                  <div className="md:col-span-7 lg:col-span-8">
                     <Quote className="text-gold-500/30 w-10 h-10 mb-6" />
                     <h3 className="text-2xl font-bold text-white mb-6 font-sans">A Visionary in Economic Strategy</h3>
                     <div className="space-y-4 text-muted font-light leading-relaxed text-sm md:text-base font-sans text-justify">
                        <p>
                           Dr. Usman Zafar is a globally recognized expert in digital transformation, smart city development, and government advisory. With a career spanning over 25 years, he has been instrumental in shaping policies and strategies that bridge the gap between technology and public sector efficiency.
                        </p>
                        <p>
                           As the founder of World Business Hub, Dr. Zafar brings a wealth of experience in securing multi-million dollar investments and guiding nations through complex developmental phases. His leadership style is defined by a relentless pursuit of innovation and a deep commitment to sustainable progress.
                        </p>
                        <p>
                           He serves as a trusted advisor to C-level executives and government officials across the Middle East, Europe, and Asia, facilitating partnerships that drive economic diversification and resilience.
                        </p>
                     </div>
                     
                     <div className="mt-8 flex flex-wrap gap-4">
                        <div className="pill-chip"><CheckCircle2 size={14} className="text-gold-500"/> Strategic Advisor</div>
                        <div className="pill-chip"><CheckCircle2 size={14} className="text-gold-500"/> Keynote Speaker</div>
                        <div className="pill-chip"><CheckCircle2 size={14} className="text-gold-500"/> Investment Facilitator</div>
                     </div>
                  </div>

               </div>
            </div>
          </FadeIn>
        </div>
      </SectionModule>

      {/* --- CORE VALUES / WHY US --- */}
      <SectionModule>
         <SectionHeader title="Our Core Values" align="center" />
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
               { title: "Excellence", desc: "We uphold the highest standards in every strategy we craft and every partnership we facilitate.", icon: <Zap /> },
               { title: "Integrity", desc: "Trust is the currency of our business. We operate with transparency and unwavering ethics.", icon: <CheckCircle2 /> },
               { title: "Collaboration", desc: "We believe in the power of collective intelligence, bridging governments and private sectors.", icon: <Users /> }
            ].map((item, i) => (
               <FadeIn key={i} delay={i*100} className="h-full">
                  <div className="h-full glass-card rounded-[2rem] p-8 hover:bg-white/[0.03] text-center flex flex-col items-center">
                     <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-500 mb-6 shadow-lg">
                        {React.cloneElement(item.icon as React.ReactElement<any>, { size: 24 })}
                     </div>
                     <h3 className="text-xl font-bold text-white mb-3 font-sans">{item.title}</h3>
                     <p className="text-muted text-sm leading-relaxed opacity-80 font-sans">{item.desc}</p>
                  </div>
               </FadeIn>
            ))}
         </div>
      </SectionModule>

    </div>
  );
};