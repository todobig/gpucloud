import React from 'react';
import { MessageSquare, Github, Twitter, Users } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-12 pb-24 px-6">
      <div className="max-w-[1400px] mx-auto text-center">
        <h1 className="font-display font-black text-6xl mb-6">COMMUNITY</h1>
        <p className="font-mono text-gray-400 max-w-2xl mx-auto mb-16">
            Join thousands of developers building the next generation of AI apps.
            Share projects, get help, and contribute to the ecosystem.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            <a href="#" className="group bg-dats-light border border-white p-8 flex flex-col items-center hover:bg-white hover:text-black transition-all">
                <div className="w-16 h-16 bg-black border border-white flex items-center justify-center mb-6 group-hover:border-black group-hover:text-white transition-colors">
                    <MessageSquare size={32} />
                </div>
                <h2 className="font-display font-bold text-2xl mb-2">Discord</h2>
                <p className="text-gray-400 text-sm group-hover:text-gray-600 mb-6">Chat with the team and community.</p>
                <span className="font-mono font-bold text-dats-blue text-xs uppercase group-hover:text-black">Join Server &rarr;</span>
            </a>

            <a href="#" className="group bg-dats-light border border-white p-8 flex flex-col items-center hover:bg-white hover:text-black transition-all">
                <div className="w-16 h-16 bg-black border border-white flex items-center justify-center mb-6 group-hover:border-black group-hover:text-white transition-colors">
                    <Github size={32} />
                </div>
                <h2 className="font-display font-bold text-2xl mb-2">GitHub</h2>
                <p className="text-gray-400 text-sm group-hover:text-gray-600 mb-6">Report bugs and request features.</p>
                <span className="font-mono font-bold text-dats-blue text-xs uppercase group-hover:text-black">View Repo &rarr;</span>
            </a>

            <a href="#" className="group bg-dats-light border border-white p-8 flex flex-col items-center hover:bg-white hover:text-black transition-all">
                <div className="w-16 h-16 bg-black border border-white flex items-center justify-center mb-6 group-hover:border-black group-hover:text-white transition-colors">
                    <Twitter size={32} />
                </div>
                <h2 className="font-display font-bold text-2xl mb-2">Twitter</h2>
                <p className="text-gray-400 text-sm group-hover:text-gray-600 mb-6">Latest updates and announcements.</p>
                <span className="font-mono font-bold text-dats-blue text-xs uppercase group-hover:text-black">Follow Us &rarr;</span>
            </a>

        </div>

        <div className="mt-24 border-t border-gray-800 pt-16">
            <h3 className="font-display font-bold text-3xl mb-12">FEATURED PROJECTS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                {[1, 2].map((i) => (
                    <div key={i} className="border border-gray-800 bg-black p-6 flex gap-6 items-start hover:border-dats-blue transition-colors">
                        <div className="w-16 h-16 bg-dats-gray flex-shrink-0"></div>
                        <div>
                            <h4 className="font-bold text-xl mb-2 text-white">Project Nebula</h4>
                            <p className="text-gray-400 text-sm mb-4">An open source agent framework built on GPUcloud's inference API using Llama 3.</p>
                            <div className="flex gap-2">
                                <span className="text-[10px] border border-gray-700 px-2 py-1 text-gray-500">Python</span>
                                <span className="text-[10px] border border-gray-700 px-2 py-1 text-gray-500">Agent</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Community;