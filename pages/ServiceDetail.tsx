import React from 'react';
import { SectionHeader, FadeIn, SectionModule, Button, GlassCard } from '../components/UI';
import { ArrowLeft, CheckCircle2, ArrowRight, Target, Zap, Globe, Layers } from 'lucide-react';
import { servicesList } from './Services';

// Service Content Database (Updated with Long IDs)
const serviceContent: Record<string, any> = {
  'board-advisory-and-market-acceleration-services': {
    overview: "In an era of rapid disruption, boards and executive teams face unprecedented challenges. Our Board Advisory & Market Acceleration service provides high-level strategic counsel to ensure robust governance, effective risk management, and aggressive market expansion. We partner with you to identify growth vectors and navigate complex regulatory landscapes.",
    offerings: [
      { title: "Corporate Governance", desc: "Structuring boards for transparency, accountability, and performance." },
      { title: "Market Entry Strategy", desc: "Comprehensive roadmaps for entering new geographies and sectors." },
      { title: "Mergers & Acquisitions", desc: "Strategic due diligence and post-merger integration support." },
      { title: "Risk Management", desc: "Identifying and mitigating operational, financial, and reputational risks." }
    ],
    outcomes: [
      "Enhanced decision-making frameworks",
      "Accelerated market penetration",
      "Optimized operational efficiency",
      "Resilient long-term growth strategy"
    ]
  },
  'smart-cities-strategic-advisory-services': {
    overview: "We help governments and developers transition from concept to reality in creating cognitive cities. Our advisory goes beyond technology; we focus on creating livable, sustainable, and economically viable urban ecosystems that harness the power of data to improve citizen quality of life.",
    offerings: [
      { title: "Digital Master Planning", desc: "Blueprinting the digital infrastructure of future cities." },
      { title: "IoT Strategy", desc: "Designing connected systems for energy, mobility, and public safety." },
      { title: "Sustainability Frameworks", desc: "Integrating ESG principles into urban development." },
      { title: "PPP Structuring", desc: "Facilitating public-private partnerships for infrastructure funding." }
    ],
    outcomes: [
      "Reduced operational costs",
      "Improved citizen engagement",
      "Sustainable urban growth",
      "Attraction of foreign investment"
    ]
  },
  'artificial-intelligenceai-advisory-services': {
    overview: "Artificial Intelligence is no longer a luxury; it is a necessity for survival. Our AI Advisory service demystifies the technology, helping organizations separate hype from value. We assist in building AI-ready cultures, data infrastructures, and ethical frameworks to drive automation and innovation.",
    offerings: [
      { title: "AI Readiness Assessment", desc: "Evaluating infrastructure, data, and talent gaps." },
      { title: "LLM Integration", desc: "Strategies for deploying Large Language Models in enterprise workflows." },
      { title: "Data Governance", desc: "Ensuring data quality, security, and compliance." },
      { title: "Automation Roadmaps", desc: "Identifying high-impact processes for intelligent automation." }
    ],
    outcomes: [
      "Increased operational productivity",
      "Data-driven decision making",
      "Competitive advantage through innovation",
      "Cost reduction through automation"
    ]
  },
  'keynotes-and-public-speaking-services': {
    overview: "Dr. Usman Zafar and our team of experts deliver compelling keynotes that inspire and inform. We cover critical topics ranging from the future of work and digital economy to smart city trends. Our sessions are designed to spark dialogue and align organizational vision with global shifts.",
    offerings: [
      { title: "Global Summits", desc: "Keynote addresses for major international conferences." },
      { title: "Corporate Retreats", desc: "Private sessions for executive alignment and strategy." },
      { title: "Government Panels", desc: "Expert contributions to policy and development forums." },
      { title: "Future Trends Workshops", desc: "Interactive sessions on emerging technologies and markets." }
    ],
    outcomes: [
      "Inspired and aligned leadership",
      "Clear understanding of global trends",
      "Enhanced brand positioning",
      "Actionable strategic insights"
    ]
  },
  'academic-advisory-accreditation': {
    overview: "We bridge the gap between academia and industry. Our advisory services assist universities and educational institutions in curriculum modernization, obtaining international accreditation, and fostering research partnerships that drive global rankings and student employability.",
    offerings: [
      { title: "Curriculum Development", desc: "Aligning academic programs with future industry needs." },
      { title: "International Accreditation", desc: "Guidance for QS, THE, and specialized program accreditations." },
      { title: "Institutional Partnerships", desc: "Facilitating collaborations with top-tier global universities." },
      { title: "Research Strategy", desc: "Developing frameworks for high-impact research output." }
    ],
    outcomes: [
      "Global institutional recognition",
      "Improved student employability",
      "Access to research funding",
      "Sustainable academic models"
    ]
  },
  'fund-raising-services': {
    overview: "Securing capital is an art and a science. We support startups, SMEs, and large-scale projects in structuring their investment propositions. By leveraging our global network of VCs, family offices, and institutional investors, we connect you with the right capital partners.",
    offerings: [
      { title: "Investment Readiness", desc: "Refining business models and financial projections." },
      { title: "Pitch Deck Optimization", desc: "Crafting compelling narratives for investors." },
      { title: "Valuation Strategy", desc: "Accurate business valuation and deal structuring." },
      { title: "Investor Relations", desc: "Managing communications and negotiations with stakeholders." }
    ],
    outcomes: [
      "Successful capital injection",
      "Strategic investor partnerships",
      "Clear financial roadmaps",
      "Enhanced market valuation"
    ]
  },
  'executive-training-coaching': {
    overview: "True leadership requires continuous evolution. Our Executive Training & Coaching programs are bespoke interventions designed to unlock the full potential of C-suite executives and high-potential leaders. We focus on strategic thinking, emotional intelligence, and change management.",
    offerings: [
      { title: "C-Suite Mentoring", desc: "One-on-one coaching for top executives." },
      { title: "Leadership Development", desc: "Cohort-based programs for emerging leaders." },
      { title: "Change Management", desc: "Workshops on leading organizations through transition." },
      { title: "High-Performance Teams", desc: "Strategies for building and sustaining elite teams." }
    ],
    outcomes: [
      "Empowered and resilient leadership",
      "Effective succession planning",
      "Improved organizational culture",
      "Strategic clarity and focus"
    ]
  }
};

