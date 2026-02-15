import React from 'react';
import { Bot, Share2, Database, Zap, Terminal, Globe, Code2, Cpu, Mic, Workflow } from 'lucide-react';

const Agents: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-12 pb-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="font-display font-black text-6xl md:text-8xl mb-6 tracking-tighter">
            AUTONOMOUS <br/> <span className="text-dats-blue">AGENTS</span>
        </h1>
        <p className="font-mono text-lg max-w-2xl text-gray-400 mb-16">
            Deploy persistent, stateful entities that live on the edge. 
            Choose your specialized worker node.
        </p>

        {/* Specialized Agent Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            
            {/* Voice Agents */}
            <div className="border border-white bg-dats-light p-8 sharp-shadow-sm group hover:bg-black transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Mic size={100} strokeWidth={0.5} />
                </div>
                <Mic size={48} className="text-dats-blue mb-6 group-hover:scale-110 transition-transform" strokeWidth={1} />
                <h3 className="font-display font-bold text-3xl mb-4">Voice Agents</h3>
                <div className="h-px w-12 bg-dats-blue mb-4"></div>
                <p className="font-mono text-sm text-gray-400 leading-relaxed mb-6">
                    Real-time speech-to-speech pipelines with sub-300ms latency. 
                    Includes native VAD (Voice Activity Detection), interruption handling, and emotional prosody control.
                </p>
                <ul className="space-y-2 font-mono text-xs text-gray-500">
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full"></div>WebSocket Streaming</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-green-500 rounded-full"></div>Phone/VoIP Integration</li>
                </ul>
            </div>

            {/* Coding Agents */}
            <div className="border border-white bg-dats-light p-8 sharp-shadow-sm group hover:bg-black transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Code2 size={100} strokeWidth={0.5} />
                </div>
                <Code2 size={48} className="text-purple-500 mb-6 group-hover:scale-110 transition-transform" strokeWidth={1} />
                <h3 className="font-display font-bold text-3xl mb-4">Coding Agents</h3>
                <div className="h-px w-12 bg-purple-500 mb-4"></div>
                <p className="font-mono text-sm text-gray-400 leading-relaxed mb-6">
                    Sandboxed execution environments with root access. 
                    Agents can read repo context, plan architecture, refactor multi-file codebases, and run unit tests autonomously.
                </p>
                <ul className="space-y-2 font-mono text-xs text-gray-500">
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full"></div>Secure Sandboxing</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full"></div>LSP Integration</li>
                </ul>
            </div>

            {/* Automation Agents */}
            <div className="border border-white bg-dats-light p-8 sharp-shadow-sm group hover:bg-black transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Workflow size={100} strokeWidth={0.5} />
                </div>
                <Workflow size={48} className="text-orange-500 mb-6 group-hover:scale-110 transition-transform" strokeWidth={1} />
                <h3 className="font-display font-bold text-3xl mb-4">Automation Agents</h3>
                <div className="h-px w-12 bg-orange-500 mb-4"></div>
                <p className="font-mono text-sm text-gray-400 leading-relaxed mb-6">
                    Headless browser control and API chaining. 
                    Automate complex workflows across legacy enterprise systems, scrape dynamic data, and execute multi-step logic.
                </p>
                <ul className="space-y-2 font-mono text-xs text-gray-500">
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full"></div>Chromium/Puppeteer</li>
                    <li className="flex items-center gap-2"><div className="w-1 h-1 bg-orange-500 rounded-full"></div>DOM Analysis</li>
                </ul>
            </div>
        </div>

        {/* Terminal Demo */}
        <div className="border border-white bg-[#050505] sharp-shadow p-2 max-w-4xl mx-auto mb-24">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-black">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-4 font-mono text-xs text-gray-500">deploy_agent.py</div>
            </div>
            <div className="p-8 font-mono text-sm overflow-x-auto">
                <div className="text-gray-500 mb-4"># Initialize a specialized voice agent</div>
                <div className="text-purple-400">from</div> <div className="text-white inline">gpucloud</div> <div className="text-purple-400 inline">import</div> <div className="text-yellow-300 inline">VoiceAgent</div>
                <br/><br/>
                <div className="text-blue-400">agent</div> <div className="text-white inline">=</div> <div className="text-yellow-300 inline">VoiceAgent</div><div className="text-white inline">(</div>
                <div className="pl-4">
                     <div className="text-white inline">name=</div><div className="text-green-400 inline">"Support_V1"</div><div className="text-white inline">,</div><br/>
                     <div className="text-white inline">voice_id=</div><div className="text-green-400 inline">"en-us-neural-4"</div><div className="text-white inline">,</div><br/>
                     <div className="text-white inline">latency_mode=</div><div className="text-green-400 inline">"ultra_low"</div>
                </div>
                <div className="text-white inline">)</div>
                <br/><br/>
                <div className="text-gray-500"># Connect to telephony stream</div><br/>
                <div className="text-purple-400">await</div> <div className="text-blue-400 inline">agent</div><div className="text-white inline">.connect(</div>
                <div className="text-green-400 inline">"wss://api.twilio.com/stream"</div>
                <div className="text-white inline">)</div>
            </div>
        </div>

        {/* Capabilities Grid */}
        <h2 className="font-display font-bold text-4xl mb-12 text-white">NATIVE CAPABILITIES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
                { icon: Globe, title: "Web Browsing", desc: "Headless Chromium instances for scraping and interaction." },
                { icon: Code2, title: "Code Execution", desc: "Sandboxed Python environments with data science libraries." },
                { icon: Cpu, title: "Model Routing", desc: "Agents automatically select the cheapest model for the task." },
                { icon: Terminal, title: "CLI Access", desc: "Direct shell access for system administration tasks." }
            ].map((cap, i) => (
                <div key={i} className="bg-black border border-gray-800 p-6 hover:border-dats-blue transition-colors">
                    <cap.icon className="text-white mb-4" size={24} />
                    <h4 className="font-bold text-lg mb-2">{cap.title}</h4>
                    <p className="text-gray-400 text-sm font-mono">{cap.desc}</p>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default Agents;