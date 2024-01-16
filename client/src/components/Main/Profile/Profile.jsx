import React from "react";
import { useContext, useState, useEffect } from 'react';
import { userContext } from "../../../context/authContext";
import authService from '../../../services/services';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import PropuestaCard from "./PropuestaCard/PropuestaCard";
import Swal from 'sweetalert2';

const Profile = () => {
    const { userstate, updateUser } = useContext(userContext);
    const [data, setData] = useState(null);
    const [hayFacturas, setHayFacturas] = useState(false);

    const navigate = useNavigate();
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

    const cerrarSesion = async () => {
      Swal.fire({
        title: "¿Seguro que quieres cerrar sesión?",
        showDenyButton: true,
        confirmButtonText: "Si",
        denyButtonText: `No`
      }).then((result) => {
        if (result.isConfirmed) {
          try {
            const logout = async () => {
              const result = await authService.logout(Token, userstate.email);
              console.log(result);
              if (result.error) {
                Swal.fire({
                  icon: "error",
                  title: `No se ha podido cerrar sesión ${result.error}`,
                });
              } else if (result.message == "User not found") {
                Cookies.remove("Token");
                updateUser(null);
                navigate("/login");
              } else {
                Swal.fire({
                  icon: "success",
                  title: `Se ha cerrado sesión con éxito`,
                }).then((result) => {
                  Cookies.remove("Token");
                  updateUser(null);
                  navigate("/login");
                });
              }
            }
            logout();
          } catch (error) {
            console.log(error);
            Swal.fire({
              icon: "error",
              title: "No se ha podido cerrar sesión",
            });
          }
        }
      });
    }

    const paintPropuestas = () => {
        if (data != null && data != undefined) {
          return (<>
          {data.Clients?.map(client => (
            Array.isArray(client.CUPS) && client.CUPS[0]?.facturas?.length > 0 && (<>
                {setHayFacturas(true)} 
                {client.CUPS[0].facturas.map(factura => (
                  <PropuestaCard
                    key={factura.id}  
                    Titular={client.titular}
                    propuesta={factura.CIA}
                    fecha={factura.createdAt}
                  />
                ))}
            </>)
          ))}
          {!hayFacturas && <PropuestaCard
                key={1}
                Titular={"Tilapia Fish"}
                propuesta={"Endesa Energia, S.A."}
                fecha={"19 Junio, 2023"}
                />} 
            </>);
        } 
    }


  return (
    <>
    {userstate != null && userstate.acceso ? (
        <section id="ProfileContainer">
            <img src="/perfil.png" alt="perfil" />
            <section id="datosPerfil">
                {paintDatos()}
                <p onClick={cerrarSesion} id="logout">Cerrar Sesión</p>
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
                        propuesta={"Iberdrola, S.A."}
                        fecha={"23 Junio, 2023"}
                        />
                </section>
            </section>
            <section id="PropuestasPendientes" className="PropuestaSection">
                <section>
                    <h6>Propuestas pendientes</h6>
                    <PropuestaCard
                        key={200}
                        Titular={"AB Creativa"}
                        propuesta={"Candela Energía, S.A."}
                        fecha={"4 Junio, 2023"}
                        />
                    <PropuestaCard
                        key={201}
                        Titular={"Trust and Co."}
                        propuesta={"Acciona, S.A."}
                        fecha={"8 Junio, 2023"}
                        />
                </section>
            </section>
        </section>
    ) : ("")}
    </>
  ); 
};

export default Profile;