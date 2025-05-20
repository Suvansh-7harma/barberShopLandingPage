import React from 'react';
import './MeetOurBarbers.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import img1 from "../../assets/staff1.jpg";
import img2 from "../../assets/staff2.jpg";
import img3 from "../../assets/gallery1.jpg";
const barbers = [
  {
    name: 'Jason Rodriguez',
    title: 'Owner & Master Barber',
    image: img1,
    bio: 'With over 15 years of experience, Jason founded PMC Barbershop to bring premium men\'s grooming services to Denton. Specializing in classic cuts and straight razor shaves, he combines traditional techniques with modern styles.',
    facebook: '#',
    instagram: '#',
  },
  {
    name: 'Marcus Lee',
    title: 'Senior Barber',
    image: img2,
    bio: 'Marcus is known for his sharp fades and stylish trims. With a passion for grooming, he ensures every client walks out with confidence.',
    facebook: '#',
    instagram: '#',
  },
  {
    name: 'Alicia Grant',
    title: 'Creative Stylist',
    image: img3,
    bio: 'Alicia brings flair and creativity to every cut. Her expert styling skills and vibrant energy make her a client favorite.',
    facebook: '#',
    instagram: '#',
  },
];

const MeetOurBarbers = () => {
  return (
    <section className="barbers-section">
      <div className="barbers-intro">
        <h4 className="barbers-subheading">EXPERT STYLISTS</h4>
        <h2 className="barbers-heading">Meet Our Barbers</h2>
        <p className="barbers-description">
          Our team of skilled barbers is dedicated to providing you with the perfect cut and grooming experience.
        </p>
      </div>
      <div className="barbers-grid">
        {barbers.map((barber, index) => (
          <div className="barber-card" key={index}>
            <img src={barber.image} alt={barber.name} className="barber-image" />
            <h3 className="barber-name">{barber.name}</h3>
            <p className="barber-title">{barber.title}</p>
            <p className="barber-bio">{barber.bio}</p>
            <div className="barber-socials">
              <a href={barber.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="social-icon" />
              </a>
              <a href={barber.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurBarbers;