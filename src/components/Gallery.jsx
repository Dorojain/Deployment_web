import React, { useState } from "react";
import "./Gallery.css";

// Use import.meta.glob to load images dynamically
const images = import.meta.glob('../assets/*.{jpg,png,jpeg,webp}', { eager: true });

const Gallery = () => {
  const stones = [
    { name: "Black Onyx", color: "Black", type: "Protection", sizeRange: "5-10mm", cuts: "Cabochon, Marquise", usage: "Provides protection and grounding.", image: "blackonyx.jpg" },
    { name: "Amethyst",  color: "Purple", type: "Spiritual", sizeRange: "5-10mm", cuts: "Round, Oval", usage: "Calms the mind and enhances intuition.", image: "amethyst.jpg" },
    { name: "Citrine",  color: "Yellow", type: "Prosperity", sizeRange: "6-12mm", cuts: "Square, Emerald", usage: "Brings prosperity and happiness.", image: "citrine.jpg" },
    { name: "Gold Sheen",  color: "Gold", type: "Love", sizeRange: "4-9mm", cuts: "Heart, Pear", usage: "Promotes love and healing.", image: "goldsheen.webp" },
    { name: "Tiger's Eye",  color: "Yellow", type: "Confidence", sizeRange: "6-10mm", cuts: "Cabochon, Oval", usage: "Boosts confidence and courage.", image: "tigers.jpg" },
    { name: "Malachite",  color: "Green", type: "Calmness", sizeRange: "5-12mm", cuts: "Emerald, Cushion", usage: "Enhances clarity and calmness.", image: "malachite.jpg" },
    { name: "Peridot",  color: "Green", type: "Health", sizeRange: "5-8mm", cuts: "Round, Marquise", usage: "Promotes good health and positivity.", image: "peridot1.jpg" },
    { name: "Rhodonite",  color: "Pink", type: "Energy", sizeRange: "6-9mm", cuts: "Oval, Cushion", usage: "Improves passion and energy.", image: "rhodonite.jpg" },
    { name: "Swiss Blue Topaz",  color: "Blue", type: "Success", sizeRange: "6-11mm", cuts: "Emerald, Round", usage: "Enhances wisdom and success.", image: "swissbt.jpg" },
    { name: "White Crystal", color: "White",  type: "Balance", sizeRange: "5-9mm", cuts: "Cabochon, Oval", usage: "Balances emotions and intuition.", image: "crystal.webp" },
    { name: "Lapis Lazuli",  color: "Blue", type: "Communication", sizeRange: "5-12mm", cuts: "Square, Oval", usage: "Improves focus and communication.", image: "lapis.jpg" },
    { name: "Pink Oyster",  color: "Pink", type: "Vitality", sizeRange: "4-9mm", cuts: "Round, Cushion", usage: "Brings rejuvenation and vitality.", image: "oyster.jpeg" },
  ];

  // State to manage the selected stone color
  const [selectedColor, setSelectedColor] = useState("All");

  // Filter stones based on the selected color
  const filteredStones = selectedColor === "All" 
    ? stones 
    : stones.filter(stone => stone.color === selectedColor);

  return (
    <div className="gallery-container" id="gallery">
      <h2>Gallery</h2>
      <p>Explore our exclusive collection of semi-precious stones.</p>

      {/* Filter Dropdown */}
      <div className="filter-container">
        <label htmlFor="stone-filter">View by Color: </label>
        <select id="stone-filter" onChange={(e) => setSelectedColor(e.target.value)}>
        <option value="All">All</option>
          <option value="Black">Black</option>
          <option value="Purple">Purple</option>
          <option value="Yellow">Yellow</option>
          <option value="Gold">Gold</option>
          <option value="Brown">Brown</option>
          <option value="Green">Green</option>
          <option value="Pink">Pink</option>
          <option value="Blue">Blue</option>
          <option value="White">White</option>
        </select>
      </div>

      {/* Gallery Display */}
      <div className="card-container">
        {filteredStones.map((stone, index) => (
          <div className="card-wrapper" key={index}>
            <div className="card">
              <div className="card-inner">
                <div className="card-front">
                  <img
                    src={images[`../assets/${stone.image}`]?.default}
                    alt={stone.name}
                  />
                  <p className="stone-name">{stone.name}</p>
                </div>
                <div className="card-back">
                  <h3>{stone.name}</h3>
                  <p><strong>Size Range:</strong> {stone.sizeRange}</p>
                  <p><strong>Color:</strong> {stone.color}</p>
                  <p><strong>Cut Types:</strong> {stone.cuts}</p>
                  <p><strong>Astrological Use:</strong> {stone.usage}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
