import React from 'react';
import './Rating.css';

const Rating = () => {
  return (
    <div className="rating-container">
      <h3 className="rating-heading">Client Testimonials</h3>
      <div className="rating-cards">
        <div className="rating-card">
          <div className="stars">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
          <p className="rating-text">
            "As a jewelry designer, finding quality gemstones is crucial to my craft. 
            This business provides exceptional stones that elevate my designs to the next level."
          </p>
          <p className="rating-author">~ Jewelry Designer, India</p>
        </div>

        <div className="rating-card">
          <div className="stars">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
          <p className="rating-text">
            "The astrological gemstones I source here are always accurate and flawless, 
            making my clients trust my recommendations even more."
          </p>
          <p className="rating-author">~ Astrologer, India</p>
        </div>

        <div className="rating-card">
          <div className="stars">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
          <p className="rating-text">
            "As an exporter, I rely on timely delivery and high-quality products. 
            This company has consistently exceeded my expectations in both."
          </p>
          <p className="rating-author">~ Exporter, India</p>
        </div>

        <div className="rating-card">
          <div className="stars">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
          <p className="rating-text">
            "The semi-precious gemstones from this business have been a game-changer for my jewelry store. 
            My customers love the variety and quality!"
          </p>
          <p className="rating-author">~ Jeweler, India</p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
