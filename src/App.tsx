/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { BrandExperience } from './components/BrandExperience';
import { AbsimStandard } from './components/AbsimStandard';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { Gallery } from './components/Gallery';
import { WhatToExpect } from './components/WhatToExpect';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string>('PREMIUM CAR WASH');

  const handleSelectService = (title: string) => {
    setSelectedServiceTitle(title);
  };

  return (
    <div className="min-h-screen bg-[#090B0D] text-[#F5F4F0] flex flex-col font-sans selection:bg-[#BCA77A]/25 selection:text-[#F5F4F0]">
      {/* Top Navigation */}
      <Navbar onSelectService={handleSelectService} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onBookClick={() => {
            document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreClick={() => {
            document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Services Section with 6 Categories */}
        <Services onSelectService={handleSelectService} />

        {/* Brand Experience Editorial Split */}
        <BrandExperience />

        {/* The ABSIM Standard: 4 Core Principles */}
        <AbsimStandard />

        {/* Interactive Surface Depth Comparison Slider */}
        <BeforeAfterSlider />

        {/* Gallery with Lightbox */}
        <Gallery />

        {/* Transparent Customer Journey: What to Expect */}
        <WhatToExpect />

        {/* Functional Booking Inquiry Form with WhatsApp encoding */}
        <BookingSection
          selectedServiceTitle={selectedServiceTitle}
          onServiceChange={setSelectedServiceTitle}
        />

        {/* Contact, Location & Driving Directions */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Discrete Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
