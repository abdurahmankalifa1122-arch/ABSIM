import React from 'react';
import { BRAND_CONFIG } from '../config/brand';

export const AbsimStandard: React.FC = () => {
  const principles = [
    {
      number: '01',
      title: 'Precision & Care',
      description: 'Using dedicated machinery that treats your wheels and vehicle with zero contact damage.',
      detail: 'Scratch-free tyre demounting and dynamic balancing to eliminate vibrations and preserve rim finish.',
    },
    {
      number: '02',
      title: 'Professional Approach',
      description: 'Clean, disciplined, and technically competent service execution.',
      detail: 'Clear explanations, transparent advice, and dependable mechanical diagnostics without hidden costs.',
    },
    {
      number: '03',
      title: 'Certified Machinery',
      description: 'European equipment from Twin Busch Germany, Corghi Italy, and ABAC Italy.',
      detail: 'Calibrated diagnostic equipment maintained to automotive manufacturer standards.',
    },
    {
      number: '04',
      title: 'Responsive Service',
      description: 'Easy communication and walk-in availability in Megenagna.',
      detail: 'Direct WhatsApp assistance, phone booking, and convenient access behind the AMCE compound.',
    },
  ];

  return (
    <section id="standard" className="py-16 sm:py-20 bg-[#0B0D10] border-b border-[#232832]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm bg-[#14171D] border border-[#8E1A27]/40 text-[11px] uppercase tracking-widest text-[#9CA3AF] font-semibold mb-2.5">
            <span>OUR COMMITMENT</span>
            <span className="text-neutral-600">·</span>
            <span className="text-white">{BRAND_CONFIG.tagline}</span>
          </div>
          <h2 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold text-white leading-tight mb-2.5 font-heading">
            The ABSIM Standard
          </h2>
          <p className="text-[15px] sm:text-[16px] text-[#9CA3AF] leading-relaxed">
            The foundational principles that guide every vehicle entering our facility in Addis Ababa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-[#232832] border-y border-[#232832] py-8">
          {principles.map((item, idx) => (
            <div
              key={item.number}
              className={`flex flex-col justify-between ${
                idx === 0 ? 'lg:pr-6' : idx === 3 ? 'lg:pl-6' : 'lg:px-6'
              }`}
            >
              <div>
                <div className="text-xl font-mono text-[#8E1A27] font-bold mb-2">
                  {item.number}
                </div>
                <h3 className="text-base font-bold text-white mb-1.5 font-heading">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#D1D5DB] mb-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <p className="text-[12px] text-[#9CA3AF] leading-relaxed border-t border-[#232832] pt-3 mt-3">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
