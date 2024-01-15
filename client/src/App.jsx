import { useState } from 'react'
import { userContext } from "./context/authContext";
import { Route, Routes, Navigate } from "react-router-dom";
import Router from "./Router";
import Login from "./components/Login/Login";

function App() {
  const [userstate, setUser] = useState(null);

  const updateUser = (newUser) => {
    setUser(newUser);
  };
  const userData = { userstate, updateUser };

  return (
    <>
    <userContext.Provider value={userData}>
      <Routes>
        <Route path="*" element={<Router />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/mensual/:id" element={<Login />} />
        <Route path="/anual/:id" element={<Login />} /> */}
        <Route path="/completa/:id" element={<Login />} />

      </Routes>
    </userContext.Provider>
    </>
  );
}

export default App;
