import React from 'react';

const SystemTicker: React.FC = () => {
  const actions = [
    "AGENT_0x4F: Rebalancing load across US-East-1...",
    "AGENT_0xA2: Kernel optimization complete (Llama-3, +14% perf)",
    "SECURITY_BOT: Intrusion attempt blocked from IP 192.168.x.x",
    "FINANCE_BOT: Spot instance arbitrage executed (Saved 22%)",
    "AGENT_0x99: Provisioning 50 new RTX 5090 nodes in Tokyo...",
    "MAINTENANCE: Zero-downtime patch applied to Cluster Bravo",
    "AGENT_0xB1: Temperature regulation adjusted for Rack 44",
    "SCHEDULER: 4096 pending requests rerouted to backup zone",
    "AGENT_0x0D: Updating CUDA drivers on Cluster Delta (Rolling update)"
  ];

  return (
    <div className="bg-dats-blue text-white overflow-hidden py-1.5 border-b border-white z-40 relative h-[28px]">
      <div className="animate-marquee whitespace-nowrap flex gap-12 font-mono text-[10px] font-bold uppercase tracking-widest leading-none items-center h-full">
        {[...actions, ...actions, ...actions].map((action, i) => (
          <span key={i} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white animate-pulse"></span>
            {action}
          </span>
        ))}
      </div>
      <style>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
};

export default SystemTicker;