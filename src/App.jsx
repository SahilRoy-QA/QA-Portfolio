import { useEffect, useState } from "react";

import Loader from "./components/Loader";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Achievements from "./components/Achievement";
// import Sidebar from "./components/Sidebar";

import "./styles/global.css";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let count = 0;

    const interval = setInterval(() => {
      count += 2;

      if (count > 100) {
        count = 100;
      }

      setProgress(count);

      if (count === 100) {
        clearInterval(interval);

        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <Loader progress={progress} />;
  }

  return (
    <div className="app">
      <Navbar />

      <main>
        {/* <Sidebar /> */}

        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
