import "./App.scss";
import TopBar from "./components/topBar/topBar";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfoio/portfolio";
import Works from "./components/works/works";
import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/contact/contact";
import { useState } from "react";
import Menu from "./components/menu/menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
