import React from 'react';

export const HeroSection = () => {
  return (
    <section className="bg-indigo-50 py-16 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          AI-Powered Investment Strategies for <br />
          <span className="text-indigo-600">Maximum Returns</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Curated mutual funds picked by top fund managers. <br className="hidden md:block" />
          AI-driven insights for smart investors.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg hover:bg-indigo-700 transition">
            Start Investing Now
          </button>
          <img align="center" src="/images/i1.png" alt=""></img>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
