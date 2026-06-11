import { SKILLS } from "../data";
import "./Skills.css";

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
      <h2 className="section-heading">Technical Skills Arsenal</h2>
      <p className="section-desc">
        Tools and technologies I use to ship quality software.
      </p>

      <div className="skills-grid">
        {SKILLS.map((skill) => (
          <SkillCard key={skill.label} {...skill} />
        ))}
      </div>
    </section>
  );
}
