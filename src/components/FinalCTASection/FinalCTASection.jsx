import React from 'react';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import './FinalCTASection.css';

const FinalCTASection = () => {
  return (
    <section className="final-cta-section">
      <div className="cta-content">
        <h2 className="cta-heading">Ready for a Fresh Cut?</h2>
        <p className="cta-paragraph">
          Visit PMC Barbershop for premium men's grooming services. Our expert barbers are ready to give you a clean, precise cut and a relaxing barbershop experience.
        </p>

        <div className="cta-buttons">
          <button className="btn btn-primary">
            <FaCalendarAlt className="btn-icon" />
            Book an Appointment
          </button>
          <button className="btn btn-secondary">
            Visit Our Services
            <FaArrowRight className="btn-icon" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
