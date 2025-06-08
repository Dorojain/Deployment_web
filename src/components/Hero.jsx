import React, { useState } from "react";
import "./Hero.css";

// Import images from the assets folder
import greenImg from "../assets/green.jpg";
import roseImg from "../assets/rose.jpg";

function Hero() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handlePopupToggle = () => {
    setIsPopupVisible((prev) => !prev);
  };

  const handleScroll = () => {
    const gallerySection = document.getElementById("gallery");
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      {/* Left Section: Images */}
      <div className="hero-images">
        <img src={greenImg} alt="Gemstone 1" />
        <img src={roseImg} alt="Gemstone 2" />
      </div>

      {/* Right Section: Content */}
      <div className="hero-content">
        <h1>Gemstones Boutique</h1>
        <p>
          Handcrafted gemstones tailored to perfection in all shapes, sizes, and
          astrological preferences.
        </p>
        <div className="cta-buttons">
          <button type="button" onClick={handlePopupToggle}>
            Contact for Custom Orders
          </button>
          <button className="explore-btn" type="button" onClick={handleScroll}>
            Explore Our Collection
          </button>
        </div>

        {/* Popup Modal */}
        {isPopupVisible && (
          <div className="contact-popup">
            <button className="close-btn" onClick={handlePopupToggle}>
              &times;
            </button>
            <div className="popup-content">
              <h2>Contact Information</h2>
              <p>Phone: +123 456 7890</p>
              <p>Email: info@gemstonesboutique.com</p>
              <p>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfFIlyrLkNhTUOkh4gExTC6-Tb2UvUpoOTyX99WDbqPREF70g/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fill out the contact form here
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
