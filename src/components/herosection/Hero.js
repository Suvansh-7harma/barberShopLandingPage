import React, { useEffect, useState } from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import heroImage from '../../assets/hero.webp';
import { FaArrowUp } from 'react-icons/fa';

const Hero = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 200);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Section */}
        <div className="hero-left">
          <motion.h4
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="small-heading"
          >
            Premium Barber Services in Denton
          </motion.h4>

          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="main-heading"
          >
            Classic Cuts, Modern Style
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="animated-heading"
          >
            Premium Barber Shop
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hero-description"
          >
            At PMC Barbershop, we combine traditional barbering techniques with modern styling
            to give you the perfect look. Our experienced barbers deliver precision cuts, beard grooming,
            and relaxing hot towel shaves in a classic barbershop atmosphere.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="location-pill"
          >
            📍 Denton, TX
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="hero-buttons"
          >
            <button className="btn btn-primary">Services</button>
            <button className="book-now-btn">Book Now</button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, delay: 2 }}
            className="scroll-down"
            onClick={() =>
              document.querySelector('#about-section')?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            ↓
          </motion.div>
        </div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="hero-right"
        >
          <img src={heroImage} alt="Barber" className="hero-image" />
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button className="scroll-top-btn" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </section>
  );
};

export default Hero;
