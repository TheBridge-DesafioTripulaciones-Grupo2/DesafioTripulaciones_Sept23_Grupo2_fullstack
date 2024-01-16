import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Cookies from 'js-cookie';
import authService from '../../services/services';
import bill from '../../../placeholders/bill.json';
import proposal from '../../../placeholders/proposal.json';


const PDF = () => {
    const [data, setData] = useState(null);
    const { id } = useParams();

    const Token = Cookies.get('Token');
    const Proposal = { Propuesta: proposal,
                        Bill: bill,
                        CUPS: "cups",
                        Client: "client",
                        User: "user"};

    useEffect(() => {
        const fetchData = async () => {
            try {
              const result = await authService.getPropuesta(id);
              console.log(result);
              if (result.message == "Propuesta recovered" && result.propuesta != null) {
                const info = {Propuesta: result.propuesta,
                                Bill: result.propuesta.bill,
                                CUPS: "cups",
                                Client: "client",
                                User: "user"};
                setData(info)
              } else {
                setData(Proposal);
              }
            } catch (error) {
              setData(Proposal)
            }
          }
          fetchData()
      }, []);

    const DescargarPDF = () => {
        
    }

  return (
    <main>
      <img src="/portada-pdf.svg" alt="Portada" id="portada"/>
      <section id="border"></section>
      <section id="propuestaPDF">
        <img src="/Several.svg" alt="Several" />
        <section id="datosHeader">
            <section className="headerSection">
                <p>Nombre: {data != null ? (data.Client.titular) : ("")}</p>
                <p>Dirección: {data != null ? (data.Client.direcion_suministro) : ("")}</p>
                <p>Cups: {data != null ? (data.CUPS.CUPS) : ("")}</p>
                <img src="/puntos.png" alt="linea" className="img1"/>
                <img src="/puntos.png" alt="linea" className="img2"/>
                <img src="/puntos.png" alt="linea" className="img3"/>
            </section>
            <section className="headerSection">
                <p>Asesor energético: {data != null ? (data.User.asesor) : ("")}</p>
                <p>Contacto: {data != null ? (data.User.contacto) : ("")}</p>
                <p>Delegación: {data != null ? (data.User.delegacion) : ("")}</p>
                <img src="/puntos.png" alt="linea" className="img1"/>
                <img src="/puntos.png" alt="linea" className="img2"/>
                <img src="/puntos.png" alt="linea" className="img3"/>
            </section>
        </section>
        <section id="separador1">

        </section>
      </section>
      <button id="descargarPDF" onClick={DescargarPDF}>Descargar</button>
    </main>
  );
};

export default PDF;
