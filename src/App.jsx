import Button from "./Button";
import FancyText from "./FancyText";

import PageHeader from "./PageHeader/PageHeader";
import SideBar from "./SideBarFolder/SideBar";
import Receipt from "./ReceiptFolder/Receipt";
import WelcomeCard from "./WelcomeCardFolder/WelcomeCard";
export default function App() {
  return (
    <main className="main">
      <SideBar />
      <div className="main-content">
        <PageHeader name="Lucia" status="CONFIRMED" />

        <div className="cards">
          <Receipt />
          <WelcomeCard />
        </div>
      </div>
    </main>
  );
}
