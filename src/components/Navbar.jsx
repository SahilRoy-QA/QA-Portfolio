import { useState, useEffect } from "react";
import { NAV_LINKS } from "../data";
import "./Navbar.css";
import ExperienceTimer from "./ExperienceTimer";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  /* Shrink nav on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const handleNav = (link) => {
    setActive(link);
    setMenuOpen(false);

    const el = document.getElementById(link.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      aria-label="Main Navigation"
    >
      {/* Logo */}
      <div className="navbar__logo" aria-label="Home">
        <ExperienceTimer />
      </div>

      {/* Desktop links */}
      <ul className="navbar__links" role="list">
        {NAV_LINKS.map((link) => (
          <li key={link}>
            <button
              type="button"
              className={`navbar__link ${
                active === link ? "navbar__link--active" : ""
              }`}
              onClick={() => handleNav(link)}
              aria-current={active === link ? "page" : undefined}
            >
              {link.toUpperCase()}
            </button>
          </li>
        ))}
      </ul>

      {/* Hamburger (mobile) */}
      <button
        type="button"
        className={`navbar__hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen((p) => !p)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="navbar__drawer">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              type="button"
              className={`navbar__drawer-link ${
                active === link ? "active" : ""
              }`}
              onClick={() => handleNav(link)}
            >
              {link.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
