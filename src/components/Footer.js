import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Start Investing & Grow Your Wealth Today!</h2>
        <p className="text-indigo-100 mb-8 text-lg">Join Us For Smart Investing</p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Get Started
          </button>
          <button className="bg-transparent border border-white px-6 py-3 rounded-full hover:bg-white hover:text-indigo-600 transition">
            Talk to an Expert
          </button>
        </div>

        <p className="text-indigo-200 text-sm">&copy; {new Date().getFullYear()} Wealth+. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
