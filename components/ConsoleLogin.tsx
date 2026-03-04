import React, { useState } from 'react';
import { Terminal, Lock, ArrowRight, Github, Command, Cpu, Check, Mail, AlertTriangle, X, Scale } from 'lucide-react';
import { ViewState } from '../App';

interface ConsoleLoginProps {
  onNavigate: (view: ViewState) => void;
}

const ConsoleLogin: React.FC<ConsoleLoginProps> = ({ onNavigate }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [verificationSent, setVerificationSent] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLogin && !acceptedTerms) return;

    setIsLoading(true);
    // Simulate auth delay
    setTimeout(() => {
      setIsLoading(false);
      if (isLogin) {
        onNavigate('dashboard');
      } else {
        setVerificationSent(true);
      }
    }, 1500);
  };

  const handleToggle = (mode: boolean) => {
    setIsLogin(mode);
    setVerificationSent(false);
    setAcceptedTerms(false);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
      
      {/* Terms Modal */}
      {showTerms && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-200">
            <div className="bg-black border border-white sharp-shadow w-full max-w-4xl max-h-full flex flex-col relative h-[80vh]">
                <div className="flex items-center justify-between p-6 border-b border-gray-800 bg-dats-light sticky top-0 z-10">
                    <div className="flex items-center gap-3 text-dats-blue">
                        <Scale size={20} />
                        <h2 className="font-display font-bold text-xl uppercase tracking-widest">Terms of Service</h2>
                    </div>
                    <button 
                        type="button"
                        onClick={() => setShowTerms(false)} 
                        className="hover:text-dats-blue transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>
                
                <div className="flex-1 overflow-y-auto p-8 prose prose-invert prose-sm max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-white prose-p:text-gray-400">
                     <h3>1. Acceptance of Terms</h3>
                    <p>
                        These Terms of Service ("Terms") constitute a binding legal agreement between you ("Customer", "User", or "You") and GPUcloud xyz ("Company", "we", "us"). 
                        By registering for an account, accessing the API, or using our infrastructure services, you accept and agree to be bound by these Terms and our Privacy Policy.
                    </p>

                    <h3>2. Service Description</h3>
                    <p>
                        GPUcloud xyz provides high-performance computing infrastructure for artificial intelligence applications ("Service"). 
                        The Service includes access to GPU compute nodes, inference APIs, model hosting, and related developer tools.
                    </p>

                    <h3>3. Acceptable Use Policy (AUP)</h3>
                    <p>You agree to use the Service only for lawful purposes. You shall <strong>NOT</strong>:</p>
                    <ul className="list-disc pl-5 font-mono text-xs text-gray-300 bg-gray-900/50 p-4 border border-gray-800">
                        <li><strong>Cryptomining:</strong> Perform cryptocurrency mining, Proof-of-Work hashing, or other blockchain maintenance tasks. Detection triggers immediate account suspension.</li>
                        <li><strong>Illegal Content:</strong> Generate, store, or distribute Child Sexual Abuse Material (CSAM), non-consensual sexual imagery, or content promoting terrorism.</li>
                        <li><strong>Network Abuse:</strong> Conduct DDoS attacks, port scanning, or attempt to bypass authentication or rate limits.</li>
                    </ul>

                    <h3>4. Fees and Payment</h3>
                    <p>
                        <strong>Billing:</strong> You agree to pay all fees calculated based on your usage (e.g., compute time, tokens) in accordance with our current pricing schedule.
                        <strong>Payment Method:</strong> You must provide a valid payment method. We reserve the right to suspend access immediately if payment fails.
                    </p>

                    <h3>5. Intellectual Property</h3>
                    <p>
                        <strong>Customer IP:</strong> You retain all ownership rights to your Input Data, Custom Models, and the Output generated by the Service.
                        <strong>Company IP:</strong> GPUcloud xyz retains all rights to the Service infrastructure, API designs, and pre-trained base models.
                    </p>

                    <h3>6. Termination</h3>
                    <p>
                        We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms (specifically the AUP).
                    </p>

                    <h3>7. Limitation of Liability</h3>
                    <p>
                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, GPUCLOUD XYZ SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.
                    </p>

                    <h3>8. Dispute Resolution</h3>
                    <p>
                        <strong>Binding Arbitration:</strong> Any dispute arising from these Terms shall be resolved by binding arbitration conducted by JAMS.
                        <strong>Class Action Waiver:</strong> YOU WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT.
                    </p>
                </div>

                <div className="p-6 border-t border-gray-800 bg-black flex justify-between items-center gap-4">
                     <p className="text-xs text-gray-500 font-mono hidden md:block">
                        Last Updated: October 24, 2026
                     </p>
                     <div className="flex gap-4 w-full md:w-auto">
                        <button 
                            type="button"
                            onClick={() => setShowTerms(false)} 
                            className="flex-1 md:flex-none px-6 py-3 font-mono text-xs font-bold uppercase border border-white hover:bg-white hover:text-black transition-colors"
                        >
                            Close
                        </button>
                        <button 
                            type="button"
                            onClick={() => { setShowTerms(false); setAcceptedTerms(true); }} 
                            className="flex-1 md:flex-none px-6 py-3 font-mono text-xs font-bold uppercase bg-dats-blue text-white hover:bg-white hover:text-black transition-colors border border-transparent hover:border-black"
                        >
                            Accept & Close
                        </button>
                     </div>
                </div>
            </div>
        </div>
      )}
      
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 border border-white sharp-shadow bg-black z-10 min-h-[600px]">
        
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
        <div className="p-8 md:p-12 flex flex-col justify-center relative">
            
            {verificationSent ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="w-16 h-16 bg-dats-blue flex items-center justify-center text-white mb-6 border border-white sharp-shadow-sm">
                        <Mail size={32} />
                    </div>
                    <h2 className="font-display font-bold text-3xl mb-4">VERIFY EMAIL</h2>
                    <p className="font-mono text-gray-400 text-sm mb-8 leading-relaxed">
                        We've sent a verification link to <span className="text-white font-bold">{email}</span>. 
                        <br/>Please check your inbox to activate your account.
                    </p>
                    
                    <div className="bg-yellow-900/10 border border-yellow-600/50 p-4 mb-8 flex gap-3">
                         <AlertTriangle className="text-yellow-600 shrink-0" size={18} />
                         <p className="text-xs text-yellow-500 font-mono">
                            Check your spam folder. Verification links expire in 15 minutes.
                         </p>
                    </div>

                    <button 
                        onClick={() => handleToggle(true)}
                        className="w-full bg-white text-black py-4 font-mono font-bold uppercase tracking-widest hover:bg-dats-blue hover:text-white transition-all border border-transparent hover:border-dats-blue"
                    >
                        Back to Login
                    </button>
                    
                    <button className="w-full mt-4 text-gray-500 hover:text-white font-mono text-xs font-bold uppercase underline">
                        Resend Email
                    </button>
                </div>
            ) : (
                <>
                    <div className="flex gap-8 mb-8 border-b border-gray-800">
                        <button 
                            onClick={() => handleToggle(true)}
                            className={`pb-4 font-mono text-sm font-bold uppercase transition-colors ${isLogin ? 'text-white border-b-2 border-dats-blue' : 'text-gray-500 hover:text-white'}`}
                        >
                            Login
                        </button>
                        <button 
                            onClick={() => handleToggle(false)}
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
                                required
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
                                required
                            />
                        </div>

                        {!isLogin && (
                            <div className="animate-in fade-in slide-in-from-top-2 duration-300">
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <div className="relative flex items-center mt-0.5">
                                        <input 
                                            type="checkbox" 
                                            checked={acceptedTerms}
                                            onChange={(e) => setAcceptedTerms(e.target.checked)}
                                            className="peer appearance-none w-5 h-5 border border-gray-600 bg-black checked:bg-dats-blue checked:border-dats-blue transition-colors cursor-pointer"
                                        />
                                        <Check size={14} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" strokeWidth={3} />
                                    </div>
                                    <span className="font-mono text-xs text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                                        I agree to the <button type="button" onClick={() => setShowTerms(true)} className="text-white hover:text-dats-blue underline">Terms of Service</button> and <a href="#" className="text-white hover:text-dats-blue underline">Privacy Policy</a>. 
                                        I confirm I will not use this platform for crypto-mining.
                                    </span>
                                </label>
                            </div>
                        )}

                        <button 
                            disabled={isLoading || (!isLogin && !acceptedTerms)}
                            className="w-full bg-white text-black py-4 font-mono font-bold uppercase tracking-widest hover:bg-dats-blue hover:text-white transition-all sharp-shadow-blue disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 group border border-transparent hover:border-dats-blue"
                        >
                            {isLoading ? (
                                <>Processing <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div></>
                            ) : (
                                <>{isLogin ? 'Authenticate' : 'Initialize Account'} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></>
                            )}
                        </button>
                    </form>

                    {!verificationSent && (
                        <>
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
                        </>
                    )}
                </>
            )}

        </div>
      </div>
    </div>
  );
};

export default ConsoleLogin;