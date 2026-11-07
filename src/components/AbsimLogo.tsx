import React from 'react';
import officialLogo from '../assets/images/absim_official_logo_cropped.jpg';

interface AbsimLogoProps {
  variant?: 'navbar' | 'compact' | 'footer' | 'hero' | 'badge';
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
        <div className="relative overflow-hidden rounded border border-[#8E1A27]/30 bg-[#161B22] p-1 shadow-md">
          <img
            src={officialLogo}
            alt="ABSIM AUTOMOTIVE — Working Hard, Serving Well"
            className="h-14 sm:h-16 w-auto object-contain rounded-sm"
          />
        </div>
        {showTagline && (
          <div className="mt-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9CA3AF]">
            <span className="h-0.5 w-3 bg-[#8E1A27]" />
            <span>WORKING HARD, SERVING WELL</span>
            <span className="h-0.5 w-3 bg-[#8E1A27]" />
          </div>
        )}
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`inline-flex flex-col items-start ${className}`}>
        <div className="overflow-hidden rounded border border-[#8E1A27]/40 bg-[#14171D] p-1 shadow-sm">
          <img
            src={officialLogo}
            alt="ABSIM AUTOMOTIVE"
            className="h-12 sm:h-14 w-auto object-contain rounded-sm"
          />
        </div>
        <div className="mt-2.5">
          <div className="text-sm font-bold tracking-wider text-white font-heading">
            ABSIM AUTOMOTIVE
          </div>
          <div className="text-[10px] font-semibold tracking-[0.14em] uppercase text-[#9CA3AF]">
            WORKING HARD, SERVING WELL
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center overflow-hidden rounded border border-[#8E1A27]/30 bg-[#14171D] p-1 ${className}`}>
        <img
          src={officialLogo}
          alt="ABSIM AUTOMOTIVE"
          className="h-9 sm:h-10 w-auto object-contain rounded-sm"
        />
      </div>
    );
  }

  // Default 'navbar' / 'compact'
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <div className="overflow-hidden rounded border border-[#8E1A27]/35 bg-[#14171D] p-0.5 shadow-sm hover:border-[#8E1A27] transition-colors">
        <img
          src={officialLogo}
          alt="ABSIM AUTOMOTIVE Logo"
          className="h-8 sm:h-9 w-auto object-contain rounded-sm"
        />
      </div>
      <div className="hidden sm:flex flex-col text-left">
        <span className="text-[13px] font-bold tracking-wider text-white uppercase leading-tight font-heading">
          ABSIM AUTOMOTIVE
        </span>
        <span className="text-[9px] font-semibold tracking-[0.14em] uppercase text-[#9CA3AF]">
          WORKING HARD, SERVING WELL
        </span>
      </div>
    </div>
  );
};
