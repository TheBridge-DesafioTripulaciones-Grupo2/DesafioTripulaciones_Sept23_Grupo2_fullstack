import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ClientsList from "./ClientsList/ClientsList";
import CreateFileComponent from "./CreateFileComponent";
import FileComponent from "./FileComponent";
import Profile from "./Profile/Profile";
import ClientDetails from "./ClientDetails/ClientDetails";
import Home from "../Main/Home";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/createfile" element={<CreateFileComponent />} />
        <Route path="/home" element={<Home />} />

        <Route path="/file" element={<FileComponent />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/clients/:userId" element={<ClientsList />} />
        <Route path="/client-details/:id" element={<ClientDetails />} />
        <Route path="/home" element={<Home />} />

        <Route path="/*" element={<Navigate to={"/login"} />} />
        {/* <Route path="/" element={<Home />} /> */}

   
      </Routes>
    </main>
  );
};

export default Main;
