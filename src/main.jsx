import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename={"/matthew-wright9630.github.io/forest-fire-game/"}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
