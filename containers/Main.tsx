import "./Index.css";
import React from "react";
import { App } from "./app";
import { Splash } from "./splash";
import { Signin } from "./Signin";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { invoke } from "@tauri-apps/api";

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

        {/* Route to the App Page */}
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
