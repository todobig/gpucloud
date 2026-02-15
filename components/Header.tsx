import React, { useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { ViewState } from '../App';

interface HeaderProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: { label: string; value: ViewState }[] = [
    { label: 'PRODUCT', value: 'home' },
    { label: 'INFRASTRUCTURE', value: 'company' },
    { label: 'AGENTS', value: 'agents' },
    { label: 'PRICING', value: 'prices' },
    { label: 'MODELS', value: 'models' },
  ];

  const handleNavClick = (view: ViewState) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-none border-b border-white h-[80px] flex items-center">
        <div className="w-full max-w-[1400px] mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-4 cursor-pointer group" 
            onClick={() => handleNavClick('home')}
          >
            <div className="relative w-10 h-10 bg-white flex items-center justify-center text-black group-hover:bg-dats-blue group-hover:text-white transition-colors">
              <Terminal size={24} strokeWidth={2} />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white font-display">GPU<span className="text-white/40">cloud</span></span>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex h-full items-center">
            {navItems.map((item) => (
              <button 
                key={item.value} 
                onClick={() => onNavigate(item.value)}
                className={`h-[80px] px-8 text-sm font-bold tracking-wider transition-colors border-l
                  ${currentView === item.value 
                    ? 'bg-white text-black border-l-white border-r-white' 
                    : 'text-gray-400 hover:text-white border-l-white/10 hover:bg-white/10'
                  }
                  ${item.value === 'models' ? 'border-r border-r-white/10' : ''}
                `}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button 
                onClick={() => onNavigate('docs')}
                className="flex items-center gap-2 px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest border border-white text-white hover:bg-white hover:text-black transition-colors"
            >
              Docs
            </button>
            <button 
              onClick={() => onNavigate('console')}
              className="flex items-center gap-2 px-6 py-3 bg-white text-black font-mono text-xs font-bold uppercase tracking-widest border border-white hover:bg-dats-blue hover:text-white hover:border-dats-blue transition-colors sharp-shadow-blue"
            >
              Console
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[80px] bg-black z-40 p-6 md:hidden animate-in slide-in-from-right duration-300 border-l border-white/20">
            <div className="flex flex-col gap-6 h-full">
                <div className="flex flex-col gap-2">
                    {navItems.map((item) => (
                        <button 
                            key={item.value} 
                            onClick={() => handleNavClick(item.value)}
                            className={`text-left text-2xl font-display font-bold py-4 border-b border-gray-800 ${currentView === item.value ? 'text-dats-blue' : 'text-white'}`}
                        >
                            {item.label}
                        </button>
                    ))}
                    <button 
                        onClick={() => handleNavClick('docs')}
                        className={`text-left text-2xl font-display font-bold py-4 border-b border-gray-800 ${currentView === 'docs' ? 'text-dats-blue' : 'text-white'}`}
                    >
                        DOCS
                    </button>
                </div>

                <div className="mt-auto pb-12">
                     <button 
                        onClick={() => handleNavClick('console')}
                        className="w-full py-4 bg-white text-black font-mono text-sm font-bold uppercase tracking-widest hover:bg-dats-blue hover:text-white transition-colors"
                     >
                        Launch Console
                    </button>
                    <p className="text-center font-mono text-xs text-gray-500 mt-6">
                        System Status: <span className="text-green-500">Operational</span>
                    </p>
                </div>
            </div>
        </div>
      )}
    </>
  );
};

export default Header;