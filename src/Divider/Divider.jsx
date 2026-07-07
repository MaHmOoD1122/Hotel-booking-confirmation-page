import "./Divider.css";
export default function Divider({ type = "solid", borderColor }) {
  return (
    <div
      className="divider"
      style={{ borderStyle: type, borderColor: borderColor }}
    ></div>
  );
}
