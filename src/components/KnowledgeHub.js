import React from 'react';

const articles = [
  {
    img:"/images/i5.jpeg",
    title: "Beginner’s Guide to Mutual Funds",
    desc: "Learn the basics of mutual fund investing and how to get started.",
  },
  {
    img:"/images/i6.jpeg",
    title: "Market Predictions & Investment Strategies",
    desc: "Expert insights to navigate market trends with confidence.",
  },
  {
    img:"/images/i7.jpeg",
    title: "Tax Planning & Wealth Creation",
    desc: "Optimize your investments with smart tax-saving strategies.",
  },
];

const KnowledgeHub = () => {
  return (
    <section className="bg-indigo-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Knowledge Hub
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Latest Investment Insights & Smart Money Tips
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition text-left">
              <img style={{width:'265px',height:'171px'}}  src={item.img} alt=""/>
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHub;
