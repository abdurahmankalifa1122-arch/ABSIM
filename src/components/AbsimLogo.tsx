import React from 'react';
import logoTransparent from '../assets/images/absim_logo_transparent.png';
import logoTrimmed from '../assets/images/absim_logo_trimmed.png';

interface AbsimLogoProps {
  variant?: 'compact' | 'full' | 'hero' | 'emblem';
  className?: string;
  showTagline?: boolean;
}

export const AbsimLogo: React.FC<AbsimLogoProps> = ({
  variant = 'compact',
  className = '',
  showTagline = false,
}) => {
  if (variant === 'hero') {
    return (
      <div className={`inline-flex flex-col items-start ${className}`}>
        <img
          src={logoTransparent}
          alt="ABSIM AUTOMOTIVE Official Logo"
          className="h-20 sm:h-24 md:h-28 w-auto object-contain filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
        />
        {showTagline && (
          <div className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#BCA77A] font-semibold mt-2 pl-1">
            Cleaner Cars · Better Drives
          </div>
        )}
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`inline-flex flex-col items-start ${className}`}>
        <img
          src={logoTransparent}
          alt="ABSIM AUTOMOTIVE Official Logo"
          className="h-16 sm:h-20 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
        />
        {showTagline && (
          <div className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase text-[#BCA77A] font-medium mt-1.5 pl-0.5">
            Cleaner Cars · Better Drives
          </div>
        )}
      </div>
    );
  }

  if (variant === 'emblem') {
    return (
      <div className={`relative inline-flex items-center justify-center overflow-hidden rounded-sm border border-[#242A30] bg-[#15191D]/90 p-2 backdrop-blur-md shadow-xl ${className}`}>
        <img
          src={logoTrimmed}
          alt="ABSIM AUTOMOTIVE Official Logo"
          className="h-14 sm:h-16 w-auto object-contain"
        />
      </div>
    );
  }

  // Default 'compact' (used in Navbar)
  // Perfectly proportioned for header visibility, fully legible, no clipping!
  return (
    <div className={`inline-flex items-center gap-2 select-none py-0.5 ${className}`}>
      <img
        src={logoTransparent}
        alt="ABSIM AUTOMOTIVE"
        className="h-11 sm:h-13 w-auto object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
      />
    </div>
  );
};
