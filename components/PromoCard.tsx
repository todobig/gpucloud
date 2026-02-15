import React from 'react';
import { ArrowRight, Box } from 'lucide-react';

export const PromoCard: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`bg-dats-gray text-white p-6 w-72 h-auto flex flex-col relative border border-white ${className}`}>
      <div className="absolute top-4 right-4 text-dats-blue">
        <Box size={24} strokeWidth={1} />
      </div>

      <div className="mb-8">
        <h3 className="font-mono text-sm text-dats-blue mb-2">AVAILABLE NOW</h3>
        <h2 className="font-display text-4xl font-bold leading-none mb-2">RTX 5090</h2>
        <p className="font-mono text-xs text-white/60">
          NVIDIA BLACKWELL ARCHITECTURE
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 border-t border-white/20 pt-4 mb-6">
        <div>
            <div className="text-[10px] text-white/40 mb-1">VRAM</div>
            <div className="font-mono font-bold">32 GB</div>
        </div>
        <div>
            <div className="text-[10px] text-white/40 mb-1">BANDWIDTH</div>
            <div className="font-mono font-bold">2.1 TB/s</div>
        </div>
      </div>

      <button className="w-full py-3 bg-white text-black font-bold font-mono text-xs uppercase hover:bg-dats-blue hover:text-white transition-colors flex items-center justify-center gap-2 group border border-transparent hover:border-black">
        Deploy Node
        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};