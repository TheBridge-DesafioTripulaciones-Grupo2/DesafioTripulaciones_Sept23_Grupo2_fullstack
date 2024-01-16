import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import ClientCard from "../../ClientsList/ClientCard";
import { getAllClientsByUserId } from "../../../../services/clients.services";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { userContext } from "../../../../context/authContext";
import NextArrow from "./NextArrow/NextArrow";
import PrevArrow from "./PrevArrow/PrevArrow";
import Spinner from "../../../../assets/spinner.svg"

const Carrusel = ({ userstate, handleClientsNumber }) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        if (userstate && userstate.user_id != null) {
          const data = await getAllClientsByUserId(userstate.user_id);
          setClients(data.reverse());
          handleClientsNumber(data.length);
        }
      } catch (error) {
        console.error("Error al obtener los clientes:", error);
      }
    };
    if (userstate && userstate.user_id != null) {
      fetchClients();
    }
  }, [userstate]);

  // Slider settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    nextArrow: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M14.1865 7.38426C13.6624 7.83354 13.6017 8.62267 14.0509 9.14682L23.3537 20L14.0509 30.8532C13.6017 31.3773 13.6624 32.1665 14.1865 32.6157C14.7107 33.065 15.4998 33.0043 15.9491 32.4802L25.9491 20.8135C26.3503 20.3454 26.3503 19.6546 25.9491 19.1865L15.9491 7.51985C15.4998 6.99569 14.7107 6.93499 14.1865 7.38426Z"
          fill="#1E1A1A"
        />
      </svg>
    ),
    prevArrow: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M25.8135 7.38426C26.3376 7.83354 26.3983 8.62267 25.9491 9.14682L16.6463 20L25.9491 30.8532C26.3983 31.3773 26.3376 32.1665 25.8135 32.6157C25.2893 33.065 24.5002 33.0043 24.0509 32.4802L14.0509 20.8135C13.6497 20.3454 13.6497 19.6546 14.0509 19.1865L24.0509 7.51985C24.5002 6.99569 25.2893 6.93499 25.8135 7.38426Z"
          fill="#1E1A1A"
        />
      </svg>
    ),
    responsive: [
      // ... your responsive settings
    ],
  };

  return (
    <>
      <h5>Clientes recientes</h5>
      {clients.length > 0 ? <Slider {...settings}>
        {clients.map((client) => (
          <div key={client.client_id}>
            <Link
              to={`/client-details/${client.client_id}`}
              style={{ textDecoration: "none" }}
            >
              <ClientCard
                titular={client.titular}
                imagen={client.imagen}
                direccion={client.direccion_suministro}
                cups={client.CUPs && client.CUPs[0]}
              />
            </Link>
          </div>
        ))}
      </Slider> : <img className="spinner" src={Spinner} alt="Loading..." />}
      
    </>
  );
};

export default Carrusel;
