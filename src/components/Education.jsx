import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { EDUCATION, ACHIEVEMENT } from "../data";
import "./Education.css";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 🍎 Hero text reveal
      gsap.from(".eyebrow, .section-heading, .section-desc", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
      });

      // 🎓 Education cards stagger animation
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 0.9,
        stagger: 0.15,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section" id="education" ref={sectionRef}>
      <p className="eyebrow">Background</p>
      <h2 className="section-heading">Education</h2>
      <p className="section-desc">Where it all started.</p>

      {/* Education cards */}
      <div className="edu-list">
        {EDUCATION.map((e, i) => (
          <div
            key={e.school}
            className="edu-card"
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <div className="edu-card__icon" aria-hidden="true">
              🎓
            </div>

            <div className="edu-card__info">
              <h3 className="edu-card__degree">{e.degree}</h3>
              <p className="edu-card__school">{e.school}</p>

              <div className="edu-card__meta">
                <span className="edu-card__period">{e.period}</span>
                <span className="edu-card__grade">{e.grade}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
