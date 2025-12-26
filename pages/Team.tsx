import React from 'react';
import { FadeIn, SectionModule, GlassCard } from '../components/UI';
import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: "Dr. Usman Zafar",
    title: "Founder & CEO",
    image: "https://wbhholding.com/cdn/shop/files/1756835417480.jpg?v=1758840959&width=600",
    desc: "A globally recognized expert in digital transformation, smart city development, and government advisory. Dr. Zafar brings over 25 years of experience in shaping economic policies and securing multi-million dollar investments for nations worldwide.",
    linkedin: "https://www.linkedin.com/in/drusmanzafar/"
  },
  {
    name: "Shehensha Zaidi",
    title: "International Sales Director",
    image: "https://wbhholding.com/cdn/shop/files/Shehensha-Zaidi.webp?v=1758843049&width=300",
    desc: "Serves as the International Sales Director, focusing on global market growth.",
    linkedin: ""
  },
  {
    name: "Dr. John Mucheru",
    title: "Director Operations Kenya",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHnd6lqYxeqig/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710918521155?e=1768435200&v=beta&t=WoCXVTwe8VvQSsWN7xJh8nuTFgpbTGMywY2SB47qJG8",
    desc: "Leads the organization's operational strategies and projects within Kenya.",
    linkedin: "https://www.linkedin.com/in/johnmucheru/"
  },
  {
    name: "Saâd El Fakiri",
    title: "Global Sales Director",
    image: "https://media.licdn.com/dms/image/v2/C4D03AQHuGCnztIr0tA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1632798000744?e=1768435200&v=beta&t=MUhsOkUpCvgnb0PUKy92ZtzGwJaLTxMOL_PodKNdwnc",
    desc: "Manages global sales initiatives and strategic business development as Global Sales Director.",
    linkedin: "https://www.linkedin.com/in/sisaad/"
  },
  {
    name: "Grey Peña Grullón",
    title: "PM Dominican Republic, Caribbean",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQE3-JXZtV1aGg/profile-displayphoto-shrink_400_400/B4EZOogzzFH0Ak-/0/1733698993972?e=1768435200&v=beta&t=aGYOTG7C8y17G9_ZMCgoQr8m0EzJyEHVdFrN9fz_NKA",
    desc: "Serves as the Project Manager for the Dominican Republic and Caribbean regions.",
    linkedin: "https://www.linkedin.com/in/grey-pe%C3%B1a-grull%C3%B3n-5223a9186/"
  },
  {
    name: "Dr Kelvin M Majau",
    title: "Director Business Development Kenya",
    image: "https://wbhholding.com/cdn/shop/files/WhatsApp_Image_2025-09-26_at_01.34.41_1.jpg?v=1758843289&width=300",
    desc: "Drives business expansion and partnership opportunities as Director of Business Development in Kenya.",
    linkedin: ""
  },
  {
    name: "Dr. Rashid Alameri",
    title: "Board Advisor",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQEf20q8JeDfTw/profile-displayphoto-shrink_400_400/B4DZSIlAyKG4Ak-/0/1737458193832?e=1768435200&v=beta&t=b3_n16xgKatQNELIZfDa0C26Xuch2LYLwZaKmrmOspg", 
    desc: "Provides strategic board-level guidance and high-level advisory support.",
    linkedin: "https://www.linkedin.com/in/rashidalameri/"
  },
  {
    name: "Princess Isabelle Lafforgue",
    title: "Board Advisor",
    image: "https://media.licdn.com/dms/image/v2/D5603AQH9B9vbhvs-NA/profile-displayphoto-scale_400_400/B56Zegi50GG0Ao-/0/1750745195934?e=1768435200&v=beta&t=GxyNPWNUrQQifleV_zgR_hvSqAghqssoCIKMP9PcqiI",
    desc: "Offers expert advisory services with a focus on international relations and strategy.",
    linkedin: "https://www.linkedin.com/in/ingrid-vasiliu-feltes-md-mba-4b71121/"
  },
  {
    name: "David Galea",
    title: "Board Advisor",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGeiAoYPLkm6A/profile-displayphoto-scale_400_400/B4DZq39qnhIkAg-/0/1764022988302?e=1768435200&v=beta&t=9TipTL0al_n5_TBTEItscNY5shO-aH-23PYpbCUJrq8",
    desc: "Contributes strategic oversight and organizational guidance as a Board Advisor.",
    linkedin: "https://www.linkedin.com/in/davgalea/"
  },
  {
    name: "Dieter Hovoroka",
    title: "Board Advisor",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQE55K8AYKMTAQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718167057796?e=1768435200&v=beta&t=m4FAqqIMgLgvCGR2oWKz9vF7sBIOvCHwrLOim6RA4fY",
    desc: "Serves as a Board Advisor, contributing technical and strategic business insights.",
    linkedin: "https://www.linkedin.com/in/dieterhovorka/"
  },
  {
    name: "Dr. Sonia Saleem",
    title: "Board Advisor",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQFdOjW3bBc0aQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1732717456935?e=1768435200&v=beta&t=5EgdCDc4lMlua5H78s8k-ZqpAWzOW_4IVIRyiuCfDXs",
    desc: "Provides specialized board advisory, likely focusing on her areas of professional expertise.",
    linkedin: "https://www.linkedin.com/in/iamsoniasaleemofficial/"
  },
  {
    name: "Faisal H.Nathoka",
    title: "Board Advisor",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQHwK9wVMF3vjA/profile-displayphoto-shrink_800_800/B4EZbKSrbLHoAc-/0/1747150617900?e=1768435200&v=beta&t=2W8DOHF4kGYv2uoIKNtQMRP2tj1Q4aVq0ZIxtetGKYY",
    desc: "A multi-faceted consultant and board member with expertise in real estate and training.",
    linkedin: "https://www.linkedin.com/in/faisalnathoka/"
  }
  ,{
    name: "Mr Ronald Kunene",
    title: "Board Advisor",
    image: "https://wbhholding.com/cdn/shop/files/WhatsApp_Image_2025-09-26_at_01.30.27_1.jpg?v=1758843961&width=300",
    desc: "Offers advisory support, leveraging his experience to guide the group’s initiatives.",
    linkedin: ""
  },
];

