import React, { useState } from "react";
import img from "../../assets/logo/AniWave.png";
import DarkVeil from "./DarkVeil";
import { MdMenu } from "react-icons/md";
import SideDrawer from "./SideDrawer";

const Navber = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Sticky Navbar */}
      <div className="fixed top-0 left-0 w-full h-20 z-50 overflow-hidden backdrop-blur-md bg-black/30 shadow-md">

        {/* Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <DarkVeil
            hueShift={0}
            noiseIntensity={0.1}
            scanlineIntensity={0.05}
            speed={1.5}
            scanlineFrequency={50}
            warpAmount={0.1}
          />
        </div>

        {/* Navbar Content */}
        <div className="container mx-auto relative z-10 flex justify-between px-4 items-center h-full">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img className="h-12 w-12 rounded-full" src={img} alt="AniWave Logo" />
            <span className="text-white font-bold text-2xl">AniWave</span>
          </div>

          {/* Menu Button */}
          <button onClick={() => setOpen(true)}>
            <MdMenu size={32} className="text-white" />
          </button>

        </div>
      </div>

      {/* offset so content doesn't hide under navbar */}
      <div className="h-20"></div>

      {/* Sidebar Component */}
      <SideDrawer open={open} setOpen={setOpen} />
    </>
  );
};

export default Navber;
