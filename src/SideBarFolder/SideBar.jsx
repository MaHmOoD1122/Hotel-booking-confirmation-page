import "./SideBar.css";
import Divider from "../Divider/Divider";
import logo from "../assets/images/logo.svg";
import bedIcon from "../assets/images/icon-bed.svg";
import houseIcon from "../assets/images/icon-house.svg";
import pinIcon from "../assets/images/icon-pin.svg";
import breakfastOutlineIcon from "../assets/images/icon-breakfast-outline.svg";
import mailIcon from "../assets/images/icon-mail.svg";
import FancyText from "../FancyText";
import weatherIcon from "../assets/images/icon-weather.svg";
export default function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <a href="#" className="logo-link">
          <img src={logo} alt="The logo" className="logo-img" />
        </a>
        <Divider type="solid" borderColor="var(--neutral-400)" />
        <ul className="sidebar-list">
          <SideBarItem
            icon={bedIcon}
            text="Your stay"
            number={1}
            className="active"
          />
          <SideBarItem icon={houseIcon} text="The house" />
          <SideBarItem icon={pinIcon} text="Around town" />
          <SideBarItem icon={breakfastOutlineIcon} text="Breakfast" />
          <SideBarItem icon={mailIcon} text="Messages" />
        </ul>
      </div>
      <footer className="sidebar-bottom">
        <div className="weather-details">
          <FancyText tag="p" text="TODAY IN CASSIS" className="region" />
          <FancyText tag="p" text="27°" className="temperature" />
          <FancyText
            tag="p"
            text="Sunny · light breeze"
            className="descripe-weather"
          />
          <img src={weatherIcon} alt="weather icon" className="weather-icon" />
        </div>
        <Divider type="dashed" borderColor="var(--neutral-400)" />
        <div className="copyright-container">
          <p className="est-date">EST. 1987</p>
          <address class="footer-address">
            MAISON SOLEIL · 12 RUE DES OLIVIERS · CASSIS
          </address>
          <p class="copyright">&copy; 2026 MAISON SOLEIL</p>
        </div>
      </footer>
    </aside>
  );
}

function SideBarItem({ icon, text, number }) {
  return (
    <li className="sidebar-item">
      {" "}
      <a href="#" className="sidebar-item-link">
        <img src={icon} alt={text} className="sidebar-item-icon" />
        <span className="sidebar-item-text">{text}</span>
        {number && <span className="sidebar-item-number">{number}</span>}
      </a>
    </li>
  );
}
