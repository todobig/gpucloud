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
                        { name: "Llama 3.2", size: "1B / 3B", type: "Text Gen", desc: "Highly efficient edge model." },
                        { name: "Qwen 2.5", size: "0.5B - 7B", type: "Text Gen", desc: "Strong reasoning capabilities." },
                        { name: "Phi-3.5", size: "3.8B", type: "Text Gen", desc: "Microsoft's high-perf compact model." },
                        { name: "Gemma 2", size: "2B", type: "Text Gen", desc: "Google's lightweight open model." },
                        { name: "SmolLM2", size: "135M - 1.7B", type: "Text Gen", desc: "Extremely fast execution." },
                        { name: "Mistral v0.3", size: "7B", type: "Text Gen", desc: "Industry standard for 7B class." }
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
                    <h2 className="font-display font-bold text-3xl">AUDIO & SPEECH</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { name: "Kokoro v0.19", size: "82M", type: "TTS", desc: "High quality real-time synthesis." },
                        { name: "Supertonic-v1", size: "Unknown", type: "Audio Gen", desc: "Music and sfx generation." },
                        { name: "Whisper v3", size: "Large", type: "ASR", desc: "State of the art transcription." },
                        { name: "F5-TTS", size: "Flow", type: "Voice Clone", desc: "Instant voice cloning." },
                        { name: "Reverb", size: "Distill", type: "Denoise", desc: "Audio cleanup and enhancement." }
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