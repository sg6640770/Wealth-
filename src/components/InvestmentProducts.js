import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const products = [
  {
    logo: '/images/i17.png',
    title: 'Mixed Global Funds',
    description: '2 Large Cap | 1 Mid Cap | 1 Small Cap | 1 Global Fund',
    performance: ['15%', '20%', '30%'],
    durations: ['3Y', '5Y', '10Y'],
  },
  {
    logo: '/images/i18.png',
    title: 'Large Cap',
    description: '5 Large Cap',
    performance: ['15%', '20%', '30%'],
    durations: ['3Y', '5Y', '10Y'],
  },
  {
    logo: '/images/i19.png',
    title: 'Mid Cap',
    description: '5 Mid Cap',
    performance: ['15%', '20%', '30%'],
    durations: ['3Y', '5Y', '10Y'],
  },
];

const InvestmentProducts = () => {
  return (
    <section className="py-5 bg-white text-center">
      <div className="container">
        <h2 className="mb-5 fw-bold">Multiple Investment Products</h2>
        <div className="row g-4">
          {products.map((product, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card h-100 border rounded-4 shadow-sm p-3">
                <img src={product.logo} alt={product.title} className="card-img-top mx-auto" style={{ width: '80px', height: '80px' }} />
                <div className="card-body text-start">
                  <h5 className="card-title fw-bold">{product.title}</h5>
                  <p className="text-muted small">{product.description}</p>

                  {product.durations.map((duration, i) => (
                    <div className="mb-2" key={i}>
                      <div className="d-flex justify-content-between small">
                        <span>{duration}</span>
                        <span className="text-success fw-bold">{product.performance[i]}</span>
                      </div>
                      <div className="progress" style={{ height: '10px' }}>
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: product.performance[i] }}
                          aria-valuenow={parseInt(product.performance[i])}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  ))}

                  <div className="d-flex justify-content-between mt-4">
                    <button className="btn btn-primary rounded-pill">
                      🛒 Buy Now
                    </button>
                    <button className="btn btn-outline-primary rounded-pill">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentProducts;
