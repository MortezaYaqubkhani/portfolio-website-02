import "./works.scss";
import { useState } from "react";

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png",
      title: "web design",
      desc: "We're in contact with US Olympic and Paralympic Committee and with World Athletics,said IOC spokesman Mark Adams on Monday. I dont want to say what those next steps would beuntil we fully understand what is going on. We dont want to pre-empt anything",
      img: "https://images.squarespace-cdn.com/content/v1/536fe0f6e4b08758c320b79a/1522086265994-3G86VCN6IE4SZ4Q77BRV/image-asset.jpeg",
    },
    {
      id: 2,
      icon: "https://media.istockphoto.com/vectors/flat-icon-check-vector-id496603666?k=6&m=496603666&s=170667a&w=0&h=CdaZL0kvQieOEjq0Vt8gLzlZvVQDKtiqZEx32WDDEYs=",
      title: "GIS development",
      desc: "We're in contact with US Olympic and Paralympic Committee and with World Athletics,said IOC spokesman Mark Adams on Monday. I dont want to say what those next steps would beuntil we fully understand what is going on. We dont want to pre-empt anything",
      img: "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      icon: "http://simpleicon.com/wp-content/uploads/rocket.png",
      title: "web development",
      desc: "We're in contact with US Olympic and Paralympic Committee and with World Athletics,said IOC spokesman Mark Adams on Monday. I dont want to say what those next steps would beuntil we fully understand what is going on. We dont want to pre-empt anything",
      img: "https://www.senseiprojectsolutions.com/wp-content/uploads/2019/10/01.-Portfolio-Dashboard-1.png",
    },
    {
      id: 4,
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Video-Game-Controller-Icon-IDV-green.svg/2048px-Video-Game-Controller-Icon-IDV-green.svg.png",
      title: "Game design",
      desc: "We're in contact with US Olympic and Paralympic Committee and with World Athletics,said IOC spokesman Mark Adams on Monday. I dont want to say what those next steps would beuntil we fully understand what is going on. We dont want to pre-empt anything",
      img: "https://unity.com/sites/default/files/styles/16_9_s_scale_width/public/2020-08/Game-developer-working-on-Unity-Editor-scene.jpg?itok=gpG2QbZI",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slidebar"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt={d.title} />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt={d.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arr.png"
        className="arrow left"
        alt="arrleft"
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arr.png"
        className="arrow right"
        alt="arrright"
        onClick={() => handleClick("right")}
      />
    </div>
  );
};

export default Works;
