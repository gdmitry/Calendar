import ReactDOM from "react-dom";
import React from "react";
import { Calendar } from "./components/Calendar";
import { config } from "./data/config";

ReactDOM.render(
  <Calendar data={config} />,
  document.getElementById("app")
);