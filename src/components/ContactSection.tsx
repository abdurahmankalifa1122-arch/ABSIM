import React from 'react';
import { MapPin, Phone, MessageSquare, Navigation, Clock } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';
import entranceImage from '../assets/images/absim_workshop_entrance.jpg';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-14 sm:py-20 pb-24 sm:pb-28 bg-[#0E1115] border-b border-[#232832] overflow-x-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-full box-border">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 w-full box-border">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#14171D] border border-[#8E1A27]/40 text-[11px] uppercase tracking-widest text-[#9CA3AF] font-semibold mb-2.5">
            <span>LOCATION & CONTACT</span>
            <span className="text-neutral-600">·</span>
            <span className="text-white">ADDIS ABABA</span>
          </div>
          <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-white leading-tight mb-2.5 font-heading break-words">
            Visit ABSIM AUTOMOTIVE.
          </h2>
          <p className="text-[14px] sm:text-[16px] text-[#9CA3AF] leading-relaxed break-words">
            Conveniently located behind the AMCE compound in the Megenagna automotive corridor. Reach out directly by phone, WhatsApp, or drop by during business hours.
          </p>
        </div>

        {/* Quick Contact Bar: Phone, WhatsApp, Hours (Wrapped & Responsive) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 sm:mb-12 w-full box-border">
          {/* Direct Phone */}
          <a
            href={`tel:${BRAND_CONFIG.phoneRaw}`}
            className="flex items-center gap-3 p-3.5 bg-[#14171D] border border-[#232832] hover:border-[#8E1A27]/60 rounded-md transition-colors group min-w-0 w-full box-border"
          >
            <div className="w-8 h-8 rounded-sm bg-[#0B0D10] border border-[#8E1A27]/40 flex items-center justify-center shrink-0 text-[#8E1A27]">
              <Phone className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] uppercase tracking-wider text-[#8E1A27] font-semibold">
                Direct Call
              </div>
              <div className="text-xs sm:text-sm font-bold text-white font-mono group-hover:text-[#D1D5DB] transition-colors break-words">
                {BRAND_CONFIG.phoneDisplay}
              </div>
            </div>
          </a>

          {/* WhatsApp Chat */}
          <a
            href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello ABSIM Automotive, I would like to inquire about your services.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3.5 bg-[#14171D] border border-[#232832] hover:border-[#8E1A27]/60 rounded-md transition-colors group min-w-0 w-full box-border"
          >
            <div className="w-8 h-8 rounded-sm bg-[#0B0D10] border border-[#8E1A27]/40 flex items-center justify-center shrink-0 text-[#8E1A27]">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] uppercase tracking-wider text-[#8E1A27] font-semibold">
                WhatsApp Direct
              </div>
              <div className="text-xs sm:text-sm font-bold text-white group-hover:text-[#D1D5DB] transition-colors break-words">
                Start Chat
              </div>
            </div>
          </a>

          {/* Operating Hours */}
          <div className="flex items-center gap-3 p-3.5 bg-[#14171D] border border-[#232832] rounded-md min-w-0 w-full box-border">
            <div className="w-8 h-8 rounded-sm bg-[#0B0D10] border border-[#8E1A27]/40 flex items-center justify-center shrink-0 text-[#8E1A27]">
              <Clock className="w-4 h-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] uppercase tracking-wider text-[#8E1A27] font-semibold">
                Working Hours
              </div>
              <div className="text-xs sm:text-sm font-medium text-white break-words">
                Mon – Sat: 8:00 AM – 6:30 PM
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BLOCK ONE: WORKSHOP & CAR LAUNDRY FACILITY
            Strict Order on all screens:
            1. Image First
            2. Title Underneath
            3. Short Description
            4. Corresponding Location Information
           ========================================================================= */}
        <div className="w-full bg-[#14171D] border border-[#232832] rounded-lg overflow-hidden shadow-lg box-border">
          {/* 1. Workshop entrance photograph first */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-[#0B0D10] overflow-hidden border-b border-[#232832]">
            <img
              src={entranceImage}
              alt="ABSIM AUTOMOTIVE Workshop & Car Laundry Facility Entrance in Addis Ababa"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center block"
            />
            <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 bg-[#0B0D10]/90 backdrop-blur-sm border border-[#2D333B] px-2 sm:px-2.5 py-1 rounded text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-white">
              Facility Entrance Gate
            </div>
          </div>

          {/* Content Container Directly Underneath Image */}
          <div className="p-4 sm:p-6 w-full box-border">
            {/* 2. Title Underneath */}
            <div className="mb-3">
              <div className="text-[11px] uppercase tracking-wider text-[#8E1A27] font-semibold mb-1">
                FACILITY LOCATION
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading break-words">
                WORKSHOP & CAR LAUNDRY FACILITY
              </h3>
            </div>

            {/* 3. Short description of the facility */}
            <p className="text-sm sm:text-[15px] text-[#D1D5DB] leading-relaxed mb-4 break-words">
              Our active automotive care workshop and dedicated Car Laundry yard located within the secure, gated compound behind AMCE. Equipped with high-precision tyre mounting, electronic wheel balancing, Corghi 3D computerized alignment, full walk-under vehicle inspection pit, and high-pressure vehicle washing bays.
            </p>

            {/* 4. Corresponding location information */}
            <div className="p-4 bg-[#0B0D10] border border-[#232832] rounded-md space-y-3 mb-4 w-full box-border">
              <div className="flex items-start gap-2.5 min-w-0">
                <MapPin className="w-4 h-4 text-[#8E1A27] shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] uppercase tracking-wider text-[#8E1A27] font-semibold">
                    Facility Address
                  </div>
                  <p className="text-sm sm:text-base font-bold text-white break-words">
                    Behind AMCE Compound, Megenagna
                  </p>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] break-words">
                    Addis Ababa, Ethiopia · Spacious Gated Customer Yard
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-[#232832] min-w-0">
                <Clock className="w-4 h-4 text-[#8E1A27] shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] uppercase tracking-wider text-[#8E1A27] font-semibold">
                    Facility Hours
                  </div>
                  <p className="text-xs sm:text-sm text-[#D1D5DB] break-words">
                    Monday – Saturday: 8:00 AM – 6:30 PM (Walk-ins & Appointments Welcome)
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Button */}
            <div>
              <a
                href={BRAND_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#7A1420] hover:bg-[#8E1A27] border border-[#8E1A27] transition-colors rounded-sm shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5 text-white shrink-0" />
                <span>Open Facility in Google Maps</span>
              </a>
            </div>
          </div>
        </div>

        {/* Clear Vertical Spacing Between the Two Sections */}
        <div className="my-10 sm:my-14 border-t border-[#232832]" />

        {/* =========================================================================
            BLOCK TWO: OFFICIAL BUSINESS LOCATION
            Strict Order on all screens:
            1. Location Map / Navigation Image First
            2. Title Underneath
            3. Official Address & Location Description Below Title
            4. Location / Navigation Functionality
           ========================================================================= */}
        <div className="w-full bg-[#14171D] border border-[#232832] rounded-lg overflow-hidden shadow-lg box-border">
          {/* 1. Official location map / navigation image first */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full bg-[#0B0D10] overflow-hidden border-b border-[#232832]">
            <iframe
              title="ABSIM AUTOMOTIVE Official Business Location Map"
              src="https://maps.google.com/maps?q=AMCE,+Megenagna,+Addis+Ababa,+Ethiopia&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 block"
              loading="lazy"
              aria-label="Google Maps Location for ABSIM Automotive behind AMCE Megenagna"
            />
          </div>

          {/* Content Container Directly Underneath Map Image */}
          <div className="p-4 sm:p-6 w-full box-border">
            {/* 2. Title Underneath */}
            <div className="mb-3">
              <div className="text-[11px] uppercase tracking-wider text-[#8E1A27] font-semibold mb-1">
                REGISTERED ADDRESS & ACCESS
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading break-words">
                OFFICIAL BUSINESS LOCATION
              </h3>
            </div>

            {/* 3. Official address and location description below title */}
            <div className="p-4 bg-[#0B0D10] border border-[#232832] rounded-md space-y-3 mb-4 w-full box-border">
              <div className="flex items-start gap-2.5 min-w-0">
                <MapPin className="w-4 h-4 text-[#8E1A27] shrink-0 mt-0.5" />
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] uppercase tracking-wider text-[#8E1A27] font-semibold">
                    Official Business Address
                  </div>
                  <p className="text-sm sm:text-base font-bold text-white break-words">
                    Behind AMCE Industrial Zone, Megenagna
                  </p>
                  <p className="text-xs sm:text-sm text-[#9CA3AF] break-words">
                    Megenagna Sub-City, Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-[#232832]">
                <div className="text-[11px] uppercase tracking-wider text-[#8E1A27] font-semibold mb-2">
                  Step-by-Step Driving Directions
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-[#D1D5DB]">
                  <div className="flex items-start gap-2 min-w-0">
                    <span className="text-[#8E1A27] font-bold font-mono shrink-0">01.</span>
                    <span className="break-words min-w-0 flex-1">From Megenagna Roundabout, proceed along the main avenue heading towards the AMCE facility.</span>
                  </div>
                  <div className="flex items-start gap-2 min-w-0">
                    <span className="text-[#8E1A27] font-bold font-mono shrink-0">02.</span>
                    <span className="break-words min-w-0 flex-1">Turn onto the designated access street running immediately behind the main AMCE premises.</span>
                  </div>
                  <div className="flex items-start gap-2 min-w-0">
                    <span className="text-[#8E1A27] font-bold font-mono shrink-0">03.</span>
                    <span className="break-words min-w-0 flex-1">Enter through the ABSIM AUTOMOTIVE gate with the active “WE ARE OPEN - CAR LAUNDRY” sign.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Location and navigation functionality */}
            <div>
              <a
                href={BRAND_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-[#7A1420] hover:bg-[#8E1A27] border border-[#8E1A27] transition-colors rounded-sm shadow-sm"
              >
                <Navigation className="w-3.5 h-3.5 text-white shrink-0" />
                <span className="break-words">Get Driving Directions on Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
