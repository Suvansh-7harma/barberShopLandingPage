import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const services = [
    'Haircut',
    'Beard Grooming',
    'Hot Towel Shave',
    'Hair Coloring',
    'Styling',
  ];

  // Simple phone validation (US format)
  const validatePhone = (phone) => {
    const phoneRegex = /^\+?[\d\s\-]{7,15}$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate phone immediately if phone field
    if (name === 'phone') {
      setErrors((prev) => ({
        ...prev,
        phone: validatePhone(value) ? '' : 'Enter valid phone number',
      }));
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic required validation
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!validatePhone(formData.phone)) newErrors.phone = 'Invalid phone number';
    if (!formData.service) newErrors.service = 'Select a service';
    if (!formData.date) newErrors.date = 'Select preferred date';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Submit form logic here (API call, email, etc.)
      alert('Appointment request submitted!');
      setFormData({
        name: '',
        phone: '',
        service: '',
        date: '',
        message: '',
      });
    }
  };

  return (
    <section className="contact-section">
      {/* Intro */}
      <div className="contact-intro">
        <p className="subheading">Book Your Appointment</p>
        <h2 className="main-heading">Contact Us</h2>
        <p className="description">
          Ready for a fresh look? Book your appointment today or contact us for any questions.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="contact-content">
        {/* Left - Contact Info */}
        <div className="contact-info">
          <InfoBar
            icon={<FaMapMarkerAlt />}
            label="Address"
            details="518 Acme St unit 101, Denton, TX 76205, United States"
          />
          <InfoBar
            icon={<FaPhoneAlt />}
            label="Phone"
            details="+1 940-808-1569"
          />
          <InfoBar
            icon={<FaClock />}
            label="Business Hours"
            details={
              <>
                Mon-Fri: 9:00 AM - 7:00 PM<br />
                Sat: 9:00 AM - 5:00 PM<br />
                Sun: Closed
              </>
            }
          />
        </div>

        {/* Right - Booking Form */}
        <form className="booking-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">
            Name <span className="required">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            required
            aria-invalid={errors.name ? 'true' : 'false'}
          />
          {errors.name && <span className="error-msg">{errors.name}</span>}

          <label htmlFor="phone">
            Phone Number <span className="required">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+1 940 808 1569"
            value={formData.phone}
            onChange={handleChange}
            required
            aria-invalid={errors.phone ? 'true' : 'false'}
          />
          {errors.phone && <span className="error-msg">{errors.phone}</span>}

          <label htmlFor="service">
            Service Interest <span className="required">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            aria-invalid={errors.service ? 'true' : 'false'}
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && <span className="error-msg">{errors.service}</span>}

          <label htmlFor="date">
            Preferred Date <span className="required">*</span>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            aria-invalid={errors.date ? 'true' : 'false'}
          />
          {errors.date && <span className="error-msg">{errors.date}</span>}

          <label htmlFor="message">Message (optional)</label>
          <textarea
            id="message"
            name="message"
            placeholder="Additional notes or questions"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className="submit-btn">
            Book Appointment
          </button>
        </form>
      </div>
    </section>
  );
};

const InfoBar = ({ icon, label, details }) => (
  <div className="info-bar" tabIndex={0}>
    <div className="info-icon">{icon}</div>
    <div className="info-text">
      <strong>{label}</strong>
      <p>{details}</p>
    </div>
  </div>
);

export default ContactSection;
