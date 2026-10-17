import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { GALLERY_ITEMS } from '../config/brand';

export const Gallery: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Exterior', 'Interior', 'Wheels', 'Studio Process'];

  const filteredItems =
    selectedFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

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

  // Keyboard navigation for lightbox
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
    <section id="gallery" className="py-24 sm:py-32 bg-[#0E1115] border-t border-[#1F262D]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <div className="text-xs tracking-widest text-[#BCA77A] uppercase font-semibold mb-3">
              STUDIO PORTFOLIO
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F4F0] leading-tight font-serif-brand">
              THE FINISH SPEAKS FOR ITSELF.
            </h2>
          </div>

          {/* Interactive Filter Buttons (segmented control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#15191D] border border-[#242A30] rounded-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedFilter(cat);
                  setLightboxIndex(null);
                }}
                className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors rounded-sm ${
                  selectedFilter === cat
                    ? 'bg-[#BCA77A] text-[#090B0D] font-semibold'
                    : 'text-[#C4C9CE] hover:text-[#F5F4F0]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Masonry/Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative cursor-pointer overflow-hidden rounded-sm bg-[#15191D] border border-[#242A30] hover:border-[#BCA77A]/50 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090B0D]/90 via-[#090B0D]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="p-3 rounded-full bg-[#090B0D]/80 backdrop-blur-sm border border-[#BCA77A] text-[#BCA77A]">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[10px] tracking-wider uppercase text-[#BCA77A] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-semibold text-[#F5F4F0] line-clamp-1">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer per brief */}
        <div className="mt-8 flex items-center gap-2 text-xs text-[#C4C9CE]/60">
          <Info className="w-3.5 h-3.5 text-[#BCA77A]" />
          <span>
            Illustrative portfolio showcasing vehicle care standards practiced at ABSIM Automotive. Authentic client vehicles updated as studio photography completes.
          </span>
        </div>
      </div>

      {/* Accessible Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          onClick={() => setLightboxIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#090B0D]/95 backdrop-blur-lg p-4"
          role="dialog"
          aria-modal="true"
        >
          {/* Close Button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 text-[#C4C9CE] hover:text-[#F5F4F0] bg-[#15191D]/80 rounded-full border border-[#242A30] transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          {filteredItems.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-[#C4C9CE] hover:text-[#F5F4F0] bg-[#15191D]/80 rounded-full border border-[#242A30] transition-colors z-50"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-[#C4C9CE] hover:text-[#F5F4F0] bg-[#15191D]/80 rounded-full border border-[#242A30] transition-colors z-50"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Lightbox Content Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center bg-[#15191D] border border-[#242A30] rounded-sm overflow-hidden"
          >
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              referrerPolicy="no-referrer"
              className="max-h-[68vh] w-auto object-contain"
            />
            <div className="w-full p-4 sm:p-5 bg-[#090B0D] border-t border-[#242A30] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] tracking-wider uppercase text-[#BCA77A]">
                  {filteredItems[lightboxIndex].category} · Image {lightboxIndex + 1} of {filteredItems.length}
                </span>
                <h4 className="text-base font-bold text-[#F5F4F0] font-serif-brand">
                  {filteredItems[lightboxIndex].title}
                </h4>
                <p className="text-xs text-[#C4C9CE]">
                  {filteredItems[lightboxIndex].caption}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
