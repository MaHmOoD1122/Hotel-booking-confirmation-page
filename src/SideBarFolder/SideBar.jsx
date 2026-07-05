import "./SideBar.css";
import logo from "../assets/images/logo.svg";
import bedIcon from "../assets/images/icon-bed.svg";
import houseIcon from "../assets/images/icon-house.svg";
import pinIcon from "../assets/images/icon-pin.svg";
import breakfastOutlineIcon from "../assets/images/icon-breakfast-outline.svg";
import mailIcon from "../assets/images/icon-mail.svg";
export default function SideBar() {
  return (
    <aside className="sidebar">
      <a href="#" className="logo-link">
        <img src={logo} alt="The logo" className="logo-img" />
      </a>
      <span className="list-divider"></span>
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
