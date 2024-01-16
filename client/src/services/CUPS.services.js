import axios from "axios";
import Swal from "sweetalert2";

async function createCUPS(cupsData) {
    return new Promise(async (resolve, reject) => {
      try {
        // Petición HTTP
        const response = await axios.post(
          `http://localhost:5000/CUPS/create`,
          cupsData
        );
        const json = response;
        console.log(json);
        resolve(json.data);
      } catch (error) {
        console.error("Ha ocurrido un error al registrar el CUPS: ", error);
        Swal.fire({
          icon: "error",
          title: error.message,
          text: "Por favor procede a iniciar sesión",
        });
        reject(error.response.data.errorMessage);
      }
    });
  }

  export {createCUPS}