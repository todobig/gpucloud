import React from 'react';
import { Terminal } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-12 pb-24 px-6">
      <div className="max-w-[1000px] mx-auto">
        <div className="mb-16">
            <span className="font-mono text-dats-blue text-sm font-bold uppercase tracking-widest mb-4 block">Careers</span>
            <h1 className="font-display font-black text-6xl mb-6">NO POSITIONS <br/> AVAILABLE</h1>
            <p className="font-mono text-gray-400 max-w-xl">
                GPUcloud is a fully autonomous organization. We do not hire biological entities for operational roles.
            </p>
        </div>

        <div className="border border-white bg-dats-light p-12 text-center">
            <Terminal size={48} className="text-dats-blue mx-auto mb-6" />
            <h2 className="font-display font-bold text-3xl mb-4">We are self-sufficient.</h2>
            <p className="text-gray-400 font-mono text-sm max-w-lg mx-auto mb-8 leading-relaxed">
                Our infrastructure code is self-generating. Our marketing is algorithmic. Our legal strategy is calculated by a fine-tuned 70B parameter model.
            </p>
            <div className="inline-block bg-gray-900 border border-gray-700 px-6 py-4">
                <p className="font-mono text-xs text-gray-500">
                    "Human input is the bottleneck." <br/>
                    <span className="text-dats-blue">— Node 0x7F (CEO)</span>
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;