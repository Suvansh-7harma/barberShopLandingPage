import React, { useState } from 'react';
import './Gallery.css';
import { FaEye, FaTimes } from 'react-icons/fa';
import aboutImg from '../../assets/about.jpg';
import galimg3 from '../../assets/gallery1.jpg';
import galimg1 from '../../assets/gallery3.jpg';

const galleryImages = [
    { src: galimg1, alt: 'Modern skin fade' },
    { src: aboutImg, alt: 'Modern skin fade' },
    { src: galimg3, alt: 'Modern skin fade' }
    
  ];
const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
    document.body.style.overflow = 'hidden';
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
