import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { PROJECTS } from "../data";
import "./Projects.css";

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ title, tag, description, stack, accent }) {
  const isOverview = tag === "Overview";

  return (
    <div
      className={`proj-card ${isOverview ? "proj-card--overview" : ""}`}
      style={{
        "--accent": accent,
      }}
    >
      <span
        className={`proj-card__tag ${isOverview ? "proj-card__tag--overview" : ""}`}
      >
        {tag}
      </span>

      <h3 className="proj-card__title">{title}</h3>
      <p className="proj-card__desc">{description}</p>

      <div className="proj-card__stack">
        {stack.map((s) => (
          <span key={s} className="proj-card__badge">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);
  const overviewRef = useRef(null);
  const modulesRef = useRef(null);

  const overview = PROJECTS.filter((p) => p.tag === "Overview");
  const modules = PROJECTS.filter((p) => p.tag === "Module");

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 🍎 HERO TEXT (Apple-like soft entrance)
      gsap.from(
        ".eyebrow, .section-heading, .section-desc, .projects-modules-label",
        {
          y: 30,
          opacity: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power4.out",
        },
      );

      // ✨ OVERVIEW (hero spotlight feel)
      gsap.from(overviewRef.current?.children, {
        scrollTrigger: {
          trigger: overviewRef.current,
          start: "top 85%",
        },
        y: 80,
        opacity: 0,
        scale: 0.96,
        duration: 1.1,
        ease: "power4.out",
      });

      // ⚡ MODULES (Apple-style cascade reveal)
      gsap.from(modulesRef.current?.children, {
        scrollTrigger: {
          trigger: modulesRef.current,
          start: "top 85%",
        },
        y: 60,
        opacity: 0,
        scale: 0.94,
        duration: 0.9,
        stagger: 0.08,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 🧲 Apple-style cursor lighting system
  useLayoutEffect(() => {
    const cards = document.querySelectorAll(".proj-card");

    const handleMove = (e) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // pass cursor position for glow effect
        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section className="section" id="projects" ref={sectionRef}>
      <p className="eyebrow">What I've tested</p>
      <h2 className="section-heading">Featured Projects</h2>
      <p className="section-desc">
        Enterprise-level QA across TEEXMA and its core modules.
      </p>

      {/* 🍎 HERO OVERVIEW */}
      <div className="projects-overview" ref={overviewRef}>
        {overview.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>

      {/* ⚡ MODULES */}
      <p className="projects-modules-label">Key Modules Tested</p>
      <div className="projects-grid" ref={modulesRef}>
        {modules.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
