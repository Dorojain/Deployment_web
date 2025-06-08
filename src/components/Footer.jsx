import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer"> 
      <div className="footer-content">
        <p className="contact-info">
          <span>Email: example@email.com | Phone: +91 1234567890</span>
        </p>
        <p className="address">123 Gemstone Lane, Jaipur, Rajasthan, India</p>
      </div>
    </footer>
  );
};

export default Footer;
