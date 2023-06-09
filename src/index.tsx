import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/tailwind.css";
import WebRoutes from "./routes/WebRoutes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <WebRoutes />
  </React.StrictMode>
);
