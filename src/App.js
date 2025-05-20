import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/herosection/Hero';
import About from './components/about/About';
import Services from './components/service/Services';
import WhyChooseUs from './components/why/WhyChooseUs';
import Testimonials from './components/testimonial/Testimonials';
import Pricing from './components/price/Pricing';
import Gallery from './components/gallery/Gallery';
import MeetOurBarbers from './components/MeetOurBarbers/MeetOurBarbers';
import VisitSection from './components/visit/VisitSection';
import FAQSection from './components/FAQ/FAQSection';
import ContactSection from './components/contact/ContactSection';
import FinalCTASection from './components/FinalCTASection/FinalCTASection';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Pricing />
      <Gallery />
      <MeetOurBarbers />
      <VisitSection />
      <FAQSection />
      <ContactSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}

export default App;
