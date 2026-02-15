import React from 'react';
import { Shield, Globe, Cpu, Award, Zap, Lock, AudioWaveform,  ScanEye, Server } from 'lucide-react';

const Company: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-black text-white py-24 px-6 border-b border-white">
        <div className="max-w-[1400px] mx-auto">
            <h1 className="font-display font-black text-6xl md:text-8xl mb-6 tracking-tighter">
                INFRASTRUCTURE <br/>
                <span className="text-dats-blue">AT SCALE</span>
            </h1>
            <p className="font-mono text-lg max-w-2xl text-gray-400">
                We are building the world's most efficient compute network for the next generation of artificial intelligence.
            </p>
        </div>
      </div>

      {/* Grid Content */}
      <div className="max-w-[1400px] mx-auto px-6 py-24">
        
        {/* Intro Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {/* Mission Box */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-dats-gray border border-white p-12 min-h-[300px] flex flex-col justify-between sharp-shadow-sm">
                <Shield size={48} className="text-white" strokeWidth={1} />
                <div>
                    <h3 className="font-display font-bold text-3xl mb-4">Security First</h3>
                    <p className="text-gray-400 leading-relaxed">
                        End-to-end encryption for model weights and datasets. SOC2 Type II compliant infrastructure ensuring your IP remains yours.
                    </p>
                </div>
            </div>
            {/* Stat Box 1 */}
            <div className="border border-white p-8 flex flex-col justify-center items-center text-center hover:bg-white hover:text-black transition-colors group">
                <div className="font-display font-black text-6xl mb-2 group-hover:text-dats-blue">24</div>
                <div className="font-mono text-xs uppercase tracking-widest text-gray-400 group-hover:text-black">Data Centers</div>
            </div>
            {/* Stat Box 2 */}
            <div className="border border-white p-8 flex flex-col justify-center items-center text-center hover:bg-white hover:text-black transition-colors group">
                <div className="font-display font-black text-6xl mb-2 group-hover:text-dats-blue">5k+</div>
                <div className="font-mono text-xs uppercase tracking-widest text-gray-400 group-hover:text-black">RTX 5090 GPUs</div>
            </div>
        </div>

        {/* --- NEW MODEL LIBRARY SECTION --- */}
        <div className="mb-24">
            <h2 className="font-display font-bold text-4xl mb-12 text-white">OPTIMIZED MODEL LIBRARY</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Tiny LLMs */}
                <div className="border border-white bg-black sharp-shadow-sm hover:translate-y-[-4px] transition-transform duration-300">
                    <div className="p-8 border-b border-white/20">
                        <div className="flex items-center gap-3 mb-4">
                            <Cpu size={24} className="text-dats-blue"/>
                            <h3 className="font-display font-bold text-xl tracking-wide">TINY LLMs</h3>
                        </div>
                        <p className="font-mono text-xs text-gray-400">Ultra-low latency inference for edge-class models running on enterprise hardware.</p>
                    </div>
                    <div className="p-8 bg-dats-light">
                        <ul className="space-y-4 font-mono text-sm text-gray-300">
                            <li className="flex justify-between items-center pb-2 border-b border-gray-800">
                                <span className="font-bold text-white">Llama 3.2</span>
                                <span className="text-[10px] text-dats-blue border border-dats-blue px-1">1B / 3B</span>
                            </li>
                            <li className="flex justify-between items-center pb-2 border-b border-gray-800">
                                <span className="font-bold text-white">Qwen 2.5</span>
                                <span className="text-[10px] text-gray-500 border border-gray-700 px-1">0.5B - 3B</span>
                            </li>
                            <li className="flex justify-between items-center pb-2 border-b border-gray-800">
                                <span className="font-bold text-white">Phi-3.5 Mini</span>
                                <span className="text-[10px] text-gray-500 border border-gray-700 px-1">3.8B</span>
                            </li>
                             <li className="flex justify-between items-center pb-2 border-b border-gray-800">
                                <span className="font-bold text-white">Gemma 2</span>
                                <span className="text-[10px] text-gray-500 border border-gray-700 px-1">2B</span>
                            </li>
                            <li className="flex justify-between items-center pt-1">
                                <span className="font-bold text-white">SmolLM2</span>
                                <span className="text-[10px] text-gray-500 border border-gray-700 px-1">135M - 1.7B</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Audio Intelligence */}
                <div className="border border-white bg-black sharp-shadow-sm hover:translate-y-[-4px] transition-transform duration-300">
                     <div className="p-8 border-b border-white/20">
                        <div className="flex items-center gap-3 mb-4">
                            <AudioWaveform size={24} className="text-dats-blue"/>
                            <h3 className="font-display font-bold text-xl tracking-wide">AUDIO & TTS</h3>
                        </div>
                        <p className="font-mono text-xs text-gray-400">Real-time synthesis and analysis with the latest state-of-the-art audio models.</p>
                    </div>
                     <div className="p-8 bg-dats-light">
                        <ul className="space-y-4 font-mono text-sm text-gray-300">
                            <li className="flex justify-between items-center pb-2 border-b border-gray-800">
                                <span className="font-bold text-white">Kokoro v0.19</span>
                                <span className="text-[10px] text-dats-blue border border-dats-blue px-1">TTS</span>
                            </li>
                            <li className="flex justify-between items-center pb-2 border-b border-gray-800">
                                <span className="font-bold text-white">Supertonic-v1</span>
                                <span className="text-[10px] text-gray-500 border border-gray-700 px-1">Audio</span>
                            </li>
                            <li className="flex justify-between items-center pb-2 border-b border-gray-800">
                                <span className="font-bold text-white">Whisper v3</span>
                                <span className="text-[10px] text-gray-500 border border-gray-700 px-1">ASR</span>
                            </li>
                             <li className="flex justify-between items-center pb-2 border-b border-gray-800">
                                <span className="font-bold text-white">F5-TTS</span>
                                <span className="text-[10px] text-gray-500 border border-gray-700 px-1">Cloning</span>
                            </li>
                            <li className="flex justify-between items-center pt-1">
                                <span className="font-bold text-white">Reverb</span>
                                <span className="text-[10px] text-gray-500 border border-gray-700 px-1">Denoise</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Vision */}
                <div className="border border-white bg-black sharp-shadow-sm hover:translate-y-[-4px] transition-transform duration-300">
                     <div className="p-8 border-b border-white/20">
                        <div className="flex items-center gap-3 mb-4">
                            <ScanEye size={24} className="text-dats-blue"/>
                            <h3 className="font-display font-bold text-xl tracking-wide">VISION</h3>
                        </div>
                        <p className="font-mono text-xs text-gray-400">Image generation, analysis, and depth perception pipelines.</p>
                    </div>
                     <div className="p-8 bg-dats-light">
                        <ul className="space-y-4 font-mono text-sm text-gray-300">
                            <li className="flex justify-between items-center pb-2 border-b border-gray-800">
                                <span className="font-bold text-white">Flux 1.1 Pro</span>
                                <span className="text-[10px] text-dats-blue border border-dats-blue px-1">Gen</span>
                            </li>
                            <li className="flex justify-between items-center pb-2 border-b border-gray-800">
                                <span className="font-bold text-white">Moondream2</span>
                                <span className="text-[10px] text-gray-500 border border-gray-700 px-1">VLM</span>
                            </li>
                            <li className="flex justify-between items-center pb-2 border-b border-gray-800">
                                <span className="font-bold text-white">Llava 1.6</span>
                                <span className="text-[10px] text-gray-500 border border-gray-700 px-1">VLM</span>
                            </li>
                            <li className="flex justify-between items-center pb-2 border-b border-gray-800">
                                <span className="font-bold text-white">Depth Anything</span>
                                <span className="text-[10px] text-gray-500 border border-gray-700 px-1">Depth</span>
                            </li>
                             <li className="flex justify-between items-center pt-1">
                                <span className="font-bold text-white">YOLOv10</span>
                                <span className="text-[10px] text-gray-500 border border-gray-700 px-1">Detect</span>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>

        {/* Global Map - Animated */}
        <div className="mb-24 h-[400px] border border-white bg-black relative overflow-hidden flex items-center justify-center sharp-shadow group">
             {/* Grid Overlay */}
             <div className="absolute inset-0 opacity-20" 
                  style={{
                    backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }}>
             </div>
             
             {/* Abstract World Map Representation */}
             <div className="absolute inset-0 opacity-20 text-gray-600 flex items-center justify-center pointer-events-none">
                 <Globe size={300} strokeWidth={0.5} />
             </div>
             
             {/* Pulsing Nodes */}
             {[
                { x: '20%', y: '40%', label: 'US-WEST' },
                { x: '28%', y: '45%', label: 'US-EAST' },
                { x: '48%', y: '35%', label: 'EU-CENTRAL' },
                { x: '75%', y: '45%', label: 'ASIA-EAST' },
                { x: '85%', y: '75%', label: 'AUS-SOUTH' }
             ].map((node, i) => (
                <div key={i} className="absolute z-10" style={{ left: node.x, top: node.y }}>
                    <div className="relative flex items-center justify-center group-hover:scale-125 transition-transform duration-500 cursor-pointer">
                        <div className="absolute w-3 h-3 bg-dats-blue rounded-full animate-ping opacity-75"></div>
                        <div className="relative w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                    </div>
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold text-dats-blue whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-black px-2 py-0.5 border border-dats-blue">
                        {node.label}
                    </div>
                </div>
             ))}

             <div className="z-10 text-center pointer-events-none">
                <h2 className="text-white font-display font-bold text-4xl mb-2 drop-shadow-lg tracking-tight">GLOBAL NEURAL LATTICE</h2>
                <div className="inline-flex items-center gap-2 bg-black/80 border border-gray-700 px-3 py-1 mt-4 backdrop-blur-sm">
                    <span className="w-2 h-2 bg-green-500 animate-pulse rounded-full"></span>
                    <span className="font-mono text-xs text-green-500">OPTIMAL ROUTING ACTIVE</span>
                </div>
             </div>
        </div>

        {/* Our Values */}
        <div>
            <h2 className="font-display font-bold text-4xl mb-12 text-white">CORE VALUES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    { icon: Zap, title: "Ruthless Efficiency", text: "We optimize for the millisecond. Every layer of our stack is tuned to remove overhead." },
                    { icon: Lock, title: "Radical Transparency", text: "No hidden fees, no opaque APIs. Our infrastructure is open book." },
                    { icon: Cpu, title: "Hardware Neutrality", text: "We support the best hardware for the job, whether it's NVIDIA, AMD, or TPU." }
                ].map((val, i) => (
                    <div key={i} className="group">
                        <div className="w-12 h-12 border border-white flex items-center justify-center mb-6 group-hover:bg-dats-blue group-hover:text-white group-hover:border-dats-blue transition-colors">
                            <val.icon size={24} />
                        </div>
                        <h3 className="font-display font-bold text-xl mb-3 text-white">{val.title}</h3>
                        <p className="font-mono text-sm text-gray-400 leading-relaxed border-t border-gray-800 pt-4 group-hover:border-white transition-colors">
                            {val.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Company;