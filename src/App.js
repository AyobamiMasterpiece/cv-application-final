import "./styles.css";

import InputSection from "./components/InputSection";
import Input from "./components/Input";
import { useState } from "react";
export default function App() {
  // const [cvDetails, setcvDetails] = useState({
  //   fname: "",
  //   lname: "",
  //   email: "",
  //   school: "",
  //   course: "",
  //   ["date of study"]: "",
  //   ["company name"]: "",
  //   ["position title"]: "",
  //   ["start date"]: "",
  //   ["end date"]: "",
  // });

  const [cvDetails, setcvDetails] = useState({
    ["personal info"]: {
      firstname: "",
      lastname: "",
      email: "",
    },
    ["educational experience"]: {
      school: "",
      course: "",
      ["date of study"]: "",
    },
    ["work experience"]: {
      ["company name"]: "",
      ["position title"]: "",
      ["start date"]: "",
      ["end date"]: "",
    },
  });
  function changeCv(e) {
    let value = e.target.value;
    let id = e.target.id;
    let name = e.target.name;
    // setcvDetails({ ...cvDetails, [name]: value });
    setcvDetails({
      ...cvDetails,
      [id]: {
        ...cvDetails[id],
        [name]: value,
      },
    });
    console.log(cvDetails);
  }
  return (
    <div className="App">
      <h1>CV App</h1>

      <InputSection title={"personal info"} cv={cvDetails}>
        <Input
          name={"firstname"}
          id="personal info"
          type={"text"}
          onchange={changeCv}
          value={cvDetails["personal info"].firstname}
        />
        <Input
          name={"lastname"}
          id="personal info"
          type={"text"}
          onchange={changeCv}
          value={cvDetails["personal info"].lastname}
        />
        <Input
          name={"email"}
          id="personal info"
          type={"email"}
          onchange={changeCv}
          value={cvDetails["personal info"].email}
        />
      </InputSection>

      <InputSection title={"educational experience"} cv={cvDetails}>
        <Input
          name={"school"}
          id="educational experience"
          type={"text"}
          onchange={changeCv}
          value={cvDetails["educational experience"].school}
        />
        <Input
          name={"course"}
          id="educational experience"
          type={"text"}
          onchange={changeCv}
          value={cvDetails["educational experience"].course}
        />
        <Input
          name={"date of study"}
          type={"date"}
          id="educational experience"
          onchange={changeCv}
          value={cvDetails["educational experience"]["date of study"]}
        />
      </InputSection>

      <InputSection title={"work experience"} cv={cvDetails}>
        <Input
          name={"company name"}
          type={"text"}
          onchange={changeCv}
          id="work experience"
          value={cvDetails["work experience"]["company name"]}
        />
        <Input
          name={"position title"}
          type={"text"}
          onchange={changeCv}
          id="educational experience"
          value={cvDetails["work experience"]["position title"]}
        />
        <Input
          name={"start date"}
          type={"date"}
          id="educational experience"
          onchange={changeCv}
          value={cvDetails["work experience"]["start date"]}
        />
        <Input
          name={"end date"}
          type={"date"}
          id="educational experience"
          onchange={changeCv}
          value={cvDetails["work experience"]["end date"]}
        />
      </InputSection>
    </div>
  );
}
