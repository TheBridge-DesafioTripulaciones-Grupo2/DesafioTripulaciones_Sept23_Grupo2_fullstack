import React from "react";

const BillCard = ({ Titular, propuesta, fecha }) => {
  return (
    <>
      <section id="factura-cliente">
        <section><h5>PDF</h5></section>
        <h6>Titular: {Titular}</h6>
        <h6>Propuesta actual: {propuesta}</h6>
        <h6><b>{fecha}</b></h6>
      </section>
    </>
  );
};

export default BillCard;
