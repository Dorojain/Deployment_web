import React from "react";
import "./Hero2.css";

const Hero2 = () => {
    // Function to scroll to a specific section
    const handleScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="hero2-container" id="hero2">
            {/* Text Section */}
            <div className="hero2-left">
                <h2>Manufacturers of Semi-Precious Gemstones and Fashion Jewelry</h2>
                <p>
                    Our gemstone manufacturing business has been delivering unparalleled quality and craftsmanship.
                    Based in India, we take pride in offering premium semi-precious stones that cater to diverse client needs across the country.<br /><br />
                    
                    With a foundation rooted in 30 years of industry expertise, we specialize in the art of gemstone manufacturing.
                    For the past 6 years, our commitment to excellence has earned us a reputation as a trusted partner for clients across India.
                    Every gemstone we create is handcrafted to meet the highest standards of quality, ensuring that each piece reflects our dedication to precision and beauty.<br /><br />
                    
                    Whether you're looking for custom-cut gemstones or stones based on astrological needs, we bring your vision to life with unmatched craftsmanship.
                </p>
                <div className="hero2-buttons">
                    <button
                        className="calling-btn"
                        onClick={() => handleScrollTo("footer")}
                    >
                        Contact Us for Custom Orders
                    </button>
                    <button className="calling-btn"
                        onClick={() => handleScrollTo("footer")}>Explore Our Collection</button>
                </div>
            </div>

            {/* Image Section */}
            <div className="hero2-right">
                <img
                    src="/src/assets/sectionimg2.jpeg"
                    alt="Gemstone Showcase"
                    className="hero2-image"
                />
            </div>
        </section>
    );
};

export default Hero2;
