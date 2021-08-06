import PortfolioList from "../portfolioList/portfolioList";
import "./portfolio.scss";
import { useState, useEffect } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  brandingPortfolio,
} from "../portfolioData";

const Portfolio = ({ menuOpen, setMenuOpen }) => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    { id: "featured", title: "Featured" },
    { id: "design", title: "Design" },
    { id: "mobileApp", title: "Mobile App" },
    { id: "webApp", title: "Web App" },
    { id: "branding", title: "Branding" },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "webApp":
        setData(webPortfolio);
        break;
      case "mobileApp":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "branding":
        setData(brandingPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
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
        {data.map((d) => (
          <div className="item" id={d.id}>
            <img src={d.img} alt={d.title} />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
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
    </div>
  );
};

export default Portfolio;
