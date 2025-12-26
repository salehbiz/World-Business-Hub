import React from 'react';
import { SectionHeader, FadeIn, SectionModule, Button, GlassCard } from '../components/UI';
import { Award, Trophy, Star } from 'lucide-react';

const awardsData = [
  {
    title: "51 Most Impactful Smart Cities Leaders – Global Listing",
    desc: "Recognizing influential contributions to Smart City development and sustainable digital transformation.",
    image: "https://i.postimg.cc/rw0WK0mm/Gemini-Generated-Image-fj22qzfj22qzfj22.png"
  },
  {
    title: "Leading Global Advisor of the Year – PRIME Awards",
    desc: "Recognizing excellence in global advisory leadership and transformative strategic impact.",
    image: "https://i.postimg.cc/SNwR1ZyH/Gemini-Generated-Image-a9xis0a9xis0a9xi.png"
  },
  {
    title: "Abu Dhabi Chamber SME Excellence Recognition",
    desc: "Honoring contributions to SME development and economic advancement.",
    image: "https://i.postimg.cc/HsKzZC81/Gemini-Generated-Image-v3y4k7v3y4k7v3y4.png"
  },
  {
    title: "Young Achiever Award – GCC Leadership Awards",
    desc: "Celebrating outstanding leadership potential and early career achievements.",
    image: "https://i.postimg.cc/FFCVzQZ1/Gemini-Generated-Image-oncyiconcyiconcy.png"
  },
  {
    title: "Outstanding Global Leadership Award",
    desc: "Awarded for influential global leadership and contributions to international development.",
    image: "https://i.postimg.cc/vBqf4WW1/Gemini-Generated-Image-571uxg571uxg571u.png"
  },
  {
    title: "Federal Authority for Identity & Citizenship Appreciation Award",
    desc: "For supporting national digital transformation and leading public-sector innovation.",
    image: "https://i.postimg.cc/VNzC47gk/Gemini-Generated-Image-o9wkyfo9wkyfo9wk.png"
  },
  {
    title: "HCT Dubai – Industry Contribution Recognition",
    desc: "Acknowledging leadership in academic-industry innovation partnerships.",
    image: "https://i.postimg.cc/mr67DYY6/image.png"
  },
  {
    title: "Professional Doctorate Award – European International University",
    desc: "Conferred for academic excellence and global leadership in international trade and business.",
    image: "https://i.postimg.cc/fLGX7Mrh/image.png"
  },
  {
    title: "HYGEAR Corporate Recognition Award",
    desc: "Awarded for strategic advisory support and contribution to fitness technology innovation.",
    image: "https://i.postimg.cc/XqKZwd5Z/image.png"
  },
  {
    title: "Manipal University – Industry Expertise Award",
    desc: "For expert contributions to innovation, collaboration, and technology leadership.",
    image: "https://i.postimg.cc/jS25jGMy/image.png"
  },
  {
    title: "PITB Government Recognition Award",
    desc: "Awarded by the Punjab IT Board for contributions to national-level digital transformation.",
    image: "https://i.postimg.cc/B69QMt42/Gemini-Generated-Image-qyrd5vqyrd5vqyrd.png"
  },
  {
    title: "Ajman International Export Development Recognition",
    desc: "Honoring insights into economic development, export growth, and trade innovation.",
    image: "https://i.postimg.cc/hjBcVw18/image.png"
  },
  {
    title: "Future IT Summit – Moderator Appreciation Award",
    desc: "Recognizing leadership in moderating major industry panels on technology and innovation.",
    image: "https://i.postimg.cc/zXB5wTKs/image.png"
  },
  {
    title: "News Time HD TV Smart City Contribution Award",
    desc: "For outstanding contributions to national Smart City initiatives.",
    image: "https://i.postimg.cc/nzpfXmHt/image.png"
  },
  {
    title: "PRIME Awards Certificate of Achievement",
    desc: "Certifying excellence in global advisory leadership.",
    image: "https://i.postimg.cc/GhHwTdn6/image.png"
  },
  {
    title: "PRIME Awards Asia – Guest of Honour Recognition",
    desc: "Celebrating his distinguished presence and leadership contributions in Asia.",
    image: "https://i.postimg.cc/wv6nqdkf/image.png"
  },
  {
    title: "Global Achievers Award",
    desc: "Recognizing Dr. Usman Zafar for outstanding global leadership, business excellence, and his impact as Chairman of World Business Hub (WBH).",
    image: "https://i.postimg.cc/SK4vdpH4/image.png"
  },
  {
    title: "Certificate of Appreciation – Federal Authority (UAE)",
    desc: "Recognized by the Federal Authority for Identity, Citizenship, Customs, and Port Security for active contribution toward improving government services through the Zero Government Bureaucracy initiative.",
    image: "https://i.postimg.cc/sxM6xfGc/image.png"
  },
  {
    title: "Appreciation Certificate – HCT Innovation Month",
    desc: "Recognized by the Higher Colleges of Technology (HCT) for delivering an expert talk on technology transformation and future smart cities, contributing to innovation-driven education and thought leadership.",
    image: "https://i.postimg.cc/jq139fBX/image.png"
  },
  {
    title: "Certificate of Nomination – Business Excellence Award",
    desc: "Nominated for the Business Excellence Award in recognition of exceptional contributions, leadership impact, and outstanding professional performance at an international platform.",
    image: "https://i.postimg.cc/90wbVxsK/image.png"
  },
  {
    title: "Certificate of Appreciation – HCT Industry Advisory Committee",
    desc: "Recognized by the Higher Colleges of Technology for valuable contributions and expert guidance as a member of the Computer Information Sciences Industry Advisory Committee, supporting academic–industry collaboration and curriculum advancement.",
    image: "https://i.postimg.cc/13QkC6q4/image.png"
  }
];

