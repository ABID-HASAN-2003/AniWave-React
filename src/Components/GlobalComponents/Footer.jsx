// components/Footer.jsx
import React from "react";
import img from '../../assets/logo/AniWave.png';
import { FaYoutube, FaTwitterSquare, FaFacebook } from 'react-icons/fa';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer relative footer-horizontal footer-center 
      text-base-content p-5 md:p-10 lg:p-20 overflow-hidden"
      style={{
        background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,35,90,1) 50%, rgba(0,89,255,1) 100%)"
      }}
    >
      {/* subtle glow layer */}
      <div className="absolute inset-0 bg-blue-500 opacity-20 blur-3xl"></div>

      <nav className="relative z-10">
        <img 
          src={img} 
          alt="AniWave"
          className="h-10 w-10 rounded-full shadow-lg"
        />
      </nav>

      <nav className="grid grid-flow-col gap-4 relative z-10 text-white">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>

      {/* Social Media Icons */}
      <nav className="relative z-10 text-white">
        <div className="grid grid-flow-col gap-10 text-3xl">
         <FaYoutube />
         <FaFacebook />
         <FaTwitterSquare />
        </div>
      </nav>

      {/* Copyright */}
      <aside className="relative z-10 text-white">
        <p>Copyright © {currentYear} - All rights reserved by AniWave</p>
      </aside>
    </footer>
  );
};

export default Footer;
