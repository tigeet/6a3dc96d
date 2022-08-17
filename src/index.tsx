import React from "react";
import ReactDOM from "react-dom/client";
import App from "App";
import { createGlobalStyle } from "styled-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Roboto;
    box-sizing: border-box;
  }
`;

root.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>
);
