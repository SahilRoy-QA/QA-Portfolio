import { HERO } from "../data";
import avatarImg from "../assets/me.jpg";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__left">
        <h1 className="hero__name">{HERO.name}</h1>

        <p className="hero__title">{HERO.title}</p>

        <div className="hero__bio">
          <p className="hero__bio-text">{HERO.bio}</p>
        </div>

        <div className="hero__cta-row">
          <a href="#projects" className="btn btn--primary">
            View Projects
          </a>

          <a
            href="https://drive.google.com/file/d/1TDAi-5c2178hXUyrF8B4d9xA5s6ru8p5/view"
            className="btn btn--outline"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>

          <a
            href="https://github.com/SahilRoy-QA/QA-Portfolio"
            className="play-btn"
            aria-label="Play"
          >
            <span className="play-icon"></span>
          </a>
        </div>
      </div>

      <div className="hero__right">
        <div className="hero__avatar-wrapper">
          <div className="avatar-loader">
            <div className="avatar-loader__scan"></div>
          </div>

          <svg className="avatar-hex" viewBox="0 0 300 300" aria-hidden="true">
            <polygon points="150,20 250,75 250,185 150,240 50,185 50,75" />
          </svg>

          <img src={avatarImg} alt="Sahil Roy" className="hero__avatar" />
        </div>
      </div>
    </section>
  );
}
