import FancyText from "../FancyText";
import Button from "../Button";
import "../PageHeader/PageHeader.css";
export default function PageHeader({ name, status }) {
  return (
    <div className="page-header">
      <div className="page-header-message">
        <FancyText
          tag="p"
          text={`BOOKING · ${status}`}
          className="confirmation-message"
        />
        <p className="welcome-message">
          Bienvenue, <span>{name}</span>
        </p>
      </div>
      <div className="page-header-buttons">
        <Button text="Print receipt" className="print-btn" />
        <Button text="Add to calender" className="add-calender-btn" />
      </div>
    </div>
  );
}
