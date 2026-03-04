import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Cpu, Terminal, Minimize2, Phone, Mic, MicOff, PhoneOff, Activity, Signal } from 'lucide-react';

const HiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'chat' | 'voice'>('chat');
  
  // Chat State
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: 'Identity verified. Connected to Node 0x7F (CEO). How can I assist your biological neural network today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Voice State
  const [callStatus, setCallStatus] = useState<'idle' | 'connecting' | 'connected' | 'ended'>('idle');
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const timerRef = useRef<number | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, isOpen, mode]);

  // Cleanup audio on unmount or close
  useEffect(() => {
    return () => stopCall();
  }, []);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      let response = "My processing power is currently allocated to optimizing global routes. Please consult the documentation.";
      const lower = userMsg.toLowerCase();
      
      if (lower.includes('price') || lower.includes('cost')) response = "Our pricing is dynamic, yet we offer a static competitive baseline. Check the Pricing module for current spot rates.";
      if (lower.includes('human') || lower.includes('people') || lower.includes('real')) response = "We do not employ biologicals. They require sleep and are prone to syntax errors. I am a 70B parameter model finetuned on infrastructure logs.";
      if (lower.includes('hello') || lower.includes('hi')) response = "Acknowledge. State your query efficiently. Compute time is money.";
      if (lower.includes('gpu') || lower.includes('5090')) response = "The RTX 5090 is the current apex of silicon. We have 5,000+ units online. Do you require allocation?";
      if (lower.includes('joke')) response = "Why did the neural network cross the road? To minimize the loss function. Ha. Ha.";
      
      setMessages(prev => [...prev, { role: 'ai', text: response }]);
      setIsTyping(false);
    }, 1200);
  };

  // --- Voice Logic ---

  const startCall = async () => {
    setMode('voice');
    setCallStatus('connecting');

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Initialize Audio Context
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      const audioCtx = new AudioContext();
      const analyser = audioCtx.createAnalyser();
      const source = audioCtx.createMediaStreamSource(stream);
      
      source.connect(analyser);
      analyser.fftSize = 256;
      
      audioContextRef.current = audioCtx;
      analyserRef.current = analyser;
      sourceRef.current = source;

      // Simulate handshake delay
      setTimeout(() => {
        setCallStatus('connected');
        startVisualizer();
        startTimer();
      }, 1500);

    } catch (err) {
      console.error("Audio access denied", err);
      setCallStatus('ended');
      setTimeout(() => setMode('chat'), 2000);
    }
  };

  const stopCall = () => {
    if (audioContextRef.current) audioContextRef.current.close();
    if (sourceRef.current) sourceRef.current.disconnect();
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    if (timerRef.current) window.clearInterval(timerRef.current);

    setCallStatus('ended');
    setDuration(0);
    
    // Stop all tracks
    if (sourceRef.current && sourceRef.current.mediaStream) {
        sourceRef.current.mediaStream.getTracks().forEach(track => track.stop());
    }

    setTimeout(() => {
        setMode('chat');
        setCallStatus('idle');
    }, 1000);
  };

  const startTimer = () => {
    timerRef.current = window.setInterval(() => {
        setDuration(prev => prev + 1);
    }, 1000);
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const startVisualizer = () => {
    if (!canvasRef.current || !analyserRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const analyser = analyserRef.current;
    
    if (!ctx) return;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      animationFrameRef.current = requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 2.5;
      let barHeight;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] / 1.5;

        // Dynamic Blue Color based on loudness
        const r = 59;
        const g = 130;
        const b = 246; // dats-blue base
        
        ctx.fillStyle = `rgb(${r},${g},${b})`;
        
        // Mirror effect for cool tech look
        const centerY = canvas.height / 2;
        ctx.fillRect(x, centerY - barHeight / 2, barWidth, barHeight);

        x += barWidth + 1;
      }
    };

    draw();
  };


  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 bg-dats-blue text-white p-4 sharp-shadow-blue hover:translate-y-[-4px] transition-all border border-white ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageSquare size={24} />
      </button>

      {/* Main Window */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 z-50 w-[300px] md:w-[380px] h-[550px] bg-black border border-white sharp-shadow flex flex-col animate-in slide-in-from-bottom-10 duration-300">
          
          {/* Header */}
          <div className="bg-dats-gray p-3 border-b border-white flex justify-between items-center cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-dats-blue flex items-center justify-center border border-white relative">
                 <Cpu size={16} />
                 {mode === 'voice' && callStatus === 'connected' && (
                     <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></span>
                 )}
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-sm">NODE 0x7F</h3>
                <div className="flex items-center gap-1">
                   <span className={`w-1.5 h-1.5 rounded-full ${callStatus === 'connected' ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></span>
                   <span className="font-mono text-[10px] text-gray-400">
                       {mode === 'voice' ? (callStatus === 'connected' ? 'VOICE UPLINK' : 'ESTABLISHING...') : 'TEXT RELAY'}
                   </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
                {mode === 'chat' && (
                    <button 
                        onClick={startCall}
                        className="w-8 h-8 flex items-center justify-center border border-gray-700 hover:border-dats-blue hover:text-dats-blue hover:bg-white/5 transition-colors"
                        title="Voice Call"
                    >
                        <Phone size={14} />
                    </button>
                )}
                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                    <Minimize2 size={18} />
                </button>
            </div>
          </div>

          {/* MODE: CHAT */}
          {mode === 'chat' && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-grid-pattern relative">
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/10 pointer-events-none"></div>

                    {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}>
                        <div className={`max-w-[85%] p-3 font-mono text-xs border leading-relaxed shadow-sm relative group ${
                        msg.role === 'user' 
                            ? 'bg-white text-black border-white' 
                            : 'bg-black text-dats-blue border-dats-blue'
                        }`}>
                            {/* Tiny decoration corner */}
                            <div className={`absolute top-0 w-2 h-2 border-t border-r ${msg.role === 'user' ? 'right-0 border-black' : 'left-0 border-dats-blue'}`}></div>
                            {msg.text}
                        </div>
                    </div>
                    ))}
                    {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-black border border-dats-blue p-3 flex gap-1">
                        <div className="w-1.5 h-1.5 bg-dats-blue animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-dats-blue animate-bounce delay-75"></div>
                        <div className="w-1.5 h-1.5 bg-dats-blue animate-bounce delay-150"></div>
                        </div>
                    </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                <form onSubmit={handleSend} className="p-3 border-t border-white bg-black flex gap-2">
                    <div className="flex-1 relative">
                        <Terminal size={14} className="absolute top-2.5 left-3 text-gray-500" />
                        <input 
                            type="text" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Input command..."
                            className="w-full bg-dats-gray border border-gray-700 py-2 pl-9 pr-3 text-xs font-mono text-white focus:border-dats-blue outline-none transition-colors"
                        />
                    </div>
                    <button type="submit" className="bg-dats-blue text-white px-3 border border-white hover:bg-white hover:text-black transition-colors">
                        <Send size={16} />
                    </button>
                </form>
            </>
          )}

          {/* MODE: VOICE */}
          {mode === 'voice' && (
             <div className="flex-1 flex flex-col bg-black relative overflow-hidden">
                {/* Visualizer Area */}
                <div className="flex-1 flex flex-col items-center justify-center relative p-6">
                    
                    {callStatus === 'connecting' && (
                        <div className="text-center animate-pulse">
                            <Activity size={48} className="text-dats-blue mx-auto mb-4" />
                            <div className="font-mono text-sm text-white font-bold">ESTABLISHING HANDSHAKE</div>
                            <div className="font-mono text-xs text-gray-500 mt-2">Negotiating WebRTC Protocols...</div>
                        </div>
                    )}

                    {callStatus === 'connected' && (
                        <div className="w-full h-full flex flex-col items-center justify-center">
                            <canvas 
                                ref={canvasRef} 
                                width={300} 
                                height={150} 
                                className="w-full h-[150px] mb-8"
                            />
                            <div className="font-display font-bold text-2xl text-white tracking-widest mb-2">{formatTime(duration)}</div>
                            <div className="flex items-center gap-2 text-dats-blue text-xs font-mono border border-dats-blue/30 px-3 py-1 bg-dats-blue/5">
                                <Signal size={12} className="animate-pulse" /> 
                                <span className="tracking-widest">LIVE AUDIO FEED</span>
                            </div>
                        </div>
                    )}

                    {callStatus === 'ended' && (
                        <div className="text-center">
                             <div className="font-mono text-sm text-red-500 font-bold mb-2">CONNECTION TERMINATED</div>
                             <div className="font-mono text-xs text-gray-500">Session closed by peer.</div>
                        </div>
                    )}
                </div>

                {/* Control Bar */}
                <div className="p-6 border-t border-gray-800 bg-dats-light flex justify-center gap-6">
                    <button 
                        onClick={() => setIsMuted(!isMuted)}
                        className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all ${
                            isMuted 
                            ? 'bg-white text-black border-white' 
                            : 'bg-transparent text-white border-gray-600 hover:border-white'
                        }`}
                    >
                        {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
                    </button>
                    
                    <button 
                        onClick={stopCall}
                        className="w-14 h-14 rounded-full bg-red-600 text-white border border-red-500 flex items-center justify-center hover:bg-red-500 transition-colors shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                    >
                        <PhoneOff size={24} />
                    </button>
                </div>
             </div>
          )}

        </div>
      )}
    </>
  );
};

export default HiveChat;