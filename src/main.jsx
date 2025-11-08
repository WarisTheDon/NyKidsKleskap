import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/app.css";  // Sørg for at app.css ligger i src/styles/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
