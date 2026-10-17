import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { BRAND_CONFIG } from '../config/brand';
import { AbsimLogo } from './AbsimLogo';

interface NavbarProps {
  onSelectService?: (serviceName: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Our Standard', href: '#standard' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090B0D]/95 backdrop-blur-md border-b border-[#1F262D]'
            : 'bg-gradient-to-b from-[#090B0D]/90 via-[#090B0D]/50 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Logo & Wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 hover:opacity-90 transition-opacity whitespace-nowrap shrink-0"
            aria-label="ABSIM AUTOMOTIVE Home"
          >
            <AbsimLogo variant="compact" />
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs tracking-wider uppercase font-medium text-[#C4C9CE]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-[#F5F4F0] hover:border-b hover:border-[#BCA77A] pb-0.5 transition-colors whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${BRAND_CONFIG.phoneRaw}`}
              className="text-xs text-[#C4C9CE] hover:text-[#F5F4F0] flex items-center gap-1.5 transition-colors"
              title="Call ABSIM Automotive"
            >
              <Phone className="w-3.5 h-3.5 text-[#BCA77A]" />
              <span className="tabular-nums font-mono">{BRAND_CONFIG.phoneDisplay}</span>
            </a>
            <a
              href="#booking"
              onClick={(e) => handleLinkClick(e, '#booking')}
              className="px-4 py-2 text-xs font-semibold tracking-wider uppercase text-[#090B0D] bg-[#BCA77A] hover:bg-[#d1bd93] active:scale-[0.98] transition-all rounded-sm whitespace-nowrap shrink-0 shadow-sm"
            >
              Book a Service
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#C4C9CE] hover:text-[#F5F4F0] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#BCA77A]"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#090B0D]/95 backdrop-blur-xl lg:hidden flex flex-col justify-between pt-24 pb-10 px-8 transition-opacity duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col gap-6">
            <div className="pb-3 border-b border-[#1F262D]">
              <AbsimLogo variant="compact" />
            </div>
            <div className="text-[11px] uppercase tracking-widest text-[#BCA77A]">Navigation</div>
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xl font-medium tracking-wide text-[#F5F4F0] hover:text-[#BCA77A] transition-colors py-1 border-b border-[#1F262D]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-[#1F262D]">
            <div className="flex items-center justify-between text-xs text-[#C4C9CE]">
              <span>Location:</span>
              <span className="text-[#F5F4F0]">Megenagna, Addis Ababa</span>
            </div>
            <a
              href={`tel:${BRAND_CONFIG.phoneRaw}`}
              className="flex items-center justify-between text-xs text-[#C4C9CE] py-1"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#BCA77A]" /> Direct Phone
              </span>
              <span className="text-[#F5F4F0] tabular-nums font-mono">{BRAND_CONFIG.phoneDisplay}</span>
            </a>
            <a
              href="#booking"
              onClick={(e) => handleLinkClick(e, '#booking')}
              className="w-full text-center py-3 text-xs uppercase tracking-wider font-semibold text-[#090B0D] bg-[#BCA77A] hover:bg-[#d1bd93] transition-colors rounded-sm flex items-center justify-center gap-1.5"
            >
              <span>Book Your Service</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
