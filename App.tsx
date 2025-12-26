import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Part1_Hero';
import { About, CEOMessage } from './sections/Part2_About_CEO';
import { Services, Expertise } from './sections/Part3_Services_Expertise';
import { Mission, WhyChoose, Experience } from './sections/Part4_Mission_Why_Metrics';
import { Testimonials, Articles } from './sections/Part5_Testimonials_Articles_CTA';
import { AboutPage } from './pages/About';
import { ServicesPage } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { TeamPage } from './pages/Team';
import { KeynotesPage } from './pages/Keynotes';
import { AwardsPage } from './pages/Awards';
import { ContactPage } from './pages/Contact';
import { ExpertiseDetail } from './pages/ExpertiseDetail';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentServiceId, setCurrentServiceId] = useState<string | null>(null);
  const [currentExpertiseId, setCurrentExpertiseId] = useState<string | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleServiceClick = (serviceId: string) => {
    setCurrentServiceId(serviceId);
    setCurrentPage('service-detail');
    window.scrollTo(0, 0);
  };

  const handleExpertiseClick = (expertiseId: string) => {
    setCurrentExpertiseId(expertiseId);
    setCurrentPage('expertise-detail');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white selection:bg-gold-500 selection:text-dark-900 overflow-hidden font-sans">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} /> 
            <About />
            <CEOMessage />
            <Services onServiceClick={handleServiceClick} />
            <Expertise onExpertiseClick={handleExpertiseClick} />
            <Mission />
            <WhyChoose />
            <Testimonials />
            <Experience />
            <Articles />
          </>
        )}
        
        {currentPage === 'about' && (
          <AboutPage />
        )}

        {currentPage === 'team' && (
          <TeamPage />
        )}

        {currentPage === 'services' && (
          <ServicesPage onServiceClick={handleServiceClick} />
        )}

        {currentPage === 'service-detail' && currentServiceId && (
          <ServiceDetail 
            serviceId={currentServiceId} 
            onBack={() => handleNavigate('services')}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'expertise-detail' && currentExpertiseId && (
          <ExpertiseDetail
            expertiseId={currentExpertiseId}
            onBack={() => handleNavigate('home')}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'keynotes' && (
          <KeynotesPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'awards' && (
          <AwardsPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;