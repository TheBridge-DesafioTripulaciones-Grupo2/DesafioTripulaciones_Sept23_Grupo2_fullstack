//const { Propuesta } = require("../schemas/Propuesta");

const getPropuesta = async (id) => {
    try {
        // Propuesta.findAll({
        //     include: [
        //       {
        //         model: Bill
        //       },
        //       {
        //         model: OtraTablaRelacionada2
        //       },
        //     ],
        //   })
        //     .then(resultados => {
        //       console.log(resultados);
        //     })
        //     .catch(error => {
        //       console.error(error);
        //     });
        return ;
    } catch (err) {
        console.log(err);
        return "error";
    } 
}

const postPropuesta = async (userId, email, hashedPassword, admin, acceso, contacto, delegacion, asesor) => {
    try {
        
    } catch {
        return "error"
    }
}

const PropuestaModel = {
    getPropuesta,
    postPropuesta
}

module.exports = PropuestaModel;