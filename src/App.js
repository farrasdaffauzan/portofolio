import { useEffect } from "react";
import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./Components/About";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default App;
