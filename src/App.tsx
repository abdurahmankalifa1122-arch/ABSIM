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

  const handleSelectService = (title: string) => {
    setSelectedServiceTitle(title);
  };

  return (
    <div className="min-h-screen bg-[#0B0D10] text-[#E2E4E8] flex flex-col font-sans selection:bg-[#8E1A27]/30 selection:text-white">
      {/* Top Navigation */}
      <Navbar onSelectService={handleSelectService} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* A. Hero Section with Real Entrance Photo */}
        <Hero
          onBookClick={() => {
            document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreClick={() => {
            document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* B. About ABSIM with Real Entrance Photograph and Facility Details */}
        <AboutSection />

        {/* C. Our Services (6 Core Services with Real Photos) */}
        <Services onSelectService={handleSelectService} />

        {/* D. Our Equipment (5 Dedicated European Workshop Machines) */}
        <EquipmentSection />

        {/* E. Our Workshop (Authentic Photo Gallery with Lightbox) */}
        <Gallery />

        {/* The ABSIM Standard: 4 Core Workshop Commitments */}
        <AbsimStandard />

        {/* Booking Inquiry Section with WhatsApp Routing */}
        <BookingSection
          selectedServiceTitle={selectedServiceTitle}
          onServiceChange={setSelectedServiceTitle}
        />

        {/* F. Contact Section (Addis Ababa Behind AMCE, Directions & Map) */}
        <ContactSection />
      </main>

      {/* G. Footer with Official Logo & Tagline */}
      <Footer />

      {/* Discrete Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
