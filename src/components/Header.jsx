import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu on selection
    }
  };

  return (
    <header className="header">
      <div className="logo">GB</div>
      
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      
      <nav className={menuOpen ? "nav active" : "nav"}>
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <button onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setMenuOpen(false); }}>Home</button>
          </li>
          <li>
            <button onClick={() => handleScrollToSection("hero2")}>About</button>
          </li>
          
          <li>
            <button onClick={() => handleScrollToSection("gallery")}>Gallery</button>
          </li>
          <li>
            <button onClick={() => handleScrollToSection("footer")}>Contact Us</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
