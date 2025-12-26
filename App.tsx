import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Part1_Hero';
import { About, CEOMessage } from './sections/Part2_About_CEO';
import { Services, Expertise } from './sections/Part3_Services_Expertise';
import { Mission, WhyChoose, Experience } from './sections/Part4_Mission_Why_Metrics';
import { Testimonials, Articles, FinalCTA } from './sections/Part5_Testimonials_Articles_CTA';
import { AboutPage } from './pages/About';
import { ServicesPage } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { TeamPage } from './pages/Team';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentServiceId, setCurrentServiceId] = useState<string | null>(null);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleServiceClick = (serviceId: string) => {
    setCurrentServiceId(serviceId);
    setCurrentPage('service-detail');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-dark-900 text-white selection:bg-gold-500 selection:text-dark-900 overflow-hidden font-sans">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero /> 
            <About />
            <CEOMessage />
            <Services />
            <Expertise />
            <Mission />
            <WhyChoose />
            <Testimonials />
            <Experience />
            <Articles />
            <FinalCTA />
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
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;