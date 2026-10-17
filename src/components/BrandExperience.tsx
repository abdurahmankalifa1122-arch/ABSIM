import React from 'react';
import { Sparkles, Shield, Compass } from 'lucide-react';

export const BrandExperience: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#090B0D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with Subtle Framing */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-[#15191D] border border-[#242A30]">
              <img
                src="/src/assets/images/detailing_studio_equipment_1792228177222.jpg"
                alt="Professional automotive detailing equipment and polished black vehicle finish in studio"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090B0D]/60 via-transparent to-transparent" />
            </div>

            {/* Subtle Editorial Accent Note */}
            <div className="mt-4 flex items-center justify-between text-xs text-[#C4C9CE]">
              <span className="tracking-widest uppercase text-[11px] text-[#BCA77A]">Precision Equipment</span>
              <span className="font-mono text-[11px]">STUDIO WORKBENCH · ADDIS ABABA</span>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 lg:pl-4">
            <div className="text-xs tracking-widest text-[#BCA77A] uppercase font-semibold mb-3">
              THE ABSIM PHILOSOPHY
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F4F0] leading-tight mb-6 font-serif-brand">
              DETAIL IS THE DIFFERENCE.
            </h2>

            <p className="text-base sm:text-lg text-[#C4C9CE] leading-relaxed mb-8">
              Great vehicle care is about more than a quick clean. It is about careful work, the right approach for each surface, and attention to the details that make a vehicle look its best.
            </p>

            <div className="space-y-6 pt-6 border-t border-[#1F262D]">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-sm bg-[#15191D] border border-[#242A30] flex items-center justify-center shrink-0 mt-0.5 text-[#BCA77A]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#F5F4F0] mb-1">
                    Surface-Specific Approach
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C4C9CE] leading-relaxed">
                    Clear coat, bare metal, leather, and plastics require individual handling. We adjust agitation and chemicals for every distinct material.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-sm bg-[#15191D] border border-[#242A30] flex items-center justify-center shrink-0 mt-0.5 text-[#BCA77A]">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#F5F4F0] mb-1">
                    Respect for Vehicle Surfaces
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C4C9CE] leading-relaxed">
                    Avoiding aggressive shortcuts, harsh acidic cleaners, or worn wash sponges that cause swirl marks and marring over time.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-sm bg-[#15191D] border border-[#242A30] flex items-center justify-center shrink-0 mt-0.5 text-[#BCA77A]">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#F5F4F0] mb-1">
                    Consistent Execution
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C4C9CE] leading-relaxed">
                    Every vehicle undergoes the same disciplined workflow from wheels-first prep to interior glass finishing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
