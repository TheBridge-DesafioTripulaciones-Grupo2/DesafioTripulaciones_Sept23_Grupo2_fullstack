import React from "react";
import { useContext, useState, useEffect } from 'react';
import { userContext } from "../../../context/authContext";
import authService from '../../../services/services';
import Cookies from 'js-cookie';
import PropuestaCard from "./PropuestaCard/PropuestaCard";

const Profile = () => {
    const { userstate } = useContext(userContext);
    const [data, setData] = useState(null);

    const Token = Cookies.get('Token');

    useEffect(() => {
      if (userstate != null) {
        const fetchData = async () => {
          try {
            console.log("prueba1");
            const result = await authService.getUser(Token, userstate.user_id);
            console.log(result);
            if (result == "error") {
              setData(null)
            } else {
              setData(result);
            }
          } catch (error) {
            setData(null)
          }
        }
        fetchData()
      }
    }, [userstate]);

    const paintDatos = () => {
      if (userstate != null) {
        return (
            <>
                <section>
                    <h1>{`${userstate.asesor}`}</h1>
                    <h4>Asesor energético: {`${userstate.contacto}`}</h4>
                    <section>
                        <img src="/email.png" alt="email" />
                        <h5>{`${userstate.email}`}</h5>
                    </section>
                </section>
            </>
        )
      }
    }

    const paintPropuestas = () => {
        if (data != null && data != undefined) {
          return data.Clients?.map(client => (
            Array.isArray(client.CUPs) && client.CUPs[0]?.facturas?.[0]?.map(factura => (
                <PropuestaCard
                key={1}
                Titular={client.titular}
                propuesta={factura.CIA}
                fecha={factura.cretedAt}
                />
            ))
          ));
        } else {
            return (
            <PropuestaCard
                key={1}
                Titular={"Restaurante Name"}
                propuesta={"CIberdrola, S.A."}
                fecha={"23 Junio, 2023"}
                />
            );
        }
      }


  return (
    <>
    {userstate != null && userstate.acceso ? (
        <section id="ProfileContainer">
            <img src="/perfil.png" alt="perfil" />
            <section id="datosPerfil">
                {paintDatos()}
            </section>
            <section id="Propuestas" className="PropuestaSection">
                <section>
                    <h6>Propuestas</h6>
                    {paintPropuestas()}
                </section>
            </section>
            <section id="PropuestasAceptadas" className="PropuestaSection">
                <section>
                    <h6>Propuestas aceptadas</h6>
                    <PropuestaCard
                        key={100}
                        Titular={"Rame Slogan"}
                        propuesta={"Candela Energía, S.A."}
                        fecha={"19 Junio, 2023"}
                        />
                    <PropuestaCard
                        key={101}
                        Titular={"Restaurante Name"}
                        propuesta={"CIberdrola, S.A."}
                        fecha={"23 Junio, 2023"}
                        />
                </section>
            </section>
            <section id="PropuestasPendientes" className="PropuestaSection">
                <section>
                    <h6>Propuestas pendientes</h6>
                    <PropuestaCard
                        key={200}
                        Titular={"Rame Slogan"}
                        propuesta={"Candela Energía, S.A."}
                        fecha={"19 Junio, 2023"}
                        />
                    <PropuestaCard
                        key={201}
                        Titular={"Restaurante Name"}
                        propuesta={"CIberdrola, S.A."}
                        fecha={"23 Junio, 2023"}
                        />
                </section>
            </section>
        </section>
    ) : ("")}
    </>
  ); 
};

export default Profile;