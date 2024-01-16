import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClientContext } from "../../../../context/clientContext";
import { createClient } from "../../../../services/clients.services.js";
import { userContext } from "../../../../context/authContext.js";
import Swal from "sweetalert2";
import { createCUPS } from "../../../../services/CUPS.services.js";

const CreateFileForm = () => {
  const { clientData, setClientData } = useContext(ClientContext);
  const { userstate } = useContext(userContext);
  const [titular, setTitular] = useState("");
  const [direccion, setDireccion] = useState("");
  const [cups, setCups] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");

  //Imagen por defecto hasta que se implemente añadir imagenes
  const [imagen, setImagen] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"
  );

  const isFormFilled = titular && direccion && cups;
  useEffect(() => {
    if (userstate) {
      console.log(userstate.user_id);
    }
  }, []);

  useEffect(() => {
    if (userstate) {
      setClientData({
        user_id: userstate.user_id,
        titular,
        direccion,
        cups,
        email,
        phone_number,
        imagen,
      });
    }
  }, [titular, direccion, cups, email, phone_number]);

  const navigate = useNavigate(); // For navigation

  // const handleCreateClient = async (data) => {
  //   try {
  //     await createClient(data);
  //     console.log("Client created!");
  //   } catch (error) {
  //     console.error("Error creating client:", error);
  //   }
  // };

  const handlesubmit = async (event) => {
    event.preventDefault();
    console.log(clientData);
    try {
      let clientRes = await createClient(clientData);
      console.log(clientRes);
      await createCUPS({
        CUPS: cups,
        client_id: clientRes.object.client_created.client_id,
        direccion_suministro: clientRes.object.data.direccion,
      });
      navigate("/file");
    } catch (error) {
      // console.log("Error creating client:", error);
      Swal.fire({
        icon: "error",
        title: error.message,
        text: "Por favor procede a iniciar sesión",
      });
    }
  };
  return (
    <form id="create-file-form">
      <input
        type="text"
        name="titular"
        id="titular"
        placeholder="Titular"
        value={titular}
        onChange={(e) => setTitular(e.target.value)}
      />
      <input
        type="text"
        name="direccion-suministros"
        id="direccion-suministros"
        placeholder="Dirección suministros"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
      />
      <input
        type="text"
        id="cups"
        name="cups"
        placeholder="CUPS"
        value={cups}
        onChange={(e) => setCups(e.target.value)}
      />
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Email (opcional)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        id="phone_number"
        name="phone_number"
        placeholder="Número de teléfono (opcional)"
        value={phone_number}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button type="submit" onClick={handlesubmit} disabled={!isFormFilled}>
        Continuar
      </button>
    </form>
  );
};

export default CreateFileForm;
