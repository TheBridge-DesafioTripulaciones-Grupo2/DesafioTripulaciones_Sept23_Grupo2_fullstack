import React from "react";

const ClientCard = (props) => {
  console.log(props);
  return (
    <>
      <section id="card_section">
        <img id="card_image" src={props.imagen} alt="imagen de cliente" />
        <article id="card_info">
          <h5 id="card_titular">{props.titular}</h5>
          <p id="card_direccion">{props.cups.direccion_suministro}</p>
          <p id="card_cups">{props.cups.CUPS}</p>
        </article>
      </section>
    </>
  );
};

export default ClientCard;
