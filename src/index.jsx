import React from "react";
import ReactDOM from "react-dom/client";
import "./resert.css";
import "./index.css";
import UserList from "./components/UserList/UserList";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserList />
  </React.StrictMode>,
);

reportWebVitals();
