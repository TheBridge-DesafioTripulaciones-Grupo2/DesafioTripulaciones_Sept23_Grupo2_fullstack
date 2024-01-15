import React, { useState } from "react";
import bannerImage from "../../../assets/client-details.svg";
const ClientDetails = () => {
  // const [clientName, setClientName] = useState("Client Name");
  // const [clientAdress, setClientAdress] = useState("Adress");
  // const [clientPhone, setClientPhone] = useState("123 456 789");

  let clientName = "Client Name";
  let clientAddress = "Adress";
  let clientPhone = "123 456 789";

  return (
    <section id="client-details">
      <section id="client-details-banner">
        <img src={bannerImage} alt="Banner Image" />
        <h1>Data</h1>
      </section>
      <section id="client-lists">
        <section id="client-bills">
          <h3>Factura actual del cliente</h3>
        </section>
        <section id="client-proposals">
          <h3>Propuestas Several</h3>
        </section>
      </section>
    </section>
  );
};

export default ClientDetails;
