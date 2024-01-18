import React, { useEffect, useState } from "react";
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import { pdfjs } from 'react-pdf';
// import ReactPDF, { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { useParams } from "react-router";
import authService from '../../services/services';
import bill from '../../../placeholders/bill.json';
import proposal from '../../../placeholders/proposal.json';
import cups from '../../../placeholders/CUPS.json';
import client from '../../../placeholders/client.json';
import user from '../../../placeholders/user.json';
import Swal from 'sweetalert2';
  

const PDF = () => {
    const [data, setData] = useState(null);
    const { id } = useParams();

    const Proposal = { Propuesta: proposal,
                        Bill: bill,
                        CUPS: cups,
                        Client: client,
                        User: user};

    useEffect(() => {
        const fetchData = async () => {
            try {
              const result = await authService.getPropuesta(id);
              console.log(result);
              if (result.message == "Propuesta recovered" && result.propuesta != null) {
                const info = {Propuesta: result.propuesta,
                                Bill: result.propuesta.bill,
                                CUPS: result.propuesta.bill.CUPs,
                                Client: result.propuesta.bill.CUPs.Client,
                                User: result.propuesta.bill.CUPs.Client.User};
                setData(info)
              } else {
                setData(Proposal);
              }
            } catch (error) {
                console.log(error);
              setData(Proposal)
            }
          }
          fetchData()
      }, []);

    const DescargarPDF = () => {
        Swal.fire({
            title: "¿Seguro que quieres descargar el PDF?",
            showDenyButton: true,
            confirmButtonText: "Si",
            denyButtonText: `No`
          }).then((result) => {
            // if (result.isConfirmed) {
            //     const generatePDF = async () => {
            //         try {
            //             const pdfBlob = await fetch(MyDocument).then((res) => res.blob());
            //             const blobUrl = URL.createObjectURL(pdfBlob);
                  
            //             const link = document.createElement('a');
            //             link.href = blobUrl;
            //             link.download = `PropuestaCompleta${id}.pdf`;
            //             document.body.appendChild(link);
            //             link.click();
            //             document.body.removeChild(link);
            //         } catch (error) {
            //             console.error('Error al descargar el PDF', error);
            //             Swal.fire({
            //                 icon: "error",
            //                 title: "No se ha podido descargar el PDF"
            //               })
            //         }
            //     };
            //     generatePDF();
            //}
        });
    }

  return (
    <main>
      <img src="/portada-pdf.svg" alt="Portada" id="portada" />
      <section id="border"></section>
      <section id="propuestaPDF">
        <img src="/Several.svg" alt="Several"/>
        <section id="datosHeader">
            <section className="headerSection">
                <p>Nombre: {data != null ? (data.Client.titular) : ("")}</p>
                <p>Dirección: {data != null ? (data.CUPS.direccion_suministro) : ("")}</p>
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
            <p>Datos de factura actual</p>
        </section>
        <table id="tarifasPDF">
            <thead>
            <tr>
                <th className="vacia"></th> 
                <th>P1</th>
                <th>P2</th>
                <th>P3</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>Precios potencia (€/kw/dia)</th>
                <td>{data != null ? (data.Bill.P1_precios_potencia) : ("")}</td> 
                <td>{data != null ? (data.Bill.P2_precios_potencia) : ("")}</td>
                <td>{data != null ? (data.Bill.P2_precios_potencia) : ("")}</td>
            </tr>
            <tr>
                <th>Precios energía media anual (€/kwh)</th>
                <td>{data != null ? (data.Propuesta.P1_precio_anual) : ("")}</td>
                <td>{data != null ? (data.Propuesta.P2_precio_anual) : ("")}</td>
                <td>{data != null ? (data.Propuesta.P3_precio_anual) : ("")}</td>
            </tr>
            <tr>
                <th>Precios energia (€/kwh)</th>
                <td>{data != null ? (data.Bill.P1_precio_mes) : ("")}</td>
                <td>{data != null ? (data.Bill.P2_precio_mes) : ("")}</td>
                <td>{data != null ? (data.Bill.P3_precio_mes) : ("")}</td>
            </tr>
            <tr>
                <th>Consumo anual (kwh)</th>
                <td>{data != null ? (data.Propuesta.P1_consumo_anual) : ("")}</td>
                <td>{data != null ? (data.Propuesta.P2_consumo_anual) : ("")}</td>
                <td>{data != null ? (data.Propuesta.P3_consumo_anual) : ("")}</td>
            </tr>
            <tr>
                <th>Consumo factura actual (kwh)</th>
                <td>{data != null ? (data.Bill.P1_consumo_actual) : ("")}</td>
                <td>{data != null ? (data.Bill.P2_consumo_actual) : ("")}</td>
                <td>{data != null ? (data.Bill.P3_consumo_actual) : ("")}</td>
            </tr>
            <tr>
                <th>Potencia facturada (kwh)</th>
                <td>{data != null ? (data.Bill.P1_potencia_contratada) : ("")}</td>
                <td>{data != null ? (data.Bill.P2_potencia_contratada) : ("")}</td>
                <td>{data != null ? (data.Bill.P3_potencia_contratada) : ("")}</td>
            </tr>
            </tbody>
        </table>
        <table id="otrosActualPDF">
            <tbody>
            <tr>
                <td>Energia reactiva</td>
                <td>{data != null ? (data.Bill.energia_reactiva) : ("")}</td> 
            </tr>
            <tr>
                <td>Impuesto eléctrico</td>
                <td>{data != null ? (data.Bill.impuesto_electrico) : ("")}</td> 
            </tr>
            <tr>
                <td>Alquiler de equipo</td>
                <td>{data != null ? (data.Bill.alquiler_equipo) : ("")}</td> 
            </tr>
            <tr>
                <td>Otros conceptos</td>
                <td>{data != null ? (data.Bill.otros_precio.reduce((total, numero) => total + numero, 0)) : ("")}</td> 
            </tr>
            </tbody>
        </table>
        <table id="totalActualPDF">
            <thead>
            <tr>
                <th className="vacia"></th> 
                <th>Actual</th>
                <th>Anual</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>Total Energía</th>
                <td>{data != null ? (data.Propuesta.total_energia_actual_actual) : ("")}</td> 
                <td>{data != null ? (data.Propuesta.total_energia_actual_anual) : ("")}</td>
            </tr>
            <tr>
                <th>Total Potencia</th>
                <td>{data != null ? (data.Propuesta.total_potencia_actual_actual) : ("")}</td> 
                <td>{data != null ? (data.Propuesta.total_potencia_actual_anual) : ("")}</td>
            </tr>
            </tbody>
        </table>
        <section className="CardContainerPDF">
            <article className="TotalCard">
                <div>
                    <div>
                    <div>
                        <p className="price">{data != null ? (data.Propuesta.total_factura_actual) : ("")}</p>
                        <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                            d="M6.80317 11.25C6.76813 11.495 6.75 11.7454 6.75 12C6.75 12.2546 6.76813 12.505 6.80317 12.75H10C10.4142 12.75 10.75 13.0858 10.75 13.5C10.75 13.9142 10.4142 14.25 10 14.25H7.25522C8.09782 16.0237 9.9057 17.25 12 17.25C12.9575 17.25 13.853 16.9944 14.6245 16.5481C14.983 16.3407 15.4418 16.4632 15.6492 16.8218C15.8566 17.1803 15.7341 17.6391 15.3755 17.8465C14.3819 18.4213 13.2282 18.75 12 18.75C9.06101 18.75 6.56072 16.8717 5.63409 14.25H5C4.58579 14.25 4.25 13.9142 4.25 13.5C4.25 13.0858 4.58579 12.75 5 12.75H5.2912C5.26397 12.5037 5.25 12.2535 5.25 12C5.25 11.7465 5.26397 11.4962 5.2912 11.25H5C4.58579 11.25 4.25 10.9142 4.25 10.5C4.25 10.0858 4.58579 9.75 5 9.75H5.63409C6.56072 7.12832 9.06101 5.25 12 5.25C13.2282 5.25 14.3819 5.57872 15.3755 6.15349C15.7341 6.3609 15.8566 6.81969 15.6492 7.17824C15.4418 7.53678 14.983 7.6593 14.6245 7.4519C13.853 7.00564 12.9575 6.75 12 6.75C9.9057 6.75 8.09782 7.97629 7.25522 9.75H10C10.4142 9.75 10.75 10.0858 10.75 10.5C10.75 10.9142 10.4142 11.25 10 11.25H6.80317Z"
                            fill="#FAFAFA"
                            />
                        </svg>
                        </div>
                    </div>
                    <div>
                        <p className="labelPDF">Total factura</p>
                    </div>
                    </div>
                </div>
            </article>
            <article className="TotalCard">
                <div>
                    <div>
                    <div>
                        <p className="price">{data != null ? (data.Propuesta.total_anual_actual) : ("")}</p>
                        <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                            d="M6.80317 11.25C6.76813 11.495 6.75 11.7454 6.75 12C6.75 12.2546 6.76813 12.505 6.80317 12.75H10C10.4142 12.75 10.75 13.0858 10.75 13.5C10.75 13.9142 10.4142 14.25 10 14.25H7.25522C8.09782 16.0237 9.9057 17.25 12 17.25C12.9575 17.25 13.853 16.9944 14.6245 16.5481C14.983 16.3407 15.4418 16.4632 15.6492 16.8218C15.8566 17.1803 15.7341 17.6391 15.3755 17.8465C14.3819 18.4213 13.2282 18.75 12 18.75C9.06101 18.75 6.56072 16.8717 5.63409 14.25H5C4.58579 14.25 4.25 13.9142 4.25 13.5C4.25 13.0858 4.58579 12.75 5 12.75H5.2912C5.26397 12.5037 5.25 12.2535 5.25 12C5.25 11.7465 5.26397 11.4962 5.2912 11.25H5C4.58579 11.25 4.25 10.9142 4.25 10.5C4.25 10.0858 4.58579 9.75 5 9.75H5.63409C6.56072 7.12832 9.06101 5.25 12 5.25C13.2282 5.25 14.3819 5.57872 15.3755 6.15349C15.7341 6.3609 15.8566 6.81969 15.6492 7.17824C15.4418 7.53678 14.983 7.6593 14.6245 7.4519C13.853 7.00564 12.9575 6.75 12 6.75C9.9057 6.75 8.09782 7.97629 7.25522 9.75H10C10.4142 9.75 10.75 10.0858 10.75 10.5C10.75 10.9142 10.4142 11.25 10 11.25H6.80317Z"
                            fill="#FAFAFA"
                            />
                        </svg>
                        </div>
                    </div>
                    <div>
                        <p className="labelPDF">Anual estimado</p>
                    </div>
                    </div>
                </div>
            </article>
        </section>
        <section id="separador2">
            <p>Oferta Several</p>
        </section>
        <table id="tarifasOfertaPDF">
            <thead>
            <tr>
                <th className="vacia"></th> 
                <th>P1</th>
                <th>P2</th>
                <th>P3</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>Precios potencia (€/kw/dia)</th>
                <td>{data != null ? (data.Propuesta.P1_precio_potencia) : ("")}</td> 
                <td>{data != null ? (data.Propuesta.P2_precio_potencia) : ("")}</td>
                <td>{data != null ? (data.Propuesta.P2_precio_potencia) : ("")}</td>
            </tr>
            <tr>
                <th>Precios energía(mes de factura)</th>
                <td>{data != null ? (data.Propuesta.P1_precio_mes) : ("")}</td>
                <td>{data != null ? (data.Propuesta.P2_precio_mes) : ("")}</td>
                <td>{data != null ? (data.Propuesta.P3_precio_mes) : ("")}</td>
            </tr>
            <tr>
                <th>Precios energía (media último año)</th>
                <td>{data != null ? (data.Propuesta.P1_precio_anual) : ("")}</td>
                <td>{data != null ? (data.Propuesta.P1_precio_anual) : ("")}</td>
                <td>{data != null ? (data.Propuesta.P1_precio_anual) : ("")}</td>
            </tr>
            </tbody>
        </table>
        <table id="otrosOfertaPDF">
            <tbody>
            <tr>
                <td>Energia reactiva</td>
                <td>{data != null ? (data.Propuesta.energia_reactiva_propuesta) : ("")}</td> 
            </tr>
            <tr>
                <td>Impuesto eléctrico</td>
                <td>{data != null ? (data.Propuesta.impuesto_electrico_propuesta) : ("")}</td> 
            </tr>
            <tr>
                <td>Alquiler de equipo</td>
                <td>{data != null ? (data.Propuesta.alquiler_equipo_propuesta) : ("")}</td> 
            </tr>
            <tr>
                <td>Otros conceptos</td>
                <td>{data != null ? (data.Propuesta.otros_precio_propuesta.reduce((total, numero) => total + numero, 0)) : ("")}</td> 
            </tr>
            </tbody>
        </table>
        <table id="totalOfertaPDF">
            <thead>
            <tr>
                <th className="vacia"></th> 
                <th>Actual</th>
                <th>Anual</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th>Total Energía</th>
                <td>{data != null ? (data.Propuesta.total_energia_propuesta_actual) : ("")}</td> 
                <td>{data != null ? (data.Propuesta.total_energia_propuesta_anual) : ("")}</td>
            </tr>
            <tr>
                <th>Total Potencia</th>
                <td>{data != null ? (data.Propuesta.total_potencia_propuesta_actual) : ("")}</td> 
                <td>{data != null ? (data.Propuesta.total_potencia_propuesta_anual) : ("")}</td>
            </tr>
            </tbody>
        </table>
        <section className="CardContainerPDF">
            <article className="TotalCard">
                <div>
                    <div>
                    <div>
                        <p className="price">{data != null ? (data.Propuesta.total_factura_propuesta) : ("")}</p>
                        <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                            d="M6.80317 11.25C6.76813 11.495 6.75 11.7454 6.75 12C6.75 12.2546 6.76813 12.505 6.80317 12.75H10C10.4142 12.75 10.75 13.0858 10.75 13.5C10.75 13.9142 10.4142 14.25 10 14.25H7.25522C8.09782 16.0237 9.9057 17.25 12 17.25C12.9575 17.25 13.853 16.9944 14.6245 16.5481C14.983 16.3407 15.4418 16.4632 15.6492 16.8218C15.8566 17.1803 15.7341 17.6391 15.3755 17.8465C14.3819 18.4213 13.2282 18.75 12 18.75C9.06101 18.75 6.56072 16.8717 5.63409 14.25H5C4.58579 14.25 4.25 13.9142 4.25 13.5C4.25 13.0858 4.58579 12.75 5 12.75H5.2912C5.26397 12.5037 5.25 12.2535 5.25 12C5.25 11.7465 5.26397 11.4962 5.2912 11.25H5C4.58579 11.25 4.25 10.9142 4.25 10.5C4.25 10.0858 4.58579 9.75 5 9.75H5.63409C6.56072 7.12832 9.06101 5.25 12 5.25C13.2282 5.25 14.3819 5.57872 15.3755 6.15349C15.7341 6.3609 15.8566 6.81969 15.6492 7.17824C15.4418 7.53678 14.983 7.6593 14.6245 7.4519C13.853 7.00564 12.9575 6.75 12 6.75C9.9057 6.75 8.09782 7.97629 7.25522 9.75H10C10.4142 9.75 10.75 10.0858 10.75 10.5C10.75 10.9142 10.4142 11.25 10 11.25H6.80317Z"
                            fill="#FAFAFA"
                            />
                        </svg>
                        </div>
                    </div>
                    <div>
                        <p className="labelPDF">Total factura</p>
                    </div>
                    </div>
                </div>
            </article>
            <article className="TotalCard">
                <div>
                    <div>
                    <div>
                        <p className="price">{data != null ? (data.Propuesta.total_anual_propuesta) : ("")}</p>
                        <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                            d="M6.80317 11.25C6.76813 11.495 6.75 11.7454 6.75 12C6.75 12.2546 6.76813 12.505 6.80317 12.75H10C10.4142 12.75 10.75 13.0858 10.75 13.5C10.75 13.9142 10.4142 14.25 10 14.25H7.25522C8.09782 16.0237 9.9057 17.25 12 17.25C12.9575 17.25 13.853 16.9944 14.6245 16.5481C14.983 16.3407 15.4418 16.4632 15.6492 16.8218C15.8566 17.1803 15.7341 17.6391 15.3755 17.8465C14.3819 18.4213 13.2282 18.75 12 18.75C9.06101 18.75 6.56072 16.8717 5.63409 14.25H5C4.58579 14.25 4.25 13.9142 4.25 13.5C4.25 13.0858 4.58579 12.75 5 12.75H5.2912C5.26397 12.5037 5.25 12.2535 5.25 12C5.25 11.7465 5.26397 11.4962 5.2912 11.25H5C4.58579 11.25 4.25 10.9142 4.25 10.5C4.25 10.0858 4.58579 9.75 5 9.75H5.63409C6.56072 7.12832 9.06101 5.25 12 5.25C13.2282 5.25 14.3819 5.57872 15.3755 6.15349C15.7341 6.3609 15.8566 6.81969 15.6492 7.17824C15.4418 7.53678 14.983 7.6593 14.6245 7.4519C13.853 7.00564 12.9575 6.75 12 6.75C9.9057 6.75 8.09782 7.97629 7.25522 9.75H10C10.4142 9.75 10.75 10.0858 10.75 10.5C10.75 10.9142 10.4142 11.25 10 11.25H6.80317Z"
                            fill="#FAFAFA"
                            />
                        </svg>
                        </div>
                    </div>
                    <div>
                        <p className="labelPDF">Total Anual</p>
                    </div>
                    </div>
                </div>
            </article>
        </section>
        <section id="separador3">
            <p>Ahorro</p>
        </section>
        <section className="CardContainerPDF" id="porcentajesPDF">
            <article className="TotalCard">
                <div>
                    <div>
                    <div>
                        <p className="price">{data != null ? (data.Propuesta.porcentaje_ahorro_actual) : ("")}%</p>
                        <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                            d="M6.80317 11.25C6.76813 11.495 6.75 11.7454 6.75 12C6.75 12.2546 6.76813 12.505 6.80317 12.75H10C10.4142 12.75 10.75 13.0858 10.75 13.5C10.75 13.9142 10.4142 14.25 10 14.25H7.25522C8.09782 16.0237 9.9057 17.25 12 17.25C12.9575 17.25 13.853 16.9944 14.6245 16.5481C14.983 16.3407 15.4418 16.4632 15.6492 16.8218C15.8566 17.1803 15.7341 17.6391 15.3755 17.8465C14.3819 18.4213 13.2282 18.75 12 18.75C9.06101 18.75 6.56072 16.8717 5.63409 14.25H5C4.58579 14.25 4.25 13.9142 4.25 13.5C4.25 13.0858 4.58579 12.75 5 12.75H5.2912C5.26397 12.5037 5.25 12.2535 5.25 12C5.25 11.7465 5.26397 11.4962 5.2912 11.25H5C4.58579 11.25 4.25 10.9142 4.25 10.5C4.25 10.0858 4.58579 9.75 5 9.75H5.63409C6.56072 7.12832 9.06101 5.25 12 5.25C13.2282 5.25 14.3819 5.57872 15.3755 6.15349C15.7341 6.3609 15.8566 6.81969 15.6492 7.17824C15.4418 7.53678 14.983 7.6593 14.6245 7.4519C13.853 7.00564 12.9575 6.75 12 6.75C9.9057 6.75 8.09782 7.97629 7.25522 9.75H10C10.4142 9.75 10.75 10.0858 10.75 10.5C10.75 10.9142 10.4142 11.25 10 11.25H6.80317Z"
                            fill="#FAFAFA"
                            />
                        </svg>
                        </div>
                    </div>
                    <div>
                        <p className="labelPDF">Total factura</p>
                    </div>
                    </div>
                </div>
            </article>
            <article className="TotalCard">
                <div>
                    <div>
                    <div>
                        <p className="price">{data != null ? (data.Propuesta.porcentaje_ahorro_anual) : ("")}%</p>
                        <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                            d="M6.80317 11.25C6.76813 11.495 6.75 11.7454 6.75 12C6.75 12.2546 6.76813 12.505 6.80317 12.75H10C10.4142 12.75 10.75 13.0858 10.75 13.5C10.75 13.9142 10.4142 14.25 10 14.25H7.25522C8.09782 16.0237 9.9057 17.25 12 17.25C12.9575 17.25 13.853 16.9944 14.6245 16.5481C14.983 16.3407 15.4418 16.4632 15.6492 16.8218C15.8566 17.1803 15.7341 17.6391 15.3755 17.8465C14.3819 18.4213 13.2282 18.75 12 18.75C9.06101 18.75 6.56072 16.8717 5.63409 14.25H5C4.58579 14.25 4.25 13.9142 4.25 13.5C4.25 13.0858 4.58579 12.75 5 12.75H5.2912C5.26397 12.5037 5.25 12.2535 5.25 12C5.25 11.7465 5.26397 11.4962 5.2912 11.25H5C4.58579 11.25 4.25 10.9142 4.25 10.5C4.25 10.0858 4.58579 9.75 5 9.75H5.63409C6.56072 7.12832 9.06101 5.25 12 5.25C13.2282 5.25 14.3819 5.57872 15.3755 6.15349C15.7341 6.3609 15.8566 6.81969 15.6492 7.17824C15.4418 7.53678 14.983 7.6593 14.6245 7.4519C13.853 7.00564 12.9575 6.75 12 6.75C9.9057 6.75 8.09782 7.97629 7.25522 9.75H10C10.4142 9.75 10.75 10.0858 10.75 10.5C10.75 10.9142 10.4142 11.25 10 11.25H6.80317Z"
                            fill="#FAFAFA"
                            />
                        </svg>
                        </div>
                    </div>
                    <div>
                        <p className="labelPDF">Anual estimado</p>
                    </div>
                    </div>
                </div>
            </article>
        </section>
        <section id="imgCIAPDF">
            <img src={data != null ? (`/companies/${data.Propuesta.CIA}.svg`) : ("/companies/CANDELA.svg")} alt="imagen" />
        </section>
      </section>
      <button id="descargarPDF" onClick={DescargarPDF}>Descargar</button>
    </main>
  );
};

export default PDF;
