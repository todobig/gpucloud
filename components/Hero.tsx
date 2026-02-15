import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Server, Terminal, Code2, Zap, Globe, Shield, Cpu, Layers, Play, RefreshCw } from 'lucide-react';
import { BenefitCard } from './FloatingCards';
import { PromoCard } from './PromoCard';
import { ViewState } from '../App';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
}

const WaveBackground: React.FC = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <svg 
      className="absolute bottom-0 left-0 w-full h-[50vh] opacity-20 text-dats-blue" 
      preserveAspectRatio="none" 
      viewBox="0 0 1440 320"
    >
      <path 
        fill="currentColor" 
        fillOpacity="0.3" 
        d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      >
        <animate 
          attributeName="d" 
          dur="15s" 
          repeatCount="indefinite"
          values="
            M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
            M0,128L48,144C96,160,192,192,288,208C384,224,480,224,576,202.7C672,181,768,139,864,138.7C960,139,1056,181,1152,208C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
            M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z;
          "
        />
      </path>
    </svg>
  </div>
);

const TerminalSimulation = () => {
    const [lines, setLines] = useState<string[]>([]);
    const [isRunning, setIsRunning] = useState(false);
    const [stats, setStats] = useState({ latency: 0, throughput: 0 });

    const runBenchmark = async () => {
        if (isRunning) return;
        setIsRunning(true);
        setLines([]);
        setStats({ latency: 0, throughput: 0 });

        const addLine = (text: string, delay: number) => new Promise<void>(resolve => {
            setTimeout(() => {
                setLines(prev => [...prev, text]);
                resolve();
            }, delay);
        });

        await addLine("> Initializing environment...", 100);
        await addLine("> Cold start detected. Forking snapshot...", 300);
        await addLine("> Model loaded: Llama-3.2-3b-instruct [RTX 5090]", 200);
        await addLine("> Generating tokens...", 100);
        
        // Simulate streaming
        const tokens = "The future of compute is serverless and decentralized.".split(" ");
        for (let i = 0; i < tokens.length; i++) {
             await addLine(tokens[i], 50);
        }

        const finalLatency = Math.floor(Math.random() * (25 - 12) + 12);
        const finalThroughput = Math.floor(Math.random() * (260 - 220) + 220);
        
        setStats({ latency: finalLatency, throughput: finalThroughput });
        setIsRunning(false);
    };

    return (
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-black border border-white sharp-shadow z-10 flex flex-col overflow-hidden">
            <div className="h-8 border-b border-white bg-dats-gray flex items-center px-3 gap-2 justify-between">
                <div className="flex gap-2">
                    <div className="w-3 h-3 bg-white"></div>
                    <div className="w-3 h-3 border border-white"></div>
                </div>
                <span className="font-mono text-[10px] text-gray-400">benchmark.py</span>
                <button 
                    onClick={runBenchmark}
                    disabled={isRunning}
                    className="flex items-center gap-1 text-[10px] font-mono uppercase bg-dats-blue text-white px-2 py-0.5 hover:bg-white hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isRunning ? <RefreshCw size={10} className="animate-spin"/> : <Play size={10} />}
                    {isRunning ? 'Running' : 'Run'}
                </button>
            </div>
            <div className="flex-1 p-4 font-mono text-xs text-white overflow-hidden relative">
                {lines.length === 0 && !isRunning && (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                        <span className="animate-pulse">Click RUN to start benchmark</span>
                    </div>
                )}
                
                <div className="space-y-1">
                    {lines.map((line, i) => (
                        <div key={i} className={`${line.startsWith('>') ? 'text-gray-400' : 'text-dats-blue inline-block mr-1'}`}>
                            {line}
                        </div>
                    ))}
                    {isRunning && <span className="inline-block w-2 h-4 bg-white animate-pulse align-middle"></span>}
                </div>

                {stats.latency > 0 && (
                    <div className="mt-4 pt-4 border-t border-white/20 grid grid-cols-2 gap-4 animate-in slide-in-from-bottom duration-500">
                        <div>
                            <div className="text-[10px] text-gray-500 uppercase">Latency</div>
                            <div className="text-xl font-bold text-white">{stats.latency}ms</div>
                        </div>
                        <div>
                            <div className="text-[10px] text-gray-500 uppercase">Throughput</div>
                            <div className="text-xl font-bold text-white">{stats.throughput} t/s</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* --- HERO SECTION --- */}
      <main className="relative w-full min-h-[calc(100vh-80px)] flex flex-col lg:flex-row items-stretch bg-grid-pattern border-b border-white">
        <WaveBackground />
        
        {/* LEFT COLUMN: Content */}
        <div className="lg:w-1/2 flex flex-col justify-center px-6 lg:px-12 xl:px-24 py-12 border-r border-white bg-black/50 backdrop-blur-sm z-10">
          
          <div className="inline-flex items-center gap-3 border border-white bg-black px-3 py-1 w-fit mb-8 sharp-shadow-sm">
            <div className="w-2 h-2 bg-dats-blue animate-pulse"></div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-white">System Operational</span>
          </div>

          <h1 className="text-6xl sm:text-7xl xl:text-8xl font-black text-white leading-[0.85] tracking-tighter font-display mb-8 drop-shadow-xl">
            SERVERLESS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">GPU APIS</span>
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-10 font-medium border-l-2 border-dats-blue pl-6 drop-shadow-md">
            Scale inference instantly with on-demand RTX 5090s and 4090s. 
            Pay only for the requests you make, with zero idle costs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <button 
              onClick={() => onNavigate('prices')}
              className="bg-white text-black px-8 py-4 flex items-center justify-between gap-8 hover:bg-dats-blue hover:text-white transition-all sharp-shadow-blue active:translate-x-1 active:translate-y-1 active:shadow-none group border border-white hover:border-dats-blue"
            >
              <span className="font-mono font-bold tracking-widest text-sm uppercase">Start Building</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="bg-transparent text-white px-8 py-4 border border-white font-mono font-bold tracking-widest text-sm uppercase hover:bg-white hover:text-black transition-colors">
              View Benchmarks
            </button>
          </div>

          <div className="border-t border-white/20 pt-8 flex gap-8 opacity-50 grayscale hover:grayscale-0 transition-all overflow-x-auto">
             {['PyTorch', 'TensorFlow', 'JAX', 'HuggingFace'].map(tech => (
               <span key={tech} className="font-display font-bold text-xl whitespace-nowrap text-white">{tech}</span>
             ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Visuals */}
        <div className="lg:w-1/2 relative bg-dats-light overflow-hidden flex items-center justify-center p-12 min-h-[600px] lg:min-h-auto z-10">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                 backgroundSize: '20px 20px'
               }}>
          </div>

          <div className="relative w-full max-w-lg h-[500px] lg:h-[600px]">
            {/* Interactive Terminal Component */}
            <TerminalSimulation />

            {/* Server Visualization (Replaced broken image with CSS pattern) */}
            <div className="absolute top-[20%] left-0 w-2/3 h-1/2 bg-black z-20 border border-white sharp-shadow-blue pointer-events-none overflow-hidden">
              <div className="absolute inset-0 opacity-20" 
                   style={{
                       backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #3b82f6 2px, #3b82f6 4px)',
                       backgroundSize: '100% 4px'
                   }}>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                  <Server size={64} className="text-dats-blue opacity-80" strokeWidth={1} />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute bottom-10 right-10 z-30">
               <PromoCard className="sharp-shadow" />
            </div>
            <div className="absolute bottom-[20%] left-[-20px] z-40">
               <BenefitCard type="latency" />
            </div>
            <div className="absolute top-[10%] left-[20%] z-40 hidden xl:block">
               <BenefitCard type="throughput" />
            </div>
          </div>
        </div>
      </main>

      {/* --- TRUSTED BY SECTION --- */}
      <section className="py-12 border-b border-white bg-black">
        <div className="max-w-[1400px] mx-auto px-6">
            <p className="font-mono text-xs text-center text-gray-500 uppercase tracking-widest mb-8">Trusted by engineering teams at</p>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50">
                {['ACME Corp', 'Nebula AI', 'Vertex', 'Quant', 'Hyperion'].map(name => (
                    <span key={name} className="font-display font-bold text-2xl text-white">{name}</span>
                ))}
            </div>
        </div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="py-24 bg-dats-light border-b border-white">
        <div className="max-w-[1400px] mx-auto px-6">
            <div className="mb-16 max-w-2xl">
                <h2 className="font-display font-black text-5xl mb-6 text-white">ENGINEERED FOR <br/> PRODUCTION</h2>
                <p className="font-medium text-lg text-gray-400">
                    Built for ML engineers who need raw performance without the DevOps headache.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: Zap, title: "Cold Starts < 300ms", desc: "Our specialized container orchestration ensures your models are ready when your users are." },
                    { icon: Globe, title: "Global Edge Network", desc: "Deploy to 24 regions automatically. Requests are routed to the nearest available GPU node." },
                    { icon: Shield, title: "SOC2 Security", desc: "Enterprise-grade isolation. Your model weights and data never leave our encrypted enclave." },
                    { icon: Code2, title: "One-Line Deploy", desc: "Compatible with any Python environment. Wrap your function and push." },
                    { icon: Cpu, title: "Hardware Choice", desc: "Select from RTX 5090, 4090, or 3090 depending on your memory and budget needs." },
                    { icon: Layers, title: "Dynamic Batching", desc: "Maximize GPU utilization with built-in request batching and queue management." }
                ].map((feature, i) => (
                    <div key={i} className="group bg-black p-8 border border-white sharp-shadow hover:translate-y-[-4px] transition-all duration-300">
                        <div className="w-12 h-12 bg-white text-black flex items-center justify-center mb-6 group-hover:bg-dats-blue group-hover:text-white transition-colors duration-300">
                            <feature.icon size={24} strokeWidth={1.5} className="group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300 ease-out" />
                        </div>
                        <h3 className="font-bold font-display text-xl mb-3 text-white">{feature.title}</h3>
                        <p className="font-mono text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- DEVELOPER EXPERIENCE --- */}
      <section className="py-24 bg-black text-white border-b border-white overflow-hidden">
         <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-6 text-dats-blue">
                    <Terminal size={24} />
                    <span className="font-mono font-bold tracking-widest text-sm">DEVELOPER FIRST</span>
                </div>
                <h2 className="font-display font-black text-5xl lg:text-6xl mb-8 leading-tight">
                    INTEGRATE IN <br/> MINUTES
                </h2>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                    Stop wrestling with Kubernetes files. Our CLI and SDKs handle the heavy lifting of containerization, driver management, and auto-scaling logic.
                </p>
                <ul className="space-y-4 font-mono text-sm mb-12 text-gray-300">
                    {['pip install dats-ai', 'dats login', 'dats deploy ./model'].map((step, i) => (
                        <li key={i} className="flex items-center gap-4 border-b border-gray-800 pb-4">
                            <span className="text-dats-blue font-bold">0{i+1}</span>
                            <span>{step}</span>
                        </li>
                    ))}
                </ul>
                <button className="bg-dats-blue text-white px-8 py-4 font-mono font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors border border-transparent hover:border-white">
                    Read the Docs
                </button>
            </div>

            <div className="lg:w-1/2 w-full">
                <div className="bg-[#050505] border border-white rounded-none sharp-shadow-blue p-2">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 bg-[#050505]">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="ml-4 flex gap-4 text-xs font-mono text-gray-500">
                            <span className="text-gray-300">main.py</span>
                            <span>config.json</span>
                        </div>
                    </div>
                    <div className="p-6 overflow-x-auto">
                        <pre className="font-mono text-sm leading-relaxed text-gray-300">
<span className="text-purple-400">from</span> fastapi <span className="text-purple-400">import</span> FastAPI<br/>
<span className="text-purple-400">from</span> dats <span className="text-purple-400">import</span> Inference<br/><br/>

app = FastAPI()<br/>
model = Inference.load(<span className="text-dats-blue">"llama-2-70b"</span>)<br/><br/>

<span className="text-blue-400">@app.post</span>(<span className="text-dats-blue">"/generate"</span>)<br/>
<span className="text-purple-400">async def</span> <span className="text-yellow-400">generate</span>(prompt: str):<br/>
&nbsp;&nbsp;&nbsp;&nbsp;output = <span className="text-purple-400">await</span> model.predict(<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;prompt,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max_tokens=<span className="text-orange-400">1024</span>,<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;temperature=<span className="text-orange-400">0.7</span><br/>
&nbsp;&nbsp;&nbsp;&nbsp;)<br/>
&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">return</span> {"result": output}
                        </pre>
                    </div>
                </div>
            </div>

         </div>
      </section>

    </div>
  );
};

export default Hero;