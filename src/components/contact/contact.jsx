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
      </div>
      <div className="contact-grid">
        <div className="aboutMe">
          <img src="assets/mypic.png" alt="avatar" />
          <p>
            Highly interested in processing, analyzing, and visualizing huge
            amounts of spatial and non spatial information on the web, I have
            some experience creating geo web services and building applications
            using different mapping libraries and web technologies. Constantly
            looking forward to increase my knowledge in web development.
          </p>
          <a href="https://yaqubkhani.com/cv/yaqubkhani_CV.pdf">
            <img
              style={{ height: "40px", border: "none" }}
              src="assets/downloadCV.png"
              alt="CV"
            />
          </a>
        </div>
        <div className="contactMe">
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
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
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
      </div>
      <div className="contactIcons">
        <FontAwesomeIcon
          icon={faMapMarkerAlt}
          size="2x"
          color="black"
          style={{ paddingLeft: "0rem", paddingRight: "1rem" }}
        />
        Enschede, Netherlands
        <FontAwesomeIcon
          icon={faSkype}
          size="2x"
          color="black"
          style={{ paddingLeft: "3rem", paddingRight: "1rem" }}
        />
        mortezayg
        <a href="mailto:yaqubkhani.m@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="2x"
            color="black"
            style={{ paddingLeft: "3rem", paddingRight: "1rem" }}
          />
        </a>
        <a href="https://www.linkedin.com/in/morteza-yaqubkani-20313b53/">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="2x"
            color="black"
            style={{ paddingLeft: "3rem", paddingRight: "1rem" }}
          />
        </a>
        <a href="https://github.com/MortezaYaqubkhani">
          <FontAwesomeIcon
            icon={faGithub}
            size="2x"
            color="black"
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
