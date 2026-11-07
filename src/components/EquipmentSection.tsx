import React from 'react';
import { Cpu, Check, ArrowRight } from 'lucide-react';
import { WORKSHOP_EQUIPMENT } from '../config/brand';

export const EquipmentSection: React.FC = () => {
  return (
    <section id="equipment" className="py-16 sm:py-20 bg-[#0B0D10] text-[#E5E7EB] border-b border-[#232832]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: 28-34px */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#14171D] border border-[#8E1A27]/40 text-[11px] uppercase tracking-widest text-[#9CA3AF] font-semibold mb-2.5">
            <span>OUR EQUIPMENT</span>
            <span className="text-neutral-600">·</span>
            <span className="text-white">EUROPEAN WORKSHOP MACHINERY</span>
          </div>
          <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-white leading-tight mb-3 font-heading">
            Professional Machinery. Zero Guesswork.
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#9CA3AF] leading-relaxed">
            Every vehicle at ABSIM AUTOMOTIVE is serviced using dedicated industrial equipment from leading German and Italian manufacturers, ensuring safety, manufacturer accuracy, and complete rim and chassis protection.
          </p>
        </div>

        {/* Equipment Cards: Crisp, balanced presentation */}
        <div className="space-y-8">
          {WORKSHOP_EQUIPMENT.map((item, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={item.id}
                className="bg-[#14171D] border border-[#232832] hover:border-[#8E1A27]/50 transition-colors rounded-md overflow-hidden p-5 sm:p-6 shadow-md"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Photo Column - Clear, unmasked photograph */}
                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-[#0B0D10] border border-[#2D333B]">
                      <img
                        src={item.image}
                        alt={`${item.name} (${item.model}) at ABSIM AUTOMOTIVE`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover block"
                      />

                      {/* Equipment Model Tag */}
                      <div className="absolute top-2.5 left-2.5 bg-[#0B0D10]/85 px-2.5 py-1 border border-[#2D333B] rounded text-[10px] font-semibold uppercase tracking-wider text-white">
                        {item.category}
                      </div>

                      <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-[11px] text-[#D1D5DB] bg-[#0B0D10]/85 px-2.5 py-1 rounded border border-[#2D333B]">
                        <span className="font-mono font-medium text-white">{item.model}</span>
                        <span className="text-[10px] text-[#8E1A27] font-semibold uppercase tracking-wider">In-House</span>
                      </div>
                    </div>
                  </div>

                  {/* Details Column */}
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="text-[11px] uppercase tracking-wider text-[#8E1A27] font-semibold mb-1">
                      Machine 0{index + 1} · {item.category}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-1.5">
                      {item.name}
                    </h3>
                    <div className="text-[12px] font-mono text-[#9CA3AF] mb-3 pb-2.5 border-b border-[#232832]">
                      Specification: <span className="text-white font-medium">{item.model}</span>
                    </div>

                    <p className="text-[14px] sm:text-[15px] text-[#9CA3AF] leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Specifications List */}
                    <div className="mb-4">
                      <h4 className="text-[11px] font-semibold uppercase tracking-wider text-white mb-2 flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-[#8E1A27]" />
                        <span>Key Specifications & Protection</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {item.specifications.map((spec, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2 text-[12px] text-[#D1D5DB]">
                            <Check className="w-3.5 h-3.5 text-[#8E1A27] shrink-0 mt-0.5" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Inquire link */}
                    <div className="pt-3 border-t border-[#232832]">
                      <a
                        href="#booking"
                        className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-white bg-[#7A1420] hover:bg-[#8E1A27] border border-[#8E1A27] px-3.5 py-1.5 rounded-sm transition-colors shadow-sm"
                      >
                        <span>Book Service With This Machine</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
