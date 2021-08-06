import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import particlesConfig from "../../assets/particlesConfig.json";
import "../../assets/styles.css";
import Particle from "react-particles-js";

const Intro = ({ menuOpen, setMenuOpen }) => {
  const textRef = useRef();

  useEffect(() => {
    console.log(textRef);
    init(textRef.current, {
      showCursor: true,
      backDelay: 2000,
      strings: ["Full Stack Developer", "GIS Developer"],
    });
  }, []);

  return (
    <>
      <div className="intro" id="intro">
        <Particle
          params={particlesConfig}
          className="App-particles__container"
        />
        <div className="wrapper">
          <div
            className={"right " + (menuOpen && "active")}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="hamburger">
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
          <h2>Hi There, I'm</h2>
          <h1>Morteza Yaqubkani</h1>
          <h3>
            Junior <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/arrow.png" alt="arrow-down" />
        </a>
      </div>
    </>
  );
};

export default Intro;
