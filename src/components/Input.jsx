import React from "react";
import "../styles/input.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import EventIcon from "@mui/icons-material/Event";


export default function Input({ name, type, onchange, id, value }) {
  console.log(value);
  // console.log(onchange);
  if (true) {
    return (
      <>
        <TextField
          type={type}
          label={name}
          variant="outlined"
          name={name}
          id={id}
          style={{ margin: "16px", width: "50%" }}
          onChange={onchange}
          value={value}
          InputLabelProps={{
            shrink: true, // Ensure that the label doesn't overlap with the input value
          }}
          // InputProps={{
          //   startAdornment: (
          //     <InputAdornment position="start">
          //       <EventIcon />
          //     </InputAdornment>
          //   ),
          // }}
        />
      </>
    );
  }
}
