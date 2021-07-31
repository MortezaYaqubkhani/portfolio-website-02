import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = () => {
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
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/pic.png" alt="mypic" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
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
    </div>
  );
};

export default Intro;
