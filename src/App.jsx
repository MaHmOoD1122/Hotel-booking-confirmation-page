import Button from "./Button";
import FancyText from "./FancyText";

import SideBar from "./SideBarFolder/SideBar";
import Receipt from "./ReceiptFolder/Receipt";
import WelcomeCard from "./WelcomeCardFolder/WelcomeCard";
export default function App() {
  return (
    <main>
      <SideBar />
      <div className="cards">
        <Receipt />
        <WelcomeCard />
      </div>
    </main>
  );
}
