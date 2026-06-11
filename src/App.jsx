import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/global.css";
import Achievements from "./components/Achievement";
import Sidebar from "./components/Sidebar";

export default function App() {
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
