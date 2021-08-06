import "./App.scss";
import TopBar from "./components/topBar/topBar";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfoio/portfolio";
import Works from "./components/works/works";
import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/contact/contact";
import { useState } from "react";
import Menu from "./components/menu/menu";
import ParticlesComponent from "./components/particles/particles";
// import Particles from "react-particles-js";
import { tsParticles } from "tsparticles";
import React, { Component } from "react";
import Particle from "react-particles-js";
import particlesConfig from "./assets/particlesConfig.json";
import "./assets/styles.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    // <>
    //   <Particle params={particlesConfig} className="App-particles__container" />
    //   <div className="App">
    //     <div className="App-text">
    //       <h1 className="App-text__title">Pathetic Geek</h1>
    //       <h2 className="App-text__body">
    //         I am a full stack web and mobile developer
    //       </h2>
    //     </div>
    //   </div>
    // </>
    //     <div>

          <div className="app">
            {/* <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> */}
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="sections">
              <Intro menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
              <Portfolio menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
              <Works />
              <Testimonials />
              <Contact />
            </div>
          </div>
       
  );
}

export default App;
