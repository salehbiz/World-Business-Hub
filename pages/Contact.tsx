import React from 'react';
import { FadeIn, Button, SectionModule, GlassCard } from '../components/UI';
import { Mail, MapPin } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const handleConsultation = () => {
    window.location.href = 'https://calendly.com/usman_zafar/30min?month=2025-12';
  };

  return (
    <div className="pt-32 pb-20">
      
      {/* --- HERO SECTION --- */}
      <section className="relative container mx-auto px-6 md:px-12 mb-20">
         <FadeIn>
           <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-10 h-[1px] bg-gold-500/50"></div>
                  <span className="text-gold-500 text-sm font-bold tracking-[0.2em] uppercase font-sans">Partner With Us</span>
                  <div className="w-10 h-[1px] bg-gold-500/50"></div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tighter mb-8 font-sans">
                Get in <span className="gold-gradient-text">Touch</span>
              </h1>
              <p className="text-lg md:text-xl text-muted font-light leading-relaxed max-w-2xl mx-auto font-sans">
                We bridge the gap between ambitious government visions and tangible economic reality. Connect with our team to discuss your strategic needs.
              </p>
           </div>
         </FadeIn>
         
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[100%] bg-gold-500/5 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
      </section>

      {/* --- CONTACT MODULE --- */}
      <SectionModule id="contact-page" className="!pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Info & Context */}
          <FadeIn>
             <GlassCard className="h-full flex flex-col justify-between p-10 bg-dark-900/40">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-8 font-sans">Contact Information</h3>
                  <div className="space-y-6">
                     <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold-500 border border-white/10 shrink-0">
                           <MapPin size={18} />
                        </div>
                        <div>
                           <p className="text-white font-bold mb-1 font-sans">Headquarters</p>
                           <p className="text-muted text-sm font-sans">Dubai, United Arab Emirates</p>
                        </div>
                     </div>
                     
                     <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold-500 border border-white/10 shrink-0">
                           <Mail size={18} />
                        </div>
                        <div>
                           <p className="text-white font-bold mb-1 font-sans">Email Us</p>
                           <a href="mailto:advisor@usmanzafar.com" className="text-muted text-sm font-sans hover:text-gold-500 transition-colors">advisor@usmanzafar.com</a>
                        </div>
                     </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-white/5">
                   <p className="text-muted text-sm leading-relaxed font-sans opacity-80">
                      "Our mission is to empower nations and organizations to build sustainable, future-ready economies."
                   </p>
                </div>
             </GlassCard>
          </FadeIn>

          {/* Right: Form & Calendly CTA */}
          <FadeIn delay={200}>
            <div className="relative rounded-[2.5rem] overflow-hidden p-10 md:p-12 border border-white/10 bg-gradient-to-br from-dark-800 to-dark-900 shadow-2xl">
               <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6 font-sans">Send us a Message</h3>
                  
                  <form className="space-y-4 mb-8" onSubmit={(e) => e.preventDefault()}>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="First Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500/50 transition-colors font-sans" />
                        <input type="text" placeholder="Last Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500/50 transition-colors font-sans" />
                     </div>
                     <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500/50 transition-colors font-sans" />
                     <input type="text" placeholder="Company Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500/50 transition-colors font-sans" />
                     <textarea placeholder="How can we help?" rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-gold-500/50 transition-colors font-sans resize-none"></textarea>
                     
                     <Button variant="secondary" className="w-full" onClick={() => console.log('Form Submitted')}>
                        Send Message
                     </Button>
                  </form>

                  <div className="relative py-4 flex items-center gap-4">
                     <div className="h-px bg-white/10 flex-grow"></div>
                     <span className="text-xs text-muted uppercase tracking-widest font-sans">OR</span>
                     <div className="h-px bg-white/10 flex-grow"></div>
                  </div>

                  <div className="text-center mt-4">
                     <p className="text-white mb-4 font-sans text-sm">Ready for a direct conversation?</p>
                     <Button 
                         variant="primary" 
                         className="!px-10 !py-4 !text-base !rounded-full shadow-gold-500/20 w-full" 
                         onClick={handleConsultation}
                     >
                       Request Consultation
                     </Button>
                  </div>
               </div>
            </div>
          </FadeIn>

        </div>
      </SectionModule>
    </div>
  );
};