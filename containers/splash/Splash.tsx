import "./Splash.css";
import React from "react";
import { invoke } from "@tauri-apps/api";

export const Splash = () => {
  return (
    <div id="Splash" onContextMenu={(event) => event.preventDefault()}>
      Hello
    </div>
  );
};