interface AwardsPageProps {
  onNavigate: (page: string) => void;
}

export const AwardsPage: React.FC<AwardsPageProps> = ({ onNavigate }) => {
  const handleContactClick = () => {
    onNavigate('contact');
  };

  return (
    <div className="pt-32 pb-20">
      
      {/* --- HERO SECTION --- */}
      <section className="relative container mx-auto px-6 md:px-12 mb-20">
         <FadeIn>
           <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-10 h-[1px] bg-gold-500/50"></div>
                  <span className="text-gold-500 text-sm font-bold tracking-[0.2em] uppercase font-sans">Excellence Recognized</span>
                  <div className="w-10 h-[1px] bg-gold-500/50"></div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tighter mb-8 font-sans">
                Awards & <br/> <span className="gold-gradient-text">Recognitions</span>
              </h1>
              <p className="text-lg md:text-xl text-muted font-light leading-relaxed max-w-2xl mx-auto font-sans">
                Honoring achievements, global leadership, and excellence in advisory, innovation, and strategic impact.
              </p>
           </div>
         </FadeIn>
         
         {/* Abstract Background Elements */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[100%] bg-gold-500/5 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
      </section>

      {/* --- AWARDS GRID --- */}
      <SectionModule>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awardsData.map((award, i) => (
                <FadeIn key={i} delay={i * 50} className="h-full">
                    <GlassCard className="h-full flex flex-col p-0 overflow-hidden border border-white/5 hover:border-gold-500/30 transition-all duration-500 group-hover:-translate-y-2 bg-dark-900/40 group">
                        
                        {/* Image Container */}
                        <div className="relative w-full aspect-[4/3] overflow-hidden bg-dark-800 border-b border-white/5">
                             <img 
                               src={award.image} 
                               alt={award.title} 
                               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale-[0.8] group-hover:grayscale-0" 
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-80"></div>
                             
                             {/* Floating Icon */}
                             <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-dark-900/80 backdrop-blur-md flex items-center justify-center text-gold-500 border border-white/10 shadow-lg z-10 group-hover:border-gold-500/50 transition-colors">
                                <Trophy size={18} />
                             </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-grow relative bg-dark-900/40">
                             <h3 className="text-lg font-bold text-white mb-3 tracking-tight leading-tight font-sans group-hover:text-gold-500 transition-colors">
                                {award.title}
                             </h3>
                             <p className="text-sm text-muted leading-relaxed opacity-80 font-sans relative z-10">
                                {award.desc}
                             </p>
                        </div>
                    </GlassCard>
                </FadeIn>
            ))}
         </div>
      </SectionModule>

      {/* --- CTA --- */}
      <SectionModule className="!pt-0">
        <FadeIn>
            <div className="glass-card rounded-[2.5rem] p-12 text-center bg-gradient-to-br from-dark-800 to-dark-900 border border-white/10 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
               {/* Background Glow */}
               <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold-500/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
               
               <div className="relative z-10">
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-6 text-gold-500 border border-gold-500/20">
                     <Award size={24} />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4 font-sans">Celebrating Achievement and Leadership</h2>
                  <p className="text-muted text-lg mb-10 max-w-2xl mx-auto font-light font-sans">
                    Explore Dr. Usman Zafar’s global recognitions and contributions.
                  </p>
                  <Button variant="primary" onClick={handleContactClick} className="!px-10 !py-4 !rounded-full shadow-gold-500/20">
                    Request Consultation
                  </Button>
               </div>
            </div>
        </FadeIn>
      </SectionModule>

    </div>
  );
};