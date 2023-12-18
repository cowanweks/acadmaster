import "./css/App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Header, StatusBar, SideBar, } from "@components/index";
import {
  Settings, Student, Home,
  Account, Teacher, Assistant,
  Calender, Department, Event,
  Exam, Extras, Feed, Staff, Subject
} from "@containers/index";

export const App = () => {
  return (
    <div id="App" onContextMenu={(event) => event.preventDefault()}>
      <SideBar toggled={false} />
      <Header />
      <Routes>
        <Route path="*" element={<Home theme="dark" />} />
        <Route path="/" element={<Home theme="dark" />} />
        <Route path="/students" element={<Student />} />
        <Route path="/teachers" element={<Teacher />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/departments" element={<Department />} />
        <Route path="/events" element={<Event />} />
        <Route path="/exams" element={<Exam />} />
        <Route path="/extras" element={<Extras />} />
        <Route path="/feeds" element={<Feed />} />
        <Route path="/staffs" element={<Staff />} />
        <Route path="/account" element={<Account />} />
        <Route path="/subjects" element={<Subject />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <StatusBar variant="primary" />
    </div>
  );
};