export const TeamPage: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      
      {/* --- HERO SECTION --- */}
      <section className="relative container mx-auto px-6 md:px-12 mb-20">
         <FadeIn>
           <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-10 h-[1px] bg-gold-500/50"></div>
                  <span className="text-gold-500 text-sm font-bold tracking-[0.2em] uppercase font-sans">Our Leadership</span>
                  <div className="w-10 h-[1px] bg-gold-500/50"></div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-[1.1] tracking-tighter mb-8 font-sans">
                Visionaries & <br/> <span className="gold-gradient-text">Strategists</span>
              </h1>
              <p className="text-lg md:text-xl text-muted font-light leading-relaxed max-w-2xl mx-auto font-sans">
                Meet the minds behind World Business Hub. A collective of global experts dedicated to shaping the future of economic development.
              </p>
           </div>
         </FadeIn>
         
         {/* Abstract Background Elements */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[100%] bg-gold-500/5 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
      </section>

      {/* --- TEAM GRID --- */}
      <SectionModule>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
               <FadeIn key={i} delay={i * 50} className="h-full">
                  <div className="group h-full relative perspective-1000">
                     <GlassCard className="h-full flex flex-col p-0 overflow-hidden border border-white/5 hover:border-gold-500/30 transition-all duration-500 group-hover:-translate-y-2 bg-dark-900/40">
                        
                        {/* Image Container */}
                        <div className="relative w-full aspect-[4/5] overflow-hidden bg-dark-800">
                           {member.image ? (
                             <img 
                               src={member.image} 
                               alt={member.name} 
                               className="w-full h-full object-cover object-top filter grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                               onError={(e) => {
                                 (e.target as HTMLImageElement).style.display = 'none';
                                 (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                               }}
                             />
                           ) : null}
                           
                           {/* Fallback if image fails or is missing */}
                           <div className={`w-full h-full flex items-center justify-center bg-white/5 absolute inset-0 ${member.image ? 'hidden' : ''}`}>
                                <span className="text-white/20 text-xs uppercase tracking-widest font-sans">Image Update Pending</span>
                           </div>
                           
                           {/* Overlay Gradient */}
                           <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                           {/* Floating LinkedIn Icon */}
                           <a 
                             href={member.linkedin} 
                             className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 shadow-lg z-20"
                             target="_blank"
                             rel="noopener noreferrer"
                             aria-label={`${member.name} LinkedIn`}
                           >
                              <Linkedin size={18} fill="currentColor" className="stroke-none" />
                           </a>
                        </div>

                        {/* Content */}
                        <div className="p-8 pt-6 flex flex-col flex-grow relative bg-dark-900/60 backdrop-blur-md -mt-12 z-10 border-t border-white/5 rounded-t-[2rem]">
                           {/* Decorative Line */}
                           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-gold-500/50 rounded-full mt-3"></div>

                           <div className="text-gold-500 text-[0.65rem] font-bold uppercase tracking-[0.2em] mb-2 font-sans mt-4">
                              {member.title}
                           </div>
                           <h3 className="text-2xl font-bold text-white mb-4 tracking-tight font-sans group-hover:text-gold-500 transition-colors leading-tight">
                              {member.name}
                           </h3>
                           <p className="text-sm text-muted leading-relaxed opacity-80 font-sans line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                              {member.desc}
                           </p>
                        </div>

                     </GlassCard>
                  </div>
               </FadeIn>
            ))}
         </div>
      </SectionModule>

    </div>
  );
};