
import React from 'react';

interface SplineBackgroundProps {
  scrollY: number;
}

const SplineBackground: React.FC<SplineBackgroundProps> = () => {
  return (
    <div className="relative w-full h-full overflow-hidden bg-[#050208]">
      <div className="absolute inset-0 w-full h-full pointer-events-auto overflow-hidden">
        <iframe 
          src="https://my.spline.design/robotfollowcursorforlandingpage-STF7oC0sX63S883fQ2u767zx/" 
          frameBorder="0" 
          width="100%" 
          height="100%"
          className="w-full h-full pointer-events-auto"
          title="Interactive 3D Robot"
          style={{ border: 'none' }}
        />
      </div>
      
      {/* Blending Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050208] pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#050208] via-transparent to-[#050208] pointer-events-none opacity-40"></div>
    </div>
  );
};

export default SplineBackground;
