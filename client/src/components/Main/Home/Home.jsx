import React, { useContext } from "react";
import Carrusel from "./Carrusel/Carrusel";
import { userContext } from "../../../context/authContext";

const Home = () => {
  const {userstate} = useContext(userContext);
  return (
    <>
    <h1>¡Bienvenido, {userstate.asesor}!</h1>
    <Carrusel></Carrusel>
    </>
  );
};

export default Home;
