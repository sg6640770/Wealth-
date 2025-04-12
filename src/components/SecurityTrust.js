import React from 'react';

const SecurityTrust = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Security & Trust
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          15+ Years of Advisory Experience
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-gray-700 font-medium">
          <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
          <img style={{width:'262px',height:'262px'}} src="/images/i11.jpg" alt=""/>
        
            <b>Partnered with India’s Top Fund Houses</b>
           
          </div>
          <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
          <img style={{width:'262px',height:'262px'}} src="/images/i9.jpeg" alt=""/>
            <b>Zero Hidden Fees</b>
          </div>
          <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
          <img style={{width:'262px',height:'262px'}}  src="/images/i12.png" alt=""/>
            <b>Direct Fund Investments Advisory</b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityTrust;
