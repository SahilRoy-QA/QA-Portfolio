import { useLayoutEffect, useRef } from "react";
import { ACHIEVEMENT } from "../data";
import "./Achievement.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Achievements() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.from(".eyebrow, .section-heading, .section-desc", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Achievement cards animation
      gsap.from(".achievement", {
        y: 50,
        opacity: 0,
        scale: 0.95,
        duration: 0.9,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      // Icon pop effect
      gsap.from(".achievement__icon", {
        scale: 0,
        rotation: -45,
        duration: 0.6,
        stagger: 0.25,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section" id="achievements" ref={sectionRef}>
      <p className="eyebrow">Milestones</p>
      <h2 className="section-heading">Achievements</h2>
      <p className="section-desc">Key Milestones.</p>

      <div className="achievement">
        <div className="achievement__icon" aria-hidden="true">
          🏆
        </div>
        <div className="achievement__body">
          <p className="achievement__title">{ACHIEVEMENT.title1}</p>
          <p className="achievement__desc">{ACHIEVEMENT.description1}</p>
        </div>
      </div>

      <div className="achievement">
        <div className="achievement__icon" aria-hidden="true">
          🏆
        </div>
        <div className="achievement__body">
          <p className="achievement__title">{ACHIEVEMENT.title2}</p>
          <p className="achievement__desc">{ACHIEVEMENT.description2}</p>
        </div>
      </div>
    </section>
  );
}
