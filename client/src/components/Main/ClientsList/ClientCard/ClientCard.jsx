import React from "react";

const ClientCard = (props) => {
  console.log(props);
  return (
    <>
      <section>
        <img src={props.imagen} alt="imagen de cliente" />
        <h5>{props.titular}</h5>
        <p>{props.cups.direccion_suministro}</p>
        <p>{props.cups.CUPS}</p>
      </section>
    </>
  );
};

export default ClientCard;
