import React from "react";
import "./WhyChooseUs.css";
import { motion } from "framer-motion";
import { FaUserTie, FaStar, FaClock } from "react-icons/fa";

const features = [
  {
    icon: <FaUserTie />,
    label: "User",
    title: "Expert Barbers",
    desc: "Our team consists of certified barbers with years of experience in classic and modern cutting techniques, beard grooming, and men's styling.",
  },
  {
    icon: <FaStar />,
    label: "Quality",
    title: "Top-Notch Services",
    desc: "We prioritize quality with every cut, shave, and style — using premium tools, hygiene standards, and personalized attention.",
  },
  {
    icon: <FaClock />,
    label: "Convenience",
    title: "Flexible Scheduling",
    desc: "Walk-ins welcome or book online — we work around your schedule to deliver hassle-free grooming when you need it.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section" id="why">
      <motion.div
        className="why-intro"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="why-label">OUR COMMITMENT</p>
        <motion.h2
          className="why-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Why Choose PMC Barbershop?
        </motion.h2>
        <p className="why-subheading">
          What makes us the premier barbershop in Denton, TX.
        </p>
      </motion.div>

      <div className="why-cards">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="why-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="why-card-label">
              <span className="icon">{feature.icon}</span> {feature.label}
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
