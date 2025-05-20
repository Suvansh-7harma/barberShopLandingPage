import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.webp'; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <img src={logo} alt="Logo" className="logo" />

        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Gallery</a>
          <a href="#">Contact</a>
          <span className="phone-badge">📞 +91-9876543210</span>
          <button className="book-btn">Book Appointment</button>
        </div>

        <div 
          className={`hamburger ${isMobileMenuOpen ? 'toggle' : ''}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
