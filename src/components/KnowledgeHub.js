import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const articles = [
  {
    img: "/images/i5.jpeg",
    title: "Beginner’s Guide to Mutual Funds",
    desc: "Learn the basics of mutual fund investing and how to get started.",
  },
  {
    img: "/images/i6.jpeg",
    title: "Market Predictions & Investment Strategies",
    desc: "Expert insights to navigate market trends with confidence.",
  },
  {
    img: "/images/i7.jpeg",
    title: "Tax Planning & Wealth Creation",
    desc: "Optimize your investments with smart tax-saving strategies.",
  },
];

const KnowledgeHub = () => {
  return (
    <section className="py-5 bg-white text-center">
      <div className="container">
        <h2 className="fw-bold display-6 mb-2">Knowledge Hub</h2>
        <p className="text-muted fs-5 mb-5">
          Latest Investment Insights & Smart Money Tips
        </p>

        <div className="row g-4">
          {articles.map((item, index) => (
            <div key={index} className="col-md-4">
              <div className="bg-light rounded-4 h-100 p-3 shadow-sm" style={{ backgroundColor: "#dbeafe" }}>
                <img
                  src={item.img}
                  alt={item.title}
                  className="img-fluid rounded-top mb-3"
                  style={{ height: '180px', objectFit: 'cover', width: '100%' }}
                />
                <h5 className="fw-semibold">{item.title}</h5>
                {/* Optional: Include desc below if needed */}
                {/* <p className="text-muted small">{item.desc}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHub;
