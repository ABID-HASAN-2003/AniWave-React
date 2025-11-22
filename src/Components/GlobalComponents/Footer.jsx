// components/Footer.jsx
import React from "react";
import img from '../../assets/logo/AniWave.png';

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
        <div className="grid grid-flow-col gap-4">
          {/* Twitter */}
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609..." />
            </svg>
          </a>

          {/* YouTube */}
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631..." />
            </svg>
          </a>

          {/* Facebook */}
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5..." />
            </svg>
          </a>
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
