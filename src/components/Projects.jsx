import { PROJECTS } from "../data";
import "./Projects.css";

function ProjectCard({ title, tag, description, stack, accent }) {
  const isOverview = tag === "Overview";

  return (
    <div
      className={`proj-card ${isOverview ? "proj-card--overview" : ""}`}
      style={{ "--accent": accent }}
    >
      {/* Tag pill */}
      <span className={`proj-card__tag ${isOverview ? "proj-card__tag--overview" : ""}`}>
        {tag}
      </span>

      <h3 className="proj-card__title">{title}</h3>
      <p className="proj-card__desc">{description}</p>

      {/* Stack badges */}
      <div className="proj-card__stack">
        {stack.map((s) => (
          <span key={s} className="proj-card__badge">{s}</span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const overview = PROJECTS.filter((p) => p.tag === "Overview");
  const modules  = PROJECTS.filter((p) => p.tag === "Module");

  return (
    <section className="section" id="projects">
      <p className="eyebrow">What I've tested</p>
      <h2 className="section-heading">Featured Projects</h2>
      <p className="section-desc">
        Enterprise-level QA across TEEXMA and its core modules.
      </p>

      {/* Overview card — full width */}
      <div className="projects-overview">
        {overview.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>

      {/* Module cards — grid */}
      <p className="projects-modules-label">Key Modules Tested</p>
      <div className="projects-grid">
        {modules.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
