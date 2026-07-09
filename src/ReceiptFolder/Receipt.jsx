import Divider from "../Divider/Divider";
import FancyText from "../FancyText";
import "./Receipt.css";
import barcodeIcon from "../assets/images/icon-barcode.svg";
export default function Receipt() {
  return (
    <div className="receipt-card">
      <div className="receipt-header">
        <div className="header-left">
          <FancyText tag="p" text="RECEIPT" className="header-title" />
          <FancyText tag="p" text="Your stay" className="header-message" />
        </div>
        <div className="header-right">
          <FancyText tag="p" text="№ MS-2026" />
          <FancyText tag="p" text="0421-AH" />
        </div>
      </div>
      <Divider type="dashed" borderColor="var(--neutral-400)" />
      <div className="receipt-dates">
        <div className="check-in">
          <FancyText tag="p" text="CHECK IN" className="check-in-title" />
          <FancyText tag="p" text="25 Apr" className="date" />
          <FancyText tag="p" text="Saturday · 15:00" className="time" />
        </div>
        <div className="check-out">
          <FancyText tag="p" text="CHECK OUT" className="check-out-title" />
          <FancyText tag="p" text="29 Apr" className="date" />
          <FancyText tag="p" text="Wednesday · 11:00" className="time" />
        </div>
      </div>
      <Divider type="dashed" borderColor="var(--neutral-400)" />
      <div className="cost-in-parts">
        <p className="Days-of-stay space-between">
          <FancyText tag="span" text="Room · La Garrigue × 4 nights" />
          <FancyText tag="span" text="€ 620.00" />
        </p>
        <p className="food space-between">
          <FancyText tag="span" text="Breakfast × 2 guests" />
          <FancyText tag="span" text="€ 96.00" />
        </p>
        <p className="tourist-tax space-between">
          <FancyText tag="span" text="Tourist tax" />
          <FancyText tag="span" text="€ 14.40" />
        </p>
      </div>
      <Divider borderColor="var(--neutral-800)" />
      <p className="total-cost-details space-between">
        <FancyText tag="span" text="TOTAL PAID" className="total-cost-title" />
        <FancyText tag="span" text="€ 730.40" className="total-cost" />
      </p>
      <div className="receipt-footer space-between">
        <FancyText tag="span" text="PAID · WISE · GBP" />

        <img src={barcodeIcon} alt="barcode" className="barcode" />
      </div>
    </div>
  );
}
