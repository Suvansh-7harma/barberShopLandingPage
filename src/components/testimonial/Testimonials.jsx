import React from "react";
import "./Testimonials.css";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "I've been getting my hair cut at PMC Barbershop for over 2 years now. The attention to detail is unmatched, and the atmosphere is always welcoming. My barber remembers exactly how I like my fade every time!",
    rating: 5,
    name: "– Michael B.",
  },
  {
    quote:
      "The team at PMC is incredibly professional and friendly. I always leave feeling refreshed and confident. It’s the best barbershop in town by far!",
    rating: 5,
    name: "– David L.",
  },
  {
    quote:
      "PMC Barbershop exceeded my expectations. Booking was easy, the shop is clean and stylish, and the haircut was flawless. Highly recommended!",
    rating: 5,
    name: "– Chris M.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <motion.div
        className="testimonial-intro"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="testimonial-label">TESTIMONIALS</p>
        <motion.h2
          className="testimonial-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          What Our Clients Say
        </motion.h2>
      </motion.div>

      <div className="testimonial-cards">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <p className="testimonial-quote">“{t.quote}”</p>
            <div className="testimonial-rating">
              {[...Array(t.rating)].map((_, i) => (
                <FaStar key={i} className="star" />
              ))}
            </div>
            <p className="testimonial-name">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
