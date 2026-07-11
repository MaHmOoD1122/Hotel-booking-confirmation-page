import "./CardsContainer.css";
import Receipt from "../ReceiptFolder/Receipt";
import WelcomeCard from "../WelcomeCardFolder/WelcomeCard";
import sparkleIcon from "../assets/images/icon-sparkle.svg";
import sunIcon from "../assets/images/illustration-sun.svg";
export default function CardsContainer() {
  return (
    <div className="cards-container">
      <div className="cards">
        <Receipt className="receipt-card" />
        <img src={sunIcon} alt="sun icon" className="sun-icon" />
        <WelcomeCard className="welcome-card" />
      </div>

      <div className="cards-container-message">
        <img src={sparkleIcon} alt="sparkle icon" />
        <p>HOVER TO FAN</p>
        <img src={sparkleIcon} alt="sparkle icon" />
      </div>
    </div>
  );
}
