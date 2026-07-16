import PageHeader from "./PageHeader/PageHeader";
import SideBar from "./SideBarFolder/SideBar";
import CardsContainer from "./CardsContainer/CardsContainer";
import InfoCards from "./InfoCardsFolder/InfoCards";

import logo from "./assets/images/logo.svg";
import menuIcon from "./assets/images/icon-menu.svg";
import Divider from "./Divider/Divider";
export default function App() {
  return (
    <main className="main">
      <header class="mobile-navbar hidden">
        <img src={logo} alt="logo" className="logo-mobile-view" />
        <button class="menu-btn">
          <span class="menu-icon"></span>
        </button>
      </header>
      <SideBar />
      <div className="main-content">
        <PageHeader name="Lucia" status="CONFIRMED" />
        <CardsContainer />
        <InfoCards />
      </div>
    </main>
  );
}
