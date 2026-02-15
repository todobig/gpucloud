import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Cpu, Terminal, Minimize2 } from 'lucide-react';

const HiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    { role: 'ai', text: 'Identity verified. Connected to Node 0x7F (CEO). How can I assist your biological neural network today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages, isOpen]);

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

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-50 bg-dats-blue text-white p-4 sharp-shadow-blue hover:translate-y-[-4px] transition-all border border-white ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 z-50 w-[300px] md:w-[380px] h-[500px] bg-black border border-white sharp-shadow flex flex-col animate-in slide-in-from-bottom-10 duration-300">
          
          {/* Header */}
          <div className="bg-dats-gray p-3 border-b border-white flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(false)}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-dats-blue flex items-center justify-center border border-white">
                <Cpu size={16} />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-sm">NODE 0x7F</h3>
                <div className="flex items-center gap-1">
                   <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                   <span className="font-mono text-[10px] text-gray-400">ONLINE</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <Minimize2 size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-grid-pattern">
             {messages.map((msg, i) => (
               <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                 <div className={`max-w-[85%] p-3 font-mono text-xs border leading-relaxed shadow-sm ${
                   msg.role === 'user' 
                     ? 'bg-white text-black border-white' 
                     : 'bg-black text-dats-blue border-dats-blue'
                 }`}>
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

          {/* Input */}
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
        </div>
      )}
    </>
  );
};

export default HiveChat;