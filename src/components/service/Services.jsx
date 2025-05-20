import React from "react";
import "./Service.css";
import { motion } from "framer-motion";
import haircutIcon from "../../assets/hair-styling-icon.svg"; 
import shaveIcon from "../../assets/hair-styling-icon.svg";
import stylingIcon from "../../assets/hair-styling-icon.svg";

const services = [
  {
    icon: haircutIcon,
    title: "Haircuts",
    desc: "Our skilled barbers deliver precision haircuts tailored to your style and face shape. From classic cuts to modern fades, we ensure you leave looking sharp and confident.",
    bullets: ["Classic Cuts", "Modern Styles"],
  },
  {
    icon: shaveIcon,
    title: "Shaves",
    desc: "Enjoy a relaxing straight razor shave with warm lather and a hot towel finish — a timeless grooming ritual for a clean, fresh look.",
    bullets: ["Traditional Shave", "Beard Trim"],
  },
  {
    icon: stylingIcon,
    title: "Styling",
    desc: "From pompadours to textured styles, our barbers use premium products and techniques to craft a look that suits your personality and lifestyle.",
    bullets: ["Textured Finish", "Pompadour & Slick Styles"],
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <motion.div
        className="services-intro"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="services-label">PREMIUM GROOMING</p>
        <motion.h2
          className="services-heading"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Our Barber Services
        </motion.h2>
        <p className="services-desc">
          Professional barbering services to keep you looking sharp for everyday confidence or special occasions.
        </p>
      </motion.div>

      <div className="services-cards">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={service.icon} alt={service.title} className="service-icon" />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <ul>
              {service.bullets.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
