import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
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

const viewToPath: Record<ViewState, string> = {
  home: '/',
  company: '/company',
  prices: '/pricing',
  models: '/models',
  inference: '/inference',
  dedicated: '/dedicated',
  agents: '/agents',
  docs: '/docs',
  apiref: '/api-reference',
  community: '/community',
  blog: '/blog',
  status: '/status',
  about: '/about',
  careers: '/careers',
  legal: '/legal',
  privacy: '/privacy',
  contact: '/contact',
  console: '/console',
  dashboard: '/dashboard',
};

const pathToView: Record<string, ViewState> = {
  '/': 'home',
  '/home': 'home',
  '/company': 'company',
  '/pricing': 'prices',
  '/models': 'models',
  '/inference': 'inference',
  '/dedicated': 'dedicated',
  '/agents': 'agents',
  '/docs': 'docs',
  '/api-reference': 'apiref',
  '/community': 'community',
  '/blog': 'blog',
  '/status': 'status',
  '/about': 'about',
  '/careers': 'careers',
  '/legal': 'legal',
  '/privacy': 'privacy',
  '/contact': 'contact',
  '/console': 'console',
  '/dashboard': 'dashboard',
};

const normalizePath = (pathname: string) =>
  pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

const getViewFromPath = (pathname: string): ViewState =>
  pathToView[normalizePath(pathname)] ?? 'home';

const App: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentView = getViewFromPath(location.pathname);

  const onNavigate = (view: ViewState) => {
    navigate(viewToPath[view]);
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  // Special layout for Dashboard - no header/footer
  if (currentView === 'dashboard') {
    return (
        <div className="bg-black min-h-screen font-sans text-white selection:bg-dats-blue selection:text-white overflow-x-hidden">
            <Dashboard onNavigate={onNavigate} />
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
            <ConsoleLogin onNavigate={onNavigate} />
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
      <Header currentView={currentView} onNavigate={onNavigate} />
      
      <div className="pt-[80px] flex-grow">
        <Routes>
          <Route path="/" element={<Hero onNavigate={onNavigate} />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/company" element={<Company />} />
          <Route path="/pricing" element={<Pricing />} />

          {/* Platform Pages */}
          <Route path="/models" element={<Models />} />
          <Route path="/inference" element={<Inference />} />
          <Route path="/dedicated" element={<Dedicated />} />
          <Route path="/agents" element={<Agents />} />

          {/* Resources Pages */}
          <Route path="/docs" element={<Docs />} />
          <Route path="/api-reference" element={<ApiRef />} />
          <Route path="/community" element={<Community />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/status" element={<Status />} />

          {/* Company Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <Footer onNavigate={onNavigate} />
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
