import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Closes the sidebar on mobile when a link is clicked
  const handleLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button className="mobile-toggle" onClick={toggleSidebar}>
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Sidebar Navigation */}
      <nav className={`sidebar-container ${isOpen ? "open" : ""}`}>
        <div className="sidebar-brand">
          Sahil Roy
          <span>QA Engineer</span>
        </div>

        <div className="sidebar-nav">
          <a href="#home" className="sidebar-link" onClick={handleLinkClick}>
            01. Home
          </a>
          <a href="#about" className="sidebar-link" onClick={handleLinkClick}>
            02. About
          </a>
          <a href="#skills" className="sidebar-link" onClick={handleLinkClick}>
            03. Skills
          </a>
          <a
            href="#experience"
            className="sidebar-link"
            onClick={handleLinkClick}
          >
            04. Experience
          </a>
          <a
            href="#projects"
            className="sidebar-link"
            onClick={handleLinkClick}
          >
            05. Projects
          </a>
          <a href="#contact" className="sidebar-link" onClick={handleLinkClick}>
            06. Contact
          </a>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
