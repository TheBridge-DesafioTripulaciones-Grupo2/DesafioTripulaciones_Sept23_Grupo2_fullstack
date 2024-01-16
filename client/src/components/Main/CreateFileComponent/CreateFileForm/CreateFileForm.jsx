import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClientContext } from "../../../../context/clientContext";

const CreateFileForm = () => {
  const { clientData, setClientData } = useContext(ClientContext);
  const [titular, setTitular] = useState("");
  const [direccion, setDireccion] = useState("");
  const [cups, setCups] = useState("");

  const isFormFilled = titular && direccion && cups;

  const navigate = useNavigate(); // For navigation

  const handlesubmit = (event) => {
    event.preventDefault();
    setClientData({
      titular,
      direccion,
      cups,
    });
    navigate("/file");
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
      <button type="submit" onClick={handlesubmit} disabled={!isFormFilled}>
        Continuar
      </button>
    </form>
  );
};

export default CreateFileForm;
