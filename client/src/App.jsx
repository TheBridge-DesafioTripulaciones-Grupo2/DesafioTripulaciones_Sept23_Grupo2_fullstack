import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ClientContext } from "./context/clientContext";
import { userContext } from "./context/authContext";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Router from "./Router";
import Login from "./components/Login/Login";

function App() {
  const [clientData, setClientData] = useState({});
  const [userstate, setUser] = useState(null);

  const updateUser = (newUser) => {
    setUser(newUser);
  };
  const userData = { userstate, updateUser };

  return (
    <>
      <userContext.Provider value={userData}>
        <ClientContext.Provider value={{ clientData, setClientData }}>
          <Routes>
            <Route path="*" element={<Router />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/mensual/:id" element={<Login />} />
        <Route path="/anual/:id" element={<Login />} /> */}
            <Route path="/completa/:id" element={<Login />} />
          </Routes>
        </ClientContext.Provider>
      </userContext.Provider>
    </>
  );
}

export default App;
