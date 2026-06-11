import { EDUCATION, ACHIEVEMENT } from "../data";
import "./Education.css";

export default function Education() {
  return (
    <section className="section" id="education">
      <p className="eyebrow">Background</p>
      <h2 className="section-heading">Education</h2>
      <p className="section-desc">Where it all started.</p>

      {/* Education cards */}
      <div className="edu-list">
        {EDUCATION.map((e) => (
          <div key={e.school} className="edu-card">
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

      {/* Achievement banner */}
      {/* <div className="achievement">
        <div className="achievement__icon" aria-hidden="true">🏆</div>
        <div className="achievement__body">
          <p className="achievement__title">{ACHIEVEMENT.title}</p>
          <p className="achievement__desc">{ACHIEVEMENT.description}</p>
        </div>
      </div> */}
    </section>
  );
}
