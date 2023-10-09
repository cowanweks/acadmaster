import "./App.css";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "@components/Header";
import { StatusBar } from "@components/StatusBar";
import { SideBar } from "@components/SideBar";
import { Student } from "@containers/Student";
import { Home } from "@containers/Home";
import { Settings } from "@containers/Settings";
import { Account } from "@containers/Account";
import { Teacher } from "@containers/Teacher";

export const App = () => {
  return (
    <div id="App">
      <SideBar toggled={false} />
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
