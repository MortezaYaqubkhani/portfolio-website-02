import "./testimonials.scss";

const Testimonials = () => {
  // const [featured, setFeatured] = set
  const data = [
    {
      id: 1,
      name: "Alex Harvey",
      title: "CEO of the harvet show",
      img: "http://www.woman-themovie.org/wp-content/uploads/2020/02/RENOULIN_Claire-3.jpg",
      icon: "https://www.webinarwinkel.nl/wp-content/uploads/2020/04/YouTube-button.png",
      desc: "We're in contact with US Olympic and Paralympic Committee and with World Athletics,said IOC spokesman Mark Adams on Monday. I dont want to say what those next steps would beuntil we fully understand what is going on. We dont want to pre-empt anything",
    },
    {
      id: 2,
      name: "Ben Awed",
      title: "CEO of the dogehouse",
      img: "https://pbs.twimg.com/media/EytSdxXVoAUXwU5.jpg",
      icon: "https://www.webinarwinkel.nl/wp-content/uploads/2020/04/YouTube-button.png",
      desc: "We're in contact with US Olympic and Paralympic Committee and with World Athletics,said IOC spokesman Mark Adams on Monday. I dont want to say what those next steps would beuntil we fully understand what is going on. We dont want to pre-empt anything",
      featured: true,
    },
    {
      id: 1,
      name: "Behanm Chamani",
      title: "CTO, Farabourse",
      img: "https://media-exp1.licdn.com/dms/image/C5103AQGMB7Du028E8w/profile-displayphoto-shrink_200_200/0/1517442611049?e=1632355200&v=beta&t=B4JBGTxFqXOA28re-cF5JyPb1O8E6dtva6An9XeFEpI",
      icon: "https://www.webinarwinkel.nl/wp-content/uploads/2020/04/YouTube-button.png",
      desc: "We're in contact with US Olympic and Paralympic Committee and with World Athletics,said IOC spokesman Mark Adams on Monday. I dont want to say what those next steps would beuntil we fully understand what is going on. We dont want to pre-empt anything",
    },
    {
      id: 1,
      name: "Fateme",
      title: "Finance, IFIG",
      img: "https://thumbs.dreamstime.com/b/female-avatar-icon-flat-style-female-user-icon-cartoon-woman-avatar-pink-hair-vector-stock-91462795.jpg",
      icon: "https://www.webinarwinkel.nl/wp-content/uploads/2020/04/YouTube-button.png",
      desc: "We're in contact with US Olympic and Paralympic Committee and with World Athletics,said IOC spokesman Mark Adams on Monday. I dont want to say what those next steps would beuntil we fully understand what is going on. We dont want to pre-empt anything",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={ d.featured? "card featured" : "card"}>
            <div className="top">
              <img
                className="left"
                src="https://cpng.pikpng.com/pngl/s/410-4104194_arc-diagram-transprent-png-free-download-angle-arrow.png"
                alt="arrow"
              />
              <img className="user" src={d.img} alt="personPic" />
              <img className="right" src={d.icon} alt="youTube" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
