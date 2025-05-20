import React, { useState } from 'react';
import './Gallery.css';
import { FaEye, FaTimes } from 'react-icons/fa';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1598257006465-6f6e530d3b96?auto=format&fit=crop&w=800&q=80', alt: 'Classic haircut in progress' },
  { src: '/images/gallery2.jpg', alt: 'Modern skin fade' },
  { src: '/images/gallery3.jpg', alt: 'Barbershop interior' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-intro">
        <p className="gallery-subheading">OUR WORK & SHOP</p>
        <h2 className="gallery-heading">Our Barbershop Gallery</h2>
        <p className="gallery-description">
          Take a look at our shop atmosphere and the quality cuts we deliver to our clients.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((img, index) => (
          <div key={index} className="gallery-card">
            <img src={img.src} alt={img.alt} className="gallery-img" />
            <div className="overlay" onClick={() => openModal(img)}>
              <span className="view-button">
                <FaEye className="eye-icon" /> View
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              <FaTimes />
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} className="modal-img" />
            <p className="modal-caption">{selectedImage.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
