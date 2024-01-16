import axios from "axios";
import Swal from "sweetalert2";

async function getAllClientsByUserId(userId) {
  return new Promise(async (resolve, reject) => {
    try {
      // Petición HTTP
      const response = await axios.get(
        `http://localhost:5000/user/${userId}/clients`
      );
      const json = response;
      console.log(json);
      resolve(json.data);
    } catch (error) {
      console.error(
        `Ha ocurrido un error al obtener los clientes del usuario con id ${userId}: `,
        error
      );
      reject(
        error.response ? error.response.data.errorMessage : "Error de red"
      );
    }
  });
}

// async function getAllClients() {
//     return new Promise(async (resolve, reject) => {
//         try {
//             // Petición HTTP
//             const response = await axios.get(`http://localhost:5000/client/all`);
//             // const data = response.data; // Accede a la propiedad 'data' de la respuesta
//             console.log("Datos del cliente:", response);
//             resolve(data);
//         } catch (error) {
//             console.error("Ha ocurrido un error al obtener los clientes: ", error);
//             reject(error.response ? error.response.data.errorMessage : "Error desconocido");
//         }
//     });
// }

async function getClientById(id) {
  return new Promise(async (resolve, reject) => {
    try {
      // Petición HTTP
      const response = await axios.get(`http://localhost:5000/client/${id}`);
      const json = response;
      console.log(json);
      resolve(json.data);
    } catch (error) {
      console.error(
        "Ha ocurrido un error al obtener el cliente con id " + id + ": ",
        error
      );
      reject(error.response.data.errorMessage);
    }
  });
}

async function createClient(clientData) {
  return new Promise(async (resolve, reject) => {
    try {
      // Petición HTTP
      const response = await axios.post(
        `http://localhost:5000/client/create`,
        clientData
      );
      const json = response;
      resolve({ object: json.data, message: "User created." });
    } catch (error) {
      console.error("Ha ocurrido un error al registrar el cliente: ", error);
      Swal.fire({
        icon: "error",
        title: error.message,
        text: "Por favor procede a iniciar sesión",
      });
      reject(error.response.data.errorMessage);
    }
  });
}

async function updateClient(clientData) {
  return new Promise(async (resolve, reject) => {
    try {
      // Petición HTTP con método PUT
      const response = await axios.put(
        `http://localhost:5000/clients/update`,
        clientData
      );
      const json = response;
      resolve(json.data.data);
    } catch (error) {
      console.error("Ha ocurrido un error al actualizar el cliente: ", error);
      reject(error.response.data.errorMessage);
    }
  });
}

export { getAllClientsByUserId, getClientById, createClient, updateClient };
