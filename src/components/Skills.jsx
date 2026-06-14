import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SKILLS } from "../data";
import "./Skills.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

function SkillCard({ icon, label, color }) {
  return (
    <div className="skill-card" style={{ "--card-accent": color }}>
      <span className="skill-card__icon" aria-hidden="true">
        {icon}
      </span>
      <span className="skill-card__label">{label}</span>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ✅ Animate slides instead of cards
      gsap.from(".skills-carousel-container .swiper-slide", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section" id="skills" ref={sectionRef}>
      <p className="eyebrow">What I work with</p>

      <h2 className="section-heading">Technical Skills</h2>

      <p className="section-desc">
        Tools and technologies I use to ship quality software.
      </p>

      <div className="skills-carousel-container">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={25}
          slidesPerView={2}
          loop
          speed={1200}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            480: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {SKILLS.map((skill) => (
            <SwiperSlide key={skill.label}>
              <SkillCard {...skill} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
