import React from 'react';
import './VisitSection.css';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const VisitSection = () => {
  return (
    <section className="visit-section">
      <div className="visit-intro">
        <p className="subheading">VISIT OUR SHOP</p>
        <h2 className="main-heading">Our Location</h2>
        <p className="location-description">
          Conveniently located in Denton, TX:
        </p>
      </div>

      <div className="visit-grid">
        {/* Map Section */}
        <div className="map-container">
          <iframe
            title="PMC Barbershop Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.1614080282463!2d-97.13273972353656!3d33.20907097348917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864dd9db12c3ab77%3A0x3be5c7d0d7b115e5!2s518%20Acme%20St%20unit%20101%2C%20Denton%2C%20TX%2076205%2C%20USA!5e0!3m2!1sen!2sin!4v1716212386812!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Card */}
        <div className="contact-card">
          <h3>Contact Information</h3>

          <div className="info-block">
            <FaMapMarkerAlt className="icon" />
            <div className="info-text">
              <small>Address</small>
              <p>518 Acme St unit 101, Denton, TX 76205, United States</p>
            </div>
          </div>

          <div className="info-block">
            <FaPhoneAlt className="icon" />
            <div className="info-text">
              <small>Phone</small>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="button-group">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=518+Acme+St+unit+101,+Denton,+TX+76205"
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn"
            >
              Get Directions
            </a>
            <a href="tel:+15551234567" className="action-btn call">
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitSection;