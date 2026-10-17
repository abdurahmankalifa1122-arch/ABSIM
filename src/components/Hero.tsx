import React from 'react';
import { ArrowRight, MapPin, MessageSquare, ShieldCheck } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';
import heroImage from '../assets/images/hero_luxury_detailing_1792227721860.jpg';

interface HeroProps {
  onBookClick?: () => void;
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick, onExploreClick }) => {
  const whatsappUrl = `https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    'Hello ABSIM Automotive, I would like to inquire about booking a vehicle care service.'
  )}`;

  const scrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onExploreClick) {
      onExploreClick();
    } else {
      document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onBookClick) {
      onBookClick();
    } else {
      document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen flex items-end pb-16 sm:pb-20 pt-32 overflow-hidden bg-[#090B0D]">
      {/* Background Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury black vehicle inside ABSIM Automotive detailing studio in Addis Ababa"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-[1.02] filter brightness-90 contrast-[1.05]"
        />
        {/* Cinematic Multi-stop Dark Scrim Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090B0D] via-[#090B0D]/75 to-[#090B0D]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090B0D]/90 via-[#090B0D]/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow & Understated Location */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm tracking-widest text-[#BCA77A] uppercase font-semibold mb-4 sm:mb-6">
            <span>PREMIUM AUTOMOTIVE CARE</span>
            <span aria-hidden="true" className="text-[#C4C9CE]/40">·</span>
            <span className="text-[#C4C9CE] flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#BCA77A]" />
              ADDIS ABABA, ETHIOPIA
            </span>
          </div>

          {/* Headline - Editorial Luxury Display */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F5F4F0] leading-[1.08] mb-6 font-serif-brand">
            YOUR CAR. <br />
            <span className="text-[#C4C9CE]">RESTORED TO ITS BEST.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-[#C4C9CE] leading-relaxed max-w-2xl mb-8 sm:mb-10 font-normal">
            Professional vehicle cleaning and care, delivered with precision, attention to detail, and respect for your vehicle.
          </p>

          {/* Primary & Secondary Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12 sm:mb-16">
            <a
              href="#booking"
              onClick={scrollToBooking}
              className="px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#090B0D] bg-[#BCA77A] hover:bg-[#d1bd93] active:scale-[0.99] transition-all rounded-sm text-center flex items-center justify-center gap-2 shadow-lg hover:shadow-[#BCA77A]/10"
            >
              <MessageSquare className="w-4 h-4" />
              <span>BOOK YOUR SERVICE</span>
            </a>

            <a
              href="#services"
              onClick={scrollToServices}
              className="px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#F5F4F0] border border-[#C4C9CE]/30 hover:border-[#F5F4F0] hover:bg-white/[0.04] transition-all rounded-sm text-center flex items-center justify-center gap-2"
            >
              <span>EXPLORE OUR SERVICES</span>
              <ArrowRight className="w-4 h-4 text-[#C4C9CE]" />
            </a>
          </div>

          {/* Core Commitments Strip - Clean unboxed text with typographic separators */}
          <div className="pt-8 border-t border-[#1F262D]/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-xs text-[#C4C9CE]">
            <div>
              <div className="text-[11px] tracking-wider uppercase text-[#BCA77A] mb-1">Method</div>
              <div className="text-sm font-medium text-[#F5F4F0]">Two-Bucket Gentle Wash</div>
            </div>
            <div>
              <div className="text-[11px] tracking-wider uppercase text-[#BCA77A] mb-1">Products</div>
              <div className="text-sm font-medium text-[#F5F4F0]">pH-Neutral Chemistry</div>
            </div>
            <div>
              <div className="text-[11px] tracking-wider uppercase text-[#BCA77A] mb-1">Facility</div>
              <div className="text-sm font-medium text-[#F5F4F0]">Covered Bay Care</div>
            </div>
            <div>
              <div className="text-[11px] tracking-wider uppercase text-[#BCA77A] mb-1">Location</div>
              <div className="text-sm font-medium text-[#F5F4F0]">Megenagna, Behind AMCE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
