import React, { useState } from 'react';
import { ArrowRight, Check, Clock, X } from 'lucide-react';
import { SERVICES, ServiceItem } from '../config/brand';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const handleBookService = (service: ServiceItem) => {
    onSelectService(service.title);
    const bookingSection = document.querySelector('#booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-[#0E1115] border-b border-[#232832]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#14171D] border border-[#8E1A27]/40 text-[11px] uppercase tracking-widest text-[#9CA3AF] font-semibold mb-2.5">
            <span>OUR SERVICES</span>
            <span className="text-neutral-600">·</span>
            <span className="text-white">ADDIS ABABA WORKSHOP</span>
          </div>
          <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-white leading-tight mb-3 font-heading">
            Specialized Care for Every Vehicle.
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#9CA3AF] leading-relaxed">
            From precision tyre fitting and dynamic balancing to 3D wheel alignment, undercarriage pit inspections, mechanical servicing, and car laundry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group bg-[#14171D] border border-[#232832] hover:border-[#8E1A27]/60 transition-all duration-200 rounded-md overflow-hidden flex flex-col justify-between shadow-md hover:shadow-lg"
            >
              <div>
                <div className="relative aspect-[4/3] bg-[#0B0D10] overflow-hidden border-b border-[#232832]">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />

                  <div className="absolute top-2.5 left-2.5 text-[10px] tracking-wider uppercase font-semibold text-white bg-[#0B0D10]/85 px-2 py-0.5 rounded border border-[#2D333B]">
                    {service.code} · {service.category}
                  </div>

                  <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 text-[11px] text-white bg-[#0B0D10]/85 px-2 py-0.5 rounded border border-[#2D333B]">
                    <Clock className="w-3 h-3 text-[#8E1A27]" />
                    <span className="font-mono">{service.estimatedDuration}</span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-[17px] font-bold text-white group-hover:text-[#D1D5DB] transition-colors mb-2 font-heading">
                    {service.title}
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-[#9CA3AF] leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  <ul className="space-y-1.5 mb-2">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[12px] text-[#D1D5DB]">
                        <Check className="w-3.5 h-3.5 text-[#8E1A27] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-[#232832]/80 flex items-center justify-between gap-3">
                <span className="text-[12px] text-[#9CA3AF] font-medium">Standard Pricing</span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="px-2.5 py-1 text-[12px] text-[#9CA3AF] hover:text-white transition-colors"
                    aria-label={`View details for ${service.title}`}
                  >
                    Details
                  </button>
                  <button
                    onClick={() => handleBookService(service)}
                    className="px-3 py-1.5 text-[12px] font-semibold uppercase tracking-wider bg-[#7A1420] hover:bg-[#8E1A27] text-white border border-[#8E1A27] transition-colors rounded-sm flex items-center gap-1 shadow-sm"
                  >
                    <span>Book</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeModalService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B0D10]/90 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg bg-[#14171D] border border-[#2D333B] p-6 rounded-md text-white shadow-2xl">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 p-1.5 text-[#9CA3AF] hover:text-white transition-colors"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-[11px] uppercase tracking-wider text-[#8E1A27] font-bold mb-1">
              Service Details · {activeModalService.category}
            </div>
            <h3 className="text-xl font-bold font-heading mb-3">
              {activeModalService.title}
            </h3>

            <p className="text-[14px] text-[#9CA3AF] leading-relaxed mb-5">
              {activeModalService.fullDesc}
            </p>

            <div className="mb-5">
              <h4 className="text-[12px] font-semibold uppercase tracking-wider text-white mb-2.5">
                Key Inclusions
              </h4>
              <ul className="space-y-2">
                {activeModalService.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[13px] text-[#D1D5DB]">
                    <Check className="w-4 h-4 text-[#8E1A27] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#232832]">
              <div className="text-[12px] text-[#9CA3AF]">
                <span>Est. Duration: </span>
                <span className="text-white font-mono font-semibold">{activeModalService.estimatedDuration}</span>
              </div>
              <button
                onClick={() => {
                  const s = activeModalService;
                  setActiveModalService(null);
                  handleBookService(s);
                }}
                className="px-4 py-2 text-[12px] font-semibold tracking-wider uppercase bg-[#7A1420] text-white hover:bg-[#8E1A27] border border-[#8E1A27] transition-colors rounded-sm"
              >
                Inquire & Book
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
