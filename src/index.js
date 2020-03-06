import React from "react";
import ReactDOM from "react-dom";
import { RomanNumeral } from "./components/RomanNumeral";

ReactDOM.render(
  <RomanNumeral decimalNumber={36} />,
  document.getElementById("root")
);
