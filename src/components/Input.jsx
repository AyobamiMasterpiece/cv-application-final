import React from "react";
import "../styles/input.css";

export default function Input({ name, type, onchange, id, value }) {
  console.log(value);
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        id={name}
        name={name}
        onChange={onchange}
        id={id}
        value={value}
      />
    </>
  );
}
