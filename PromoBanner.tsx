import React from 'react';
import { IMAGES } from '../constants';

const PromoBanner: React.FC = () => {
  return (
    <div className="px-4 max-w-sm mx-auto mb-6">
      <div className="relative w-full rounded-xl overflow-hidden border border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15)] group">
         {/* Banner Image - Using h-auto to preserve aspect ratio */}
        <img 
          src={IMAGES.PROMO_BANNER}
          alt="Promotion" 
          className="w-full h-auto object-cover block transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default PromoBanner;