import "./Loader.css";

export default function Loader({ progress }) {
  return (
    <div className="loader-screen">
      <div className="loader-content">
        <svg className="loader-hex" viewBox="0 0 300 300">
          <polygon points="150,20 250,75 250,185 150,240 50,185 50,75" />
        </svg>

        <h1 className="loader-title">SAHIL ROY</h1>

        <p className="loader-subtitle">SOFTWARE TESTER • QA ENGINEER</p>

        <div className="loader-bar">
          <div className="loader-progress" style={{ width: `${progress}%` }} />
        </div>

        <span className="loader-percent">{progress}%</span>
      </div>
    </div>
  );
}
