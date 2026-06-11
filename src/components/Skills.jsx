import { SKILLS } from "../data";
import "./Skills.css";

// --- 1. Import Swiper React components & modules ---
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// --- 2. Import Swiper core styles ---
import "swiper/css";
import "swiper/css/pagination";

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
  return (
    <section className="section" id="skills">
      <p className="eyebrow">What I work with</p>
      <h2 className="section-heading">Technical Skills</h2>
      <p className="section-desc">
        Tools and technologies I use to ship quality software.
      </p>

      {/* --- 3. Replace the grid with the Swiper Carousel --- */}
      <div className="skills-carousel-container" style={{ marginTop: "2rem" }}>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20} // Space between cards
          slidesPerView={2} // Default number of cards for mobile
          pagination={{ clickable: true }} // Dots at the bottom
          autoplay={{ delay: 2500, disableOnInteraction: false }} // Auto-scrolls
          breakpoints={{
            // Responsive design adjustments
            480: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5, // Adjust this number based on how wide your cards are
            },
          }}
          style={{ paddingBottom: "3rem" }} // Adds space so pagination dots don't overlap cards
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
