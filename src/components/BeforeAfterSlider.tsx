import React, { useState, useRef } from 'react';
import { Sparkles } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-20 bg-[#090B0D] border-t border-[#1F262D]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs tracking-widest text-[#BCA77A] uppercase font-semibold mb-3">
            VISUAL TRANSFORMATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F4F0] leading-tight mb-4 font-serif-brand">
            RESTORED SURFACE DEPTH
          </h2>
          <p className="text-sm sm:text-base text-[#C4C9CE] leading-relaxed">
            Drag the slider to observe how multi-stage paint cleansing and fine clear coat finishing removes dull haze and reveals true depth.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div
          ref={containerRef}
          onMouseDown={() => (isDragging.current = true)}
          onMouseUp={() => (isDragging.current = false)}
          onMouseLeave={() => (isDragging.current = false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-sm overflow-hidden select-none cursor-ew-resize border border-[#242A30] bg-[#15191D]"
        >
          {/* AFTER (Full background) */}
          <img
            src="/src/assets/images/hero_luxury_detailing_1792227721860.jpg"
            alt="Restored mirror finish on black luxury car"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover filter contrast-[1.1] brightness-95"
          />
          <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-[#090B0D]/80 backdrop-blur-sm border border-[#BCA77A]/40 text-xs font-semibold text-[#BCA77A] tracking-wider uppercase">
            Restored Finish
          </div>

          {/* BEFORE (Clipped layer) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
              }}
            >
              <img
                src="/src/assets/images/hero_luxury_detailing_1792227721860.jpg"
                alt="Uncorrected car finish with dull haze"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-[0.78] contrast-[0.85] blur-[0.8px] sepia-[0.1]"
              />
              <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#090B0D]/80 backdrop-blur-sm border border-[#242A30] text-xs font-semibold text-[#C4C9CE] tracking-wider uppercase">
                Prior to Detailing
              </div>
            </div>
          </div>

          {/* Divider Handle */}
          <div
            className="absolute top-0 bottom-0 z-20 w-0.5 bg-[#BCA77A]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#090B0D] border-2 border-[#BCA77A] flex items-center justify-center text-[#BCA77A] shadow-xl">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-[#C4C9CE]">
          <span>← Slide Left: Reveal Restored Clear Coat</span>
          <span>Slide Right: Inspect Pre-Wash State →</span>
        </div>
      </div>
    </section>
  );
};
