import React from 'react';
import { Cpu, AudioWaveform, ScanEye } from 'lucide-react';

const Models: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-12 pb-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="font-display font-black text-6xl mb-4 text-white">SUPPORTED MODELS</h1>
        <p className="font-mono text-gray-400 max-w-2xl mb-16">
          Our optimized inference engine supports the latest state-of-the-art open source models. 
          Deploy instantly on RTX 5090 hardware.
        </p>

        <div className="grid grid-cols-1 gap-12">
            
            {/* LLMs Section */}
            <div className="border border-white p-8 bg-dats-light">
                <div className="flex items-center gap-4 mb-8">
                    <Cpu size={32} className="text-dats-blue" />
                    <h2 className="font-display font-bold text-3xl">TINY LLMs</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { name: "Qwen 3.5 Instruct", size: "0.8B / 2B / 4B / 9B", type: "Text Gen", desc: "Latest compact Qwen family for multilingual reasoning." },
                        { name: "Llama 3.2 Instruct", size: "1B / 3B", type: "Text Gen", desc: "Fast edge-ready instruction models for local serving." },
                        { name: "Phi-4 Mini", size: "3.8B", type: "Text Gen", desc: "Strong compact model for coding and agent workflows." },
                        { name: "Gemma 3", size: "1B / 4B / 8B", type: "Text Gen", desc: "Efficient open family tuned for modern edge workloads." },
                        { name: "SmolLM3", size: "3B", type: "Text Gen", desc: "Tiny footprint model optimized for low-latency tasks." },
                        { name: "Mistral 7B Instruct", size: "7B", type: "Text Gen", desc: "Reliable 7B-class performance on consumer GPUs." }
                    ].map(model => (
                        <div key={model.name} className="bg-black border border-gray-800 p-6 hover:border-dats-blue transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-white">{model.name}</h3>
                                <span className="text-xs font-mono text-dats-blue border border-dats-blue px-2 py-0.5">{model.size}</span>
                            </div>
                            <p className="text-gray-400 text-sm mb-4">{model.desc}</p>
                            <span className="text-xs text-gray-600 font-mono uppercase">{model.type}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Audio Section */}
            <div className="border border-white p-8 bg-dats-light">
                <div className="flex items-center gap-4 mb-8">
                    <AudioWaveform size={32} className="text-dats-blue" />
                    <h2 className="font-display font-bold text-3xl">OPEN-SOURCE ASR + TTS</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { name: "Qwen3-ASR", size: "0.6B / 1.7B", type: "ASR", desc: "Latest multilingual ASR models optimized for local GPUs." },
                        { name: "Parakeet-TDT v3", size: "0.6B", type: "ASR", desc: "High-throughput transcription with low VRAM requirements." },
                        { name: "Whisper Large-v3 Turbo", size: "809M", type: "ASR", desc: "Accurate open-source transcription with fast inference." },
                        { name: "Qwen3-TTS", size: "0.6B / 1.7B", type: "TTS", desc: "Modern expressive TTS stack for real-time generation." },
                        { name: "Kokoro", size: "82M", type: "TTS", desc: "Ultra-lightweight real-time synthesis for edge deployment." },
                        { name: "F5-TTS", size: "~1B", type: "TTS", desc: "Natural speech generation and voice adaptation on consumer GPUs." }
                    ].map(model => (
                        <div key={model.name} className="bg-black border border-gray-800 p-6 hover:border-dats-blue transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-white">{model.name}</h3>
                                <span className="text-xs font-mono text-dats-blue border border-dats-blue px-2 py-0.5">{model.size}</span>
                            </div>
                            <p className="text-gray-400 text-sm mb-4">{model.desc}</p>
                            <span className="text-xs text-gray-600 font-mono uppercase">{model.type}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Vision Section */}
            <div className="border border-white p-8 bg-dats-light">
                <div className="flex items-center gap-4 mb-8">
                    <ScanEye size={32} className="text-dats-blue" />
                    <h2 className="font-display font-bold text-3xl">VISION</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { name: "Flux 1.1 Pro", size: "12B", type: "Image Gen", desc: "Next-gen image synthesis." },
                        { name: "Moondream2", size: "1.86B", type: "VLM", desc: "Tiny vision language model." },
                        { name: "Llava 1.6", size: "7B / 13B", type: "VLM", desc: "Visual understanding." },
                        { name: "YOLOv10", size: "Nano/Small", type: "Detection", desc: "Real-time object detection." },
                        { name: "Depth Anything", size: "Small", type: "Depth", desc: "Monocular depth estimation." }
                    ].map(model => (
                        <div key={model.name} className="bg-black border border-gray-800 p-6 hover:border-dats-blue transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-bold text-white">{model.name}</h3>
                                <span className="text-xs font-mono text-dats-blue border border-dats-blue px-2 py-0.5">{model.size}</span>
                            </div>
                            <p className="text-gray-400 text-sm mb-4">{model.desc}</p>
                            <span className="text-xs text-gray-600 font-mono uppercase">{model.type}</span>
                        </div>
                    ))}
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Models;
