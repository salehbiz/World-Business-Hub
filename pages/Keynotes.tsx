import React from 'react';
import { SectionHeader, FadeIn, SectionModule, Button, GlassCard } from '../components/UI';
import { Mic2, Globe } from 'lucide-react';

const keynotes = [
  {
    title: "DUBAI COURTS E-NOTARY CONFERENCE",
    image: "https://i.postimg.cc/tTmv9GfX/image.png",
    desc: "UNDER THE PATRONAGE OF HIGHNESS SHEIKH MAKTOUM BIN MOHAMMED BIN RASHID AL MAKTOUM, DEPUTY RULER OF DUBAI AL TAQNYAH / DUBAI COURTS HOSTED AN “ENOTARY CONFERENCE” AT AL BUSTAN ROTANA HOTEL DUBAI UAE."
  },
  {
    title: "Future IT Summit",
    image: "https://i.postimg.cc/bw99gjq1/image.png",
    desc: "Dr Usman Zafar was honored to Chair the Panel discussion at Future IT Summit to talk about “GCC Organizations’ Digital Transformation Readiness Roadmap and How prepared are we?” at Burj Al Arab."
  },
  {
    title: "3rd GOVERNMENT ORGANIZATION WEBSITES GLOBAL COMPETITIVENESS STRATEGY DEVELOPMENT CONFERENCE",
    image: "https://i.postimg.cc/7Yv1yL6M/image.png",
    desc: "Dr. Usman Zafar presenting “Technology, Innovation and Lateral Thinking for Web Services” and leading the panel discussion “Use of Social Media for eGovernment Services” during the “3rd GCC Government Organization Websites Global Competitiveness Conference” at Raddison Saas Hotel Dubai."
  },
  {
    title: "2ND ANNUAL CUSTOMER ENGAGEMENT TECHNOLOGY WITH E-GOVERNMENT CONFERENCE ORGANIZED BY CPI MEDIA",
    image: "https://i.postimg.cc/pd7hY050/image.png",
    desc: "Dr Usman Zafar presenting “e-Government Transformation to Mobile Government: Opportunities & Challenges” as a keynote speaker at CET Middle Conference at The Address Hotel Dubai, UAE."
  },
  {
    title: "OPEN DATA FORUM BY EMIRATES ID & UNITED NATIONS ABU DHABI",
    image: "https://i.postimg.cc/WbndfpJ3/image.png",
    desc: "Dr Usman Zafar presenting “Open Data Strategies” as a speaker and moderating the distinguished panelist session from different countries of the world during the “1st Open Data forum” organized by Emirates ID & United Nations at the Ritz Carlton Hotel, Abu Dhabi, UAE."
  },
  {
    title: "GCC FATAL AND HORRIFIC ACCIDENTS PREVENTION CONFERENCE",
    image: "https://i.postimg.cc/g0wrJvt3/image.png",
    desc: "Dr. Usman Zafar presenting “How to Implement Highly Effective Safety Strategies and Initiatives” for the prevention of horrific traffic accidents during “The GCC Fatal and Horrific Accidents Prevention Conference” at the Burj Al Arab Hotel Dubai, UAE."
  },
  {
    title: "AJMAN UNIVERSITY INTERNATIONAL CONFERENCE ON TRENDS FOR INFORMATION TECHNOLOGY AND APPLICATIONS",
    image: "https://i.postimg.cc/sDVXSFHt/image.png",
    desc: "Dr. Usman Zafar and Mr. Abdulraheem IT Director Dubai Courts jointly presenting the Dubai Courts eNotary Case Study at the ICTITA Conference at Ajman University in United Arab Emirates."
  },
  {
    title: "UAE GOVERNMENT e-SERVICES MARKETING STRATEGY CONFERENCE BURJ AL ARAB",
    image: "https://i.postimg.cc/SsFQxHMx/image.png",
    desc: "Dr. Usman Zafar presenting strategies for “Developing e-Government Marketing Capabilities” and leading the panel discussion “Measurement Criteria and Benchmarking the Success & Failure of the Citizen using eServices” during the UAE Government eServices Marketing Strategy Conference."
  },
  {
    title: "DATAMATIX GITEX CONFERENCE",
    image: "https://i.postimg.cc/WzSsS3fR/image.png",
    desc: "Dr Usman Zafar presenting “Government Social Media – Global Trends and its Impact” as a keynote speaker at the “Datamatix Gitex Conference” at the Dusit Thani Hotel Dubai, UAE."
  },
  {
    title: "SMART GOVERNMENT & SMART CITY CONFERENCE BURJ AL ARAB",
    image: "https://i.postimg.cc/rFFVs1Kr/image.png",
    desc: "Dr Usman Zafar in a panel discussion along with Mr. Abdulsalam Rahma Al Bastaki Executive Director – ICT Dubai Properties Group, Mr. Krishna Iyer Vice President IT Matrix and Dr. Ahmed Tahlaq – Chairman Levenberton at the Burj Al Arab Hotel Dubai."
  },
  {
    title: "eGOVERNMENT PROGRAM IN JUDICIAL LEGISLATION, e-NOTARY, e-JUSTICE AND e-BUSINESS SYSTEMS",
    image: "https://i.postimg.cc/bvb8WLBP/image.png",
    desc: "Dr. Usman Zafar presenting “Key Challenges in eCourts System“ and leading the panel discussions during the eGovernment program in Judicial Legislation at the Dusit Thani Hotel, organized by Dubai eGovernment Institute."
  },
  {
    title: "DATAMATIX GITEX CONFERENCE",
    image: "https://i.postimg.cc/SsFQxHMx/image.png",
    desc: "Dr. Usman Zafar presenting “Web 2.0 and Semantic Web 3.0 in Today’s Government and Corporate Environment” and participated in the panel discussion to talk about the “Breaking Barriers of eGovernment” during the Datamatix Gitex Conference."
  },
  {
    title: "Launch of Properties Guild with Taqnyah",
    image: "https://i.postimg.cc/C5rWzfQL/image.png",
    desc: "Dr. Usman Zafar, Managing Director Al Taqnyah launching propertiesguild.biz, in the presence of around 300 real estate investors, agents, agencies and master developers."
  },
  {
    title: "17TH GCC e-GOVERNMENT AND e-SERVICES CONFERENCE",
    image: "https://i.postimg.cc/023TvDSB/image.png",
    desc: "Dr. Usman Zafar presenting “e-Transformation in Public Sector” along with Dubai e-Notary Case Study in one of the largest GCC eGovernment Conferences in Dubai."
  },
  {
    title: "MANIPAL / IEEE CONFERENCE ON TECHNOLOGY MANAGEMENT",
    image: "https://i.postimg.cc/V6YTgRyb/image.png",
    desc: "Dr. Usman Zafar conducting a keynote speech on “e-Transformation in the Public Sector” at a conference organized by the Manipal University / IEEE in Dubai, UAE."
  },
  {
    title: "10th GCC GOVERNMENT EXCELLENCE SERVICES AND QUALITY CUSTOMER CARE CONFERENCE",
    image: "https://i.postimg.cc/dVrxKXw2/image.png",
    desc: "Dr. Usman Zafar presenting “Customer Self-Service Strategy and Solutions for Government and Business Organizations” during the “10th GCC Government Excellence Services and Quality Customer Care Conference” at the Emirates Tower Hotel Dubai, UAE."
  },
  {
    title: "GCC e-TOURISM DEVELOPMENT CONFERENCE",
    image: "https://i.postimg.cc/J0spYYp8/image.png",
    desc: "Dr. Usman Zafar presenting “Challenges and Opportunities of Tourism Development in the MENA Region“ during the “GCC e-Tourism Development Conference” at the Millennium Plaza Hotel, Dubai, UAE."
  },
  {
    title: "9th LEADING CEO CONFERENCE BURJ AL ARAB",
    image: "https://i.postimg.cc/cJTTxGjY/image.png",
    desc: "Dr. Usman Zafar presenting “Transformational Leadership (GCC Perspective)” during the “9th Leading CEO Conference” along with Hon. Dato Seri Anwar Ibrahim, Former Deputy Prime Minister Malaysia at Burj Al Arab Dubai, UAE."
  },
  {
    title: "UNDER SECRETARIES AND DIRECTORS LEADERSHIP CONFERENCE",
    image: "https://i.postimg.cc/8cfbmJCc/image.png",
    desc: "Dr. Usman Zafar and Mr. Abdulraheem IT Director Dubai Courts jointly presenting the Dubai Courts eNotary Case Study at the ICTITA Conference at Ajman University in United Arab Emirates."
  },
  {
    title: "3rd GCC GOVERNMENT CORPORATE AND MEDIA COMMUNICATION CONFERENCE",
    image: "https://i.postimg.cc/PfBGs11G/image.png",
    desc: "Dr. Usman Zafar presenting “Organizations Media and Corporate Communications Transformation From Conventional to Digital Media” as a keynote speaker during the “3rd GCC Government Corporate and Media Communication Conference” at Ritz Carlton Hotel Dubai, UAE."
  },
  {
    title: "19th GCC e-GOVERNMENT AND e-SERVICES CONFERENCE",
    image: "https://i.postimg.cc/pT4SvthG/image.png",
    desc: "Dr. Usman Zafar speaking about the “Top Challenges for Next Generation GCC e-Governments” during the panel discussion at one of the largest eGovernment Conferences in the world at the Ritz Carlton Hotel Dubai, UAE."
  },
  {
    title: "GCC GOVERNMENT AND PRIVATE SECTORS KNOWLEDGE MANAGEMENT DEVELOPMENT CONFERENCE",
    image: "https://i.postimg.cc/sDFL0sRD/image.png",
    desc: "Dr. Usman Zafar presenting “Modern Knowledge Management Partnership Strategy and Social Networking Best Practices in Public & Private Sectors” at the “GCC Government and Private Sectors Knowledge Management Development Conference” at the Sofitel Hotel, Downtown Hotel, UAE."
  },
  {
    title: "M-Government Conference Dubai",
    image: "https://i.postimg.cc/gJCg5qQT/image.png",
    desc: "Dr. Usman Zafar presenting the “Mobile Government Future” as the Chairman of the Conference and demonstrating Google Glass features as wearable future technologies at the Ritz Carlton Hotel DIFC, Dubai, UAE."
  },
  {
    title: "ID WORLD CONFERENCE ABU DHABI",
    image: "https://i.postimg.cc/MKb9PBDY/image.png",
    desc: "Dr. Usman Zafar presenting “Transformation of e-Government to M-Government” as a keynote speaker at the “ID World Conference” at The Emirates Center For Strategic Studies and Research Center Abu Dhabi, UAE."
  },
  {
    title: "DATAMATIX GITEX CONFERENCE",
    image: "https://i.postimg.cc/tg7D4MHN/image.png",
    desc: "Dr. Usman Zafar presenting the “Government Big Data Management & Analytics (GCC Perspective)” as a speaker at the “Datamatix Gitex Conference” at the Sofitel Hotel, Dubai, UAE."
  },
  {
    title: "CPI BIG DATA SYMPOSIUM",
    image: "https://i.postimg.cc/jdZzn4cM/image.png",
    desc: "Dr. Usman Zafar presenting the “Open Data Strategies & M-Government Transformation (GCC Perspective)” at the “Big Data Symposium by CPI Media” at the Habtoor Grand Hotel, Dubai, UAE."
  },
  {
    title: "AVAYA VIDEO CONFERENCING & MOBILITY ROADSHOW",
    image: "https://i.postimg.cc/Bv1Dy90R/image.png",
    desc: "Dr. Usman Zafar presenting the “Mobility & Governance Strategies” as a keynote speaker during the “Video Conferencing & Mobility Roadshow” organized by Avaya Technologies at the Fairmont Hotel Abu Dhabi, UAE."
  },
  {
    title: "20TH GCC eGOVERNMENT AND eSERVICES CONFERENCE",
    image: "https://i.postimg.cc/tJDVP93d/image.png",
    desc: "Dr. Usman Zafar presenting “Global Best Practices in: Mobile Apps and Payment Gateways” at the 20th GCC eGovernment Conference at the Burj Al Arab, Dubai, UAE."
  },
  {
    title: "11th GOVERNMENT AND BUSINESS LEADING CEO CONFERENCE BURJ AL ARAB",
    image: "https://i.postimg.cc/9fTRbdP5/image.png",
    desc: "Dr. Usman Zafar moderating the panel discussing “Developing the TOP 3 Leadership Positions in Government & Business Organizations” at the Ritz Carlton Hotel, Dubai, UAE."
  },
  {
    title: "6th GCC SMART GOVERNMENT AND CITIES PORTALS CONFERENCE",
    image: "https://i.postimg.cc/y6nJLYRN/image.png",
    desc: "Dr. Usman Zafar presenting “GCC Smart Government and Cities Services Global Standardization (GCC Perspective)” at the Burj Al Arab Hotel, Dubai, UAE."
  },
  {
    title: "4TH UAE LEADING GOVERNMENT EXECUTIVES AND EMPLOYEES CONFERENCE",
    image: "https://i.postimg.cc/W4Mzg2jc/image.png",
    desc: "Dr. Usman Zafar presenting “Modern Knowledge Management Strategies” at the Burj Al Arab Hotel, Dubai, UAE."
  },
  {
    title: "4TH GCC MUNICIPALITIES AND SMART CITIES CONFERENCE",
    image: "https://i.postimg.cc/VvNkxnt1/image.png",
    desc: "Dr. Usman Zafar presenting “ICT Capabilities for Smart Cities (2020)” at the Burj Al Arab Hotel, Dubai, UAE."
  },
  {
    title: "3rd Smart Government and City Conference",
    image: "https://i.postimg.cc/t464GXsN/image.png",
    desc: "Dr. Usman Zafar presenting “Smart Cities Government eServices Strategies” at the Burj Al Arab Hotel, Dubai, UAE."
  },
  {
    title: "Smart Cities & Smart Governance Conference in Qatar",
    image: "https://i.postimg.cc/3RtKFNqK/image.png",
    desc: "Dr. Usman Zafar presenting “Smart Cities Innovation Strategies and Governance Challenges” at Crown Plaza Hotel Doha, Qatar."
  },
  {
    title: "Global Innovation Summit Jumeirah Beach Hotel",
    image: "https://i.postimg.cc/XvVS13d7/image.png",
    desc: "Dr. Usman Zafar chaired panel discussions on “How disruptive technologies are enhancing our life and business?” and participated as a panelist to talk about “Power of artificial intelligence and amplified intelligence” at Global Innovation Summit at Jumeirah Beach Hotel."
  },
  {
    title: "3rd Annual Critical Communications Conference Middle East",
    image: "https://i.postimg.cc/vTxpxmFk/image.png",
    desc: "Dr. Usman Zafar delivered a keynote speech on “Government Open Data Role For Building Smart Services (GCC Perspective)” at Jumeirah Beach Hotel Dubai, UAE."
  },
  {
    title: "21st GCC Government and Smart Services Conference",
    image: "https://i.postimg.cc/WpQ4WF3z/image.png",
    desc: "Dr. Usman Zafar presenting “GCC Smart Government Challenges” at the Ritz Carlton Hotel, Dubai, UAE."
  },
  {
    title: "14th GCC Smart Government and City Customer Care Excellence Conference",
    image: "https://i.postimg.cc/gJxY4mbt/image.png",
    desc: "Dr. Usman Zafar presenting “Government Big Data Role in Building Smart Services” at the Burj Al Arab Hotel, Dubai, UAE."
  },
  {
    title: "5th GCC Government Future Leaders Conference",
    image: "https://i.postimg.cc/Gp2rhd27/image.png",
    desc: "Dr. Usman Zafar delivered a keynote session on “Global Best Practices In Leadership Succession Planning and Strategies” at Ritz Carlton Hotel Dubai, UAE."
  },
  {
    title: "5th GCC Municipalities & Smart Cities Conference",
    image: "https://i.postimg.cc/RVBBJchp/image.png",
    desc: "Dr. Usman Zafar delivered a keynote speech on “SMART Municipalities Vision for Customer Service Excellence, Services Transformation & Cost Reduction through Emerging Technologies” at Ritz Carlton Hotel Dubai, UAE."
  },
  {
    title: "3rd M2M Middle East Forum Dubai",
    image: "https://i.postimg.cc/YCXKPZ3L/image.png",
    desc: "Dr. Usman Zafar presented “GCC Smart Government and Cities Services Global Standardization Requirements” at The Address Hotel, Dubai, UAE."
  },
  {
    title: "15th GCC SMART GOVERNMENT CITY CUSTOMER CARE EXCELLENCE CONFERENCE",
    image: "https://i.postimg.cc/BvX9fp7v/image.png",
    desc: "Dr. Usman Zafar presented “Customer Care Excellence Framework For Smart City and Smart Government” at Dusit Thani Hotel, Dubai, UAE."
  },
  {
    title: "IQPC Bio Materic Conference",
    image: "https://i.postimg.cc/fy71fryL/image.png",
    desc: "Dr. Usman Zafar keynote at IQPC Bio Materic Conference."
  },
  {
    title: "6th GCC Smart Municipalities Conference",
    image: "https://i.postimg.cc/7YVpCdjF/image.png",
    desc: "Dr. Usman Zafar participant at 6th GCC Smart Municipalities."
  },
  {
    title: "5th Nationals Working in Private Sector",
    image: "https://i.postimg.cc/vmpjFs6x/image.png",
    desc: "Dr. Usman Zafar keynote at 15th Nationals Working in Private Sector."
  },
  {
    title: "23rd GCC Smart Cities & Smart Government Conference",
    image: "https://i.postimg.cc/DwNpLT66/image.png",
    desc: "Dr. Usman Zafar participated as a keynote speaker on “SMART Cities Challenges & Opportunities (GCC Perspective) & Services Transformation & Cost Reduction” at Ritz Carlton Hotel Dubai."
  },
  {
    title: "7th GCC Municipalities & Smart Cities Conference",
    image: "https://i.postimg.cc/W3L9YwQY/image.png",
    desc: "Dr. Usman Zafar participated as a keynote speaker & panelist on “Technology Transformation & Future Smart Cities” at Burj Al Arab Hotel."
  },
  {
    title: "Alain SME Expo Forum",
    image: "https://i.postimg.cc/65jMxXkG/image.png",
    desc: "Dr. Usman Zafar recognized at Asian SME EXPO Forum UAE by the Senior Director of Abu Dhabi Chamber of Commerce."
  },
  {
    title: "CEO KLUB Investment Forum Dubai",
    image: "https://i.postimg.cc/t48D7zCg/image.png",
    desc: "Dr. Usman Zafar participated as panelist and ICO expert discussing investment strategies for blockchain investors at CEO KLUB Investment Forum in Dubai at Sofitel Hotel JBR, UAE."
  },
  {
    title: "20th GCC Green HR Management Conference",
    image: "https://i.postimg.cc/fLfv2n7y/image.png",
    desc: "Dr. Usman Zafar delivered a keynote on how blockchain, IoT, big data and technologies impact future jobs at the 20th GCC Green HR Management Conference at Ritz Carlton Hotel Dubai."
  },
  {
    title: "CIO 200 Awards",
    image: "https://i.postimg.cc/7ZJnvT1g/image.png",
    desc: "Dr. Usman Zafar served as a jury member selecting the CIO of the Year Award at CIO 200 Conference at Armani Hotel."
  },
  {
    title: "Blockchain Investment Conference",
    image: "https://i.postimg.cc/W38MmmjG/image.png",
    desc: "Dr. Usman Zafar invited keynote on Locus Chain Blockchain Technology and panelist on blockchain challenges in developing countries."
  },
  {
    title: "24th GCC Smart Cities & Smart Government Conference",
    image: "https://i.postimg.cc/Hx6y8p4Q/image.png",
    desc: "Dr. Usman Zafar presented on government and private sector readiness for future jobs at this conference."
  },
  {
    title: "5G MENA Conference",
    image: "https://i.postimg.cc/Nf9HLvyX/image.png",
    desc: "Dr. Usman Zafar hosted a panel discussion on IoT connectivity standards at 5G MENA Conference at Jumeirah Beach Hotel Dubai."
  },
  {
    title: "18th GCC HR Transformation Conference",
    image: "https://i.postimg.cc/6Q07F9PP/image.png",
    desc: "Dr. Usman Zafar spoke about preparing for jobs that don’t yet exist at the 18th GCC HR Transformation Conference at Ritz Carlton Hotel Dubai."
  },
  {
    title: "17th GCC Customer Care Conference",
    image: "https://i.postimg.cc/KcV16p06/image.png",
    desc: "Dr. Usman Zafar delivered a keynote on customer services strategies amidst technology transformation at 17th GCC Customer Care Conference at Burj Al Arab Hotel Dubai."
  },
  {
    title: "Global Online Shopping Portals Effects on GCC Retail Industry Conference",
    image: "https://i.postimg.cc/GmnH28w5/image.png",
    desc: "Dr. Usman Zafar addressed eCommerce market potential and challenges at this conference at Dusit Thani Hotel."
  },
  {
    title: "Innovation Conference Organized by Federal Authority of Identity & Citizenship",
    image: "https://i.postimg.cc/DZ0zD1Lb/image.png",
    desc: "Dr. Usman Zafar honored and delivered keynote on blockchain GCC challenges at this innovation conference."
  },
  {
    title: "8th Smart City Expo",
    image: "https://i.postimg.cc/mZ0QYrWp/image.png",
    desc: "Dr. Usman Zafar delivered a keynote on future jobs and smart governments at 8th Smart City Expo at Dusit Thani Hotel Dubai, UAE."
  }
];

