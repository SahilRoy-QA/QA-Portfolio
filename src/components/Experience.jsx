import { EXPERIENCE } from "../data";
import "./Experience.css";

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
          <li key={i} className="exp-card__bullet">{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="section" id="experience">
      <p className="eyebrow">Where I've worked</p>
      <h2 className="section-heading">Experience</h2>
      <p className="section-desc">
        Building quality into every product I've touched.
      </p>

      <div className="exp-list">
        {EXPERIENCE.map((job) => (
          <ExperienceCard key={job.company} {...job} />
        ))}
      </div>
    </section>
  );
}
