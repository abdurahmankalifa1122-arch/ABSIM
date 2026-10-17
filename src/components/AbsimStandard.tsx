import React from 'react';

export const AbsimStandard: React.FC = () => {
  const principles = [
    {
      number: '01',
      title: 'ATTENTION TO DETAIL',
      description: 'Give visible surfaces and finishing touches the attention they deserve.',
      detail: 'From door jamb crevices and window seals to wheel lug wells and pedal assemblies, the difference lies in the areas commonly overlooked.',
    },
    {
      number: '02',
      title: 'A PROFESSIONAL APPROACH',
      description: 'Present a clean, organized, and respectful vehicle-care experience.',
      detail: 'Clear communication, prompt responses to inquiries, and honest guidance on what your vehicle actually needs.',
    },
    {
      number: '03',
      title: 'CARE FOR YOUR VEHICLE',
      description: 'Use appropriate cleaning methods for the service being performed.',
      detail: 'Matching cleaning agents and microfiber density to vehicle finishes to preserve paint depth and leather resilience.',
    },
    {
      number: '04',
      title: 'CONVENIENT BOOKING',
      description: 'Make it easy for customers to ask questions and arrange their visit.',
      detail: 'Direct WhatsApp communication and phone booking with transparent scheduling in the Megenagna area.',
    },
  ];

  return (
    <section id="standard" className="py-24 sm:py-32 bg-[#0E1115] border-t border-[#1F262D]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="text-xs tracking-widest text-[#BCA77A] uppercase font-semibold mb-3">
            OUR COMMITMENT
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F4F0] leading-tight mb-4 font-serif-brand">
            THE ABSIM STANDARD
          </h2>
          <p className="text-sm sm:text-base text-[#C4C9CE] leading-relaxed">
            The foundational principles that guide every vehicle entering our care in Addis Ababa.
          </p>
        </div>

        {/* Structured 4-Column Grid with Fine Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-[#242A30] border-y border-[#242A30] py-8 sm:py-12">
          {principles.map((item, idx) => (
            <div
              key={item.number}
              className={`flex flex-col justify-between ${
                idx === 0 ? 'lg:pr-8' : idx === 3 ? 'lg:pl-8' : 'lg:px-8'
              }`}
            >
              <div>
                <div className="text-2xl sm:text-3xl font-mono text-[#BCA77A] mb-4">
                  {item.number}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#F5F4F0] mb-3 tracking-wide font-serif-brand">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-[#C4C9CE] mb-4 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <p className="text-xs text-[#C4C9CE]/70 leading-relaxed border-t border-[#1F262D] pt-4 mt-4">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
