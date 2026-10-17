import React, { useState } from 'react';
import { ArrowUpRight, Check, Clock, ChevronRight, X } from 'lucide-react';
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
    <section id="services" className="py-24 sm:py-32 bg-[#0E1115] border-t border-[#1F262D]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs tracking-widest text-[#BCA77A] uppercase font-semibold mb-3">
            OUR SERVICES
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F4F0] leading-tight mb-5 font-serif-brand">
            CARE THAT GOES BEYOND THE SURFACE.
          </h2>
          <p className="text-base sm:text-lg text-[#C4C9CE] leading-relaxed">
            A considered approach to vehicle cleanliness, presentation, and everyday care.
            Every process is designed to protect your vehicle’s clear coat and interior surfaces.
          </p>
        </div>

        {/* Services Grid (6 Proposed Categories) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <article
              key={service.id}
              className="group relative bg-[#15191D] border border-[#242A30] hover:border-[#BCA77A]/50 transition-all duration-300 rounded-sm overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Restrained Zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#090B0D]">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15191D] via-transparent to-transparent opacity-90" />
                  
                  {/* Clean Category Label & Code */}
                  <div className="absolute top-3 left-3 text-[11px] tracking-wider uppercase text-[#C4C9CE] bg-[#090B0D]/80 backdrop-blur-sm px-2.5 py-1 border border-[#242A30]">
                    {service.code} · {service.category}
                  </div>

                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-[#C4C9CE]">
                    <Clock className="w-3.5 h-3.5 text-[#BCA77A]" />
                    <span className="font-mono text-[11px]">{service.estimatedDuration}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold tracking-wide text-[#F5F4F0] group-hover:text-[#BCA77A] transition-colors mb-3 font-serif-brand">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#C4C9CE] leading-relaxed mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Highlights List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#C4C9CE]/90">
                        <Check className="w-3.5 h-3.5 text-[#BCA77A] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-[#242A30]/60 flex items-center justify-between gap-3">
                <div className="text-xs">
                  <span className="text-[#C4C9CE]/60 block text-[10px] uppercase tracking-wider">Pricing</span>
                  <span className="font-semibold text-[#F5F4F0]">Request a Quote</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="p-2 text-xs text-[#C4C9CE] hover:text-[#F5F4F0] transition-colors"
                    title="View service scope"
                    aria-label={`View details for ${service.title}`}
                  >
                    Details
                  </button>
                  <button
                    onClick={() => handleBookService(service)}
                    className="px-3.5 py-2 text-xs font-semibold tracking-wider uppercase bg-[#BCA77A]/15 hover:bg-[#BCA77A] text-[#BCA77A] hover:text-[#090B0D] transition-all rounded-sm flex items-center gap-1"
                  >
                    <span>Book</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Service Scope Modal */}
      {activeModalService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#090B0D]/85 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-lg bg-[#15191D] border border-[#242A30] p-6 sm:p-8 rounded-sm text-[#F5F4F0] shadow-2xl">
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 p-2 text-[#C4C9CE] hover:text-[#F5F4F0] transition-colors"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs uppercase tracking-widest text-[#BCA77A] mb-1">
              Service Scope · {activeModalService.category}
            </div>
            <h3 className="text-2xl font-bold font-serif-brand mb-3">
              {activeModalService.title}
            </h3>

            <p className="text-sm text-[#C4C9CE] leading-relaxed mb-6">
              {activeModalService.fullDesc}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F5F4F0] mb-3">
                Included in This Service
              </h4>
              <ul className="space-y-2.5">
                {activeModalService.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#C4C9CE]">
                    <Check className="w-4 h-4 text-[#BCA77A] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-[#242A30]">
              <div className="text-xs text-[#C4C9CE]">
                <span>Est. Duration: </span>
                <span className="text-[#F5F4F0] font-mono">{activeModalService.estimatedDuration}</span>
              </div>
              <button
                onClick={() => {
                  const s = activeModalService;
                  setActiveModalService(null);
                  handleBookService(s);
                }}
                className="px-5 py-2.5 text-xs font-semibold tracking-wider uppercase bg-[#BCA77A] text-[#090B0D] hover:bg-[#d1bd93] transition-colors rounded-sm"
              >
                Inquire & Book Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
