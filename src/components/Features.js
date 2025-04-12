import React from 'react';
import { CheckCircle } from 'lucide-react';

export const features = [
  {
    title: 'Curated by Experts',
    description: 'Funds picked by top fund managers.',
  },
  {
    title: 'AI-Driven Insights',
    description: 'Personalized investment recommendations.',
  },
  {
    title: 'Low-Cost Investing',
    description: 'Save expenses with direct investments.',
  },
  {
    title: 'Secure & Reliable',
    description: '12+ years of market expertise.',
  },
];

const Features = () => {
  return (
    <section className="bg-indigo-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Why Wealth<sup className="text-indigo-600 font-bold">+</sup>?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-6 text-left hover:shadow-lg transition">
              <CheckCircle className="text-indigo-600 mb-3" size={28} />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
