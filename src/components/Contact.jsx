import { CONTACT } from "../data";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <p className="eyebrow">Get in touch</p>
      <h2 className="section-heading">Let's Work Together</h2>
      <p className="contact__desc">
        Open to QA roles, automation projects, and collaborations.
        <br />
        Drop me a line — I reply within 24 hours.
      </p>

      <a
        href={`mailto:${CONTACT.email}`}
        className="btn btn--primary contact__cta"
      >
        Send a Message
      </a>

      <div className="contact__socials">
        <a href={`tel:${CONTACT.phone}`} className="social-link">
          📞 {CONTACT.phone}
        </a>
        <span className="contact__dot" aria-hidden="true">
          ·
        </span>
        <a href={`mailto:${CONTACT.email}`} className="social-link">
          ✉️ {CONTACT.email}
        </a>
        <span className="contact__dot" aria-hidden="true">
          ·
        </span>
        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          LinkedIn ↗
        </a>
        <span className="contact__dot" aria-hidden="true">
          ·
        </span>
        <a
          href={CONTACT.github}
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          GitHub ↗
        </a>
      </div>
    </section>
  );
}
