import react from "react";
import "../styles.css";
import MButton from "@mui/material/Button";

export default function Button({ title, color, ontap }) {
  let style = {
    backgroundColor: color,
  };
  return (
    // <button style={style} onClick={ontap}>
    //   {title}
    // </button>
    <Button variant="contained">Contained</Button>
  );
}
