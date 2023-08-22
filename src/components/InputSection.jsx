import react, { useState } from "react";
import "../styles.css";
import Button from "./Button";
export default function InputSection({ children, title, cv }) {
  let [issubmit, setissubmit] = useState(false);
  let cvarray = [];
  let element;
  const [work, setwork] = useState([]);
  function tap(params) {
    issubmit === true ? setissubmit(false) : setissubmit(true);
    console.log(cv);
    for (const key in cv) {
      if (key == title) {
        element = cv[key];
      }
    }
    for (const key in element) {
      let value = element[key];
      // let link =
      // console.log(link);
      let format = (
        <div className="cv-body">
          <h1>{key}</h1>
          <p>{value}</p>
        </div>
      );
      cvarray.push(format);
    }

    setwork(cvarray);
    // console.log(works)
  }

  return !issubmit ? (
    <div id="InputSection">
      <h2>{title.toUpperCase()}</h2>

      {children}
      <div>
        <Button
          title="Submit"
          color="red"
          type="submit"
          ontap={tap}
          btntype="submit"
        />
      </div>
    </div>
  ) : (
    <>
      <div id="InputSection">
        {work}
        <Button
          title="Edit"
          color="green"
          type="edit"
          ontap={tap}
          btntype="edit"
        />
      </div>
    </>
  );
}
