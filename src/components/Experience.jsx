import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { EXPERIENCE } from "../data";
import "./Experience.css";

gsap.registerPlugin(ScrollTrigger);

function ExperienceCard({ role, company, period, bullets }) {
  return (
    <div className="exp-card">
      <div className="exp-card__header">
        <div>
          <h3 className="exp-card__role">{role}</h3>
          <p className="exp-card__company">{company}</p>
        </div>
        <span className="exp-card__period">{period}</span>
      </div>

      <ul className="exp-card__bullets" role="list">
        {bullets.map((b, i) => (
          <li key={i} className="exp-card__bullet">
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 🍎 HERO TEXT ANIMATION
      gsap.from(".eyebrow, .section-heading, .section-desc", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
      });

      // ⚡ CARD REVEAL (Apple-style cascade)
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 70,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 🧲 CURSOR LIGHT SYSTEM (Apple glow)
  useLayoutEffect(() => {
    const cards = document.querySelectorAll(".exp-card");

    const handleMove = (e) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="section" id="experience" ref={sectionRef}>
      <p className="eyebrow">Where I've worked</p>
      <h2 className="section-heading">Experience</h2>
      <p className="section-desc">
        Building quality into every product I've touched.
      </p>

      <div className="exp-list">
        {EXPERIENCE.map((job, i) => (
          <div key={job.company} ref={(el) => (cardsRef.current[i] = el)}>
            <ExperienceCard {...job} />
          </div>
        ))}
      </div>
    </section>
  );
}
