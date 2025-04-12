
import React from 'react';


export const Navbar = (props) => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <div  className="text-2xl font-bold text-indigo-600 logo"><img style={{ height: '75px' }} align="left" src="/images/logo.png" alt=""></img></div>
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-indigo-600">Home</a>
          <a href="#" className="hover:text-indigo-600">About Us</a>
          <a href="#" className="hover:text-indigo-600">Knowledge Centre</a>
          <a href="#" className="hover:text-indigo-600">Blog</a>
          <a href="#" className="hover:text-indigo-600">FAQ</a>
          <a href="#" className="hover:text-indigo-600">Contact Us</a>
          <a href="#" className="hover:text-indigo-600">Team</a>
        </div>
        <button className="ml-4 px-5 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition duration-300">
          Login
        </button>
        
      </div>
    </nav>
  );
};

export default Navbar;
