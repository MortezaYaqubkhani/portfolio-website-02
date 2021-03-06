import "./topBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneSquare,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
// import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons'

const TopBar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"topBar " + (menuOpen && "active")}>
      <div className="wrapper">
        {/* <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>

          <div className="itemContainer">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            <span>location</span>
          </div>

          <div className="itemContainer">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <span>icon</span>
          </div>

          <div className="itemContainer">
            <FontAwesomeIcon icon={faPhoneSquare} className="icon" />
            <span>icon</span>
          </div>
        </div> */}
        <div className="right">
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
