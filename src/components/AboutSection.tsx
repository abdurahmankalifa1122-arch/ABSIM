import React from 'react';
import { ShieldCheck, Award, Wrench, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import entranceImage from '../assets/images/absim_workshop_entrance.jpg';
import { BRAND_CONFIG } from '../config/brand';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-[#0B0D10] text-[#E5E7EB] border-b border-[#232832]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <div className="rounded-md overflow-hidden bg-[#14171D] border border-[#2D333B] shadow-xl">
              <img
                src={entranceImage}
                alt="ABSIM AUTOMOTIVE facility entrance behind AMCE in Megenagna, Addis Ababa"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover object-center block"
              />
              <div className="p-3 bg-[#14171D] border-t border-[#232832] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 text-xs text-[#9CA3AF] w-full box-border">
                <span className="text-[#8E1A27] font-semibold uppercase tracking-wider text-[11px] shrink-0">
                  Official Location
                </span>
                <span className="font-mono text-[11px] text-white break-words [overflow-wrap:anywhere]">
                  Behind AMCE Compound · Megenagna
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#14171D] border border-[#8E1A27]/40 text-[11px] uppercase tracking-widest text-[#9CA3AF] font-semibold mb-3">
              <span>ABOUT ABSIM AUTOMOTIVE</span>
              <span className="text-neutral-600">·</span>
              <span className="text-white">{BRAND_CONFIG.tagline}</span>
            </div>

            <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-white leading-tight mb-4 font-heading">
              Dedicated to Precision. <br />
              <span className="text-[#D1D5DB] font-normal">Built on Integrity.</span>
            </h2>

            <p className="text-[15px] sm:text-[16px] text-[#9CA3AF] leading-relaxed mb-4">
              Located in <strong className="text-white font-medium">Megenagna, behind AMCE</strong> in Addis Ababa, ABSIM AUTOMOTIVE operates on an uncompromising principle: <span className="text-white font-medium">“WORKING HARD, SERVING WELL.”</span>
            </p>

            <p className="text-[14px] sm:text-[15px] text-[#9CA3AF] leading-relaxed mb-6">
              We provide dependable vehicle care equipped with certified European machinery — including German Twin Busch tyre and balancing systems, Italian Corghi computerized alignment, a reinforced walk-under vehicle inspection pit, and high-capacity ABAC industrial pneumatics.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="p-3 bg-[#14171D] rounded-sm border border-[#232832]">
                <div className="flex items-center gap-2 mb-1">
                  <ShieldCheck className="w-4 h-4 text-[#8E1A27]" />
                  <h3 className="text-[13px] font-semibold text-white">Quality Workmanship</h3>
                </div>
                <p className="text-[12px] text-[#9CA3AF] leading-normal">
                  Trained technicians who treat every vehicle with technical care.
                </p>
              </div>

              <div className="p-3 bg-[#14171D] rounded-sm border border-[#232832]">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-[#8E1A27]" />
                  <h3 className="text-[13px] font-semibold text-white">European Machinery</h3>
                </div>
                <p className="text-[12px] text-[#9CA3AF] leading-normal">
                  Twin Busch, Corghi, and ABAC tools to eliminate guesswork.
                </p>
              </div>

              <div className="p-3 bg-[#14171D] rounded-sm border border-[#232832]">
                <div className="flex items-center gap-2 mb-1">
                  <Wrench className="w-4 h-4 text-[#8E1A27]" />
                  <h3 className="text-[13px] font-semibold text-white">Inspection Pit Bay</h3>
                </div>
                <p className="text-[12px] text-[#9CA3AF] leading-normal">
                  Full walk-under undercarriage and steering diagnostics.
                </p>
              </div>

              <div className="p-3 bg-[#14171D] rounded-sm border border-[#232832]">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-4 h-4 text-[#8E1A27]" />
                  <h3 className="text-[13px] font-semibold text-white">Transparent Service</h3>
                </div>
                <p className="text-[12px] text-[#9CA3AF] leading-normal">
                  Clear explanations, honest advice, and dependable pricing.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#equipment"
                className="px-4 py-2 text-[13px] font-semibold text-white bg-[#7A1420] hover:bg-[#8E1A27] border border-[#8E1A27] rounded-sm transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span>View Workshop Equipment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href={`tel:${BRAND_CONFIG.phoneRaw}`}
                className="px-4 py-2 text-[13px] font-semibold text-[#D1D5DB] hover:text-white bg-[#14171D] hover:bg-[#1C212B] border border-[#2D333B] rounded-sm transition-all flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#8E1A27]" />
                <span>Call {BRAND_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
