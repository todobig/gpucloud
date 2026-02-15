import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Company from './components/Company';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

// Page Components
import Models from './components/Models';
import Inference from './components/Inference';
import Dedicated from './components/Dedicated';
import Agents from './components/Agents';
import Docs from './components/Docs';
import ApiRef from './components/ApiRef';
import Community from './components/Community';
import Blog from './components/Blog';
import Status from './components/Status';
import About from './components/About';
import Careers from './components/Careers';
import Legal from './components/Legal';
import Privacy from './components/Privacy';
import Contact from './components/Contact';
import ConsoleLogin from './components/ConsoleLogin';
import Dashboard from './components/Dashboard';

// UI Components
import { CookieBanner } from './components/CookieBanner';
import HiveChat from './components/HiveChat';

export type ViewState = 
  | 'home' 
  | 'company' 
  | 'prices' 
  | 'models' 
  | 'inference' 
  | 'dedicated' 
  | 'agents'
  | 'docs' 
  | 'apiref' 
  | 'community' 
  | 'blog' 
  | 'status' 
  | 'about' 
  | 'careers' 
  | 'legal' 
  | 'privacy' 
  | 'contact'
  | 'console'
  | 'dashboard';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentView]);

  // Special layout for Dashboard - no header/footer
  if (currentView === 'dashboard') {
    return (
        <div className="bg-black min-h-screen font-sans text-white selection:bg-dats-blue selection:text-white overflow-x-hidden">
            <Dashboard onNavigate={setCurrentView} />
            {/* Global styles needed for dashboard too */}
            <style>{`
                .sharp-shadow { box-shadow: 6px 6px 0px 0px #ffffff; }
                .sharp-shadow-sm { box-shadow: 3px 3px 0px 0px #ffffff; }
                .sharp-shadow-blue { box-shadow: 6px 6px 0px 0px #3b82f6; }
            `}</style>
        </div>
    );
  }

  // Special layout for Console Login - no header/footer
  if (currentView === 'console') {
      return (
          <div className="bg-black min-h-screen font-sans text-white selection:bg-dats-blue selection:text-white overflow-x-hidden">
            <ConsoleLogin onNavigate={setCurrentView} />
             <style>{`
                .sharp-shadow { box-shadow: 6px 6px 0px 0px #ffffff; }
                .sharp-shadow-blue { box-shadow: 6px 6px 0px 0px #3b82f6; }
                .bg-grid-pattern {
                    background-size: 40px 40px;
                    background-image: 
                        linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px);
                }
            `}</style>
          </div>
      );
  }

  return (
    <div className="bg-black min-h-screen font-sans text-white selection:bg-dats-blue selection:text-white overflow-x-hidden flex flex-col">
      <Header currentView={currentView} onNavigate={setCurrentView} />
      
      <div className="pt-[80px] flex-grow">
        
        {currentView === 'home' && <Hero onNavigate={setCurrentView} />}
        {currentView === 'company' && <Company />}
        {currentView === 'prices' && <Pricing />}
        
        {/* Platform Pages */}
        {currentView === 'models' && <Models />}
        {currentView === 'inference' && <Inference />}
        {currentView === 'dedicated' && <Dedicated />}
        {currentView === 'agents' && <Agents />}

        {/* Resources Pages */}
        {currentView === 'docs' && <Docs />}
        {currentView === 'apiref' && <ApiRef />}
        {currentView === 'community' && <Community />}
        {currentView === 'blog' && <Blog />}
        {currentView === 'status' && <Status />}

        {/* Company Pages */}
        {currentView === 'about' && <About />}
        {currentView === 'careers' && <Careers />}
        {currentView === 'legal' && <Legal />}
        {currentView === 'privacy' && <Privacy />}
        {currentView === 'contact' && <Contact />}
      </div>

      <Footer onNavigate={setCurrentView} />
      <CookieBanner />
      <HiveChat />
      
      {/* Global styles for the high contrast aesthetic */}
      <style>{`
        .sharp-shadow {
          box-shadow: 6px 6px 0px 0px #ffffff;
        }
        .sharp-shadow-sm {
          box-shadow: 3px 3px 0px 0px #ffffff;
        }
        .sharp-shadow-blue {
          box-shadow: 6px 6px 0px 0px #3b82f6;
        }
        .sharp-shadow-none {
           box-shadow: none;
        }
        /* Grid background pattern */
        .bg-grid-pattern {
          background-size: 40px 40px;
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px);
        }
      `}</style>
    </div>
  );
};

export default App;