interface ServiceDetailProps {
  serviceId: string;
  onBack: () => void;
  onNavigate: (page: string) => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId, onBack, onNavigate }) => {
  const meta = servicesList.find(s => s.id === serviceId);
  const content = serviceContent[serviceId];

  if (!meta || !content) return <div>Service not found</div>;

  return (
    <div className="pt-32 pb-20">
      
      {/* --- BREADCRUMB / BACK --- */}
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-muted hover:text-gold-500 transition-colors uppercase tracking-widest font-bold font-sans"
        >
          <ArrowLeft size={16} /> Back to Services
        </button>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative container mx-auto px-6 md:px-12 mb-24">
         <FadeIn>
           <div className="max-w-4xl">
              <div className="w-16 h-16 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 mb-8 shadow-lg shadow-gold-500/10">
                 {React.cloneElement(meta.icon as React.ReactElement<any>, { size: 32 })}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tighter mb-8 font-sans">
                {meta.title}
              </h1>
              <p className="text-lg md:text-xl text-muted font-light leading-relaxed max-w-3xl font-sans border-l-2 border-gold-500 pl-6">
                {content.overview}
              </p>
           </div>
         </FadeIn>
         
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/5 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
      </section>

      {/* --- KEY OFFERINGS --- */}
      <SectionModule>
         <SectionHeader title="Key Capabilities" align="left" eyebrow="What We Offer" />
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.offerings.map((offer: any, i: number) => (
               <FadeIn key={i} delay={i * 100}>
                  <div className="h-full p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors flex items-start gap-5 group">
                     <div className="w-10 h-10 rounded-full bg-dark-900 border border-white/10 flex items-center justify-center text-gold-500 shrink-0 group-hover:bg-gold-500 group-hover:text-dark-900 transition-colors shadow-lg">
                        <Layers size={18} />
                     </div>
                     <div>
                        <h3 className="text-lg font-bold text-white mb-2 font-sans">{offer.title}</h3>
                        <p className="text-sm text-muted leading-relaxed font-sans opacity-80">{offer.desc}</p>
                     </div>
                  </div>
               </FadeIn>
            ))}
         </div>
      </SectionModule>

      {/* --- OUTCOMES --- */}
      <SectionModule className="bg-dark-800/30 border-y border-white/5">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
               <SectionHeader title="Strategic Outcomes" align="left" eyebrow="The Impact" className="!mb-8" />
               <p className="text-muted text-base mb-10 leading-relaxed font-light font-sans">
                  Our engagement model is designed to deliver measurable results. By partnering with WBH, organizations can expect tangible improvements in operational performance and strategic positioning.
               </p>
               
               <div className="space-y-4">
                  {content.outcomes.map((outcome: string, i: number) => (
                     <div key={i} className="flex items-center gap-4 group">
                        <div className="w-6 h-6 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                           <CheckCircle2 size={12} className="text-green-500" />
                        </div>
                        <span className="text-white font-medium tracking-wide font-sans">{outcome}</span>
                     </div>
                  ))}
               </div>
            </FadeIn>
            
            <FadeIn delay={200}>
               <div className="relative h-[400px] w-full glass-module rounded-[2.5rem] p-10 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gold-500/5 blur-[80px]"></div>
                  
                  {/* Decorative Abstract Graph */}
                  <div className="relative z-10 w-full h-full flex flex-col justify-end">
                     <div className="flex justify-between items-end h-40 gap-4">
                        {[40, 65, 50, 85, 70, 95].map((h, i) => (
                           <div key={i} className="w-full bg-gradient-to-t from-gold-500/20 to-gold-500/5 rounded-t-lg border-t border-x border-gold-500/30 relative overflow-hidden group" style={{ height: `${h}%` }}>
                              <div className="absolute bottom-0 left-0 right-0 h-full bg-gold-500/10 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                           </div>
                        ))}
                     </div>
                     <div className="h-px w-full bg-white/10 mt-4"></div>
                     <div className="mt-6 text-center">
                        <h4 className="text-white font-bold text-xl mb-1 font-sans">Measurable Growth</h4>
                        <p className="text-xs text-muted uppercase tracking-widest font-sans">Performance Metrics</p>
                     </div>
                  </div>
               </div>
            </FadeIn>
         </div>
      </SectionModule>

      {/* --- CTA (Standardized Rule: Non-Contact pages route to Contact Page) --- */}
      <SectionModule>
        <div className="glass-card rounded-[2.5rem] p-12 md:p-16 text-center bg-gradient-to-br from-dark-800 to-dark-900 border border-white/10">
           <h2 className="text-3xl font-bold text-white mb-6 font-sans">Ready to transform your strategy?</h2>
           <p className="text-muted text-lg mb-10 max-w-2xl mx-auto font-light font-sans">
             Schedule a consultation with our experts to discuss how we can tailor our {meta.title} services to your specific needs.
           </p>
           <Button variant="primary" className="!px-10 !py-4 !rounded-full" onClick={() => onNavigate('contact')}>
             Request Consultation
           </Button>
        </div>
      </SectionModule>

    </div>
  );
};