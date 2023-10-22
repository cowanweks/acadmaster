import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@containers/App";
import { Splash } from "@containers/Splash";
import { Signin } from "@containers/Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Route to the Splashscreen */}
        <Route path="/splash" element={<Splash />} />

        {/* Route to the Signin Page */}
        <Route path="/signin" element={<Signin />} />

        {/* Route to the main Application */}
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