interface KeynotesPageProps {
  onNavigate: (page: string) => void;
}

export const KeynotesPage: React.FC<KeynotesPageProps> = ({ onNavigate }) => {
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
                  <span className="text-gold-500 text-sm font-bold tracking-[0.2em] uppercase font-sans">Global Engagements</span>
                  <div className="w-10 h-[1px] bg-gold-500/50"></div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tighter mb-8 font-sans">
                Keynotes & <br/> <span className="gold-gradient-text">Public Speaking</span>
              </h1>
              <p className="text-lg md:text-xl text-muted font-light leading-relaxed max-w-2xl mx-auto font-sans">
                High-level thought leadership delivered at global conferences, government forums, and executive summits across the world.
              </p>
           </div>
         </FadeIn>
         
         {/* Abstract Background Elements */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[100%] bg-gold-500/5 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
      </section>

      {/* --- KEYNOTES GRID --- */}
      <SectionModule>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keynotes.map((item, i) => (
                <FadeIn key={i} delay={i * 20} className="h-full">
                    <GlassCard className="h-full flex flex-col p-0 overflow-hidden border border-white/5 hover:border-gold-500/30 transition-all duration-500 group-hover:-translate-y-2 bg-dark-900/40 group">
                        
                        {/* Title Section (Top) */}
                        <div className="p-8 pb-4 relative z-20 bg-dark-900/60 backdrop-blur-sm">
                             <h3 className="text-lg font-bold text-white tracking-tight leading-tight font-sans group-hover:text-gold-500 transition-colors">
                                {item.title}
                             </h3>
                        </div>

                        {/* Image Container (Middle) */}
                        <div className="relative w-full aspect-[16/9] overflow-hidden bg-dark-800">
                             <img 
                               src={item.image} 
                               alt={item.title} 
                               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale-[0.4] group-hover:grayscale-0" 
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-90"></div>
                             
                             {/* Floating Icons */}
                             <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-gold-500 border border-white/20 shadow-lg z-10">
                                {i % 2 === 0 ? <Mic2 size={18} /> : <Globe size={18} />}
                             </div>
                        </div>

                        {/* Description Content (Bottom) */}
                        <div className="p-8 pt-4 flex flex-col flex-grow relative -mt-2">
                             <p className="text-sm text-muted leading-relaxed opacity-80 font-sans relative z-10">
                                {item.desc}
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
            <div className="glass-card rounded-[2.5rem] p-12 text-center bg-gradient-to-br from-dark-800 to-dark-900 border border-white/10 max-w-4xl mx-auto shadow-2xl">
               <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-6 font-sans">Invite Dr. Usman Zafar</h2>
                  <p className="text-muted text-lg mb-10 max-w-2xl mx-auto font-light font-sans">
                    Book a keynote session to gain exclusive insights into the future of technology, economy, and leadership.
                  </p>
                  <Button variant="primary" onClick={handleContactClick} className="!px-10 !py-4 !rounded-full shadow-gold-500/20">
                    Request Availability
                  </Button>
               </div>
            </div>
        </FadeIn>
      </SectionModule>

    </div>
  );
};