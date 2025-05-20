import React from 'react';
import { FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* First Row */}
      <div className="footer-top">
        {/* First Column */}
        <div className="footer-col">
          <div className="footer-logo">PMC Barbershop</div>
          <div className="footer-tagline">Classic cuts with modern style</div>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Second Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Third Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Contact Us</h4>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>518 Acme St unit 101, Denton, TX 76205, United States</span>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <a href="tel:+19408081569" className="phone-link">+1 940-808-1569</a>
          </div>
        </div>

        {/* Fourth Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Newsletter</h4>
          <p className="newsletter-desc">
            Subscribe to our newsletter to receive updates and news.
          </p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              aria-label="Email address"
              required 
            />
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Second Row */}
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          © 2023 PMC Barbershop. All rights reserved.
        </div>
        <div className="footer-bottom-right">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
