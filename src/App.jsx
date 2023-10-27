import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Service from "./components/Service";
import Footer from "./components/Footer";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Project />
      <Service />
      <Footer />
    </div>
  );
};

export default App;
