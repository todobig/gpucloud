import React, { useState, useEffect } from 'react';
import { Activity, CreditCard, Box, Zap, Clock, Users, Terminal, LogOut, Search, Plus, MoreHorizontal, Copy, Trash, CheckCircle, AlertTriangle, RefreshCw, Server, Shield, Bot, Mic, Code2, Workflow, Play, Pause } from 'lucide-react';
import { ViewState } from '../App';

interface DashboardProps {
    onNavigate?: (view: ViewState) => void;
}

type TabState = 'overview' | 'clusters' | 'agents' | 'logs' | 'apikeys' | 'billing' | 'team';

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<TabState>('overview');
  const [reqs, setReqs] = useState(8432);
  const [latency, setLatency] = useState(24);

  useEffect(() => {
    const interval = setInterval(() => {
      setReqs(prev => prev + Math.floor(Math.random() * 10));
      setLatency(prev => 20 + Math.floor(Math.random() * 8));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleSignOut = () => {
      if (onNavigate) onNavigate('home');
  };

  const SidebarItem = ({ id, icon: Icon, label }: { id: TabState, icon: any, label: string }) => (
      <button 
        onClick={() => setActiveTab(id)}
        className={`w-full flex items-center gap-3 px-3 py-2 font-mono text-xs font-bold uppercase transition-all duration-200
            ${activeTab === id 
                ? 'bg-white text-black border-l-4 border-dats-blue translate-x-1' 
                : 'text-gray-400 hover:text-white hover:bg-white/5 border-l-4 border-transparent'
            }`}
      >
          <Icon size={16} /> {label}
      </button>
  );

  return (
    <div className="min-h-screen bg-black text-white flex">
        
        {/* Sidebar */}
        <div className="w-64 border-r border-white hidden lg:flex flex-col bg-dats-light sticky top-0 h-screen">
            {/* Neat Logo Section */}
            <div className="h-[80px] flex items-center px-6 border-b border-white bg-black">
                <div 
                    className="flex items-center gap-3 cursor-pointer group" 
                    onClick={() => onNavigate && onNavigate('home')}
                >
                    <div className="relative w-8 h-8 bg-white flex items-center justify-center text-black group-hover:bg-dats-blue group-hover:text-white transition-colors">
                        <Terminal size={18} strokeWidth={2.5} />
                    </div>
                    <span className="text-xl font-bold tracking-tighter text-white font-display">GPU<span className="text-white/40">cloud</span></span>
                </div>
            </div>

            <div className="flex-1 py-8 px-4 space-y-8 overflow-y-auto">
                <div>
                    <div className="text-[10px] font-mono font-bold text-gray-600 uppercase tracking-widest mb-4 px-2">Platform</div>
                    <nav className="space-y-1">
                        <SidebarItem id="overview" icon={Activity} label="Overview" />
                        <SidebarItem id="clusters" icon={Box} label="Clusters" />
                        <SidebarItem id="agents" icon={Bot} label="Agents" />
                        <SidebarItem id="logs" icon={Clock} label="Usage & Logs" />
                    </nav>
                </div>
                
                <div>
                    <div className="text-[10px] font-mono font-bold text-gray-600 uppercase tracking-widest mb-4 px-2">Configuration</div>
                    <nav className="space-y-1">
                        <SidebarItem id="apikeys" icon={Zap} label="API Keys" />
                        <SidebarItem id="billing" icon={CreditCard} label="Billing" />
                        <SidebarItem id="team" icon={Users} label="Team" />
                    </nav>
                </div>
            </div>

            <div className="p-4 border-t border-gray-800 bg-black">
                <button 
                    onClick={handleSignOut}
                    className="w-full flex items-center gap-3 px-3 py-3 text-gray-500 hover:text-white hover:bg-red-500/20 hover:border-red-500 border border-transparent font-mono text-xs font-bold uppercase transition-colors"
                >
                    <LogOut size={16} /> Sign Out
                </button>
            </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
            {/* Top Bar */}
            <div className="h-[80px] border-b border-gray-800 flex items-center justify-between px-8 bg-black sticky top-0 z-20">
                <div className="flex items-center gap-4 text-gray-400 text-sm font-mono">
                    <span className="opacity-50">CONSOLE</span>
                    <span className="text-gray-700">/</span>
                    <span className="text-white font-bold uppercase">{activeTab}</span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden md:block relative">
                        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                        <input type="text" placeholder="Search resources..." className="bg-dats-gray border border-gray-800 py-2 pl-9 pr-4 text-xs font-mono text-white focus:border-white outline-none w-64 transition-colors" />
                    </div>
                    <div className="flex items-center gap-3 pl-4 border-l border-gray-800">
                        <div className="text-right hidden md:block">
                             <div className="text-xs font-bold text-white">Preview User</div>
                             <div className="text-[10px] text-gray-500 font-mono">user_2x9a...</div>
                        </div>
                        <div className="w-8 h-8 bg-dats-blue flex items-center justify-center text-xs font-bold border border-white text-white">
                            PU
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 p-8 overflow-y-auto bg-black">
                {activeTab === 'overview' && <Overview reqs={reqs} latency={latency} />}
                {activeTab === 'clusters' && <Clusters />}
                {activeTab === 'agents' && <AgentsView />}
                {activeTab === 'logs' && <Logs />}
                {activeTab === 'apikeys' && <ApiKeys />}
                {activeTab === 'billing' && <Billing />}
                {activeTab === 'team' && <Team />}
            </div>
        </div>
    </div>
  );
};

/* --- Sub-Components for Views --- */

const Overview = ({ reqs, latency }: { reqs: number, latency: number }) => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex justify-between items-end mb-8">
            <div>
                <h1 className="font-display font-black text-4xl mb-2">OVERVIEW</h1>
                <p className="font-mono text-gray-400 text-sm">Real-time inference metrics for the last hour.</p>
            </div>
            <button className="bg-dats-blue text-white px-4 py-2 font-mono text-xs font-bold uppercase flex items-center gap-2 hover:bg-white hover:text-black transition-colors border border-transparent hover:border-black">
                <Plus size={14} /> New Deployment
            </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-dats-light border border-gray-800 p-6 sharp-shadow-sm group hover:border-white transition-colors">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-blue-500/10 text-dats-blue border border-dats-blue/20">
                        <Activity size={20} />
                    </div>
                    <span className="text-green-500 text-xs font-mono font-bold">↑ 12%</span>
                </div>
                <div className="text-3xl font-display font-bold mb-1 group-hover:text-dats-blue transition-colors">{reqs.toLocaleString()}</div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Requests / Min</div>
            </div>
            <div className="bg-dats-light border border-gray-800 p-6 sharp-shadow-sm group hover:border-white transition-colors">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        <Zap size={20} />
                    </div>
                    <span className="text-green-500 text-xs font-mono font-bold">- 4ms</span>
                </div>
                <div className="text-3xl font-display font-bold mb-1 group-hover:text-purple-400 transition-colors">{latency}ms</div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Avg Latency (P95)</div>
            </div>
            <div className="bg-dats-light border border-gray-800 p-6 sharp-shadow-sm group hover:border-white transition-colors">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-green-500/10 text-green-500 border border-green-500/20">
                        <Box size={20} />
                    </div>
                    <span className="text-gray-500 text-xs font-mono font-bold">Stable</span>
                </div>
                <div className="text-3xl font-display font-bold mb-1 group-hover:text-green-500 transition-colors">14</div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Active Nodes</div>
            </div>
            <div className="bg-dats-light border border-gray-800 p-6 sharp-shadow-sm group hover:border-white transition-colors">
                <div className="flex justify-between items-start mb-4">
                    <div className="p-2 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                        <CreditCard size={20} />
                    </div>
                    <span className="text-gray-500 text-xs font-mono font-bold">Est.</span>
                </div>
                <div className="text-3xl font-display font-bold mb-1 group-hover:text-yellow-500 transition-colors">$42.80</div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Current Bill</div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-black border border-gray-800 p-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold font-display text-lg">Inference Volume</h3>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 bg-white text-black text-xs font-mono font-bold border border-white">1H</button>
                        <button className="px-3 py-1 bg-transparent text-gray-500 text-xs font-mono font-bold hover:text-white border border-transparent hover:border-gray-700">24H</button>
                    </div>
                </div>
                {/* Fake Graph Visual */}
                <div className="h-64 flex items-end justify-between gap-1 px-2 border-b border-gray-800 relative">
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                        {[1,2,3,4].map(i => <div key={i} className="w-full h-px bg-gray-900 border-t border-gray-800 border-dashed"></div>)}
                    </div>
                    {Array.from({length: 40}).map((_, i) => (
                        <div 
                        key={i} 
                        className="w-full bg-dats-blue/80 hover:bg-white transition-colors relative group" 
                        style={{ height: `${Math.max(20, Math.random() * 80 + (i > 30 ? 10 : 0))}%` }}
                        >
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-white text-black text-[10px] font-bold px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                {Math.floor(Math.random() * 500)} reqs
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-black border border-gray-800 p-6">
                <h3 className="font-bold font-display text-lg mb-6">Health Check</h3>
                <div className="space-y-4">
                    {[
                        { name: "llama-3.2-prod", status: "Healthy", type: "Replica Set" },
                        { name: "flux-gen-v1", status: "Scaling", type: "Serverless" },
                        { name: "whisper-audio", status: "Healthy", type: "Replica Set" },
                        { name: "dev-test-cluster", status: "Stopped", type: "Dedicated" },
                    ].map((dep, i) => (
                        <div key={i} className="flex items-center justify-between p-3 border border-gray-800 hover:border-white transition-colors bg-dats-light group">
                            <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full ${dep.status === 'Healthy' ? 'bg-green-500' : dep.status === 'Scaling' ? 'bg-yellow-500 animate-pulse' : 'bg-gray-500'}`}></div>
                                <div>
                                    <div className="text-xs font-bold font-mono text-white group-hover:text-dats-blue transition-colors">{dep.name}</div>
                                    <div className="text-[10px] text-gray-500 uppercase">{dep.type}</div>
                                </div>
                            </div>
                            <MoreHorizontal size={14} className="text-gray-500 cursor-pointer hover:text-white" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const Clusters = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex justify-between items-end mb-8">
            <div>
                <h1 className="font-display font-black text-4xl mb-2">CLUSTERS</h1>
                <p className="font-mono text-gray-400 text-sm">Manage your deployed inference endpoints.</p>
            </div>
            <button className="bg-dats-blue text-white px-4 py-2 font-mono text-xs font-bold uppercase flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                <Plus size={14} /> Deploy Cluster
            </button>
        </div>
        
        <div className="border border-white bg-dats-light overflow-hidden">
            <table className="w-full text-left font-mono text-sm">
                <thead className="bg-black border-b border-white text-gray-500 text-xs uppercase">
                    <tr>
                        <th className="p-4 font-normal">Name</th>
                        <th className="p-4 font-normal">Region</th>
                        <th className="p-4 font-normal">Hardware</th>
                        <th className="p-4 font-normal">Status</th>
                        <th className="p-4 font-normal">Replicas</th>
                        <th className="p-4 font-normal"></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                    {[
                        { name: "llama-3.2-prod", region: "us-east-1", hw: "RTX 5090", status: "active", rep: "2/2" },
                        { name: "flux-gen-v1", region: "eu-west-1", hw: "RTX 4090", status: "scaling", rep: "1/5" },
                        { name: "whisper-audio", region: "ap-northeast", hw: "RTX 3090", status: "active", rep: "1/1" },
                        { name: "mistral-7b-dev", region: "us-west-2", hw: "RTX 4090", status: "stopped", rep: "0/1" }
                    ].map((row, i) => (
                        <tr key={i} className="hover:bg-white/5 transition-colors">
                            <td className="p-4 font-bold text-white">{row.name}</td>
                            <td className="p-4 text-gray-400">{row.region}</td>
                            <td className="p-4 text-gray-400">{row.hw}</td>
                            <td className="p-4">
                                <span className={`flex items-center gap-2 text-xs uppercase font-bold
                                    ${row.status === 'active' ? 'text-green-500' : 
                                      row.status === 'scaling' ? 'text-yellow-500' : 'text-gray-500'}`
                                }>
                                    <span className={`w-1.5 h-1.5 rounded-full ${
                                        row.status === 'active' ? 'bg-green-500' : 
                                        row.status === 'scaling' ? 'bg-yellow-500 animate-pulse' : 'bg-gray-500'}`
                                    }></span>
                                    {row.status}
                                </span>
                            </td>
                            <td className="p-4 text-gray-400">{row.rep}</td>
                            <td className="p-4 text-right">
                                <button className="text-gray-500 hover:text-white"><MoreHorizontal size={16} /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const AgentsView = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex justify-between items-end mb-8">
            <div>
                <h1 className="font-display font-black text-4xl mb-2">AGENTS</h1>
                <p className="font-mono text-gray-400 text-sm">Deploy and monitor your autonomous worker fleet.</p>
            </div>
            <button className="bg-dats-blue text-white px-4 py-2 font-mono text-xs font-bold uppercase flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                <Plus size={14} /> New Agent
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
             {[
                { label: 'Active Agents', value: '12', icon: Bot, color: 'text-dats-blue' },
                { label: 'Tasks Completed', value: '1,492', icon: CheckCircle, color: 'text-green-500' },
                { label: 'Compute Used', value: '42h 12m', icon: Zap, color: 'text-yellow-500' }
             ].map((stat, i) => (
                <div key={i} className="bg-dats-light border border-gray-800 p-6 flex items-center gap-4">
                    <div className={`p-3 bg-black border border-gray-800 ${stat.color}`}>
                        <stat.icon size={24} />
                    </div>
                    <div>
                        <div className="text-2xl font-display font-bold text-white">{stat.value}</div>
                        <div className="text-xs font-mono text-gray-500 uppercase">{stat.label}</div>
                    </div>
                </div>
             ))}
        </div>
        
        <div className="border border-white bg-dats-light overflow-hidden">
            <table className="w-full text-left font-mono text-sm">
                <thead className="bg-black border-b border-white text-gray-500 text-xs uppercase">
                    <tr>
                        <th className="p-4 font-normal">Agent Name</th>
                        <th className="p-4 font-normal">Type</th>
                        <th className="p-4 font-normal">Model</th>
                        <th className="p-4 font-normal">Status</th>
                        <th className="p-4 font-normal">Last Active</th>
                        <th className="p-4 font-normal"></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                    {[
                        { name: "Support_Voice_V1", type: "Voice", icon: Mic, model: "llama-3.2-3b-voice", status: "Listening", active: "Now" },
                        { name: "Market_Analyst_X", type: "Automation", icon: Workflow, model: "gpt-4-turbo", status: "Scraping", active: "2m ago" },
                        { name: "Backend_Refactor", type: "Coding", icon: Code2, model: "claude-3-5-sonnet", status: "Idle", active: "1h ago" },
                        { name: "Lead_Qualifier", type: "Voice", icon: Mic, model: "llama-3.2-3b-voice", status: "Stopped", active: "1d ago" },
                        { name: "Daily_Report", type: "Automation", icon: Workflow, model: "mistral-large", status: "Scheduled", active: "---" }
                    ].map((row, i) => (
                        <tr key={i} className="hover:bg-white/5 transition-colors group">
                            <td className="p-4 font-bold text-white flex items-center gap-3">
                                <div className="w-8 h-8 bg-black border border-gray-700 flex items-center justify-center text-gray-400 group-hover:text-dats-blue group-hover:border-dats-blue transition-colors">
                                    <row.icon size={14} />
                                </div>
                                {row.name}
                            </td>
                            <td className="p-4 text-gray-400">{row.type}</td>
                            <td className="p-4 text-gray-400 text-xs font-mono">
                                <span className="bg-black/50 px-2 py-1 rounded border border-gray-800">{row.model}</span>
                            </td>
                            <td className="p-4">
                                <span className={`flex items-center gap-2 text-xs uppercase font-bold
                                    ${row.status === 'Listening' || row.status === 'Scraping' ? 'text-green-500' : 
                                      row.status === 'Idle' || row.status === 'Scheduled' ? 'text-yellow-500' : 'text-gray-500'}`
                                }>
                                    <span className={`w-1.5 h-1.5 rounded-full ${
                                        row.status === 'Listening' || row.status === 'Scraping' ? 'bg-green-500 animate-pulse' : 
                                        row.status === 'Idle' || row.status === 'Scheduled' ? 'bg-yellow-500' : 'bg-gray-500'}`
                                    }></span>
                                    {row.status}
                                </span>
                            </td>
                            <td className="p-4 text-gray-400">{row.active}</td>
                            <td className="p-4 text-right">
                                <button className="text-gray-500 hover:text-white mr-4"><Play size={14} /></button>
                                <button className="text-gray-500 hover:text-white"><MoreHorizontal size={16} /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const Logs = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex justify-between items-end mb-8">
            <div>
                <h1 className="font-display font-black text-4xl mb-2">USAGE & LOGS</h1>
                <p className="font-mono text-gray-400 text-sm">Trace individual requests and latency bottlenecks.</p>
            </div>
             <div className="flex gap-2">
                <button className="bg-black border border-gray-700 text-white px-3 py-2 font-mono text-xs font-bold uppercase hover:bg-white hover:text-black transition-colors">
                    Export CSV
                </button>
                 <button className="bg-dats-blue text-white px-3 py-2 font-mono text-xs font-bold uppercase flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                    <RefreshCw size={14} /> Refresh
                </button>
            </div>
        </div>

        <div className="bg-black border border-gray-800 p-4 font-mono text-xs mb-8 flex gap-4 overflow-x-auto">
            <div className="flex items-center gap-2 text-gray-400 border border-gray-700 px-3 py-1 rounded-full">
                <span>Status: 200</span> <XButton />
            </div>
             <div className="flex items-center gap-2 text-gray-400 border border-gray-700 px-3 py-1 rounded-full">
                <span>Model: Llama-3.2</span> <XButton />
            </div>
             <div className="flex items-center gap-2 text-gray-400 border border-gray-700 px-3 py-1 rounded-full">
                <span>Latency &gt; 50ms</span> <XButton />
            </div>
        </div>

        <div className="border border-white bg-dats-light font-mono text-xs">
             <div className="grid grid-cols-12 bg-black border-b border-gray-800 p-3 text-gray-500 font-bold uppercase">
                <div className="col-span-2">Time</div>
                <div className="col-span-2">ID</div>
                <div className="col-span-2">Model</div>
                <div className="col-span-1">Status</div>
                <div className="col-span-1">Latency</div>
                <div className="col-span-1">Tokens</div>
                <div className="col-span-2">Cost</div>
                <div className="col-span-1"></div>
             </div>
             {[...Array(8)].map((_, i) => (
                <div key={i} className="grid grid-cols-12 p-3 border-b border-gray-800 hover:bg-white/5 transition-colors items-center">
                    <div className="col-span-2 text-gray-400">2026-10-15 14:2{i}:{10+i}</div>
                    <div className="col-span-2 text-dats-blue">req_{Math.random().toString(36).substr(2, 6)}</div>
                    <div className="col-span-2 text-white">llama-3.2-3b</div>
                    <div className="col-span-1"><span className="text-green-500 bg-green-500/10 px-1">200 OK</span></div>
                    <div className="col-span-1 text-gray-300">{20 + Math.floor(Math.random() * 50)}ms</div>
                    <div className="col-span-1 text-gray-300">{100 + Math.floor(Math.random() * 400)}</div>
                    <div className="col-span-2 text-gray-400">$0.000{1 + Math.floor(Math.random() * 4)}</div>
                    <div className="col-span-1 text-right"><MoreHorizontal size={14} className="ml-auto cursor-pointer" /></div>
                </div>
             ))}
        </div>
    </div>
);

const ApiKeys = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex justify-between items-end mb-8">
            <div>
                <h1 className="font-display font-black text-4xl mb-2">API KEYS</h1>
                <p className="font-mono text-gray-400 text-sm">Manage access tokens for your applications.</p>
            </div>
            <button className="bg-dats-blue text-white px-4 py-2 font-mono text-xs font-bold uppercase flex items-center gap-2 hover:bg-white hover:text-black transition-colors">
                <Plus size={14} /> Create New Key
            </button>
        </div>

        <div className="bg-yellow-900/10 border border-yellow-600/50 p-4 mb-8 flex items-start gap-4">
            <AlertTriangle className="text-yellow-600 shrink-0" />
            <div>
                <h4 className="font-bold text-yellow-600 text-sm mb-1">Security Notice</h4>
                <p className="text-yellow-600/80 text-xs leading-relaxed">Do not share your API keys in client-side code (browsers, apps). Rotate your keys immediately if you suspect a leak.</p>
            </div>
        </div>

        <div className="space-y-4">
            {[
                { name: "Production Key", key: "sk-prod_8x99...4k21", created: "2 days ago", last: "Just now" },
                { name: "Development", key: "sk-dev_9a11...992x", created: "1 month ago", last: "2 hours ago" },
                { name: "Test Runner", key: "sk-test_11xx...00aa", created: "3 months ago", last: "1 week ago" }
            ].map((key, i) => (
                <div key={i} className="border border-white bg-dats-light p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-bold text-white">{key.name}</h3>
                            <span className="bg-green-500/10 text-green-500 text-[10px] uppercase font-bold px-2 py-0.5 border border-green-500/20">Active</span>
                        </div>
                        <div className="font-mono text-gray-500 text-sm flex items-center gap-2">
                            {key.key} <Copy size={12} className="cursor-pointer hover:text-white" />
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-8">
                        <div className="text-right">
                            <div className="text-[10px] text-gray-500 uppercase font-bold">Created</div>
                            <div className="text-sm text-gray-300">{key.created}</div>
                        </div>
                         <div className="text-right">
                            <div className="text-[10px] text-gray-500 uppercase font-bold">Last Used</div>
                            <div className="text-sm text-gray-300">{key.last}</div>
                        </div>
                        <button className="p-2 text-gray-500 hover:text-red-500 transition-colors border border-transparent hover:border-red-500 bg-black">
                            <Trash size={16} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const Billing = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <h1 className="font-display font-black text-4xl mb-2">BILLING</h1>
        <p className="font-mono text-gray-400 text-sm mb-8">Manage invoices and payment methods.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="border border-white bg-dats-light p-8">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <div className="text-xs font-mono text-gray-500 uppercase mb-1">Current Balance</div>
                        <div className="text-4xl font-display font-bold text-white">$42.80</div>
                    </div>
                    <div className="bg-gray-900 text-gray-400 px-3 py-1 text-xs font-mono">
                        Billing Period: Oct 1 - Oct 31
                    </div>
                </div>
                <div className="w-full bg-gray-800 h-2 mb-4">
                    <div className="bg-dats-blue h-full" style={{width: '24%'}}></div>
                </div>
                <p className="text-xs text-gray-400 font-mono">You have used 24% of your monthly budget alert threshold ($200.00).</p>
            </div>

            <div className="border border-white bg-dats-light p-8 flex flex-col justify-between">
                <div>
                    <div className="text-xs font-mono text-gray-500 uppercase mb-4">Payment Method</div>
                    <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                            <div className="w-6 h-4 bg-blue-600 rounded-sm"></div>
                        </div>
                        <div>
                            <div className="font-bold text-white">Visa ending in 4242</div>
                            <div className="text-xs text-gray-400">Expires 12/28</div>
                        </div>
                    </div>
                </div>
                <button className="text-left text-xs font-mono font-bold text-dats-blue hover:text-white transition-colors uppercase mt-4">
                    + Add New Method
                </button>
            </div>
        </div>

        <h3 className="font-bold font-display text-xl mb-6">Invoice History</h3>
        <div className="border border-gray-800 bg-black">
            {[
                { date: "Oct 01, 2026", amount: "$124.50", status: "Paid", pdf: "invoice_oct.pdf" },
                { date: "Sep 01, 2026", amount: "$98.20", status: "Paid", pdf: "invoice_sep.pdf" },
                { date: "Aug 01, 2026", amount: "$45.00", status: "Paid", pdf: "invoice_aug.pdf" },
            ].map((inv, i) => (
                <div key={i} className="flex items-center justify-between p-4 border-b border-gray-800 last:border-0 hover:bg-white/5 transition-colors">
                    <div className="flex items-center gap-6">
                        <span className="font-mono text-sm text-gray-300">{inv.date}</span>
                        <span className="font-bold text-white w-20">{inv.amount}</span>
                        <span className="bg-green-500/10 text-green-500 text-[10px] font-bold px-2 py-0.5 border border-green-500/20 uppercase">{inv.status}</span>
                    </div>
                    <button className="text-xs font-mono text-gray-500 hover:text-white underline">Download PDF</button>
                </div>
            ))}
        </div>
    </div>
);

const Team = () => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex justify-between items-end mb-8">
            <div>
                <h1 className="font-display font-black text-4xl mb-2">TEAM SETTINGS</h1>
                <p className="font-mono text-gray-400 text-sm">Manage access and roles for your organization.</p>
            </div>
            <button className="bg-white text-black px-4 py-2 font-mono text-xs font-bold uppercase flex items-center gap-2 hover:bg-dats-blue hover:text-white transition-colors">
                <Plus size={14} /> Invite Member
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
                { name: "You", email: "user@example.com", role: "Owner", color: "bg-dats-blue" },
                { name: "Sarah Chen", email: "sarah@example.com", role: "Admin", color: "bg-purple-500" },
                { name: "Mike Ross", email: "mike@example.com", role: "Developer", color: "bg-orange-500" },
                { name: "AI Agent", email: "bot_01@gpucloud.xyz", role: "Service Account", color: "bg-gray-600" }
            ].map((member, i) => (
                <div key={i} className="border border-white bg-dats-light p-6 flex flex-col gap-4 group hover:translate-y-[-2px] transition-transform">
                    <div className="flex justify-between items-start">
                        <div className={`w-10 h-10 ${member.color} flex items-center justify-center text-white font-bold text-sm border border-white`}>
                            {member.name.substring(0,2).toUpperCase()}
                        </div>
                        {member.role === 'Owner' && <Shield size={16} className="text-yellow-500" />}
                    </div>
                    <div>
                        <div className="font-bold text-white text-lg">{member.name}</div>
                        <div className="text-sm text-gray-400 font-mono">{member.email}</div>
                    </div>
                    <div className="pt-4 mt-auto border-t border-gray-800 flex justify-between items-center">
                        <span className="text-xs uppercase font-bold text-gray-500">{member.role}</span>
                        <button className="text-gray-600 hover:text-white transition-colors">Manage</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const XButton = () => <div className="cursor-pointer hover:text-white"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>

export default Dashboard;