import "./App.scss";
import TopBar from "./components/topBar/topBar";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfoio/portfolio";
import Works from "./components/works/works";
import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/contact/contact";
import { useState } from "react";
import Menu from "./components/menu/menu";
import React from "react";
import "./assets/styles.css";
import Resume from "./components/resume/resume";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Portfolio menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Testimonials menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Resume menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Contact menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      </div>
    </div>
  );
}

export default App;
