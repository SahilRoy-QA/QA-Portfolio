/* ── data/index.js ───────────────────────────────────────── */
/* All site content lives here. Edit this file to update the site. */

export const NAV_LINKS = [
  "Home",
  "Skills",
  "Experience",
  "Projects",
  "Education",
  "Achievements",
  "Contact",
];

export const HERO = {
  name: "Sahil Roy",
  title: "Test Engineer II | QA Manual Tester",
  bio: "Detail-oriented Software Tester with experience in manual and automation testing across enterprise applications. Skilled in test case design, defect tracking, and testing complex modules — focused on delivering high-quality software.",
};

export const SKILLS = [
  { label: "Core Java", icon: "☕", color: "#f89820" },
  { label: "Python (Basic)", icon: "🐍", color: "#ffd343" },
  // { label: "Selenium", icon: "🟢", color: "#43b02a" },
  { label: "Playwright", icon: "🎭", color: "#45ba4b" },
  { label: "Manual Testing", icon: "🔍", color: "#00b4d8" },
  { label: "Functional Testing", icon: "✅", color: "#34d399" },
  { label: "Regression Testing", icon: "🔁", color: "#a78bfa" },
  { label: "Smoke & Sanity", icon: "💨", color: "#f472b6" },
  { label: "Ad-hoc Testing", icon: "🎯", color: "#fb923c" },
  { label: "Cross-browser Testing", icon: "🌐", color: "#60a5fa" },
  { label: "IntelliJ IDEA", icon: "🛠", color: "#00b4d8" },
  { label: "VS Code", icon: "💻", color: "#007acc" },
];

export const EXPERIENCE = [
  {
    role: "Test Engineer II",
    company: "Bassetti India Pvt. Ltd.",
    location: "Kolkata, West Bengal",
    period: "Feb 2025 – Present",
    bullets: [
      "Designed and executed test cases for web applications, improving product reliability and reducing production issues.",
      "Performed manual testing — functional, regression, and exploratory — enhancing defect detection by up to 70% and ensuring stable releases.",
      "Identified, documented, and tracked bugs/defects, leading to faster issue resolution and improved development efficiency.",
      "Implemented basic automation testing using Selenium to automate repetitive test scenarios.",
      "Conducted cross-browser testing to ensure compatibility across different environments.",
      "Collaborated with developers to resolve issues and verified bug fixes through re-testing.",
    ],
  },
  {
    role: "Java Developer Intern",
    company: "Ministry of MSME, Govt. of India",
    location: "MSME Training Program",
    period: "Oct 2023 – Nov 2023",
    bullets: [
      "Completed hands-on training in Core Java, OOP concepts, and basic application development.",
      "Worked on exception handling, file handling, and the collections framework.",
      "Gained understanding of software development lifecycle and debugging techniques.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "TEEXMA — Enterprise Application Testing",
    tag: "Overview",
    description:
      "End-to-end testing on TEEXMA, a complex enterprise application at Bassetti India. Covered functional, regression, smoke & sanity, ad-hoc, and cross-browser testing across multiple integrated modules.",
    stack: ["Manual Testing", "Selenium", "Cross-browser", "Enterprise QA"],
    accent: "#00e5ff",
  },
  {
    title: "TxGantt (LIMS)",
    tag: "Module",
    description:
      "Tested workflow management, task scheduling, and timeline dependencies within the Laboratory Information Management System. Validated Gantt chart rendering and dependency logic under various data conditions.",
    stack: ["Functional Testing", "Regression Testing", "LIMS"],
    accent: "#a78bfa",
  },
  {
    title: "TxChart",
    tag: "Module",
    description:
      "Validated large-scale data visualization in chart formats, ensuring accuracy, performance, and rendering consistency across browsers. Tested chart updates on dynamic data changes.",
    stack: ["Data Validation", "Performance Testing", "Cross-browser"],
    accent: "#34d399",
  },
  {
    title: "TxTableView",
    tag: "Module",
    description:
      "Tested handling and display of large datasets in tabular format, covering sorting, filtering, pagination, and edge cases with empty or malformed data entries.",
    stack: ["Functional Testing", "Boundary Testing", "Data Integrity"],
    accent: "#fb923c",
  },
  {
    title: "Data Model",
    tag: "Module",
    description:
      "Verified the system's capability to create, delete, and modify complex object structures and attributes. Tested schema changes, attribute constraints, and model integrity under concurrent operations.",
    stack: ["Schema Testing", "CRUD Validation", "Regression Testing"],
    accent: "#f472b6",
  },
  {
    title: "TxAnalytics",
    tag: "Module",
    description:
      "Tested cross-departmental data synchronization, custom dashboard personalization, and metric accuracy within the Tx Analytics module. Validated dynamic data visualization and real-time refresh logic under various concurrency and load conditions.",
    stack: ["Data Validation", "Performance Testing", "Cross-browser"],
    accent: "#daf562",
  },
  {
    title: "Extraction",
    tag: "Module",
    description:
      "Tested report generation, export, and filtering capabilities, ensuring accuracy and consistency across different report formats and data conditions.",
    stack: ["Data Validation", "Performance Testing", "Cross-browser"],
    accent: "#fbbf24",
  },
  {
    title: "TxBi",
    tag: "Module",
    description:
      "Tested funtionalities of TxBI, a TEEXMA module that turns raw laboratory and technical data into live visual analytics, KPIs, and quality charts to help executives make decisions.",
    stack: ["Data Validation", "Visual Representation", "Cross-browser","UI Testing"],
    accent: "#45fbe9",
  },
];

export const EDUCATION = [
  {
    degree: "B.Tech in Electronics & Communication Engineering",
    school: "Gargi Memorial Institute of Technology, Baruipur",
    period: "2021 – 2025",
    grade: "CGPA: 7.77",
  },
];

export const ACHIEVEMENT = {
  title1: "Employee of the Month",
  description1:
    "Recognized for detecting 180+ defects in a single module, including 15 high-priority, high-severity issues — significantly enhancing system reliability and reducing production risks.",

  title2: "Isolated 20+ High-Priority Defects",
  description2:
    "Successfully identified over 20 critical bugs before release. Directly contributed to enhanced software stability and was recognized for exceptional attention to detail in edge-case scenarios.",
};

export const CONTACT = {
  email: "roysahil579@gmail.com",
  phone: "+91 9163006574",
  linkedin: "https://www.linkedin.com/in/sahil-roy-0b8233293/",
  github: "https://github.com/SahilRoy-QA",
};
