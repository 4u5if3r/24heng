
import React from 'react';
import { IMAGES } from '../constants';

const HeroLogo: React.FC = () => {
  return (
    <div className="px-4 mb-6">
      <div className="relative w-full max-w-[280px] mx-auto flex items-center justify-center">
        {/* Logo Image with Glow Effect */}
        <img 
          src={IMAGES.HERO_BG}
          alt="24HENG Logo" 
          className="w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(6,182,212,0.6)] hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
};

export default HeroLogo;
