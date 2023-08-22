import react from "react";
import "../styles.css";

export default function Button({ title, color, ontap }) {
  let style = {
    backgroundColor: color,
  };
  return (
    <button style={style} onClick={ontap}>
      {title}
    </button>
  );
}
