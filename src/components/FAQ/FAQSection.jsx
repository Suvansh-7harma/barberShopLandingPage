import React, { useState } from 'react';
import './FAQSection.css';
import { FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqData = [
  {
    category: 'General',
    question: 'What are your operating hours?',
    answer: 'We are open from 9 AM to 7 PM from Monday to Saturday. Closed on Sundays.'
  },
  {
    category: 'Services',
    question: 'Do you offer hot towel shaves?',
    answer: 'Yes, we offer traditional hot towel shaves as part of our premium service packages.'
  },
  {
    category: 'Prices',
    question: 'How much is a classic haircut?',
    answer: 'A classic haircut costs $25. Prices vary based on additional services.'
  },
  {
    category: 'Booking',
    question: 'Can I book an appointment online?',
    answer: 'Absolutely! You can book appointments through our website or call us directly.'
  },
  {
    category: 'Services',
    question: 'Do you cut children’s hair?',
    answer: 'Yes, we provide haircuts for all age groups including kids.'
  }
];

const categories = ['All Questions', 'General', 'Services', 'Prices', 'Booking'];

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState('All Questions');
  const [searchTerm, setSearchTerm] = useState('');
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFaqs = faqData.filter(faq => {
    const matchesCategory = activeCategory === 'All Questions' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="faq-section">
      {/* Intro Content */}
      <div className="faq-intro">
        <p className="subheading">Common Questions</p>
        <h2 className="main-heading">Frequently Asked Questions</h2>
        <p className="description">
          Answers to common questions about our barbershop services.
        </p>
      </div>

      {/* Search Bar */}
      <div className="faq-search">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search questions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Category Tabs */}
      <div className="faq-tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={`faq-tab ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion Items */}
      <div className="faq-accordion">
        {filteredFaqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <div
              className="accordion-header"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h4>{faq.question}</h4>
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openIndex === index && (
              <div className="accordion-body">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
