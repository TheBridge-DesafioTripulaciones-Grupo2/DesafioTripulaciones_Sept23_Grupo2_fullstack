import React from "react";
import Cookies from 'js-cookie';
import { useContext, useEffect } from 'react';
import { userContext } from "../../context/authContext";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Nav from "./Nav/Nav";
import Swal from 'sweetalert2';

const Header = () => {
  const { userstate } = useContext(userContext);
  const navigate = useNavigate();

  const Token = Cookies.get('Token');

  // useEffect(() => {
  //   if (Token == undefined || ( userstate != null && userstate.acceso == false)) {
  //     navigate("/login");
  //   } else if (userstate == null && Token != undefined) {
  //     const fetchData = async () => {
  //       try {
  //         Swal.fire({
  //           icon: "success",
  //           text: "Se está iniciando sesión"
  //         })
  //         const datos = {
  //           token: Token,
  //         };
  //         const opciones = {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify(datos),
  //         };
  //         const response = await fetch(`http://localhost:5000/user/loginToken`, opciones);
  //         const result = await response.json();
  //         console.log(result);
  //         if (result == "error") {
  //           Swal.fire({
  //             icon: "error",
  //             title: "No se ha podido iniciar sesión",
  //             text: "redirigiendo a login"
  //           }).then((result) => {
  //             navigate("/login");
  //           });
  //         } else {
  //           updateUser(result);
  //         }
  //       } catch (error) {
  //         console.log(error);
  //         Swal.fire({
  //           icon: "error",
  //           title: "No se ha podido iniciar sesión",
  //           text: "redirigiendo a login"
  //         }).then((result) => {
  //           navigate("/login");
  //         });
  //       }
  //     }
  //     fetchData()
  //   }
  // }, [userstate]);

  return (
    <>
    {/* {Token != undefined && userstate != null && userstate.acceso ? (
      <header id="header">
      <Link to='/home'><img src="/Several.svg" alt="Several" /></Link>
      <Nav> </Nav>
    </header>
    ) : ("")}  */}
    <header id="header">
      <Link to='/home'><img src="/Several.svg" alt="Several" /></Link>
      <Nav> </Nav>
    </header>
    </>
  );
};

export default Header;
