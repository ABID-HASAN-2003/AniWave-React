import React from 'react';
import img from '../../assets/logo/AniWave.png';
import DarkVeil from './DarkVeil'; // DarkVeil holo tumar Aurora effect

const Navber = () => {
  return (
    <div>
    <div className="relative w-full  h-20 overflow-hidden">
      
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DarkVeil
          hueShift={0}             // Color hue shift
          noiseIntensity={0.1}     // Noise effect
          scanlineIntensity={0.05} // Scanline effect
          speed={1.5}              // Animation speed
          scanlineFrequency={50}   // Scanline frequency
          warpAmount={0.1}        // Warp distortion
        />
      </div>

      {/* Navbar Content */}
      <div className="container mx-auto relative z-10 bg-transparent flex px-4 items-center h-full">
        <div className="flex items-center flex-1 gap-2 md:gap-5">
          <img
            className="h-12 w-12 rounded-full"
            alt="AniWave Logo"
            src={img}
          />
          <a className="font-bold text-xl md:text-2xl lg:text-4xl text-white font-pts">AniWave</a>
        </div>
      </div>
    </div>
    <div>
      <hr className="border-t-2 border-gray-300" />
    </div>
    </div>
  );
}

export default Navber;
