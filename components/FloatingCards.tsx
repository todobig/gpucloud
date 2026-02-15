import React from 'react';
import { Cpu, Zap, Activity } from 'lucide-react';

interface CardProps {
  type: 'latency' | 'throughput';
  className?: string;
}

export const BenefitCard: React.FC<CardProps> = ({ type, className = '' }) => {
  const isLatency = type === 'latency';
  
  const Icon = isLatency ? Zap : Activity;
  const label = isLatency ? 'LATENCY' : 'UPTIME';
  const value = isLatency ? '<20ms' : '99.99%';
  const sub = isLatency ? 'Global Avg' : 'SLA Guarantee';

  return (
    <div className={`relative flex flex-col justify-between p-5 w-40 h-40 bg-black border border-white sharp-shadow ${className}`}>
        <div className="flex justify-between items-start">
            <Icon size={20} className="text-white" strokeWidth={1.5} />
            <div className="w-2 h-2 bg-dats-blue"></div>
        </div>
        
        <div>
            <div className="font-mono text-xs text-gray-400 mb-1 tracking-wider">{label}</div>
            <div className="font-display font-bold text-3xl text-white leading-none mb-1">
                {value}
            </div>
            <div className="font-mono text-[10px] text-gray-500 uppercase">
                {sub}
            </div>
        </div>
    </div>
  );
};