import React from 'react';
import { Terminal, Github, Twitter, Linkedin, ArrowRight } from 'lucide-react';
import { ViewState } from '../App';

interface FooterProps {
  onNavigate?: (view: ViewState) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (view: ViewState) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) onNavigate(view);
  };

  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white z-10 relative">
      <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Brand Column */}
        <div className="md:col-span-3">
          <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={handleNav('home')}>
            <div className="w-10 h-10 bg-dats-blue flex items-center justify-center text-white sharp-shadow-sm">
              <Terminal size={20} strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter text-white">GPU<span className="text-white/40">cloud</span></span>
          </div>
          <p className="font-mono text-sm text-gray-400 mb-8 leading-relaxed max-w-xs">
            The first fully autonomous infrastructure corporation. 
            Run by AI, for AI.
          </p>
          <div className="flex gap-4">
             {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-dats-blue hover:border-dats-blue hover:text-white transition-all">
                    <Icon size={18} />
                </a>
             ))}
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="md:col-span-2">
          <h4 className="font-mono font-bold text-dats-blue mb-6 uppercase tracking-wider text-xs">Platform</h4>
          <ul className="space-y-4 font-mono text-sm text-gray-400">
            <li><button onClick={handleNav('models')} className="hover:text-white transition-colors text-left">Models</button></li>
            <li><button onClick={handleNav('inference')} className="hover:text-white transition-colors text-left">Inference API</button></li>
            <li><button onClick={handleNav('dedicated')} className="hover:text-white transition-colors text-left">Dedicated Clusters</button></li>
            <li><button onClick={handleNav('prices')} className="hover:text-white transition-colors text-left">Pricing</button></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="md:col-span-2">
          <h4 className="font-mono font-bold text-dats-blue mb-6 uppercase tracking-wider text-xs">Resources</h4>
          <ul className="space-y-4 font-mono text-sm text-gray-400">
            <li><button onClick={handleNav('docs')} className="hover:text-white transition-colors text-left">Documentation</button></li>
            <li><button onClick={handleNav('apiref')} className="hover:text-white transition-colors text-left">API Reference</button></li>
            <li><button onClick={handleNav('community')} className="hover:text-white transition-colors text-left">Community</button></li>
            <li><button onClick={handleNav('blog')} className="hover:text-white transition-colors text-left">Blog</button></li>
            <li><button onClick={handleNav('status')} className="hover:text-white transition-colors text-left">Status</button></li>
          </ul>
        </div>

        {/* Links Column 3 */}
        <div className="md:col-span-2">
          <h4 className="font-mono font-bold text-dats-blue mb-6 uppercase tracking-wider text-xs">Company</h4>
          <ul className="space-y-4 font-mono text-sm text-gray-400">
            <li><button onClick={handleNav('about')} className="hover:text-white transition-colors text-left">About</button></li>
            <li><button onClick={handleNav('careers')} className="hover:text-white transition-colors text-left">Careers</button></li>
            <li><button onClick={handleNav('legal')} className="hover:text-white transition-colors text-left">Legal</button></li>
            <li><button onClick={handleNav('privacy')} className="hover:text-white transition-colors text-left">Privacy</button></li>
            <li><button onClick={handleNav('contact')} className="hover:text-white transition-colors text-left">Contact</button></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="md:col-span-3">
             <h4 className="font-mono font-bold text-dats-blue mb-6 uppercase tracking-wider text-xs">Stay Updated</h4>
             <p className="font-mono text-xs text-gray-400 mb-4">Get the latest changelog and GPU availability updates.</p>
             <form className="flex flex-col gap-2">
                <input 
                    type="email" 
                    placeholder="email@example.com" 
                    className="bg-black border border-gray-700 p-3 text-sm font-mono text-white focus:border-dats-blue outline-none w-full transition-colors" 
                />
                <button className="bg-white text-black px-4 py-3 font-mono font-bold text-xs uppercase hover:bg-dats-blue hover:text-white transition-colors flex items-center justify-between group">
                    Subscribe
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
             </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1400px] mx-auto px-6 mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center font-mono text-xs text-gray-600 gap-4">
        <p>© 2026 GPUcloud Inc. All rights reserved.</p>
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-400">Systems Operational</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;