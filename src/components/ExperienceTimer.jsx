import React, { useState, useEffect } from "react";

const ExperienceTimer = () => {
  // Start date: February 1st, 2025
  const startDate = new Date(2025, 1, 1);

  const [experience, setExperience] = useState({ years: 0, months: 0 });

  useEffect(() => {
    const calculateExperience = () => {
      const now = new Date();

      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();

      if (months < 0) {
        months += 12;
        years--;
      }

      setExperience({ years, months });
    };

    calculateExperience();
  }, []);

  const badgeStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    // CHANGED: Reduced side padding from 26px to 12px to trim the width
    padding: "8px 12px",
    borderRadius: "4px",
    fontSize: "13px", // Slightly smaller text to match the tighter padding
    fontWeight: "700",
    letterSpacing: "0.4px",
    cursor: "default",
    textDecoration: "none",
    transition: "transform 0.15s, opacity 0.15s",
    backgroundColor: "rgba(0, 229, 255, 0.1)",
    color: "#00e5ff",
    border: "1px solid #00e5ff",
    fontFamily: "monospace",
  };

  const yearText =
    experience.years > 0
      ? `${experience.years} YR${experience.years !== 1 ? "S" : ""}`
      : "";
  const monthText = `${experience.months} Month${experience.months !== 1 ? "s" : ""}`;

  return (
    <div style={badgeStyle} className="experience-badge">
      ⚡ {yearText} {monthText} of QA EXPERIENCE
    </div>
  );
};

export default ExperienceTimer;
