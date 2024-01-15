import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import CreateFileComponent from "./CreateFileComponent";
import FileComponent from "./FileComponent";
import Profile from "./Profile/Profile";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/createfile" element={<CreateFileComponent />} />
        <Route path="/file" element={<FileComponent />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/*" element={<Navigate to={"/login"} />} />
      </Routes>
    </main>
  );
};

export default Main;
