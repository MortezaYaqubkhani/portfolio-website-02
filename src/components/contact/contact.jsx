import "./contact.scss";
import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faSkype,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Contact = ({ menuOpen, setMenuOpen }) => {
  return (
    // <div className="contact" id="contact">
    <div className="mainContact" id="contact">
      <div className="contactTitle">
        <h1>Contact</h1>
        <div>
          <form action=""></form>
        </div>
      </div>
      <Grid className="contact-grid">
        <Cell col={6} className="aboutMe">
          <h3>About Me</h3>

          <img
            src="assets/mypic.png"
            alt="avatar"
            style={{ height: "250px" }}
          />
          <div
            style={{
              width: "80%",
              margin: "auto",
              paddingTop: "1em",
              fontSize: "15px",
              fontFamily: "Anton",
            }}
          >
            <span>
              Highly interested in processing, analyzing, and visualizing huge
              amounts of spatial and non spatial information on the web, I have
              some experience creating geo web services and building
              applications using different mapping libraries and web
              technologies. Constantly looking forward to increase my knowledge
              in web development.
            </span>
          </div>
        </Cell>
        <Cell col={6} className="contactMe">
          <h3>Contact Me</h3>
          <div className="contact-list">
            <form
              action="https://formsubmit.co/yaqubkhani.m@gmail.com"
              method="POST"
              className="contactForm"
            >
              <input
                type="hidden"
                name="_next"
                value="https://google.com"
              ></input>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name.."
                required
              />
              <hr />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <br />
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{ height: "170px" }}
                required
              ></textarea>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </Cell>
      </Grid>
      <div
        className="contactIcons"
        style={{
          width: "75%",
          margin: "auto",
          paddingTop: "1em",
          fontSize: "13px",
          fontFamily: "Anton",
          fontWeight: "bold",
        }}
      >
        <span>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            size="2x"
            color="blue"
            style={{ paddingLeft: "0rem", paddingRight: "1rem" }}
          />
          Enschede, Netherlands
        </span>
        <span>
          <FontAwesomeIcon
            icon={faSkype}
            size="2x"
            color="blue"
            style={{ paddingLeft: "3rem", paddingRight: "1rem" }}
          />
          morteza
        </span>
        <a href="mailto:yaqubkhani.m@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            color="blue"
            style={{ paddingLeft: "3rem", paddingRight: "1rem" }}
          />
        </a>
        <a href="https://www.linkedin.com/in/morteza-yaqubkani-20313b53/">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            color="blue"
            style={{ paddingLeft: "3rem", paddingRight: "1rem" }}
          />
        </a>
        <a href="https://github.com/MortezaYaqubkhani">
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            color="blue"
            style={{ paddingLeft: "3rem", paddingRight: "1rem" }}
          />
        </a>
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

export default Contact;
