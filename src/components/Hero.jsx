import { HERO } from "../data";
import avatarImg from "../assets/me.jpg";
import "./Hero.css";

function OrbitGraphic() {
  return (
    <svg
      className="orbit"
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#00e5ff" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      {[0, 60, 120].map((deg) => (
        <ellipse key={deg} cx="200" cy="200" rx="158" ry="68"
          fill="none" stroke="url(#orbitGrad)" strokeWidth="2.2" opacity="0.88"
          transform={`rotate(${deg} 200 200)`} />
      ))}
      {[30, 90, 150].map((deg) => (
        <ellipse key={`g${deg}`} cx="200" cy="200" rx="118" ry="50"
          fill="none" stroke="#00e5ff" strokeWidth="1" opacity="0.22"
          transform={`rotate(${deg} 200 200)`} />
      ))}
      <circle cx="200" cy="200" r="10" fill="#00e5ff" opacity="0.55" />
      <circle cx="200" cy="200" r="5"  fill="#fff"    opacity="0.9"  />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* ── Left column ── */}
      <div className="hero__left">
        <p className="eyebrow">Software Tester · QA Specialist</p>
        <h1 className="hero__name">{HERO.name}</h1>
        <p className="hero__title">{HERO.title}</p>

        {/* Bio card */}
        <div className="hero__bio">
          <img src={avatarImg} alt="Sahil Roy" className="hero__avatar" />
          <p className="hero__bio-text">{HERO.bio}</p>
        </div>

        {/* CTAs */}
        <div className="hero__cta-row">
          <a href="#projects" className="btn btn--primary">View Projects</a>
          <a href="/resume.pdf" className="btn btn--outline" download>
            Download Resume
          </a>
        </div>
      </div>

      {/* ── Right column ── */}
      <div className="hero__right">
        <OrbitGraphic />
      </div>
    </section>
  );
}
