import { ACHIEVEMENT } from "../data";
import "./Achievement.css"; // Ensure your achievement CSS classes are in here

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <p className="eyebrow">Milestones</p>
      <h2 className="section-heading">Achievements</h2>
      <p className="section-desc">Key Milestones.</p>

      {/* Achievement banner */}
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
