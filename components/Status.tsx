import React from 'react';
import { CheckCircle, AlertTriangle } from 'lucide-react';

const Status: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-12 pb-24 px-6">
      <div className="max-w-[800px] mx-auto">
        <div className="flex items-center justify-between mb-12">
             <h1 className="font-display font-black text-4xl">SYSTEM STATUS</h1>
             <div className="bg-green-500/10 border border-green-500 text-green-500 px-4 py-2 flex items-center gap-2 font-bold font-mono text-sm">
                <CheckCircle size={16} />
                ALL SYSTEMS OPERATIONAL
             </div>
        </div>

        <div className="space-y-4 mb-12">
            {[
                "API - US East (N. Virginia)",
                "API - US West (Oregon)",
                "API - EU West (Dublin)",
                "API - Asia Pacific (Tokyo)",
                "Dashboard & Console",
                "Website"
            ].map((region, i) => (
                <div key={i} className="border border-white bg-dats-light p-4 flex justify-between items-center">
                    <span className="font-mono font-bold text-sm">{region}</span>
                    <div className="flex items-center gap-2 text-green-500 text-xs font-mono">
                        <CheckCircle size={14} />
                        <span>Operational</span>
                    </div>
                </div>
            ))}
        </div>

        <h2 className="font-display font-bold text-2xl mb-6">Past Incidents</h2>
        <div className="space-y-6">
             <div className="border-l-2 border-gray-700 pl-6 pb-6">
                <div className="font-mono text-xs text-gray-500 mb-1">Oct 10, 2026</div>
                <h3 className="font-bold text-lg mb-2">Increased Latency in EU-West</h3>
                <p className="text-gray-400 text-sm">We observed slightly elevated latency for inference requests in the Dublin region due to an upstream networking provider issue. Resolved in 15 minutes.</p>
             </div>
             <div className="border-l-2 border-gray-700 pl-6 pb-6">
                <div className="font-mono text-xs text-gray-500 mb-1">Sep 22, 2026</div>
                <h3 className="font-bold text-lg mb-2">Scheduled Maintenance</h3>
                <p className="text-gray-400 text-sm">Performed rolling upgrades on the RTX 4090 cluster driver stack. No downtime observed.</p>
             </div>
        </div>

      </div>
    </div>
  );
};

export default Status;