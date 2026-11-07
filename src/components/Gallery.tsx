import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { WORKSHOP_GALLERY } from '../config/brand';

export const Gallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Equipment', 'Facility & Location', 'Workshop Pit'];

  const filteredItems =
    selectedFilter === 'All'
      ? WORKSHOP_GALLERY
      : WORKSHOP_GALLERY.filter((item) => item.category === selectedFilter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section id="workshop" className="py-16 sm:py-20 bg-[#0E1115] border-b border-[#232832]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Controls: 28-34px heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#14171D] border border-[#8E1A27]/40 text-[11px] uppercase tracking-widest text-[#9CA3AF] font-semibold mb-2.5">
              <span>OUR WORKSHOP</span>
              <span className="text-neutral-600">·</span>
              <span className="text-white">FACILITY & EQUIPMENT</span>
            </div>
            <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-white leading-tight font-heading">
              Inside Our Facility.
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#9CA3AF] mt-2">
              Authentic on-site photographs of ABSIM AUTOMOTIVE's premises, equipment bays, and inspection pit in Megenagna, Addis Ababa.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#14171D] border border-[#232832] rounded-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedFilter(cat);
                  setLightboxIndex(null);
                }}
                className={`px-3 py-1 text-[11px] font-semibold uppercase tracking-wider transition-colors rounded-sm ${
                  selectedFilter === cat
                    ? 'bg-[#7A1420] text-white border border-[#8E1A27]'
                    : 'text-[#9CA3AF] hover:text-white border border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid - Crisp images without muddy dark gradient overlays */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative cursor-pointer overflow-hidden rounded-md bg-[#14171D] border border-[#232832] hover:border-[#8E1A27]/80 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0B0D10]">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 block"
                />

                {/* Subtle dark gradient only at very bottom for label legibility */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0B0D10]/90 to-transparent pointer-events-none" />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/25">
                  <div className="p-2.5 rounded-full bg-[#0B0D10]/90 border border-[#8E1A27] text-white">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>

                <div className="absolute bottom-2.5 left-3 right-3 text-left">
                  <span className="text-[10px] tracking-wider uppercase text-[#8E1A27] font-bold block">
                    {item.category}
                  </span>
                  <h3 className="text-[13px] font-semibold text-white line-clamp-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Real Location Notice */}
        <div className="mt-6 flex items-center gap-2 text-xs text-[#9CA3AF]">
          <MapPin className="w-3.5 h-3.5 text-[#8E1A27] shrink-0" />
          <span>
            Photographs taken on-site at ABSIM AUTOMOTIVE, behind AMCE in Megenagna, Addis Ababa.
          </span>
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0D10]/95 backdrop-blur-md p-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 p-2 text-[#9CA3AF] hover:text-white bg-[#14171D] rounded-full border border-[#232832] transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>

          {filteredItems.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 p-2.5 text-[#9CA3AF] hover:text-white bg-[#14171D] rounded-full border border-[#232832] transition-colors z-50"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 p-2.5 text-[#9CA3AF] hover:text-white bg-[#14171D] rounded-full border border-[#232832] transition-colors z-50"
                aria-label="Next Image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl max-h-[85vh] flex flex-col items-center bg-[#14171D] border border-[#2D333B] rounded-md overflow-hidden shadow-2xl"
          >
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[66vh] w-auto object-contain block"
            />
            <div className="w-full p-4 bg-[#0B0D10] border-t border-[#232832]">
              <span className="text-[10px] tracking-wider uppercase text-[#8E1A27] font-bold">
                {filteredItems[lightboxIndex].category} · Image {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <h4 className="text-base font-bold text-white font-heading mt-0.5">
                {filteredItems[lightboxIndex].title}
              </h4>
              <p className="text-xs text-[#9CA3AF] mt-0.5">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
