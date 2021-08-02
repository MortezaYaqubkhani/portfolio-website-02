import PortfolioList from "../portfolioList/portfolioList";
import "./portfolio.scss";
import { useState } from "react";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const list = [
    { id: "featured", title: "Featured" },
    { id: "design", title: "Design" },
    { id: "mobileApp", title: "Mobile App" },
    { id: "webApp", title: "Web App" },
    { id: "branding", title: "Branding" },
  ];
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://cdn.trendhunterstatic.com/thumbs/bea-banking-app.jpeg"
            alt="banking app"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://cdn.trendhunterstatic.com/thumbs/bea-banking-app.jpeg"
            alt="banking app"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://cdn.trendhunterstatic.com/thumbs/bea-banking-app.jpeg"
            alt="banking app"
          />
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://cdn.trendhunterstatic.com/thumbs/bea-banking-app.jpeg"
            alt="banking app"
          />
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
