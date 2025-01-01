import { useEffect } from "react";
import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Training from "./Components/Training";
import Project from "./Components/Projects";
import Skill from "./Components/Skills";
import Footer from "./Components/Footer";
import Router from "./Router";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      {/* <Navbar />
      <Hero />
      <About />
      <Experience />
      <Training />
      <Project />
      <Skill />
      <Footer /> */}
      <Router/>
    </div>
  );
};

export default App;
