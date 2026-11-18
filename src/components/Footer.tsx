import React from 'react';
import { Phone, MapPin, MessageSquare, ArrowUp } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';
import { AbsimLogo } from './AbsimLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0D10] text-[#9CA3AF] pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-[#232832]">
          <div className="lg:col-span-5">
            <a
              href="#hero"
              className="inline-block mb-3.5 hover:opacity-95 transition-opacity"
              aria-label="ABSIM AUTOMOTIVE Home"
            >
              <AbsimLogo variant="footer" showTagline={true} />
            </a>
            <p className="text-[13px] text-[#9CA3AF] leading-relaxed max-w-sm mb-4">
              Professional automotive workshop and vehicle care in Addis Ababa, Ethiopia. Equipped with German and Italian machinery for precision tyre changing, wheel balancing, 3D alignment, inspection pit diagnostics, mechanical repairs, and car laundry.
            </p>
            <div className="text-[12px] text-[#D1D5DB]">
              <span className="text-[#8E1A27] font-semibold">Location:</span> Behind AMCE Compound, Megenagna, Addis Ababa
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[11px] uppercase tracking-wider text-[#8E1A27] font-bold mb-3">
              Navigation
            </div>
            <ul className="space-y-2 text-[13px]">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About ABSIM
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#equipment" className="hover:text-white transition-colors">
                  Workshop Equipment
                </a>
              </li>
              <li>
                <a href="#workshop" className="hover:text-white transition-colors">
                  Facility Gallery
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-white transition-colors">
                  Book a Service
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Directions
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-wider text-[#8E1A27] font-bold mb-3">
              Direct Contact
            </div>
            <div className="space-y-2.5 text-[13px] mb-4">
              <a
                href={`tel:${BRAND_CONFIG.phoneRaw}`}
                className="flex items-center gap-2 hover:text-white transition-colors text-[#D1D5DB]"
              >
                <Phone className="w-3.5 h-3.5 text-[#8E1A27]" />
                <span className="font-mono text-white font-semibold">{BRAND_CONFIG.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello ABSIM Automotive, I would like to inquire about booking a vehicle care service.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors text-[#D1D5DB]"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#8E1A27]" />
                <span>WhatsApp: {BRAND_CONFIG.phoneDisplay}</span>
              </a>
              <a
                href={BRAND_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors text-[#D1D5DB]"
              >
                <MapPin className="w-3.5 h-3.5 text-[#8E1A27]" />
                <span>Behind AMCE, Megenagna (Google Maps)</span>
              </a>
            </div>

            <div className="p-2.5 bg-[#14171D] border border-[#232832] text-[11px] text-[#9CA3AF] rounded">
              <span className="text-[#8E1A27] font-semibold block mb-0.5">Working Hours</span>
              <span>Mon – Sat: 8:00 AM – 6:30 PM · Walk-ins Welcome</span>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#9CA3AF]">
          <div>
            © {currentYear} {BRAND_CONFIG.name} — {BRAND_CONFIG.tagline}. Addis Ababa, Ethiopia.
          </div>

          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Directions</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-white hover:text-[#D1D5DB] transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3 text-[#8E1A27]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
