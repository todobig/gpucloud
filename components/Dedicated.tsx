import React from 'react';
import { Server, ShieldCheck, Lock, Activity } from 'lucide-react';

const Dedicated: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-12 pb-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="font-display font-black text-6xl mb-4 text-white">DEDICATED CLUSTERS</h1>
        <p className="font-mono text-gray-400 max-w-2xl mb-16">
          Reserve bare-metal performance for mission-critical workloads. 
          Guaranteed placement on RTX 5090 nodes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
                { icon: Server, title: "Bare Metal Access", desc: "No noisy neighbors. You get full PCIe bandwidth and VRAM allocation." },
                { icon: ShieldCheck, title: "Private Networking", desc: "VPC peering and dedicated interconnects for maximum security." },
                { icon: Lock, title: "Fixed Pricing", desc: "Predictable monthly costs with significant discounts over on-demand rates." }
            ].map((feature, i) => (
                <div key={i} className="border border-white p-8 bg-dats-light sharp-shadow">
                    <feature.icon className="text-dats-blue mb-6" size={32} />
                    <h3 className="font-display font-bold text-2xl mb-4">{feature.title}</h3>
                    <p className="text-gray-400 font-mono text-sm leading-relaxed">{feature.desc}</p>
                </div>
            ))}
        </div>

        <div className="bg-dats-gray border border-white p-12 flex flex-col items-center text-center">
            <Activity size={48} className="text-white mb-6" />
            <h2 className="font-display font-bold text-4xl mb-4">Need Custom Capacity?</h2>
            <p className="text-gray-400 max-w-lg mb-8">
                We support clusters up to 1,024 GPUs for training and massive scale inference. 
                Contact sales for H100 and Blackwell availability.
            </p>
            <button className="bg-white text-black px-8 py-4 font-mono font-bold uppercase hover:bg-dats-blue hover:text-white transition-colors">
                Contact Sales
            </button>
        </div>
      </div>
    </div>
  );
};

export default Dedicated;