import React from 'react';
import { Eye, Droplets, Layers, ShieldCheck } from 'lucide-react';

export const WhatToExpect: React.FC = () => {
  const steps = [
    {
      icon: Eye,
      step: 'Step 01',
      title: 'Arrival & Condition Check',
      desc: 'When your car arrives at our Megenagna facility, we review your paint condition, interior wear points, and specific areas of concern before starting.',
    },
    {
      icon: Droplets,
      step: 'Step 02',
      title: 'Decontamination & Wash',
      desc: 'We execute a multi-bucket wash system with pH-neutral snow foam to lift dust, road oil, and brake particulates without scratching the lacquer.',
    },
    {
      icon: Layers,
      step: 'Step 03',
      title: 'Targeted Treatment',
      desc: 'Whether deep extraction of carpets, gentle conditioning of leather surfaces, or sealant application to bodywork, each material receives dedicated care.',
    },
    {
      icon: ShieldCheck,
      step: 'Step 04',
      title: 'Inspection & Handover',
      desc: 'Before key handover, we conduct a final quality inspection of window clarity, door jambs, and tire finish to ensure pristine delivery.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#090B0D] border-t border-[#1F262D]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs tracking-widest text-[#BCA77A] uppercase font-semibold mb-3">
            TRANSPARENT PROCESS
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F4F0] leading-tight mb-4 font-serif-brand">
            WHAT TO EXPECT AT ABSIM
          </h2>
          <p className="text-base text-[#C4C9CE] leading-relaxed">
            We believe trust is earned through clear steps, honest guidance, and consistent care.
            Here is how your service visit is handled from arrival to collection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#15191D] border border-[#242A30] p-6 sm:p-7 rounded-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-[#BCA77A] tracking-wider uppercase">
                      {item.step}
                    </span>
                    <div className="w-8 h-8 rounded-sm bg-[#090B0D] border border-[#242A30] flex items-center justify-center text-[#BCA77A]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-[#F5F4F0] mb-3 font-serif-brand">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C4C9CE] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#1F262D] text-[11px] text-[#C4C9CE]/60 uppercase tracking-widest">
                  ABSIM Protocol
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
