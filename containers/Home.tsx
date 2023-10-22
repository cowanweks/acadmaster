import "./css/Home.css";
import React from "react";

interface HomeProps {
  theme: "dark" | "light" | "auto";
}

export function Home(props: HomeProps) {
  return <div id="Home">Home</div>;
}
