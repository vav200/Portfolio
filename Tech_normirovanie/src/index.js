import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
import Popper from "popper.js";
import { getProfiles, getTimeInstall, getMainTime, getCharacteristics } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App
    getProfiles={getProfiles}
    getTimeInstall={getTimeInstall}
    getMainTime={getMainTime}
    getCharacteristics={getCharacteristics}
  />
);
