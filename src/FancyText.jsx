export default function FancyText({ tag, text, style }) {
  const customTag = tag;
  return <customTag className={style}>{text}</customTag>;
}
