import React from 'react';
import { MessageSquare } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    'Hello ABSIM Automotive, I would like to inquire about booking a vehicle care service.'
  )}`;

  return (
    <aside aria-label="Quick WhatsApp Contact" className="fixed bottom-5 right-5 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-2.5 bg-[#14171D]/95 backdrop-blur-md border border-[#8E1A27]/80 text-white hover:text-white hover:border-[#8E1A27] rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 group shadow-[#6B111A]/30"
        aria-label="Direct WhatsApp Chat with ABSIM Automotive"
      >
        <div className="w-7 h-7 rounded-full bg-[#7A1420] text-white flex items-center justify-center shrink-0 shadow-inner">
          <MessageSquare className="w-3.5 h-3.5 fill-current" />
        </div>
        <span className="hidden sm:inline text-xs font-bold tracking-wider uppercase pr-1 text-white">
          WhatsApp Direct
        </span>
      </a>
    </aside>
  );
};
