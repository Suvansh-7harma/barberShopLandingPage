import React from 'react';
import './Pricing.css';
import { FaCheckCircle } from 'react-icons/fa';
import { BsCalendar2CheckFill } from 'react-icons/bs';

const pricingPlans = [
  {
    title: 'Classic Services',
    price: '$25 / Visit',
    services: [
      "Men's Haircut",
      'Kids Haircut (12 & under)',
      'Senior Haircut (65+)',
      'Military/First Responder Cut',
      'Basic Beard Trim',
      'Neck & Line Cleanup (between cuts)',
    ],
    popular: true,
  },
  {
    title: 'Premium Grooming',
    price: '$40 / Visit',
    services: [
      'Skin Fade',
      'Beard Trim & Shape',
      'Hot Towel Shave',
      'Eyebrow Shaping',
      'Hair Wash',
    ],
  },
  {
    title: 'Luxury Experience',
    price: '$60 / Visit',
    services: [
      'Full Haircut + Beard Styling',
      'Scalp Massage',
      'Facial Cleanse',
      'Hot Towel + Steam',
      'Hair Styling Products',
    ],
  },
];

const Pricing = () => {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-intro">
        <p className="pricing-subheading">QUALITY BARBERING AT FAIR PRICES</p>
        <h2 className="pricing-heading">Our Service Prices</h2>
        <p className="pricing-description">
          Choose from our range of professional barbering services.
        </p>
      </div>

      <div className="pricing-cards">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${plan.popular ? 'popular-card' : ''}`}
          >
            {plan.popular && <div className="badge">★ Most Popular</div>}

            <h3 className="card-title">{plan.title}</h3>
            <p className="card-price">{plan.price}</p>
            <ul className="card-services">
              {plan.services.map((service, i) => (
                <li key={i}>
                  <FaCheckCircle className="check-icon" /> {service}
                </li>
              ))}
            </ul>
            <button className="book-button">
              Book Now <BsCalendar2CheckFill />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
