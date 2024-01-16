import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import ClientsList from "./ClientsList/ClientsList";

const Main = () => {
  return (
    <main>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/clients/:userId" element={<ClientsList />} />

        <Route path="/*" element={<Navigate to={"/clients/:userId"} />} />
      </Routes>
    </main>
  );
  //crear rutas
};

export default Main;
