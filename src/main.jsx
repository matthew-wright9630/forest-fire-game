import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter, Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import App from "./components/App/App";
import "./index.css";
import RandomBoard from "./components/RandomBoard/RandomBoard";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/Random-Board" exact element={<RandomBoard />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
