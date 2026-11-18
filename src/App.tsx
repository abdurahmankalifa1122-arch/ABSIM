/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { Services } from './components/Services';
import { EquipmentSection } from './components/EquipmentSection';
import { Gallery } from './components/Gallery';
import { AbsimStandard } from './components/AbsimStandard';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string>('Tyre Changing');

  return (
    <div className="min-h-screen bg-[#0B0D10] text-[#E2E4E8] flex flex-col font-sans selection:bg-[#8E1A27]/30 selection:text-white">
      <Navbar />

      <main className="flex-1">
        <Hero
          onExploreClick={() => {
            document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
        <AboutSection />
        <Services onSelectService={setSelectedServiceTitle} />
        <EquipmentSection />
        <Gallery />
        <AbsimStandard />
        <BookingSection
          selectedServiceTitle={selectedServiceTitle}
          onServiceChange={setSelectedServiceTitle}
        />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
