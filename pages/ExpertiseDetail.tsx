import React from 'react';
import { SectionHeader, FadeIn, SectionModule, Button, GlassCard } from '../components/UI';
import { ArrowLeft, CheckCircle2, Layers, Zap, Hammer, Leaf, GraduationCap, Home, Bus, Building2, Heart } from 'lucide-react';

const expertiseContent: Record<string, any> = {
  'infrastructure-development': {
    title: "Infrastructure Development",
    icon: <Hammer />,
    desc: "Creating robust foundations for economic growth through large-scale infrastructure planning and execution.",
    bullets: [
        "Transportation & Logistics Hubs",
        "Utility & Energy Grids",
        "Public Works Planning",
        "Digital Infrastructure Integration"
    ],
    outcome: "Sustainable backbones for modern economies."
  },
  'green-energy-sustainability': {
    title: "Green Energy & Sustainability",
    icon: <Leaf />,
    desc: "Pioneering renewable energy solutions and sustainable practices for environmental protection and energy security.",
    bullets: [
        "Renewable Energy Strategies (Solar, Wind)",
        "Carbon Footprint Reduction",
        "Sustainable Resource Management",
        "Green Building Regulations"
    ],
    outcome: "Clean energy transitions and environmental compliance."
  },
  'education-youth-development': {
    title: "Education & Youth Development",
    icon: <GraduationCap />,
    desc: "Empowering future generations through innovative education systems and vocational training programs.",
    bullets: [
        "Curriculum Modernization",
        "Vocational Training Frameworks",
        "EdTech Implementation",
        "Youth Entrepreneurship Programs"
    ],
    outcome: "A skilled, future-ready workforce."
  },
  'real-estate-mining': {
    title: "Real Estate & Mining",
    icon: <Home />,
    desc: "Strategic development and resource management solutions maximizing asset value and operational efficiency.",
    bullets: [
        "Mixed-Use Development Strategy",
        "Mining Resource Optimization",
        "Asset Valuation & Management",
        "Regulatory Compliance Advisory"
    ],
    outcome: "Maximized ROI on physical assets and resources."
  },
  'transportation-mobility': {
    title: "Transportation & Mobility",
    icon: <Bus />,
    desc: "Revolutionizing transportation systems and mobility solutions for connected, efficient communities.",
    bullets: [
        "Smart Traffic Management",
        "Public Transport Optimization",
        "Autonomous Mobility Planning",
        "Logistics & Supply Chain Efficiency"
    ],
    outcome: "Seamless, efficient, and safe mobility networks."
  },
  'smart-cities-sector': {
    title: "Smart Cities & Urban Development",
    icon: <Building2 />,
    desc: "Building intelligent urban ecosystems for the future using data-driven governance.",
    bullets: [
       "Digital Twins & Urban Modeling",
       "Smart Governance Platforms",
       "Citizen-Centric Service Design",
       "IoT Ecosystem Architecture"
    ],
    outcome: "Cognitive cities that respond to citizen needs."
  },
  'healthcare-sector': {
    title: "Healthcare & Public Wellbeing",
    icon: <Heart />,
    desc: "Transforming healthcare systems and wellness programs for resilience and accessibility.",
    bullets: [
       "Telemedicine & Digital Health",
       "Public Health Policy Advisory",
       "Hospital Infrastructure Planning",
       "Wellness Tourism Strategy"
    ],
    outcome: "Resilient health systems and improved public wellbeing."
  }
};

interface ExpertiseDetailProps {
  expertiseId: string;
  onBack: () => void;
  onNavigate: (page: string) => void;
}

export const ExpertiseDetail: React.FC<ExpertiseDetailProps> = ({ expertiseId, onBack, onNavigate }) => {
  const content = expertiseContent[expertiseId];

  if (!content) return <div>Expertise not found</div>;

  return (
    <div className="pt-32 pb-20">
      
      {/* --- BREADCRUMB / BACK --- */}
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-muted hover:text-gold-500 transition-colors uppercase tracking-widest font-bold font-sans"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative container mx-auto px-6 md:px-12 mb-24">
         <FadeIn>
           <div className="max-w-4xl">
              <div className="w-16 h-16 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 mb-8 shadow-lg shadow-gold-500/10">
                 {React.cloneElement(content.icon as React.ReactElement<any>, { size: 32 })}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tighter mb-8 font-sans">
                {content.title}
              </h1>
              <p className="text-lg md:text-xl text-muted font-light leading-relaxed max-w-3xl font-sans border-l-2 border-gold-500 pl-6">
                {content.desc}
              </p>
           </div>
         </FadeIn>
         
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/5 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
      </section>

      {/* --- DETAILS GRID --- */}
      <SectionModule>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
               <SectionHeader title="What We Do" align="left" eyebrow="Our Approach" className="!mb-8" />
               <div className="space-y-4">
                  {content.bullets.map((item: string, i: number) => (
                     <div key={i} className="flex items-center gap-4 group bg-white/[0.02] p-4 rounded-xl border border-white/5 hover:border-gold-500/20 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                           <CheckCircle2 size={14} className="text-gold-500" />
                        </div>
                        <span className="text-white font-medium tracking-wide font-sans">{item}</span>
                     </div>
                  ))}
               </div>
            </FadeIn>

            <FadeIn delay={200}>
               <div className="glass-card rounded-[2.5rem] p-10 bg-dark-900/40 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-[40px]"></div>
                  <h3 className="text-2xl font-bold text-white mb-6 font-sans">Expected Outcomes</h3>
                  <div className="flex items-start gap-4">
                     <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white shrink-0">
                        <Zap size={24} />
                     </div>
                     <p className="text-lg text-muted font-light leading-relaxed font-sans">
                        {content.outcome}
                     </p>
                  </div>
               </div>
            </FadeIn>
         </div>
      </SectionModule>

      {/* --- CTA --- */}
      <SectionModule>
        <div className="glass-card rounded-[2.5rem] p-12 md:p-16 text-center bg-gradient-to-br from-dark-800 to-dark-900 border border-white/10">
           <h2 className="text-3xl font-bold text-white mb-6 font-sans">Drive progress in this sector.</h2>
           <p className="text-muted text-lg mb-10 max-w-2xl mx-auto font-light font-sans">
             Contact our industry specialists to discuss your upcoming projects in {content.title}.
           </p>
           <Button variant="primary" className="!px-10 !py-4 !rounded-full" onClick={() => onNavigate('contact')}>
             Request Consultation
           </Button>
        </div>
      </SectionModule>

    </div>
  );
};