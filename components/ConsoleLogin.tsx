import React, { useState } from 'react';
import { Terminal, Lock, ArrowRight, Github, Command, Cpu } from 'lucide-react';
import { ViewState } from '../App';

interface ConsoleLoginProps {
  onNavigate: (view: ViewState) => void;
}

const ConsoleLogin: React.FC<ConsoleLoginProps> = ({ onNavigate }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate auth delay
    setTimeout(() => {
      setIsLoading(false);
      onNavigate('dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 border border-white sharp-shadow bg-black z-10">
        
        {/* Left: Branding & Info */}
        <div className="hidden lg:flex flex-col justify-between p-12 border-r border-white bg-dats-light relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-20">
                <Cpu size={200} strokeWidth={0.5} />
             </div>
             
             <div>
                 <div className="flex items-center gap-2 text-dats-blue mb-6">
                    <Terminal size={24} />
                    <span className="font-mono font-bold tracking-widest text-sm uppercase">Secure Access</span>
                 </div>
                 <h1 className="font-display font-black text-5xl mb-6">
                    ORCHESTRATE <br/> INTELLIGENCE
                 </h1>
                 <p className="font-mono text-gray-400 text-sm leading-relaxed max-w-md">
                    Access your dedicated GPU clusters, manage API keys, and monitor real-time inference metrics from the command center.
                 </p>
             </div>

             <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm font-mono text-gray-400">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    System Status: Operational
                </div>
                <div className="flex items-center gap-4 text-sm font-mono text-gray-400">
                    <Lock size={14} />
                    End-to-End Encrypted Session
                </div>
             </div>
        </div>

        {/* Right: Auth Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex gap-8 mb-8 border-b border-gray-800">
                <button 
                    onClick={() => setIsLogin(true)}
                    className={`pb-4 font-mono text-sm font-bold uppercase transition-colors ${isLogin ? 'text-white border-b-2 border-dats-blue' : 'text-gray-500 hover:text-white'}`}
                >
                    Login
                </button>
                <button 
                    onClick={() => setIsLogin(false)}
                    className={`pb-4 font-mono text-sm font-bold uppercase transition-colors ${!isLogin ? 'text-white border-b-2 border-dats-blue' : 'text-gray-500 hover:text-white'}`}
                >
                    Sign Up
                </button>
            </div>

            <form onSubmit={handleAuth} className="space-y-6">
                <div>
                    <label className="block font-mono text-xs font-bold uppercase mb-2 text-gray-400">Email Interface</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-black border border-gray-700 p-4 text-white focus:border-dats-blue outline-none transition-colors font-mono text-sm"
                        placeholder="usr@gpucloud.xyz"
                    />
                </div>
                <div>
                    <label className="block font-mono text-xs font-bold uppercase mb-2 text-gray-400">Passcode</label>
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-black border border-gray-700 p-4 text-white focus:border-dats-blue outline-none transition-colors font-mono text-sm"
                        placeholder="••••••••••••"
                    />
                </div>

                <button 
                    disabled={isLoading}
                    className="w-full bg-white text-black py-4 font-mono font-bold uppercase tracking-widest hover:bg-dats-blue hover:text-white transition-all sharp-shadow-blue disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 group"
                >
                    {isLoading ? (
                        <>Processing <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div></>
                    ) : (
                        <>{isLogin ? 'Authenticate' : 'Initialize Account'} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></>
                    )}
                </button>
            </form>

            <div className="my-8 flex items-center gap-4">
                <div className="h-px bg-gray-800 flex-1"></div>
                <span className="font-mono text-xs text-gray-500">OR CONTINUE WITH</span>
                <div className="h-px bg-gray-800 flex-1"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <button className="border border-gray-700 p-3 flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-colors">
                    <Github size={18} />
                    <span className="font-mono text-xs font-bold">GITHUB</span>
                </button>
                <button className="border border-gray-700 p-3 flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-colors">
                    <Command size={18} />
                    <span className="font-mono text-xs font-bold">SSO</span>
                </button>
            </div>

            {/* Preview Mode Callout */}
            <div className="mt-8 bg-dats-gray border border-gray-700 p-4 flex items-center justify-between">
                <div>
                    <h4 className="font-bold text-white text-sm mb-1">Guest Access</h4>
                    <p className="text-xs text-gray-400">Explore the console in read-only mode.</p>
                </div>
                <button 
                    type="button"
                    onClick={() => onNavigate('dashboard')}
                    className="text-dats-blue text-xs font-bold font-mono uppercase border border-dats-blue px-3 py-2 hover:bg-dats-blue hover:text-white transition-colors"
                >
                    Launch Preview
                </button>
            </div>

        </div>
      </div>
    </div>
  );
};

export default ConsoleLogin;