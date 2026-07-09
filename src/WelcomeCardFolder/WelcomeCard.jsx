import "./WelcomeCard.css";
import Divider from "../Divider/Divider";
import FancyText from "../FancyText";
import sunIcon from "../assets/images/icon-sun.svg";
export default function WelcomeCard() {
  return (
    <div className="welcome-card">
      <Divider type="dashed" borderColor={"var(--neutral-400)"} />
      <div className="welcome-card-header">
        <FancyText
          tag="h2"
          text="WELCOME CARD"
          className="welcome-card-title"
        />
        <img src={sunIcon} alt="sun icon" />
      </div>
      <div className="welcome-card-body">
        <p className="host-note">
          A note from your host, <span className="host-name">Margaux.</span>
        </p>
        <FancyText
          tag="p"
          text="We're so glad you're coming. The shutters will be open, the lemonade
          cold, and the cat - Poivre - pretending not to notice you."
          className="host-message"
        />
      </div>
      <footer className="welcome-card-footer">
        <FancyText tag="h5" text="ROOM" className="room-label" />
        <FancyText tag="p" text="La Garrigue" className="room-name" />
      </footer>
    </div>
  );
}
