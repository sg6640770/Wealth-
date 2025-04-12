import React from 'react';

const products = [
  {
    logo:'/images/i17.png',
    title: 'Mixed Global Funds',
    description: '2 Large Cap | 1 Mid Cap | 1 Small Cap | 1 Global Fund',
    performance: ['15%', '20%', '30%'],
    durations: ['3Y', '5Y', '10Y'],
  },
  {
    logo:'/images/i18.png',
    title: 'Large Cap',
    description: '5 Large Cap',
    performance: ['15%', '20%', '30%'],
    durations: ['3Y', '5Y', '10Y'],
  },
  {
    logo:'/images/i19.png',
    title: 'Mid Cap',
    description: '5 Mid Cap',
    performance: ['15%', '20%', '30%'],
    durations: ['3Y', '5Y', '10Y'],
  },
];

const InvestmentProducts = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Multiple Investment Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product, idx) => (
            <div key={idx} className="bg-indigo-50 rounded-2xl shadow p-6 hover:shadow-lg transition text-left">
              <img src={product.logo} alt=""></img>
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">{product.title}</h3>
              {product.description && <p className="text-gray-600 text-sm mb-4">{product.description}</p>}

              <div className="flex justify-between text-sm text-gray-500 mb-2">
                {product.durations.map((d, i) => (
                  <span key={i}>{d}</span>
                ))}
              </div>

              <div className="flex justify-between text-lg font-bold text-gray-800 mb-4">
                {product.performance.map((p, i) => (
                  <span key={i}>{p}</span>
                ))}
              </div>

              <div className="flex justify-between gap-4">
                <button className="bg-indigo-600 text-white py-2 px-4 rounded-full hover:bg-indigo-700 transition">
                  Buy Now
                </button>
                <button className="text-indigo-600 border border-indigo-600 py-2 px-4 rounded-full hover:bg-indigo-50 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentProducts;
