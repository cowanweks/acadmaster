import "./App.css";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header, SideBar, StatusBar } from "../../components";
import { Student, Home, Settings, Account, Teacher } from "../../containers";

const App = () => {
  return (
    <div id="App">
      {/* <SideBar toggled={false} /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home theme="dark" />} />
        <Route path="/students" element={<Student />} />
        <Route path="/teachers" element={<Teacher />} />
        <Route path="/account" element={<Account />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <StatusBar variant="primary" />
    </div>
  );
};

export { App };
