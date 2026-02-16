
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Section } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.HOME);

  // Scroll to top when switching sections
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const renderContent = () => {
    switch (activeSection) {
      case Section.HOME:
        return (
          <Home 
            onPortfolioClick={() => setActiveSection(Section.PORTFOLIO)} 
            onContactClick={() => setActiveSection(Section.CONTACT)} 
          />
        );
      case Section.PORTFOLIO:
        return <Portfolio />;
      case Section.CONTACT:
        return <Contact />;
      default:
        return <Home onPortfolioClick={() => {}} onContactClick={() => {}} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-cyan/20 selection:text-brand-navy">
      <Navbar activeSection={activeSection} setSection={setActiveSection} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer setSection={setActiveSection} />
      
      {/* Floating CTA for Mobile */}
      {activeSection !== Section.CONTACT && (
        <div className="fixed bottom-8 right-8 md:hidden z-40">
          <button 
            onClick={() => setActiveSection(Section.CONTACT)}
            className="bg-brand-navy text-white p-5 rounded-2xl shadow-2xl hover:bg-brand-red transition-all flex items-center justify-center animate-bounce shadow-brand-navy/40"
          >
            <span className="font-black uppercase tracking-widest text-[10px] px-2">Free Quote</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
