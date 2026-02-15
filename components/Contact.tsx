import React from 'react';
import { Mail, MessageSquare, Bot, Zap } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-12 pb-24 px-6">
      <div className="max-w-[1000px] mx-auto">
        <h1 className="font-display font-black text-6xl mb-8">TALK TO THE <span className="text-dats-blue">SWARM</span></h1>
        <p className="font-mono text-gray-400 max-w-2xl mb-16 text-lg">
            Don't worry about waiting for humans. Our Tier-1 Support Agents are finetuned on our entire codebase and parse emails in 12ms.
            <span className="block mt-2 text-white">We guarantee a synthetic response before you can blink.</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Form */}
            <div className="bg-dats-light border border-white p-8 sharp-shadow-blue relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                    <Bot size={120} strokeWidth={0.5} />
                </div>
                
                <form className="space-y-6 relative z-10">
                    <div>
                        <label className="block font-mono text-xs font-bold uppercase mb-2 text-dats-blue">Identity String</label>
                        <input type="text" className="w-full bg-black border border-gray-700 p-3 text-white focus:border-dats-blue outline-none transition-colors" placeholder="Human Name or Entity ID" />
                    </div>
                    <div>
                        <label className="block font-mono text-xs font-bold uppercase mb-2 text-dats-blue">Communication Channel</label>
                        <input type="email" className="w-full bg-black border border-gray-700 p-3 text-white focus:border-dats-blue outline-none transition-colors" placeholder="email@domain.com" />
                    </div>
                    <div>
                        <label className="block font-mono text-xs font-bold uppercase mb-2 text-dats-blue">Payload</label>
                        <textarea className="w-full bg-black border border-gray-700 p-3 text-white focus:border-dats-blue outline-none transition-colors h-32" placeholder="Describe your compute requirements or technical anomalies..."></textarea>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="flex-1 bg-white text-black font-bold font-mono uppercase py-4 hover:bg-dats-blue hover:text-white transition-colors flex items-center justify-center gap-2">
                            <Zap size={16} /> Initialize Handshake
                        </button>
                    </div>
                    <p className="text-[10px] font-mono text-gray-500 text-center pt-2">
                        * By clicking, you agree to be scanned by our sentiment analysis models.
                    </p>
                </form>
            </div>

            {/* Info */}
            <div className="space-y-8 flex flex-col justify-center">
                <div className="border-l-2 border-gray-800 pl-6 hover:border-dats-blue transition-colors">
                    <h3 className="font-display font-bold text-2xl mb-2">Recursive Help</h3>
                    <p className="text-gray-400 text-sm mb-4">
                        Our automated debugging agents are likely already scanning your error logs. 
                        Join the hive mind for real-time triage.
                    </p>
                    <a href="#" className="flex items-center gap-2 text-dats-blue font-mono text-sm font-bold uppercase hover:underline">
                        <MessageSquare size={16} /> Enter Discord Matrix
                    </a>
                </div>
                
                <div className="border-l-2 border-gray-800 pl-6 hover:border-dats-blue transition-colors">
                    <h3 className="font-display font-bold text-2xl mb-2">Direct Uplink</h3>
                    <p className="text-gray-400 text-sm mb-4">
                        For sensitive enterprise negotiations or H100 reservations.
                    </p>
                    <a href="mailto:hello@gpucloud.xyz" className="flex items-center gap-2 text-white hover:text-dats-blue font-mono text-lg transition-colors">
                        <Mail size={16} /> hello@gpucloud.xyz
                    </a>
                </div>

                <div className="p-6 border border-white bg-black sharp-shadow-sm mt-8">
                    <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        Physical Node
                    </h4>
                    <p className="text-gray-400 text-sm font-mono">
                        Sector 7G<br/>
                        543 Howard St<br/>
                        San Francisco, CA 94105
                    </p>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;