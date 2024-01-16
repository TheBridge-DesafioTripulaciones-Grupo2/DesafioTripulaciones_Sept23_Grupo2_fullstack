import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Importa useParams
import { getAllClientsByUserId } from '../../../services/clients.services';
import ClientCard from './ClientCard/ClientCard';

const ClientsList = () => {
  const { userId } = useParams(); // Obtén el ID del usuario de los parámetros
  const [clients, setClients] = useState([]);

  useEffect(() => {
    // Asegúrate de pasar el ID del usuario a getAllClientsByUserId
    getAllClientsByUserId(userId)
      .then(data => {
        console.log(data);
        setClients(data);
      })
      .catch(error => {
        console.error("Error al obtener los clientes:", error);
      });
  }, [userId]); // Añade userId a la lista de dependencias para que useEffect se ejecute cuando cambie el ID del usuario

  return (
    <section id='clientsList_section'>
      <h2 id='h2_input'>Encuentra a tus clientes</h2>
      <input id='searchClients' type="text" placeholder='Buscar cliente' />
      <ul id='clientsList'>
        {clients.map(client => (
          <li className='clientCard' key={client.client_id}>
            <Link style={{textDecoration:"none"}} to={`/client-details/${client.client_id}`}>
              <ClientCard titular={client.titular} imagen={client.imagen} direccion={client.direccion_suministro} cups={client.CUPs[0]} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ClientsList;
