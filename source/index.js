import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";
import { BrowserRouter } from "react-router-dom";

import "./components/styles/style.scss";

const content = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDom.render(content, document.getElementById("introContent"));
