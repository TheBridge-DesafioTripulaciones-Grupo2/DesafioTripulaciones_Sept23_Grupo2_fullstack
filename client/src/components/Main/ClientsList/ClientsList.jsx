import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllClientsByUserId } from "../../../services/clients.services";
import ClientCard from "./ClientCard/ClientCard";

const ClientsList = () => {
  const { userId } = useParams();
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");

  const [sortOrder, setSortOrder] = useState("oldest");

  const sortClients = (clients, order) => {
    return order === "oldest" ? [...clients] : [...clients].reverse();
  };

  useEffect(() => {
    getAllClientsByUserId(userId)
      .then((data) => {
        console.log(data);
        const sortedData = sortClients(data, sortOrder);
        setClients(sortedData);
      })
      .catch((error) => {
        console.error("Error al obtener los clientes:", error);
      });
  }, [userId, sortOrder]);

  const [filteredClients, setFilteredClients] = useState([]);

  useEffect(() => {
    if (search) {
      const filtered = clients.filter((client) =>
        client.titular.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredClients(filtered);
    } else {
      setFilteredClients(clients);
    }
  }, [search, clients]);

  return (
    <section id="clientsList_section">
      <h2 id="h2_input">Encuentra a tus clientes</h2>
      <section id="list-filters">
        <input
          id="searchClients"
          type="text"
          placeholder="Buscar cliente"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          id="sort-clients"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="oldest">Más antiguos</option>
          <option value="newest">Más recientes</option>
        </select>
      </section>

      <ul id="clientsList">
        {filteredClients.map((client) => (
          <li className="clientCard" key={client.client_id}>
            <Link
              style={{ textDecoration: "none" }}
              to={`/client-details/${client.client_id}`}
            >
              <ClientCard
                titular={client.titular}
                imagen={client.imagen}
                direccion={client.direccion_suministro}
                cups={client.CUPs[0]}
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ClientsList;
