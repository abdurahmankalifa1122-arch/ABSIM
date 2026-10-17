import React from 'react';
import { Phone, MapPin, MessageSquare, ArrowUpRight, ArrowUp } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';
import { AbsimLogo } from './AbsimLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090B0D] border-t border-[#1F262D] text-[#C4C9CE] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#1F262D]">
          {/* Brand Col */}
          <div className="lg:col-span-5">
            <a
              href="#hero"
              className="inline-block mb-6 hover:opacity-90 transition-opacity"
              aria-label="ABSIM AUTOMOTIVE Home"
            >
              <AbsimLogo variant="full" showTagline={true} />
            </a>
            <p className="text-sm text-[#C4C9CE] leading-relaxed max-w-sm mb-6">
              Premier automotive detailing studio and vehicle care in Addis Ababa, Ethiopia.
              Precision exterior wash, deep interior detailing, wheel conditioning, and paint restoration.
            </p>
            <div className="text-xs text-[#C4C9CE]/70">
              <span className="text-[#BCA77A]">Location:</span> Behind AMCE, Megenagna, Addis Ababa, Ethiopia
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3">
            <div className="text-xs uppercase tracking-widest text-[#BCA77A] font-semibold mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#hero" className="hover:text-[#F5F4F0] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F5F4F0] transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#standard" className="hover:text-[#F5F4F0] transition-colors">
                  The ABSIM Standard
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#F5F4F0] transition-colors">
                  Studio Gallery
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-[#F5F4F0] transition-colors">
                  Book a Service
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F5F4F0] transition-colors">
                  Contact & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-widest text-[#BCA77A] font-semibold mb-4">
              Direct Contact
            </div>
            <div className="space-y-3 text-xs mb-6">
              <a
                href={`tel:${BRAND_CONFIG.phoneRaw}`}
                className="flex items-center gap-2 hover:text-[#F5F4F0] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#BCA77A]" />
                <span className="font-mono text-sm text-[#F5F4F0]">{BRAND_CONFIG.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello ABSIM Automotive, I would like to inquire about booking a vehicle care service.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#F5F4F0] transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#BCA77A]" />
                <span>WhatsApp: {BRAND_CONFIG.phoneDisplay}</span>
              </a>
              <a
                href={BRAND_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#F5F4F0] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#BCA77A]" />
                <span>Behind AMCE, Megenagna (Google Maps)</span>
              </a>
            </div>

            <div className="p-3 bg-[#15191D] border border-[#242A30] text-[11px] text-[#C4C9CE]">
              <span className="text-[#BCA77A] font-medium block mb-0.5">Operating Hours</span>
              <span>Mon – Sat: 8:00 AM – 6:30 PM · By Appointment</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#C4C9CE]/60">
          <div>
            © {currentYear} {BRAND_CONFIG.name}. All rights reserved. Addis Ababa, Ethiopia.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-[#C4C9CE] transition-colors">Privacy & Vehicle Terms</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-[#F5F4F0] transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#BCA77A]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
