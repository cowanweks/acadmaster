import "./css/App.css";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Header,StatusBar ,SideBar,} from "@components/index";
import { Settings,Student,Home,Account,Teacher } from "@containers/index";

export const App = () => {
  return (
    <div id="App">
      <SideBar toggled={false} />
      <Header />
      <Routes>
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
