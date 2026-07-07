export default function FancyText({ tag, text, className }) {
  const CustomTag = tag;
  return <CustomTag className={className}>{text}</CustomTag>;
}
