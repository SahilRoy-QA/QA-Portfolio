import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { HERO } from "../data";
import avatarImg from "../assets/me.jpg";
import "./Hero.css";

export default function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const el = heroRef.current;

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // SAFE: animate container directly (NO selector)
      tl.from(el, {
        opacity: 0,
        duration: 0.6,
      });

      tl.from(".hero__name", {
        y: 60,
        opacity: 0,
        duration: 1,
      });

      tl.from(
        ".hero__title",
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.4",
      );

      tl.from(
        ".hero__bio",
        {
          scale: 0.92,
          opacity: 0,
          duration: 0.7,
        },
        "-=0.3",
      );

      tl.from(
        ".hero__cta-row .btn, .hero__cta-row .play-btn",
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.12,
        },
        "-=0.2",
      );

      tl.from(
        ".hero__avatar-wrapper",
        {
          scale: 0.85,
          opacity: 0,
          duration: 1,
        },
        "-=0.5",
      );

      tl.from(
        ".avatar-hex",
        {
          rotate: -180,
          opacity: 0,
          duration: 1,
        },
        "-=0.8",
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero__left">
        <h1 className="hero__name">{HERO.name}</h1>

        <p className="hero__title">{HERO.title}</p>

        <div className="hero__bio">
          <p className="hero__bio-text">{HERO.bio}</p>
        </div>

        <div className="hero__cta-row">
          <a href="#projects" className="btn btn--primary magnetic-btn">
            View Projects
          </a>

          <a
            href="https://drive.google.com/file/d/1TDAi-5c2178hXUyrF8B4d9xA5s6ru8p5/view"
            className="btn btn--outline magnetic-btn"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </a>

          {/* <a
            href="https://github.com/SahilRoy-QA/QA-Portfolio"
            className="play-btn magnetic-btn"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <span className="play-icon"></span>
          </a> */}
        </div>
      </div>

      <div className="hero__right">
        <div className="hero__avatar-wrapper">
          <div className="avatar-loader">
            <div className="avatar-loader__scan"></div>
          </div>

          <svg className="avatar-hex" viewBox="0 0 300 300">
            <polygon points="150,20 250,75 250,185 150,240 50,185 50,75" />
          </svg>

          <img src={avatarImg} alt="Sahil Roy" className="hero__avatar" />
        </div>
      </div>
    </section>
  );
}
