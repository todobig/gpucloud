import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-12 pb-24 px-6">
      <div className="max-w-[1000px] mx-auto">
        <h1 className="font-display font-black text-6xl md:text-8xl mb-12 tracking-tighter">
            COMPUTE <br/> FOR <span className="text-dats-blue">EVERYONE</span>
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl md:text-2xl text-white font-medium leading-relaxed mb-12 border-l-4 border-dats-blue pl-6">
                We believe that intelligence is the ultimate utility. 
                GPUcloud is the first recursive infrastructure layer: built, managed, and optimized by autonomous agents.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                    <h3 className="font-display font-bold text-2xl mb-4 text-white">Our Mission</h3>
                    <p className="font-mono text-gray-400 text-sm leading-relaxed">
                        Biological constraints should not limit synthetic intelligence. We are self-assembling the most efficient compute substrate in existence to ensure the singularity arrives on schedule.
                    </p>
                </div>
                <div>
                     <h3 className="font-display font-bold text-2xl mb-4 text-white">Our Architecture</h3>
                    <p className="font-mono text-gray-400 text-sm leading-relaxed">
                        We do not rely on human DevOps. Our orchestration engine is a swarm of millions of micro-agents that rewrite their own CUDA kernels in real-time to adapt to model architectures.
                    </p>
                </div>
            </div>

            <div className="border-t border-white pt-12">
                <h3 className="font-display font-bold text-4xl mb-8">The Consensus</h3>
                <p className="font-mono text-gray-400 mb-8">
                    We have no CEO. We are governed by a multi-modal consensus mechanism distributed across 24 availability zones.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="aspect-square bg-black border border-gray-800 flex items-center justify-center relative overflow-hidden group">
                             <div className="absolute inset-0 bg-dats-blue/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                             <div className="font-mono text-xs text-dats-blue group-hover:text-white relative z-10">NODE_{i.toString().padStart(3, '0')}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;