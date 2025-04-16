"use client"
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import "./style.css"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar bg-white shadow-sm py-3 sticky-top">
        <div className="container-fluid px-4 d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#">
            <img src="/images/logo.png" alt="Logo" style={{ height: '60px' }} />
          </a>

          {/* Mobile toggle button */}
          <button
            className="d-lg-none btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav links */}
          <div className={`d-lg-flex flex-grow-1 justify-content-center ${menuOpen ? 'd-block' : 'd-none'}`}>
            <ul className="navbar-nav flex-lg-row flex-column gap-3 align-items-center">
              <li className="nav-item"><a className="nav-link fw-medium" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link fw-medium" href="#">About Us</a></li>
              <li className="nav-item"><a className="nav-link fw-medium" href="#">Team</a></li>
              <li className="nav-item"><a className="nav-link fw-medium" href="#">Knowledge Centre</a></li>
              <li className="nav-item"><a className="nav-link fw-medium" href="#">Blog</a></li>
              <li className="nav-item"><a className="nav-link fw-medium" href="#">FAQ</a></li>
              <li className="nav-item"><a className="nav-link fw-medium" href="#">Contact Us</a></li>
              <li className="nav-item"><a className="nav-link fw-medium" href="#">Login</a></li>
            </ul>
          </div>

          {/* Social icons (desktop only) */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            <a href="#" className="text-dark fs-5"><FaFacebookF /></a>
            <a href="#" className="text-dark fs-5"><FaTwitter /></a>
            <a href="#" className="text-dark fs-5"><FaInstagram /></a>
            <a href="#" className="text-dark fs-5"><FaLinkedinIn /></a>
            <a href="#" className="text-dark fs-5"><FaYoutube /></a>
          </div>
        </div>
      </nav>

      <div className="marquee-container bg-black text-center py-2 text-uppercase fw-bold fs-6 d-flex justify-content-center flex-wrap">
        <span className="marquee text-danger mx-3">Nifty</span>
        <span className="marquee text-success mx-3">Nifty Auto</span>
        <span className="marquee text-danger mx-3">Nifty Pharma</span>
        <span className="marquee text-success mx-3">Nifty Energy</span>
        <span className="marquee text-danger mx-3">Nifty Metal</span>
      </div>
    </>
  );
};

export default Navbar;
