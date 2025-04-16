import React from 'react';
import { FaClock, FaCheckCircle } from 'react-icons/fa';

const marketData = [
  { name: 'NIFTY 50', value: '23,519.35', change: '-72.60', percent: '-0.31%' },
  { name: 'BSE Sensex', value: '77,414.92', change: '-191.51', percent: '-0.25%' },
  { name: 'NIFTY Bank', value: '51,564.85', change: '-11.00', percent: '-0.02%' },
  { name: 'NIFTY 50 Future', value: '23,642.00', change: '+4.35', percent: '+0.02%' },
  { name: 'US 500', value: '5,506.40', change: '-74.5', percent: '-1.34%' },
  { name: 'FTSE 100', value: '8,548.22', change: '-110.63', percent: '-1.28%' },
  { name: 'Dollar Index', value: '103.825', change: '+0.116', percent: '-0.11%' },
  {name: "NASDAQ",value: "15,234.91",change: "+142.57",percent: "+0.94%"},
  
];

const MarketDashboard = () => {
  return (<>
    <h2 className="mb-2 font-bold text-center py-4 text-2xl">Market Watch</h2>
    <div className="flex flex-col lg:flex-row gap-6 p-4">
      
      {/* Quick Insights - Left Side */}
      <div className="lg:w-1/2 flex flex-col">
      
        <img
          src="/images/i21.png"
          alt="Market Analysis"
          className="rounded-lg w-full object-cover"
          style={{ height: '450px' }}
        />
      </div>

      {/* Market Watch - Right Side */}
      <div className="lg:w-1/2 flex flex-col">
        
        <div
          className="bg-white border rounded-lg overflow-hidden shadow-md"
          style={{ height: '450px', overflowY: 'auto' }} // Match height with image and scroll if needed
        >
          {marketData.map((item, index) => {
            const isNegative = item.change?.includes('-');
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex items-center justify-between px-4 py-3 text-sm ${
                  isEven ? 'bg-white' : 'bg-green-50'
                }`}
              >
                <div className="w-1/4 font-medium text-gray-800">{item.name}</div>
                <div className="w-1/4 text-right font-semibold text-gray-900">{item.value}</div>
                <div
                  className={`w-1/6 text-right ${
                    isNegative ? 'text-red-500' : 'text-green-600'
                  }`}
                >
                  {item.change}
                </div>
                <div
                  className={`w-1/6 text-right ${
                    isNegative ? 'text-red-500' : 'text-green-600'
                  }`}
                >
                  {item.percent}
                </div>
                <div className="w-1/12 text-right text-lg">
                  {isNegative ? (
                    <FaClock className="text-red-500" />
                  ) : (
                    <FaCheckCircle className="text-green-500" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
};

export default MarketDashboard;
