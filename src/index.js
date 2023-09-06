import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./styles/index.scss";
import { ClickProvider } from "./components/ClickContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ClickProvider>
      <App />
    </ClickProvider>
  </React.StrictMode>
);
