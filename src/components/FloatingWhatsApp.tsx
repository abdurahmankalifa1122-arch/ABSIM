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
        className="flex items-center gap-2 px-3.5 py-2.5 bg-[#15191D]/90 backdrop-blur-md border border-[#BCA77A]/50 text-[#F5F4F0] hover:text-[#BCA77A] hover:border-[#BCA77A] rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 group"
        aria-label="Direct WhatsApp Chat with ABSIM Automotive"
      >
        <div className="w-7 h-7 rounded-full bg-[#BCA77A] text-[#090B0D] flex items-center justify-center shrink-0">
          <MessageSquare className="w-3.5 h-3.5 fill-current" />
        </div>
        <span className="hidden sm:inline text-xs font-semibold tracking-wider uppercase pr-1">
          WhatsApp Direct
        </span>
      </a>
    </aside>
  );
};
