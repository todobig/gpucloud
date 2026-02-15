import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consented = localStorage.getItem('gpucloud-cookie-consent');
        if (!consented) {
            // Small delay for better UX on load
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('gpucloud-cookie-consent', 'true');
        setIsVisible(false);
    };

    const handleDecline = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
            <div className="max-w-[1400px] mx-auto bg-black border border-white sharp-shadow p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                    <h4 className="font-display font-bold text-white mb-1">COOKIE PREFERENCES</h4>
                    <p className="font-mono text-xs text-gray-400 leading-relaxed max-w-2xl">
                        We use cookies to analyze traffic, improve latency routing, and ensure the security of our inference API. 
                        We do not sell your data to third parties. <span className="text-white underline cursor-pointer hover:text-dats-blue">Read our Privacy Policy</span>.
                    </p>
                </div>
                <div className="flex gap-4 w-full md:w-auto">
                     <button 
                        onClick={handleDecline} 
                        className="flex-1 md:flex-none border border-gray-700 text-gray-400 px-6 py-3 font-mono text-xs font-bold uppercase hover:border-white hover:text-white transition-colors"
                     >
                        Decline
                     </button>
                     <button 
                        onClick={handleAccept} 
                        className="flex-1 md:flex-none bg-dats-blue text-white px-8 py-3 font-mono text-xs font-bold uppercase hover:bg-white hover:text-black transition-colors"
                     >
                        Accept All
                     </button>
                </div>
            </div>
        </div>
    );
};