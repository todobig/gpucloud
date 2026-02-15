import React from 'react';

const ApiRef: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-12 pb-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="font-display font-black text-6xl mb-4">API REFERENCE</h1>
        <p className="font-mono text-gray-400 mb-16">v1.0.4</p>

        <div className="space-y-12">
            
            {/* Endpoint 1 */}
            <div className="border border-white bg-dats-light">
                <div className="border-b border-gray-800 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <span className="bg-green-500 text-black font-bold px-3 py-1 font-mono text-sm">POST</span>
                        <span className="font-mono text-lg text-white">/v1/chat/completions</span>
                    </div>
                    <span className="font-mono text-xs text-gray-500">Create Chat Completion</span>
                </div>
                <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-bold mb-4 font-mono text-sm text-dats-blue">PARAMETERS</h4>
                        <ul className="space-y-4 font-mono text-sm">
                            <li className="border-b border-gray-800 pb-2">
                                <div className="flex justify-between mb-1">
                                    <span className="text-white font-bold">model</span>
                                    <span className="text-gray-500">string</span>
                                </div>
                                <p className="text-gray-400 text-xs">ID of the model to use (e.g., "llama-3.2-3b")</p>
                            </li>
                            <li className="border-b border-gray-800 pb-2">
                                <div className="flex justify-between mb-1">
                                    <span className="text-white font-bold">messages</span>
                                    <span className="text-gray-500">array</span>
                                </div>
                                <p className="text-gray-400 text-xs">A list of messages comprising the conversation so far.</p>
                            </li>
                             <li className="border-b border-gray-800 pb-2">
                                <div className="flex justify-between mb-1">
                                    <span className="text-white font-bold">temperature</span>
                                    <span className="text-gray-500">float</span>
                                </div>
                                <p className="text-gray-400 text-xs">Sampling temperature between 0 and 2.</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                         <h4 className="font-bold mb-4 font-mono text-sm text-dats-blue">RESPONSE</h4>
                         <div className="bg-black p-4 border border-gray-800 text-xs font-mono text-gray-300">
                            <pre>{`{
  "id": "chatcmpl-123",
  "object": "chat.completion",
  "created": 1677652288,
  "model": "llama-3.2-3b",
  "choices": [{
    "index": 0,
    "message": {
      "role": "assistant",
      "content": "Hello world!"
    },
    "finish_reason": "stop"
  }],
  "usage": {
    "prompt_tokens": 9,
    "completion_tokens": 12,
    "total_tokens": 21
  }
}`}</pre>
                         </div>
                    </div>
                </div>
            </div>

            {/* Endpoint 2 */}
            <div className="border border-white bg-dats-light">
                <div className="border-b border-gray-800 p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <span className="bg-blue-500 text-black font-bold px-3 py-1 font-mono text-sm">GET</span>
                        <span className="font-mono text-lg text-white">/v1/models</span>
                    </div>
                    <span className="font-mono text-xs text-gray-500">List Models</span>
                </div>
                <div className="p-6">
                    <p className="text-gray-400 font-mono text-sm mb-4">Lists the currently available models, and provides basic information about each one.</p>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default ApiRef;