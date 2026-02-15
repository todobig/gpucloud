import React, { useState, useEffect } from 'react';
import { BookOpen, PlayCircle, Terminal, Code, Cpu, ChevronRight, AlertTriangle, Layers, Zap, Globe, MessageSquare, Image as ImageIcon, Mic, Shield, FileText, Check, Copy, Server } from 'lucide-react';

type DocSection = {
  id: string;
  title: string;
  category: string;
  content: React.ReactNode;
};

const CodeBlock = ({ language, code }: { language: string, code: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-[#0d0d0d] border border-gray-800 rounded-lg overflow-hidden my-4 group relative">
            <div className="flex justify-between items-center px-4 py-2 border-b border-gray-800 bg-black">
                <span className="text-xs font-mono font-bold text-gray-500 uppercase">{language}</span>
                <button onClick={handleCopy} className="text-gray-500 hover:text-white transition-colors">
                    {copied ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                </button>
            </div>
            <div className="p-4 overflow-x-auto">
                <pre className="font-mono text-sm text-gray-300 leading-relaxed">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
};

// Helper for icons
const BotIconComp = ({ size = 24, className = "" }: { size?: number | string, className?: string }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
    >
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
    </svg>
);

const Docs: React.FC = () => {
  const [activeId, setActiveId] = useState('intro');

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeId]);

  const navItems = [
    { 
        cat: 'GETTING STARTED', 
        icon: PlayCircle,
        items: [
            { id: 'intro', label: 'Introduction' },
            { id: 'quickstart', label: 'Quickstart' },
            { id: 'auth', label: 'Authentication' },
            { id: 'billing-limits', label: 'Billing & Limits' }
        ] 
    },
    { 
        cat: 'CORE CONCEPTS', 
        icon: Cpu,
        items: [
            { id: 'models', label: 'Model Library' },
            { id: 'streaming', label: 'Streaming & SSE' },
            { id: 'context-caching', label: 'Context Caching' }
        ] 
    },
    { 
        cat: 'GUIDES', 
        icon: Layers,
        items: [
            { id: 'text-gen', label: 'Text Generation' },
            { id: 'vision', label: 'Vision & Multimodal' },
            { id: 'function-calling', label: 'Function Calling' },
            { id: 'json-mode', label: 'JSON Mode' }
        ] 
    },
    { 
        cat: 'AGENTS', 
        icon: BotIconComp,
        items: [
            { id: 'agent-concepts', label: 'Agent Runtime' },
            { id: 'voice-agents', label: 'Voice Agents' },
            { id: 'browser-agents', label: 'Browser Agents' }
        ] 
    },
    { 
        cat: 'API REFERENCE', 
        icon: FileText,
        items: [
            { id: 'rest-api', label: 'REST API' },
            { id: 'errors', label: 'Errors' },
            { id: 'changelog', label: 'Changelog' }
        ] 
    }
  ];

  const contentMap: Record<string, DocSection> = {
    // --- GETTING STARTED ---
    intro: {
      id: 'intro',
      title: 'Introduction',
      category: 'GETTING STARTED',
      content: (
        <div className="space-y-8 animate-in fade-in duration-500">
          <p className="text-xl text-gray-300 leading-relaxed font-light">
            GPUcloud is a <span className="text-white font-bold">serverless GPU inference platform</span> engineered for extreme performance. 
            We provide a unified API to access state-of-the-art open source models (Llama 3, Mistral, Flux) running on H100 and RTX 5090 clusters.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <div className="border border-white/10 bg-dats-light p-6 rounded-lg">
                <div className="w-10 h-10 bg-dats-blue/20 text-dats-blue flex items-center justify-center rounded mb-4">
                    <Zap size={20} />
                </div>
                <h3 className="font-bold text-white mb-2 text-lg">Sub-20ms Latency</h3>
                <p className="text-gray-400 text-sm">Our "Warm-Pool" orchestration ensures models are always loaded in VRAM, eliminating cold starts for production endpoints.</p>
            </div>
            <div className="border border-white/10 bg-dats-light p-6 rounded-lg">
                <div className="w-10 h-10 bg-purple-500/20 text-purple-400 flex items-center justify-center rounded mb-4">
                    <Globe size={20} />
                </div>
                <h3 className="font-bold text-white mb-2 text-lg">Global Edge Network</h3>
                <p className="text-gray-400 text-sm">Requests are automatically routed to the nearest available GPU node across 24 regions, minimizing network latency.</p>
            </div>
          </div>

          <div className="bg-dats-gray border-l-4 border-dats-blue p-6 rounded-r-lg">
            <h4 className="font-bold text-white mb-2 flex items-center gap-2 font-mono text-sm uppercase tracking-widest">
              <Terminal size={16} /> API Base URL
            </h4>
            <code className="font-mono text-dats-blue text-lg">https://api.gpucloud.xyz/v1</code>
          </div>
        </div>
      )
    },
    quickstart: {
      id: 'quickstart',
      title: 'Quickstart',
      category: 'GETTING STARTED',
      content: (
        <div className="space-y-8 animate-in fade-in duration-500">
          <p className="text-gray-400 leading-relaxed">
            Get up and running in minutes. Our API is fully compatible with the OpenAI SDK, making migration effortless.
          </p>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white font-display">1. Installation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CodeBlock language="bash" code="pip install openai" />
                <CodeBlock language="bash" code="npm install openai" />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white font-display">2. Generate Text</h3>
            <p className="text-gray-400">Authenticate with your API key and target the `llama-3.2-3b` model.</p>
            
            <CodeBlock language="python" code={`from openai import OpenAI

client = OpenAI(
    base_url="https://api.gpucloud.xyz/v1",
    api_key="gpu_sk_..." # Get this from your dashboard
)

response = client.chat.completions.create(
    model="llama-3.2-3b",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Explain quantum entanglement."}
    ],
    stream=True
)

for chunk in response:
    print(chunk.choices[0].delta.content or "", end="")`} />
          </div>
        </div>
      )
    },
    auth: {
      id: 'auth',
      title: 'Authentication',
      category: 'GETTING STARTED',
      content: (
        <div className="space-y-8 animate-in fade-in duration-500">
           <p className="text-gray-400 leading-relaxed">
            Authentication is handled via Bearer tokens. Include your API key in the <code>Authorization</code> header of every request.
          </p>

          <CodeBlock language="bash" code={`curl https://api.gpucloud.xyz/v1/models \\
  -H "Authorization: Bearer gpu_sk_8f92..."`} />

          <div className="border border-yellow-500/50 bg-yellow-900/10 p-6 flex gap-4 items-start rounded-lg mt-8">
            <AlertTriangle className="text-yellow-500 flex-shrink-0" />
            <div>
                <h4 className="font-bold text-yellow-500 text-sm font-mono uppercase mb-2">Security Warning</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                    API keys grant full access to your billing quota. Never expose keys in client-side code (browsers, iOS/Android apps). 
                    If a key is compromised, rotate it immediately in the Console.
                </p>
            </div>
          </div>
        </div>
      )
    },
    'billing-limits': {
        id: 'billing-limits',
        title: 'Billing & Limits',
        category: 'GETTING STARTED',
        content: (
            <div className="space-y-8 animate-in fade-in duration-500">
                <p className="text-gray-400">
                    Usage is billed per-token for text models and per-image/second for media models. 
                    We implement rate limits to ensure stability for all users.
                </p>

                <h3 className="text-2xl font-bold text-white font-display mt-8">Rate Limits</h3>
                <div className="border border-white/20 rounded-lg overflow-hidden">
                    <table className="w-full text-left font-mono text-sm">
                        <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                                <th className="p-4 text-white">Tier</th>
                                <th className="p-4 text-white">RPM (Requests/Min)</th>
                                <th className="p-4 text-white">TPM (Tokens/Min)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10 text-gray-400">
                            <tr>
                                <td className="p-4">Free / Starter</td>
                                <td className="p-4">60</td>
                                <td className="p-4">100,000</td>
                            </tr>
                            <tr>
                                <td className="p-4">Pro</td>
                                <td className="p-4">600</td>
                                <td className="p-4">1,000,000</td>
                            </tr>
                            <tr>
                                <td className="p-4 text-dats-blue font-bold">Enterprise</td>
                                <td className="p-4">Custom</td>
                                <td className="p-4">Unlimited</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    },

    // --- CORE CONCEPTS ---
    models: {
        id: 'models',
        title: 'Model Library',
        category: 'CORE CONCEPTS',
        content: (
            <div className="space-y-8 animate-in fade-in duration-500">
                <p className="text-gray-400">
                    We host a curated selection of SOTA open-source models. 
                    Models are optimized with custom kernels (FlashAttention-2, Marlin) for maximum throughput.
                </p>

                <div className="border border-white/20 rounded-lg overflow-hidden">
                    <table className="w-full text-left font-mono text-sm">
                        <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                                <th className="p-4 text-white">Model ID</th>
                                <th className="p-4 text-white">Context Window</th>
                                <th className="p-4 text-white">Input / Output ($ per 1M)</th>
                                <th className="p-4 text-white">Type</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10 text-gray-400">
                            <tr>
                                <td className="p-4 font-bold text-white">llama-3.2-3b</td>
                                <td className="p-4">128k</td>
                                <td className="p-4">$0.05 / $0.10</td>
                                <td className="p-4">Text</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold text-white">llama-3.1-70b</td>
                                <td className="p-4">128k</td>
                                <td className="p-4">$0.60 / $0.90</td>
                                <td className="p-4">Text</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold text-white">mistral-large-2</td>
                                <td className="p-4">32k</td>
                                <td className="p-4">$2.00 / $6.00</td>
                                <td className="p-4">Text</td>
                            </tr>
                            <tr>
                                <td className="p-4 font-bold text-white">flux-1.1-pro</td>
                                <td className="p-4">N/A</td>
                                <td className="p-4">$0.04 / image</td>
                                <td className="p-4">Image</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    },
    streaming: {
        id: 'streaming',
        title: 'Streaming & SSE',
        category: 'CORE CONCEPTS',
        content: (
            <div className="space-y-8 animate-in fade-in duration-500">
                <p className="text-gray-400">
                    The API supports Server-Sent Events (SSE) to stream responses token-by-token. 
                    This reduces perceived latency for end-users.
                </p>
                <CodeBlock language="javascript" code={`// Setting stream: true is all you need
const stream = await openai.chat.completions.create({
    model: 'llama-3.2-3b',
    messages: [{ role: 'user', content: 'Write a poem.' }],
    stream: true,
});

for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || '');
}`} />
            </div>
        )
    },

    // --- GUIDES ---
    'text-gen': {
        id: 'text-gen',
        title: 'Text Generation',
        category: 'GUIDES',
        content: (
            <div className="space-y-8 animate-in fade-in duration-500">
                <p className="text-gray-400">
                    The core of the platform. Use `chat/completions` for everything from simple Q&A to complex RAG pipelines.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 border border-white/10 bg-black rounded-lg">
                        <h4 className="font-bold text-white mb-2">Chat Format</h4>
                        <p className="text-xs text-gray-500">Messages are structured as a list of dicts with roles: system, user, assistant.</p>
                    </div>
                    <div className="p-6 border border-white/10 bg-black rounded-lg">
                        <h4 className="font-bold text-white mb-2">JSON Mode</h4>
                        <p className="text-xs text-gray-500">Force the model to output valid JSON by setting <code>response_format: {"{ type: 'json_object' }"}</code>.</p>
                    </div>
                    <div className="p-6 border border-white/10 bg-black rounded-lg">
                        <h4 className="font-bold text-white mb-2">System Prompts</h4>
                        <p className="text-xs text-gray-500">Steer model behavior and tone using the first 'system' message.</p>
                    </div>
                </div>
            </div>
        )
    },
    vision: {
        id: 'vision',
        title: 'Vision & Multimodal',
        category: 'GUIDES',
        content: (
            <div className="space-y-8 animate-in fade-in duration-500">
                <p className="text-gray-400">
                    Send images alongside text to models like LLaVA or GPT-4o-compatible open source alternatives.
                </p>
                <CodeBlock language="python" code={`response = client.chat.completions.create(
    model="llava-1.6-34b",
    messages=[
        {
            "role": "user",
            "content": [
                {"type": "text", "text": "What is in this image?"},
                {
                    "type": "image_url",
                    "image_url": {
                        "url": "https://example.com/image.jpg"
                    }
                }
            ]
        }
    ]
)`} />
            </div>
        )
    },

    // --- AGENTS ---
    'agent-concepts': {
        id: 'agent-concepts',
        title: 'Agent Runtime',
        category: 'AGENTS',
        content: (
            <div className="space-y-8 animate-in fade-in duration-500">
                <p className="text-gray-400 text-lg">
                    GPUcloud Agents are stateful, autonomous workers that run on the edge. 
                    Unlike stateless API calls, agents persist in memory, maintain context, and can execute tools.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                    <div className="bg-dats-light border border-white/10 p-6 rounded-lg">
                        <Mic size={32} className="text-dats-blue mb-4" />
                        <h3 className="font-bold text-xl text-white mb-2">Voice Agents</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Full-duplex audio processing with VAD and interruption handling. ideal for customer support bots.
                        </p>
                        <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-1 rounded">WebSockets</span>
                    </div>
                    <div className="bg-dats-light border border-white/10 p-6 rounded-lg">
                        <Code size={32} className="text-purple-500 mb-4" />
                        <h3 className="font-bold text-xl text-white mb-2">Code Interpreter</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Sandboxed Jupyter kernel environments where LLMs can write and execute Python code.
                        </p>
                        <span className="text-xs font-mono bg-purple-500/10 text-purple-400 px-2 py-1 rounded">Firecracker VM</span>
                    </div>
                </div>
            </div>
        )
    },
    'voice-agents': {
        id: 'voice-agents',
        title: 'Voice Agents',
        category: 'AGENTS',
        content: (
            <div className="space-y-8 animate-in fade-in duration-500">
                <p className="text-gray-400">
                    Connect via WebSocket to stream raw audio. The agent pipeline handles:
                    <br/>
                    1. Transcribing input (STT) <br/>
                    2. Generating tokens (LLM) <br/>
                    3. Synthesizing speech (TTS) <br/>
                    All in &lt; 500ms.
                </p>
                <CodeBlock language="javascript" code={`const ws = new WebSocket('wss://api.gpucloud.xyz/v1/agent/connect');

ws.onopen = () => {
    // Send configuration
    ws.send(JSON.stringify({
        type: 'config',
        voice_id: 'en-us-neural-1',
        system_prompt: 'You are a polite receptionist.'
    }));
};

// Stream audio chunks
navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
    // ... logic to send blob data ...
});`} />
            </div>
        )
    },

    // --- API REFERENCE ---
    errors: {
        id: 'errors',
        title: 'Errors',
        category: 'API REFERENCE',
        content: (
            <div className="space-y-8 animate-in fade-in duration-500">
                <p className="text-gray-400">
                    We use standard HTTP status codes.
                </p>
                <div className="border border-white/20 rounded-lg overflow-hidden">
                    <table className="w-full text-left font-mono text-sm">
                        <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                                <th className="p-4 text-white">Code</th>
                                <th className="p-4 text-white">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10 text-gray-400">
                            <tr>
                                <td className="p-4 text-red-400 font-bold">401</td>
                                <td className="p-4">Unauthorized. Check your API key.</td>
                            </tr>
                            <tr>
                                <td className="p-4 text-red-400 font-bold">402</td>
                                <td className="p-4">Payment Required. Quota exceeded or balance low.</td>
                            </tr>
                            <tr>
                                <td className="p-4 text-red-400 font-bold">429</td>
                                <td className="p-4">Rate Limit Exceeded. Back off and retry.</td>
                            </tr>
                            <tr>
                                <td className="p-4 text-red-400 font-bold">503</td>
                                <td className="p-4">Engine Overloaded. No GPUs available (rare).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
  };

  const activeContent = contentMap[activeId] || contentMap['intro'];

  return (
    <div className="min-h-screen bg-black text-white pt-12 pb-24 px-6 flex flex-col font-sans">
      <div className="max-w-[1600px] mx-auto w-full flex flex-col lg:flex-row gap-12 flex-grow">
        
        {/* Sidebar Navigation */}
        <div className="lg:w-64 lg:border-r border-gray-800 lg:pr-6 shrink-0 hidden lg:block">
             <div className="sticky top-24">
                <div className="mb-8 flex items-center gap-2 text-white">
                    <BookOpen size={24} className="text-dats-blue" />
                    <span className="font-display font-bold text-2xl tracking-tight">Docs</span>
                </div>
                
                <div className="space-y-8">
                    {navItems.map((group, idx) => (
                        <div key={idx}>
                            <h4 className="font-mono text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                {/* <group.icon size={12} /> */}
                                {group.cat}
                            </h4>
                            <ul className="space-y-0.5 border-l border-gray-800 ml-1">
                                {group.items.map(subItem => {
                                    const isActive = activeId === subItem.id;
                                    return (
                                        <li key={subItem.id}>
                                            <button 
                                                onClick={() => setActiveId(subItem.id)}
                                                className={`w-full text-left font-mono text-xs py-2 px-4 transition-all duration-200 relative
                                                    ${isActive 
                                                        ? 'text-white font-bold bg-white/5 border-l border-dats-blue -ml-px' 
                                                        : 'text-gray-400 hover:text-white hover:border-l hover:border-gray-600 -ml-px'
                                                    }`}
                                            >
                                                {subItem.label}
                                            </button>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
             </div>
        </div>

        {/* Mobile Nav (Simulated as just a list for now, or hidden) */}
        {/* In a real app we'd add a mobile drawer here */}

        {/* Main Content Area */}
        <div className="flex-1 min-h-[800px] max-w-4xl">
            <div className="mb-10 pb-6 border-b border-gray-800">
                <div className="flex items-center gap-2 text-dats-blue font-mono text-xs font-bold uppercase tracking-widest mb-4">
                    <span>{activeContent.category}</span>
                    <ChevronRight size={12} />
                    <span>{activeContent.title}</span>
                </div>
                <h1 className="font-display font-black text-5xl md:text-6xl text-white tracking-tight leading-none mb-4">{activeContent.title}</h1>
            </div>

            <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-p:text-gray-400 prose-code:text-dats-blue prose-pre:bg-black prose-pre:border prose-pre:border-gray-800">
                {activeContent.content}
            </div>

            <div className="mt-24 pt-8 border-t border-gray-800 flex justify-between">
                <button className="text-sm font-mono text-gray-500 hover:text-white transition-colors flex items-center gap-2">
                     ← Previous
                </button>
                <button className="text-sm font-mono text-white hover:text-dats-blue transition-colors flex items-center gap-2">
                    Next →
                </button>
            </div>
        </div>

        {/* Right Sidebar (Table of Contents - optional) */}
        <div className="hidden xl:block w-64 shrink-0">
            <div className="sticky top-24">
                <h5 className="font-mono text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4">On this page</h5>
                <ul className="space-y-2 text-xs font-mono text-gray-400">
                    <li className="hover:text-white cursor-pointer">Overview</li>
                    <li className="hover:text-white cursor-pointer">Code Examples</li>
                    <li className="hover:text-white cursor-pointer">Configuration</li>
                </ul>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Docs;