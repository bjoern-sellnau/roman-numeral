import React from "react";
import ReactDOM from "react-dom";

import { render } from "@testing-library/react";

import { RomanNumeral } from "./index";

it("renders without crashing", () => {
  const viewport = document.createElement("div");
  ReactDOM.render(<RomanNumeral />, viewport);
});
