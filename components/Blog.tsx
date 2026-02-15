import React, { useState } from 'react';
import { ArrowUpRight, ArrowLeft, Calendar, User, Tag, Clock, ChevronRight } from 'lucide-react';

type BlogPost = {
    id: string;
    title: string;
    date: string;
    category: string;
    author: string;
    readTime: string;
    snippet: string;
    content: React.ReactNode;
};

const Blog: React.FC = () => {
  const [view, setView] = useState<'list' | 'post'>('list');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
        id: 'deepseek-v3',
        title: "Serving DeepSeek-V3 & R1 at Scale",
        date: "Jan 24, 2025",
        category: "Engineering",
        author: "Alex Chen",
        readTime: "12 min read",
        snippet: "Optimization strategies for serving massive MoE models efficiently using FP8 quantization and pipeline parallelism.",
        content: (
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
                <p>
                    The release of DeepSeek-V3 and its reasoning variant R1 has shifted the open-weights landscape. 
                    With 671B parameters (37B active), serving this Mixture-of-Experts (MoE) giant efficiently requires rethinking standard inference pipelines.
                </p>
                <h3 className="text-3xl font-bold text-white font-display mt-8 mb-4">The MoE Routing Challenge</h3>
                <p>
                    While total VRAM requirements are high (requiring 8xH100 or 8xRTX 5090 nodes), the compute density is surprisingly low due to sparsity. 
                    The bottleneck shifts from FLOPS to memory bandwidth and interconnect latency as experts are routed across GPUs.
                </p>
                <div className="bg-black border border-white/20 p-6 my-8">
                    <h4 className="font-mono text-dats-blue text-xs font-bold uppercase mb-4">Inference Optimization Stack</h4>
                    <ul className="space-y-3 font-mono text-sm">
                        <li className="flex justify-between items-center border-b border-gray-800 pb-2">
                            <span>Quantization</span>
                            <span className="text-white">FP8 (W8A8)</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-gray-800 pb-2">
                            <span>Kernel</span>
                            <span className="text-white">Custom Marlin Kernels</span>
                        </li>
                        <li className="flex justify-between items-center border-b border-gray-800 pb-2">
                            <span>Parallelism</span>
                            <span className="text-white">Tensor Parallel + EP</span>
                        </li>
                    </ul>
                </div>
                <h3 className="text-3xl font-bold text-white font-display mt-8 mb-4">Reasoning Performance (R1)</h3>
                <p>
                    For the R1 model, we've observed that "Chain of Thought" (CoT) generation creates massive KV caches due to long output sequences. 
                    We've implemented aggressive PagedAttention with 128-token page blocks to handle these 32k+ context windows without OOMing.
                </p>
                <p>
                    DeepSeek-R1 is now available on our dedicated endpoints with a TTFT (Time to First Token) of &lt; 40ms.
                </p>
            </div>
        )
    },
    {
        id: 'blackwell-benchmarks',
        title: "NVIDIA Blackwell B200: First Benchmarks",
        date: "Jan 10, 2025",
        category: "Hardware",
        author: "Sarah Jones",
        readTime: "8 min read",
        snippet: "Early access benchmarks of the B200 vs H100. FP4 precision benefits and the impact of the second-gen Transformer Engine.",
        content: (
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
                <p>
                    We've received our first racks of NVIDIA GB200 NVL72 systems. The specs on paper were impressive, but the real-world inference numbers are paradigm-shifting.
                </p>
                <h3 className="text-3xl font-bold text-white font-display mt-8 mb-4">The FP4 Revolution</h3>
                <p>
                    Blackwell's native support for FP4 precision allows us to double the effective throughput compared to FP8, with negligible accuracy loss for larger models like Llama 3.1 405B.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                    <div className="bg-dats-gray p-6 border border-gray-700">
                        <div className="text-xs font-mono text-gray-500 uppercase mb-2">Llama 3 70B Inference</div>
                        <div className="text-4xl font-display font-bold text-white mb-1">11,500 <span className="text-lg text-gray-500">tok/s</span></div>
                        <div className="text-dats-blue text-sm font-bold">NVIDIA H100 (FP8)</div>
                    </div>
                    <div className="bg-white p-6 border border-white">
                        <div className="text-xs font-mono text-black uppercase mb-2">Llama 3 70B Inference</div>
                        <div className="text-4xl font-display font-bold text-black mb-1">34,200 <span className="text-lg text-gray-500">tok/s</span></div>
                        <div className="text-dats-blue text-sm font-bold">NVIDIA B200 (FP4)</div>
                    </div>
                </div>

                <p>
                    The NVLink Switch scaling allows all 72 GPUs to act as a single massive accelerator with 130TB/s of bandwidth. 
                    This effectively solves the multi-node latency penalty for trillion-parameter models.
                </p>
            </div>
        )
    },
    {
        id: 'computer-use',
        title: "Building Computer-Using Agents",
        date: "Dec 15, 2024",
        category: "Agents",
        author: "David Kim",
        readTime: "15 min read",
        snippet: "A guide to deploying agents that can control headless browsers and desktop GUIs using our new VNC stream API.",
        content: (
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
                <p>
                    Text-in, text-out is limiting. The next frontier is Action. We've released a new runtime environment for agents that need to interact with GUIs.
                </p>
                <h3 className="text-3xl font-bold text-white font-display mt-8 mb-4">Sandboxed X11 Environments</h3>
                <p>
                    Our new `Agent.connect_desktop()` method spins up a secure Firecracker microVM with a headless X11 server. 
                    The agent receives screenshots (via the vision API) and emits mouse/keyboard events.
                </p>
                <div className="bg-[#050505] border border-gray-800 p-4 relative my-8">
                    <pre className="font-mono text-sm text-gray-300 overflow-x-auto p-2">
{`from gpucloud.agents import DesktopAgent

agent = DesktopAgent(model="claude-3-5-sonnet")

# Task: Go to Amazon and find the price of a specific GPU
await agent.execute(
    task="Find price of RTX 5090 on amazon.com",
    tools=["browser", "mouse", "keyboard"]
)`}
                    </pre>
                </div>
                <p>
                    We handle the screenshot-to-token encoding pipeline, ensuring high-res desktop views are compressed efficiently for the vision model's context window.
                </p>
            </div>
        )
    },
    {
        id: 'speculative-decoding',
        title: "Speculative Decoding: 3x Faster Inference",
        date: "Nov 28, 2024",
        category: "Research",
        author: "Dr. Emily Zhang",
        readTime: "10 min read",
        snippet: "Implementing Medusa heads and draft models to accelerate Llama 3.3 70B without quality degradation.",
        content: (
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
                <p>
                    Memory bandwidth is usually the bottleneck for LLM generation. Speculative decoding breaks this speed limit by checking multiple tokens in parallel.
                </p>
                <h3 className="text-3xl font-bold text-white font-display mt-8 mb-4">Draft Models vs Medusa</h3>
                <p>
                    We compared two approaches: using a smaller draft model (e.g., Llama-3-8B drafting for 70B) vs. Medusa heads (extra heads trained on the main model).
                </p>
                <p>
                    Our findings show that for code generation tasks, the Draft Model approach yields a higher acceptance rate (60-70%), resulting in a 2.8x speedup. 
                    For creative writing, Medusa heads proved more stable with a 2.1x speedup but lower VRAM overhead.
                </p>
                <p>
                    We have enabled Speculative Decoding by default on all "Turbo" endpoints starting today.
                </p>
            </div>
        )
    },
    {
        id: 'serverless-lora',
        title: "Hot-Swappable LoRA Adapters",
        date: "Nov 05, 2024",
        category: "Product",
        author: "Product Team",
        readTime: "6 min read",
        snippet: "Serve thousands of fine-tuned models from a single base model instance with zero overhead.",
        content: (
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
                <p>
                    Multi-tenancy is hard when everyone wants a custom fine-tune. Loading a full 70B model for every user is cost-prohibitive.
                </p>
                <h3 className="text-3xl font-bold text-white font-display mt-8 mb-4">Per-Request Adaptation</h3>
                <p>
                    We've implemented a request-level LoRA router. You can now pass `adapter_id` in your API call. 
                    The base model weights remain frozen in GPU memory, while the small LoRA weights (10-200MB) are streamed in or cached in VRAM.
                </p>
                <p>
                    This allows a single GPU deployment to serve thousands of unique customer personas or styles simultaneously with zero switching latency.
                </p>
            </div>
        )
    }
  ];

  const handlePostClick = (post: BlogPost) => {
    setActivePost(post);
    setView('post');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBack = () => {
    setView('list');
    setActivePost(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  if (view === 'post' && activePost) {
      return (
        <div className="min-h-screen bg-black text-white pt-12 pb-24 px-6">
            <div className="max-w-[800px] mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
                <button 
                    onClick={handleBack}
                    className="flex items-center gap-2 text-dats-blue font-mono text-xs font-bold uppercase mb-8 hover:underline"
                >
                    <ArrowLeft size={14} /> Back to Blog
                </button>

                <div className="mb-8 border-b border-gray-800 pb-8">
                     <div className="flex gap-4 mb-6">
                        <span className="bg-dats-blue text-white font-mono text-[10px] font-bold px-2 py-1 uppercase">{activePost.category}</span>
                    </div>
                    <h1 className="font-display font-black text-4xl md:text-6xl mb-6 leading-tight">{activePost.title}</h1>
                    
                    <div className="flex flex-wrap gap-6 text-gray-500 font-mono text-xs uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <Calendar size={14} /> {activePost.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <User size={14} /> {activePost.author}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={14} /> {activePost.readTime}
                        </div>
                    </div>
                </div>

                <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-p:font-light prose-strong:text-white prose-code:text-dats-blue">
                    {activePost.content}
                </div>

                <div className="mt-24 pt-12 border-t border-gray-800">
                    <h3 className="font-display font-bold text-2xl mb-6">Share this article</h3>
                    <div className="flex gap-4">
                        <button className="border border-white px-6 py-3 font-mono text-xs font-bold hover:bg-white hover:text-black transition-colors">Twitter</button>
                        <button className="border border-white px-6 py-3 font-mono text-xs font-bold hover:bg-white hover:text-black transition-colors">LinkedIn</button>
                    </div>
                </div>
            </div>
        </div>
      );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-12 pb-24 px-6">
      <div className="max-w-[1000px] mx-auto">
        <h1 className="font-display font-black text-6xl mb-4">BLOG</h1>
        <p className="font-mono text-gray-400 mb-16 max-w-2xl">Engineering insights, product updates, and research from the GPUcloud team.</p>
        
        <div className="space-y-12">
            {posts.map((post) => (
                <div 
                    key={post.id} 
                    onClick={() => handlePostClick(post)}
                    className="group border-b border-gray-800 pb-12 cursor-pointer hover:border-white transition-colors"
                >
                    <div className="flex justify-between items-baseline mb-4">
                        <div className="flex items-center gap-3">
                            <span className="font-mono text-dats-blue text-xs font-bold uppercase tracking-widest bg-dats-blue/10 px-2 py-1">{post.category}</span>
                            <span className="font-mono text-gray-500 text-xs">{post.readTime}</span>
                        </div>
                        <span className="font-mono text-gray-500 text-xs">{post.date}</span>
                    </div>
                    <h2 className="font-display font-bold text-3xl md:text-4xl mb-4 group-hover:text-dats-blue transition-colors">
                        {post.title}
                    </h2>
                    <p className="font-mono text-gray-400 leading-relaxed max-w-2xl mb-6 group-hover:text-gray-300 transition-colors">
                        {post.snippet}
                    </p>
                    <div className="flex items-center gap-2 text-white font-bold text-sm group-hover:translate-x-2 transition-transform">
                        Read Article <ArrowUpRight size={16} className="text-dats-blue" />
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;