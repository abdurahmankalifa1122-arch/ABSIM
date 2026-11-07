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
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Equipment', href: '#equipment' },
    { label: 'Workshop', href: '#workshop' },
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
            ? 'bg-[#0B0D10]/95 backdrop-blur-md border-b border-[#232832]'
            : 'bg-gradient-to-b from-[#0B0D10]/95 via-[#0B0D10]/60 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-6">
          {/* Zone 1: Brand Logo & Wordmark */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-3 hover:opacity-95 transition-opacity whitespace-nowrap shrink-0"
            aria-label="ABSIM AUTOMOTIVE Home"
          >
            <AbsimLogo variant="compact" />
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs tracking-wider uppercase font-semibold text-[#C4C9CE]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-white hover:border-b-2 hover:border-[#8E1A27] pb-1 transition-all whitespace-nowrap shrink-0"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Call & Book Button */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${BRAND_CONFIG.phoneRaw}`}
              className="text-xs text-[#C4C9CE] hover:text-white flex items-center gap-1.5 transition-colors"
              title="Call ABSIM Automotive"
            >
              <Phone className="w-3.5 h-3.5 text-[#8E1A27]" />
              <span className="tabular-nums font-mono font-medium">{BRAND_CONFIG.phoneDisplay}</span>
            </a>
            <a
              href="#booking"
              onClick={(e) => handleLinkClick(e, '#booking')}
              className="px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-[#7A1420] hover:bg-[#8E1A27] border border-[#8E1A27] active:scale-[0.98] transition-all rounded-sm whitespace-nowrap shrink-0 shadow-md shadow-[#6B111A]/20"
            >
              Book a Service
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#C4C9CE] hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-[#8E1A27]"
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
          className="fixed inset-0 z-40 bg-[#0B0D10]/98 backdrop-blur-xl md:hidden flex flex-col justify-between pt-24 pb-10 px-6 sm:px-8 transition-opacity duration-200"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col gap-6">
            <div className="pb-4 border-b border-[#232832]">
              <AbsimLogo variant="compact" />
            </div>
            <div className="text-[11px] uppercase tracking-widest text-[#8E1A27] font-bold">Navigation</div>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-lg font-medium tracking-wide text-white hover:text-[#C4C9CE] transition-colors py-1.5 border-b border-[#232832]/60"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-[#232832]">
            <div className="flex items-center justify-between text-xs text-[#C4C9CE]">
              <span>Workshop Location:</span>
              <span className="text-white font-medium">Megenagna, Behind AMCE</span>
            </div>
            <a
              href={`tel:${BRAND_CONFIG.phoneRaw}`}
              className="flex items-center justify-between text-xs text-[#C4C9CE] py-1"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#8E1A27]" /> Direct Call
              </span>
              <span className="text-white tabular-nums font-mono font-bold">{BRAND_CONFIG.phoneDisplay}</span>
            </a>
            <a
              href="#booking"
              onClick={(e) => handleLinkClick(e, '#booking')}
              className="w-full text-center py-3 text-xs uppercase tracking-wider font-semibold text-white bg-[#7A1420] hover:bg-[#8E1A27] border border-[#8E1A27] transition-colors rounded-sm flex items-center justify-center gap-1.5 shadow-lg shadow-[#6B111A]/30"
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
