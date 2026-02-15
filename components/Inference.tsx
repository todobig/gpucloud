import React, { useState } from 'react';
import { Terminal, Code, Zap } from 'lucide-react';

const Inference: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-12 pb-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="font-display font-black text-6xl mb-4 text-white">INFERENCE API</h1>
        <p className="font-mono text-gray-400 max-w-2xl mb-16">
          A unified interface for all models. OpenAI-compatible endpoints for text generation, 
          plus specialized endpoints for audio and vision.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <h3 className="font-display font-bold text-2xl mb-6 flex items-center gap-2">
                    <Terminal className="text-dats-blue" /> Standard Endpoint
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                    Drop-in replacement for existing OpenAI SDKs. Just change the base URL and API key.
                </p>
                
                <div className="bg-dats-gray border border-white p-6 sharp-shadow font-mono text-sm overflow-x-auto">
                    <div className="flex gap-2 mb-4 border-b border-gray-700 pb-2">
                         <span className="text-green-500">POST</span>
                         <span className="text-white">/v1/chat/completions</span>
                    </div>
                    <pre className="text-gray-300">
{`curl https://api.gpucloud.xyz/v1/chat/completions \\
  -H "Authorization: Bearer $API_KEY" \\
  -d '{
    "model": "llama-3.2-3b",
    "messages": [
      {"role": "user", "content": "Hello!"}
    ]
  }'`}
                    </pre>
                </div>
            </div>

            <div>
                <h3 className="font-display font-bold text-2xl mb-6 flex items-center gap-2">
                    <Zap className="text-dats-blue" /> WebSocket Streaming
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                    For ultra-low latency audio/voice applications, use our bidirectional WebSocket API.
                </p>
                
                <div className="bg-dats-gray border border-white p-6 sharp-shadow font-mono text-sm overflow-x-auto">
                    <div className="flex gap-2 mb-4 border-b border-gray-700 pb-2">
                         <span className="text-yellow-500">WSS</span>
                         <span className="text-white">/v1/realtime</span>
                    </div>
                     <pre className="text-gray-300">
{`const ws = new WebSocket('wss://api.gpucloud.xyz/v1/realtime');

ws.onopen = () => {
  ws.send(JSON.stringify({
    type: 'audio_input',
    data: base64Audio
  }));
};`}
                    </pre>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Inference;