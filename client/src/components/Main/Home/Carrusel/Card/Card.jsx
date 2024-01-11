import React from "react";

const Card = () => {
  return (
    <>
      <section>
        <img src={`fotoCliente`} alt={`fotoCliente`} />
        <h3>{props.name}</h3>
      </section>
    </>
  );
};

export default Card;
