import React, { useState, useMemo } from 'react';
import { Check, HelpCircle, ChevronDown, ChevronUp, Cpu, Layers, Zap, Calculator, Mic, Code2, Workflow } from 'lucide-react';

const CostCalculator: React.FC = () => {
    const [requests, setRequests] = useState(1000000);
    const [tokensPerReq, setTokensPerReq] = useState(512);
    const [selectedTier, setSelectedTier] = useState<'starter' | 'pro'>('pro');

    const tiers = {
        starter: { price: 0.0002 },
        pro: { price: 0.0010 }
    };

    const monthlyCost = useMemo(() => {
        return requests * tiers[selectedTier].price;
    }, [requests, selectedTier]);

    // Arbitrary competitor comparison
    const competitorCost = monthlyCost * 2.5;

    return (
        <div className="max-w-4xl mx-auto mb-24 bg-black border border-white sharp-shadow p-8">
            <div className="flex items-center gap-3 mb-8 border-b border-gray-800 pb-4">
                <Calculator className="text-dats-blue" />
                <h3 className="font-display font-bold text-2xl text-white">COST ESTIMATOR</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div>
                        <label className="block font-mono text-xs text-gray-400 uppercase mb-2">Requests per Month</label>
                        <input 
                            type="range" 
                            min="1000" 
                            max="5000000" 
                            step="1000"
                            value={requests}
                            onChange={(e) => setRequests(Number(e.target.value))}
                            className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-dats-blue"
                        />
                        <div className="mt-2 font-mono font-bold text-white text-right">
                            {requests.toLocaleString()} reqs
                        </div>
                    </div>

                    <div>
                         <label className="block font-mono text-xs text-gray-400 uppercase mb-2">Plan Selection</label>
                         <div className="flex border border-gray-700">
                            <button 
                                onClick={() => setSelectedTier('starter')}
                                className={`flex-1 py-2 font-mono text-xs font-bold uppercase transition-colors ${selectedTier === 'starter' ? 'bg-white text-black' : 'bg-black text-gray-500 hover:text-white'}`}
                            >
                                Starter
                            </button>
                            <button 
                                onClick={() => setSelectedTier('pro')}
                                className={`flex-1 py-2 font-mono text-xs font-bold uppercase transition-colors ${selectedTier === 'pro' ? 'bg-dats-blue text-white' : 'bg-black text-gray-500 hover:text-white'}`}
                            >
                                Pro (RTX 5090)
                            </button>
                         </div>
                    </div>
                </div>

                <div className="bg-dats-gray border border-gray-700 p-6 flex flex-col justify-center">
                    <div className="text-center mb-6">
                        <div className="font-mono text-xs text-gray-400 uppercase mb-1">Estimated Monthly Cost</div>
                        <div className="font-display font-black text-5xl text-white">
                            ${monthlyCost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between text-xs font-mono text-gray-400">
                            <span>GPUcloud</span>
                            <span>vs Hyperscalers</span>
                        </div>
                        <div className="relative h-4 bg-gray-800 rounded-full overflow-hidden">
                             {/* Competitor Bar */}
                             <div className="absolute top-0 left-0 h-full bg-gray-600 w-full"></div>
                             {/* Our Bar */}
                             <div className="absolute top-0 left-0 h-full bg-dats-blue" style={{ width: '40%' }}></div>
                        </div>
                        <div className="text-right text-xs font-mono text-green-500">
                            You save approx. ${(competitorCost - monthlyCost).toLocaleString(undefined, { maximumFractionDigits: 0 })}/mo
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Pricing: React.FC = () => {
  const [expandedGpu, setExpandedGpu] = useState<string | null>(null);

  const tiers = [
    {
        name: 'STARTER',
        price: '$0.0002',
        unit: '/ req',
        desc: 'Ideal for testing and low-volume apps.',
        features: ['RTX 3090 Series', 'Shared Queues', 'Community Support', '99.9% Uptime'],
        highlight: false
    },
    {
        name: 'PRO',
        price: '$0.0010',
        unit: '/ req',
        desc: 'High throughput for production workloads.',
        features: ['RTX 4090 / 5090', 'Priority Queues', 'Global Routing', '24/7 Support', 'SOC2 Compliance'],
        highlight: true
    },
    {
        name: 'ENTERPRISE',
        price: 'Custom',
        unit: '',
        desc: 'Volume discounts for >1M daily requests.',
        features: ['Dedicated Clusters', 'Custom Models', 'VPC Peering', 'SLA Guarantees', 'Dedicated Engineer'],
        highlight: false
    }
  ];

  const agentPricing = [
    {
        type: "VOICE AGENTS",
        price: "$0.06",
        unit: "/ min",
        icon: Mic,
        desc: "Full duplex speech-to-speech. Includes VAD, LLM inference, and TTS synthesis.",
        features: ["Sub-300ms Latency", "Interrupt Handling", "Emotion Control", "Phone/VoIP Connectors"]
    },
    {
        type: "CODING AGENTS",
        price: "$0.03",
        unit: "/ min",
        icon: Code2,
        desc: "Sandboxed execution environment with root access and pre-installed data science libraries.",
        features: ["Secure Firecracker VM", "Network Access", "Persistent Filesystem", "LSP Support"]
    },
    {
        type: "AUTOMATION AGENTS",
        price: "$0.01",
        unit: "/ step",
        icon: Workflow,
        desc: "Headless browser control for web scraping, form filling, and UI testing.",
        features: ["Anti-detect Fingerprinting", "Captcha Solving", "DOM Analysis", "Screenshot Capabilities"]
    }
  ];

  const gpuList = [
    // 50 Series
    { 
        name: 'NVIDIA RTX 5090', 
        series: '50 Series', 
        vram: '32 GB', 
        tflops: '1,850', 
        price: '$0.0025 / req',
        details: {
            cudaCores: '21,760',
            tensorCores: '680 (5th Gen)',
            architecture: 'Blackwell',
            cudaVersions: ['12.4+']
        }
    },
    { 
        name: 'NVIDIA RTX 5080', 
        series: '50 Series', 
        vram: '16 GB', 
        tflops: '1,100', 
        price: '$0.0018 / req',
        details: {
            cudaCores: '10,752',
            tensorCores: '336 (5th Gen)',
            architecture: 'Blackwell',
            cudaVersions: ['12.4+']
        }
    },
    // 40 Series
    { 
        name: 'NVIDIA RTX 4090', 
        series: '40 Series', 
        vram: '24 GB', 
        tflops: '1,321', 
        price: '$0.0015 / req',
        details: {
            cudaCores: '16,384',
            tensorCores: '512 (4th Gen)',
            architecture: 'Ada Lovelace',
            cudaVersions: ['11.8', '12.x']
        }
    },
    { 
        name: 'NVIDIA RTX 4080', 
        series: '40 Series', 
        vram: '16 GB', 
        tflops: '759', 
        price: '$0.0012 / req',
        details: {
            cudaCores: '9,728',
            tensorCores: '304 (4th Gen)',
            architecture: 'Ada Lovelace',
            cudaVersions: ['11.8', '12.x']
        }
    },
    { 
        name: 'NVIDIA RTX 4070 Ti', 
        series: '40 Series', 
        vram: '12 GB', 
        tflops: '641', 
        price: '$0.0009 / req',
        details: {
            cudaCores: '7,680',
            tensorCores: '240 (4th Gen)',
            architecture: 'Ada Lovelace',
            cudaVersions: ['11.8', '12.x']
        }
    },
    // 30 Series
    { 
        name: 'NVIDIA RTX 3090 Ti', 
        series: '30 Series', 
        vram: '24 GB', 
        tflops: '320', 
        price: '$0.0008 / req',
        details: {
            cudaCores: '10,752',
            tensorCores: '336 (3rd Gen)',
            architecture: 'Ampere',
            cudaVersions: ['11.x', '12.x']
        }
    },
    { 
        name: 'NVIDIA RTX 3090', 
        series: '30 Series', 
        vram: '24 GB', 
        tflops: '285', 
        price: '$0.0007 / req',
        details: {
            cudaCores: '10,496',
            tensorCores: '328 (3rd Gen)',
            architecture: 'Ampere',
            cudaVersions: ['11.x', '12.x']
        }
    },
    { 
        name: 'NVIDIA RTX 3080', 
        series: '30 Series', 
        vram: '10 GB', 
        tflops: '238', 
        price: '$0.0005 / req',
        details: {
            cudaCores: '8,704',
            tensorCores: '272 (3rd Gen)',
            architecture: 'Ampere',
            cudaVersions: ['11.x', '12.x']
        }
    },
  ];

  const toggleGpu = (name: string) => {
    setExpandedGpu(expandedGpu === name ? null : name);
  };

  return (
    <section className="min-h-screen bg-dats-light py-24 px-6 text-white">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="text-center mb-16">
            <h1 className="font-display font-black text-5xl md:text-7xl mb-4 text-white">PAY PER REQUEST</h1>
            <p className="font-mono text-gray-400">Zero idle costs. Only pay when your model runs.</p>
        </div>

        <CostCalculator />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {tiers.map((tier) => (
                <div key={tier.name} className={`relative flex flex-col border border-white bg-black p-8 ${tier.highlight ? 'sharp-shadow-blue scale-105 z-10' : 'sharp-shadow hover:scale-[1.02] transition-transform'}`}>
                    
                    {tier.highlight && (
                        <div className="absolute top-0 right-0 bg-white text-black px-4 py-1 font-mono text-xs font-bold uppercase">
                            Most Popular
                        </div>
                    )}

                    <h3 className="font-mono font-bold text-white mb-2 tracking-widest">{tier.name}</h3>
                    <div className="flex items-baseline gap-1 mb-4">
                        <span className="font-display font-bold text-5xl text-white">{tier.price}</span>
                        <span className="font-mono text-gray-400 text-sm">{tier.unit}</span>
                    </div>
                    <p className="text-gray-400 mb-8 h-12">{tier.desc}</p>

                    <div className="flex-grow space-y-4 mb-8">
                        {tier.features.map((feature) => (
                            <div key={feature} className="flex items-center gap-3">
                                <div className={`w-5 h-5 flex items-center justify-center border ${tier.highlight ? 'bg-dats-blue border-dats-blue text-white' : 'border-gray-600 text-white'}`}>
                                    <Check size={12} strokeWidth={4} />
                                </div>
                                <span className="font-mono text-sm text-gray-300">{feature}</span>
                            </div>
                        ))}
                    </div>

                    <button className={`w-full py-4 font-mono text-sm font-bold uppercase border border-white transition-all
                        ${tier.highlight 
                            ? 'bg-white text-black hover:bg-dats-blue hover:text-white' 
                            : 'bg-transparent text-white hover:bg-white hover:text-black'
                        }`}>
                        Choose Plan
                    </button>
                </div>
            ))}
        </div>

        {/* AGENT PRICING SECTION */}
        <div className="mb-24">
             <h2 className="font-display font-bold text-2xl mb-8 text-white">AGENT PRICING</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {agentPricing.map((agent, i) => (
                    <div key={i} className="border border-white bg-black p-8 sharp-shadow hover:translate-y-[-4px] transition-transform">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 bg-dats-light border border-gray-800 flex items-center justify-center text-dats-blue">
                                <agent.icon size={24} />
                            </div>
                            <h3 className="font-display font-bold text-xl">{agent.type}</h3>
                        </div>
                        
                        <div className="flex items-baseline gap-1 mb-4 border-b border-gray-800 pb-4">
                             <span className="font-display font-bold text-4xl text-white">{agent.price}</span>
                             <span className="font-mono text-gray-500 text-sm">{agent.unit}</span>
                        </div>
                        
                        <p className="font-mono text-sm text-gray-400 mb-6 min-h-[60px]">{agent.desc}</p>
                        
                        <ul className="space-y-3">
                            {agent.features.map((feat, j) => (
                                <li key={j} className="flex items-center gap-3 font-mono text-xs text-gray-300">
                                    <div className="w-1.5 h-1.5 bg-dats-blue rounded-full"></div>
                                    {feat}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
             </div>
        </div>

        {/* GPU Table */}
        <div className="mb-24">
             <h2 className="font-display font-bold text-2xl mb-8 text-white">PER REQUEST PRICING</h2>
            <div className="border border-white bg-black sharp-shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    {/* Header Row */}
                    <div className="grid grid-cols-12 bg-white text-black font-mono text-xs font-bold uppercase py-4 px-6 min-w-[800px] items-center">
                        <div className="col-span-7 md:col-span-4">GPU Model</div>
                        <div className="col-span-2 hidden md:block pl-4">VRAM</div>
                        <div className="col-span-3 hidden md:block pl-4">Perf (TFLOPS)</div>
                        <div className="col-span-5 md:col-span-3 text-right">Price / Req</div>
                    </div>

                    {/* Data Rows */}
                    <div>
                    {gpuList.map((gpu, idx) => (
                        <div key={gpu.name} className="group">
                            <div 
                                onClick={() => toggleGpu(gpu.name)}
                                className={`grid grid-cols-12 py-4 px-6 font-mono text-sm text-white border-t border-gray-800 items-center min-w-[800px] transition-colors cursor-pointer 
                                    ${idx % 2 === 0 ? 'bg-dats-light' : 'bg-black'}
                                    hover:bg-white/10
                                `}
                            >
                                <div className="col-span-7 md:col-span-4 flex items-center gap-3">
                                    <div className="flex items-center gap-2">
                                         {expandedGpu === gpu.name ? <ChevronUp size={14} className="text-dats-blue" /> : <ChevronDown size={14} className="text-gray-500 group-hover:text-white transition-colors" />}
                                         <span className="font-bold">{gpu.name}</span>
                                    </div>
                                    <span className="text-[10px] px-2 py-0.5 border border-gray-700 text-gray-400 rounded-full hidden lg:inline-block">{gpu.series}</span>
                                </div>
                                <div className="col-span-2 text-gray-400 hidden md:block pl-4">{gpu.vram}</div>
                                <div className="col-span-3 text-gray-400 hidden md:block pl-4">{gpu.tflops}</div>
                                <div className="col-span-5 md:col-span-3 font-bold text-dats-blue text-right tracking-tight">{gpu.price}</div>
                            </div>
                            
                            {/* Expandable Details - Animated */}
                            <div 
                                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                                    expandedGpu === gpu.name ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="bg-[#050505] border-t border-gray-800 p-6 min-w-[800px]">
                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pl-8">
                                            <div className="flex flex-col gap-2">
                                                <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest flex items-center gap-2">
                                                    <Cpu size={14} className="text-dats-blue" /> CUDA Cores
                                                </span>
                                                <span className="text-white font-mono font-bold text-lg">{gpu.details.cudaCores}</span>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest flex items-center gap-2">
                                                    <Layers size={14} className="text-dats-blue" /> Tensor Cores
                                                </span>
                                                <span className="text-white font-mono font-bold text-lg">{gpu.details.tensorCores}</span>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest flex items-center gap-2">
                                                    <Zap size={14} className="text-dats-blue" /> Architecture
                                                </span>
                                                <span className="text-white font-mono font-bold text-lg">{gpu.details.architecture}</span>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest flex items-center gap-2">
                                                    <Check size={14} className="text-dats-blue" /> Supported CUDA
                                                </span>
                                                <div className="flex gap-2 flex-wrap">
                                                    {gpu.details.cudaVersions.map(v => (
                                                        <span key={v} className="text-xs bg-gray-900 border border-gray-700 px-2 py-1 text-dats-blue font-mono">{v}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <p className="mt-4 font-mono text-xs text-gray-500">* Prices based on standard Stable Diffusion XL inference steps or equivalent compute duration (approx 2s).</p>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-3xl mb-12 text-center text-white">FREQUENTLY ASKED QUESTIONS</h2>
            <div className="space-y-6">
                {[
                    { q: "What counts as a request?", a: "A request is defined as a single API call to our inference endpoints. For generative tasks, this typically corresponds to one image generation or one text completion sequence up to 512 tokens." },
                    { q: "Do you charge for cold starts?", a: "No. You are only billed when your request is successfully processed. We absorb the cost of spinning up containers." },
                    { q: "Are there minimum monthly commitments?", a: "No. Our pay-per-request model is strictly usage-based. You can spend $0 or $10,000 depending on your traffic." },
                    { q: "Can I switch to hourly billing?", a: "Yes, for sustained workloads, we offer dedicated nodes with hourly billing which can be more cost-effective for 24/7 usage." }
                ].map((item, i) => (
                    <div key={i} className="border border-white p-6 bg-black hover:bg-dats-gray transition-colors">
                        <div className="flex items-start gap-4">
                            <HelpCircle size={20} className="text-dats-blue flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold font-display text-lg mb-2 text-white">{item.q}</h3>
                                <p className="text-gray-400 leading-relaxed text-sm">{item.a}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;