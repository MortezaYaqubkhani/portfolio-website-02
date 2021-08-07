import "./testimonials.scss";

const Testimonials = ({ menuOpen, setMenuOpen }) => {
  // const [featured, setFeatured] = set
  const data = [
    {
      id: 1,
      name: "General",
      title: "CEO of the harvet show",
      img: "assets/generalDevelopmentIcon1.png",
      icon: "https://www.webinarwinkel.nl/wp-content/uploads/2020/04/YouTube-button.png",
      desc1: "•	Software Version Control, knowledge of Git.",
      desc2:
        "•	Experience in software Design Patterns, UML, web Frameworks and Architecture.",
      desc3: "",
      desc4: "",
    },
    {
      id: 2,
      name: "GIS Development",
      title: "CEO of the dogehouse",
      img: "assets/gisDevelopmentIcon.png",
      icon: "https://www.webinarwinkel.nl/wp-content/uploads/2020/04/YouTube-button.png",
      desc1: "•	Python programming and geospatial analysis with python.",
      desc2:
        "•	International web mapping standards and specifications (WFS, WMS, WPS, 3D tiles, 2D tiles) ",
      desc3:
        "•	Experience working with web map services, APIs, and JS mapping libraries (leaflet.js, Mapbox GL JS, CesiumJS, and OpenLayers",
      desc4: "•	ArcGIS, ArcGIS pro, QGIS, ERDAS Imagine.",
    },
    {
      id: 1,
      name: "Back End Development",
      title: "CTO, Farabourse",
      img: "assets/backendIcon.png",
      icon: "https://www.webinarwinkel.nl/wp-content/uploads/2020/04/YouTube-button.png",
      desc1: "•	Node.js & Express JS,)",
      desc2: "• REST APIs & AJAX",
      desc3:
        "•	Working knowledge of relational databases (PostgreSQL) and non relational databases (MongoDB) ",
      desc4:
        "•	Data Science, Machine learning with Python ( libraries such as NumPy, SciPy, Pandas, GeoPandas, SciKit-Learn, Matplotlib, Seaborn, and PySAL)",
    },
    {
      id: 1,
      name: "Front End Development",
      title: "Finance, IFIG",
      img: "assets/frontEndIcon.png",
      icon: "https://www.webinarwinkel.nl/wp-content/uploads/2020/04/YouTube-button.png",
      desc1: "•	Good knowledge of JavaScript (ES6), ",
      desc2: "• HTML, CSS",
      desc3: "• React JS, Bootstrap, jQuery, and Ext JS",
      desc4:
        "• Experience data visualization with D3.js (Data-driven documents) ",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Skills</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img className="left" src={d.img} alt="arrow" />
              {/* <img className="user" src={d.img} alt="personPic" />
              <img className="right" src={d.icon} alt="youTube" /> */}
            </div>
            <div className="bottom">
              <h4>{d.name}</h4>
              <h5>{d.title}</h5>
            </div>
            <div className="center">
              {d.desc1}
              <br />
              {d.desc2}
              <br />
              {d.desc3}
              <br />
              {d.desc4}
            </div>
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

export default Testimonials;
