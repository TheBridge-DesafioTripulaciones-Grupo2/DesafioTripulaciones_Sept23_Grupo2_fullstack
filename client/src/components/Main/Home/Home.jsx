import React, { useContext } from "react";
import Carrusel from "./Carrusel/Carrusel";
import { userContext } from "../../../context/authContext";

const Home = () => {
  const { userstate } = useContext(userContext);
  return (
    <>
      <h1>¡Bienvenido, {userstate.asesor}!</h1>
      <section id="achievements">
        <article id="proposals-accepted" className="achievement">

        </article>
        <article id="new-clients" className="achievement">
        </article>
        <article id="" className="achievement">
        </article>
      </section>
      <Carrusel></Carrusel>
    </>
  );
};

export default Home;