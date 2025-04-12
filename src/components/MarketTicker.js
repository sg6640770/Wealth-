import React from 'react';

export const marketData = [
  { name: 'NIFTY 50', value: '23,519.35', change: '-72.60', percent: '-0.31%' },
  { name: 'BSE Sensex', value: '77,414.92', change: '-191.51' },
  { name: 'NIFTY Bank', value: '51,564.85', change: '-11.00' },
  
  { name: 'US 500', value: '5,506.40', change: '-74.5', percent: '-1.34%' },
  { name: 'FTSE 100', value: '8,548.22', change: '-110.63', percent: '-1.28%' },
  { name: 'Dollar Index', value: '103.825', change: '+0.116', percent: '-0.11%' },
];

export const MarketTicker = () => {
  return (
    <section className="bg-white py-6 px-4 border-y border-gray-200">
      <div className="max-w-7xl mx-auto overflow-x-auto">
        <div className="flex flex-wrap justify-between gap-3 px-3">
          {marketData.map((item, index) => (
            
              <card key={'id'+index} className="inline-block w-40 text-center p-4 shadow-md rounded-xl">
              <h3 className="font-semibold text-sm text-gray-700">{item.name}</h3>
              <p className="text-xl font-bold text-gray-900">{item.value}</p>
              <p className="text-sm text-red-500">
                {item.change} {item.percent && `(${item.percent})`}
              </p>
              </card>
           
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketTicker;
