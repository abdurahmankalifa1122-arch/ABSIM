import React from 'react';
import { ArrowRight, MapPin, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';
import entranceImage from '../assets/images/absim_workshop_entrance.jpg';

interface HeroProps {
  onBookClick?: () => void;
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onExploreClick) {
      onExploreClick();
    } else {
      document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-28 pb-14 sm:pt-32 sm:pb-18 lg:pt-36 lg:pb-20 bg-[#0B0D10] border-b border-[#232832]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Copy & Actions */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            {/* Elegant Brand Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#14171D] border border-[#8E1A27]/40 w-fit mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8E1A27]" />
              <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9CA3AF]">
                ABSIM AUTOMOTIVE
              </span>
              <span className="text-neutral-600">·</span>
              <span className="text-[11px] font-medium tracking-wider text-white">
                {BRAND_CONFIG.tagline}
              </span>
            </div>

            {/* Main Hero Headline (42-52px desktop, 30-36px mobile) */}
            <h1 className="text-[32px] sm:text-[38px] lg:text-[46px] font-bold text-white leading-[1.18] tracking-tight mb-4 font-heading">
              Professional Automotive Care. <br />
              <span className="text-[#D1D5DB] font-medium">Quality You Can Trust.</span>
            </h1>

            {/* Supporting Text (15-17px) */}
            <p className="text-[15px] sm:text-[16px] text-[#9CA3AF] leading-relaxed max-w-xl mb-7">
              Reliable automotive services, modern workshop equipment, and dedicated care for every vehicle.
            </p>

            {/* Two Attractive Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <a
                href="#services"
                onClick={scrollToServices}
                className="px-5 py-2.5 sm:px-6 sm:py-3 text-[13px] font-semibold tracking-wide text-white bg-[#7A1420] hover:bg-[#8E1A27] border border-[#8E1A27] rounded-sm transition-all duration-200 shadow-md shadow-[#6B111A]/20 flex items-center gap-2"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="px-5 py-2.5 sm:px-6 sm:py-3 text-[13px] font-semibold tracking-wide text-[#E5E7EB] hover:text-white bg-[#14171D] hover:bg-[#1C212B] border border-[#2D333B] hover:border-[#8E1A27]/60 rounded-sm transition-all duration-200"
              >
                <span>Contact Us</span>
              </a>
            </div>

            {/* Small Trust Highlights */}
            <div className="pt-6 border-t border-[#232832] grid grid-cols-3 gap-3 text-left">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#8E1A27] font-semibold">Location</div>
                <div className="text-[13px] font-medium text-white truncate">Behind AMCE</div>
                <div className="text-[11px] text-[#9CA3AF]">Megenagna, Addis Ababa</div>
              </div>

              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#8E1A27] font-semibold">Machinery</div>
                <div className="text-[13px] font-medium text-white truncate">Twin Busch & Corghi</div>
                <div className="text-[11px] text-[#9CA3AF]">German & Italian tools</div>
              </div>

              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#8E1A27] font-semibold">Support</div>
                <div className="text-[13px] font-medium text-white truncate">Direct Assistance</div>
                <div className="text-[11px] text-[#9CA3AF]">Phone & WhatsApp</div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Quality Business Photograph */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="relative rounded-md overflow-hidden bg-[#14171D] border border-[#2D333B] shadow-xl">
              {/* Sharp, uncompromised presentation of the real entrance and facility photograph */}
              <img
                src={entranceImage}
                alt="ABSIM AUTOMOTIVE facility entrance and workshop in Addis Ababa, Ethiopia"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-auto object-cover object-center block"
              />

              {/* Clean bottom status bar */}
              <div className="p-3 bg-[#14171D] border-t border-[#232832] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 text-xs w-full box-border">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span className="text-white font-medium text-[12px] truncate sm:whitespace-normal">Workshop & Car Laundry Facility</span>
                </div>
                <span className="text-[11px] text-[#9CA3AF] font-mono shrink-0">Behind AMCE · Gate Access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
