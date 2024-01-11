const propuestaModel = require('../schemas/propuesta.model');

const getPropuesta = async(req, res) => {
    try {
        const { id } = req.params;
        if (!/^[0-9]+$/.test(id)) {
        return res.status(500).json({ message: "el id no es un numero" });
        }
        let searchPropuesta = await propuestaModel.getPropuesta(id);
        if (searchPropuesta == "error") {
            res.status(404).json({ message: "Propuesta not found" });
          } else {
            res.status(200).json({ message: "Propuesta recovered", searchPropuesta });
          }
    } catch (error) {
        res.status(400).json("error")
    } 
};

const postPropuesta = async(req, res) => {
    try {
          
    } catch (error) {
        res.status(400).json("error");
    }
}

const propuesta = {
    getPropuesta,
    postPropuesta
};

module.exports = propuesta;