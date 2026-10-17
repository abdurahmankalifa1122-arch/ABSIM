import React from 'react';
import { MapPin, Phone, MessageSquare, Navigation, Clock, ShieldAlert } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#090B0D] border-t border-[#1F262D]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-6">
            <div className="text-xs tracking-widest text-[#BCA77A] uppercase font-semibold mb-3">
              LOCATION & CONTACT
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F4F0] leading-tight mb-6 font-serif-brand">
              VISIT ABSIM AUTOMOTIVE.
            </h2>
            <p className="text-base text-[#C4C9CE] leading-relaxed mb-10">
              Conveniently located in Megenagna, Addis Ababa. Reach out directly by phone or WhatsApp to schedule a drop-off time or request a vehicle inspection.
            </p>

            <div className="space-y-6">
              {/* Address Block */}
              <div className="flex items-start gap-4 p-5 bg-[#15191D] border border-[#242A30] rounded-sm">
                <div className="w-10 h-10 rounded-sm bg-[#090B0D] border border-[#242A30] flex items-center justify-center shrink-0 text-[#BCA77A]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs uppercase tracking-wider text-[#BCA77A] font-semibold mb-1">
                    Facility Location
                  </h3>
                  <p className="text-sm font-medium text-[#F5F4F0] mb-1">
                    Behind AMCE, Megenagna
                  </p>
                  <p className="text-xs text-[#C4C9CE]">
                    Addis Ababa, Ethiopia
                  </p>
                  <div className="mt-3">
                    <a
                      href={BRAND_CONFIG.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#BCA77A] hover:underline font-medium"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Phone Block */}
              <div className="flex items-start gap-4 p-5 bg-[#15191D] border border-[#242A30] rounded-sm">
                <div className="w-10 h-10 rounded-sm bg-[#090B0D] border border-[#242A30] flex items-center justify-center shrink-0 text-[#BCA77A]">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs uppercase tracking-wider text-[#BCA77A] font-semibold mb-1">
                    Direct Phone Line
                  </h3>
                  <p className="text-base font-bold text-[#F5F4F0] font-mono mb-1">
                    <a href={`tel:${BRAND_CONFIG.phoneRaw}`} className="hover:text-[#BCA77A] transition-colors">
                      {BRAND_CONFIG.phoneDisplay}
                    </a>
                  </p>
                  <p className="text-xs text-[#C4C9CE]">
                    Tap to call directly from mobile or desktop
                  </p>
                </div>
              </div>

              {/* WhatsApp Quick Link */}
              <div className="flex items-start gap-4 p-5 bg-[#15191D] border border-[#242A30] rounded-sm">
                <div className="w-10 h-10 rounded-sm bg-[#090B0D] border border-[#242A30] flex items-center justify-center shrink-0 text-[#BCA77A]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xs uppercase tracking-wider text-[#BCA77A] font-semibold mb-1">
                    WhatsApp Business Chat
                  </h3>
                  <p className="text-sm text-[#F5F4F0] mb-2">
                    Send vehicle photos or voice notes for quick estimates
                  </p>
                  <a
                    href={`https://wa.me/${BRAND_CONFIG.whatsappNumber}?text=${encodeURIComponent('Hello ABSIM Automotive, I would like to inquire about your services.')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#090B0D] bg-[#BCA77A] hover:bg-[#d1bd93] px-3.5 py-1.5 rounded-sm transition-colors"
                  >
                    <span>Start WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Directional Map Card with Local Landmarks */}
          <div className="lg:col-span-6">
            <div className="bg-[#15191D] border border-[#242A30] p-6 sm:p-8 rounded-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#242A30]">
                <div>
                  <h3 className="text-lg font-bold text-[#F5F4F0] font-serif-brand">
                    Megenagna Studio Access
                  </h3>
                  <p className="text-xs text-[#C4C9CE]">
                    Megenagna Sub-City · AMCE Industrial Zone
                  </p>
                </div>
                <div className="text-xs font-mono text-[#BCA77A] border border-[#BCA77A]/30 px-2 py-1">
                  ADDIS ABABA
                </div>
              </div>

              {/* Stylized Minimalist Map Blueprint Visual */}
              <div className="relative aspect-[16/10] bg-[#090B0D] border border-[#242A30] rounded-sm p-4 overflow-hidden mb-6 flex flex-col justify-between">
                {/* Blueprint grid subtle background */}
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: 'radial-gradient(#C4C9CE 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />

                <div className="relative z-10 flex items-center justify-between text-xs text-[#C4C9CE]">
                  <span className="uppercase tracking-widest text-[10px] text-[#BCA77A]">Megenagna Hub</span>
                  <span className="text-[11px] font-mono">Ring Road Corridor</span>
                </div>

                {/* Central pin marker representation */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto py-6">
                  <div className="w-12 h-12 rounded-full bg-[#BCA77A]/20 border border-[#BCA77A] flex items-center justify-center text-[#BCA77A] mb-2 animate-pulse">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-[#F5F4F0] font-serif-brand">ABSIM AUTOMOTIVE</div>
                    <div className="text-xs text-[#C4C9CE]">Behind AMCE Compound</div>
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between text-[11px] text-[#C4C9CE]/80 border-t border-[#1F262D] pt-2">
                  <span>Accessible via Main AMCE Avenue</span>
                  <span className="text-[#BCA77A]">Ample Secure Parking</span>
                </div>
              </div>

              {/* Driving & Arrival Notes */}
              <div className="space-y-3 text-xs text-[#C4C9CE] mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-[#BCA77A] font-bold font-mono">01.</span>
                  <span>From Megenagna Roundabout, proceed towards the AMCE facility road.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#BCA77A] font-bold font-mono">02.</span>
                  <span>Turn into the access street running behind the main AMCE premises.</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[#BCA77A] font-bold font-mono">03.</span>
                  <span>Look for ABSIM Automotive vehicle reception gate.</span>
                </div>
              </div>

              {/* Google Maps External Action Button */}
              <a
                href={BRAND_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 text-xs uppercase tracking-wider font-semibold text-[#F5F4F0] border border-[#BCA77A]/60 hover:bg-[#BCA77A]/10 transition-colors rounded-sm flex items-center justify-center gap-2 text-center"
              >
                <Navigation className="w-4 h-4 text-[#BCA77A]" />
                <span>Get Driving Directions on Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
