import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [active,   setActive]     = useState("Home");
  const [menuOpen, setMenuOpen]   = useState(false);

  /* Shrink nav on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (link) => {
    setActive(link);
    setMenuOpen(false);
    const el = document.getElementById(link.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      {/* Logo */}
      <div className="navbar__logo" aria-label="Sahil Roy">SR</div>

      {/* Desktop links */}
      <ul className="navbar__links" role="list">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <button
              className={`navbar__link ${active === link ? "navbar__link--active" : ""}`}
              onClick={() => handleNav(link)}
            >
              {link.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>

      {/* Hamburger (mobile) */}
      <button
        className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((p) => !p)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="navbar__drawer">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              className={`navbar__drawer-link ${active === link ? "active" : ""}`}
              onClick={() => handleNav(link)}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
