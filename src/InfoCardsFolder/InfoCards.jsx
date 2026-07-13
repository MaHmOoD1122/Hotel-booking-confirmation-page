import "./InfoCards.css";
// import FancyText from "../FancyText";
import keyIcon from "../assets/images/icon-key.svg";
import wifiIcon from "../assets/images/icon-wifi.svg";
import breakfastIcon from "../assets/images/icon-breakfast.svg";

const WifiBody = () => (
  <div className="wifi-body">
    <p className="process">Le Soleil · Guest</p>
    <small className="helper-detail">Password below</small>
    <div className="network-details wifi-details">
      <p className="wifi-detail-type">NETWORK</p>
      <p>Le Soleil · Guest</p>
    </div>
    <div className="password-details wifi-details">
      <p className="wifi-detail-type">PASSWORD</p>
      <div className="password-part">
        <p className="password">soleil-2026</p>
        <button className="copy-btn">COPY</button>
      </div>
    </div>
  </div>
);
const TextBody = ({ process, helperDetail, details }) => (
  <>
    <p className="process">{process}</p>
    <small className="helper-detail">{helperDetail}</small>
    <p className="info-card-details">{details}</p>
  </>
);
export default function InfoCards() {
  const infoCards = [
    {
      id: 1,
      icon: keyIcon,
      name: "ARRIVAL",
      number: "01",
      iconClassName: "arrival-icon",
      headerClassName: "arrival-header",
      renderBody: () => (
        <TextBody
          process="Check-in from 15:00"
          helperDetail="Sat, 25 April"
          details="Ring the brass bell by the blue door. If we're at the market, the key is in the terracotta pot by the olive tree."
        />
      ),
    },
    {
      id: 2,
      icon: wifiIcon,
      name: "WIFI",
      number: "02",
      iconClassName: "wifi-icon",
      process: "Le Soleil · Guest",
      headerClassName: "wifi-header",
      helperDetail: "Password below",
      renderBody: () => <WifiBody />,
    },
    {
      id: 3,
      icon: breakfastIcon,
      name: "BREAKFAST",
      number: "03",
      iconClassName: "breakfast-icon",
      headerClassName: "breakfast-header",
      renderBody: () => (
        <TextBody
          process="Served 8 - 10:30"
          helperDetail="On the terrace"
          details="Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before."
        />
      ),
    },
  ];
  return (
    <div className="info-cards-container">
      {infoCards.map((card) => (
        <InfoCard
          icon={card.icon}
          key={card.id}
          name={card.name}
          number={card.number}
          iconClassName={card.iconClassName}
          headerClassName={card.headerClassName}
          renderBody={card.renderBody}
        />
      ))}
    </div>
  );
}
function InfoCard({
  icon,
  name,
  number,
  headerClassName,
  iconClassName,
  renderBody,
}) {
  return (
    <div className="info-card">
      <div className={`info-card-header ${headerClassName}`}>
        <div className="info-card-type">
          <img src={icon} alt={name} className={`icon ${iconClassName}`} />
          <h4 className={`info-card-title ${name}`}>{name}</h4>
        </div>
        <p className="info-card-number">{number}</p>
      </div>
      <div className="info-card-body">{renderBody()}</div>
    </div>
  );
}
