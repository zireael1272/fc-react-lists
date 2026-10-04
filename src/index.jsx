import React from "react";
import ReactDOM from "react-dom/client";
import "./resert.css";
import "./index.css";
import CatList from "./components/CatList/CatList";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CatList />
  </React.StrictMode>,
);

reportWebVitals();
