import React from 'react';
import { SectionHeader, FadeIn, Button, SectionModule, Slider } from '../components/UI';
import { ArrowRight, Quote } from 'lucide-react';

// --- Testimonials ---
export const Testimonials: React.FC = () => {
  const testimonials = [
    { text: "Dr.Usman Zafar is an oustanding person and expert. I have the privilige to work with him under my leadership. He never stops surprising me in every positive way with his knowledge and drive.", name: "Jose Graca", title: "Next Gen Decentralized AI Super APP" },
    { text: "I’m pleased to recommend Usman for his professional experience working with investors, entrepreneurs and global multidisciplinary technology teams.", name: "Rodrigo Rivera", title: "C-Level Executive" },
    { text: "Dr Usman has been our advisor screening potential business partners in UAE region and facilitating relevant links to other clients throughout Europe.", name: "Thomas Cort Hansen", title: "CEO at Takeout Group" },
    { text: "It is a pleasure to work with Dr Usman, a world class professional in ecommerce. I have been working with him just for a few months and already we are meeting with C level officers.", name: "Jonny Holden", title: "B2B Commercial Card" },
    { text: "Transformative leaders who genuinely understand both technology and global markets are rare – Dr. Usman Zafar exemplifies this exceptional combination.", name: "Martin Moser", title: "Director Sales at CCH Tagetik" },
    { text: "What distinguishes Dr. Zafar is his unique talent for unlocking market potential through digital transformation.", name: "Faisal H. Nathoka", title: "Consultant | Real Estate Broker" }
  ];

  return (
    <SectionModule id="testimonials">
      <SectionHeader title="Testimonials" eyebrow="Client Stories" />
      <FadeIn>
        <Slider gap={24}>
          {testimonials.map((t, i) => (
            <div key={i} className="snap-center shrink-0 w-[320px] md:w-[400px]">
              <div className="h-full bg-white/5 rounded-[2.5rem] p-8 hover:bg-white/10 transition-colors border border-white/5 flex flex-col justify-between min-h-[280px]">
                <div className="relative">
                   <Quote className="text-gold-500/20 w-8 h-8 mb-4" fill="currentColor" />
                   <p className="text-gray-300 text-[0.9rem] leading-relaxed font-light opacity-90 font-sans">"{t.text}"</p>
                </div>
                <div className="pt-6 mt-6 border-t border-white/5">
                   <p className="font-bold text-white text-sm tracking-wide font-sans">{t.name}</p>
                   <p className="text-[0.65rem] text-muted mt-1 uppercase tracking-widest truncate font-sans">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </FadeIn>
    </SectionModule>
  );
};

// --- Articles ---
export const Articles: React.FC = () => {
  const articles = [
    { title: "The Jobs Poised to Disappear by 2030", excerpt: "As we stand on the brink of a transformative era in technology, artificial intelligence (AI) is reshaping the global workforce at an unprecedented pace.", date: "September 4, 2025" },
    { title: "Unveiling the Potential of Generative AI", excerpt: "Generative AI, the technology behind text-generating chatbots, artistic masterpieces conjured from words, and even realistic deepfakes, is rapidly transforming our world.", date: "February 1, 2024" },
    { title: "The New iPhone 15: Everything You Need to Know", excerpt: "The iPhone 15, releasing on September 22, 2023, is a significant upgrade over the previous model. It features a new design, a new display, a new camera, a new chip, and a new battery.", date: "September 19, 2023" }
  ];

  return (
    <SectionModule id="articles" className="bg-dark-800/30">
      <SectionHeader title="Latest Articles" eyebrow="Insights" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, i) => (
          <FadeIn key={i} delay={i * 100}>
            <div className="bg-dark-900 rounded-[2rem] border border-white/5 overflow-hidden hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col group shadow-lg">
              <div className="p-8 flex flex-col flex-grow relative">
                <div className="text-gold-500 text-[0.65rem] font-bold uppercase tracking-widest mb-4 bg-white/5 inline-block px-3 py-1 rounded-full font-sans">{article.date}</div>
                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-gold-500 transition-colors leading-tight tracking-tight font-sans">{article.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-8 flex-grow opacity-80 font-sans">{article.excerpt}</p>
                <Button variant="link" className="self-start pl-0 group-hover:gap-2 text-sm">
                  Read Article <ArrowRight size={14} className="ml-2" />
                </Button>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionModule>
  );
};

// --- Final CTA ---
export const FinalCTA: React.FC = () => {
  return (
    <SectionModule id="contact" className="!pt-0 !pb-24">
      <FadeIn>
        <div className="relative rounded-[3rem] overflow-hidden p-12 md:p-24 text-center border border-white/10 bg-gradient-to-br from-dark-800 to-dark-900 shadow-2xl">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[150px] pointer-events-none"></div>
           
           <div className="relative z-10 max-w-3xl mx-auto">
              <div className="text-gold-500 text-sm font-bold tracking-[0.2em] uppercase font-sans mb-4">Let's Collaborate</div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tighter font-sans">Partner With Us</h2>
              <p className="text-lg text-muted mx-auto mb-10 leading-relaxed font-light font-sans">
                At World Business Hub FZE, we help turn ambitious visions into reality. Together, we can build smarter cities, greener economies, and stronger futures.
              </p>
              <Button variant="primary" className="!px-10 !py-4 !text-base !rounded-full shadow-gold-500/20" onClick={() => window.location.href = 'mailto:info@wbh.ae'}>
                Request Consultation
              </Button>
           </div>
        </div>
      </FadeIn>
    </SectionModule>
  );
};