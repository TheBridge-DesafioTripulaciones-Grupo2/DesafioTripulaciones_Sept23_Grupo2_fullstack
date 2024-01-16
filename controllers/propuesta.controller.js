const propuestaModel = require('../models/propuesta.model');

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
            res.status(200).json({ message: "Propuesta recovered", propuesta: searchPropuesta });
          }
    } catch (error) {
        res.status(400).json("error")
    } 
};

const postPropuesta = async(req, res) => {
    try {
        const { CUPS, factura_id, P1_consumo_anual, P2_consumo_anual, P3_consumo_anual, P4_consumo_anual, P5_consumo_anual, P6_consumo_anual, P1_precio_anual, P2_precio_anual, P3_precio_anual, P4_precio_anual, P5_precio_anual, P6_precio_anual, tipo_sistema, CIA, metodo, producto_CIA, fee_energia, P1_precio_mes, P2_precio_mes, P3_precio_mes, P4_precio_mes, P5_precio_mes, P6_precio_mes, P1_precio_potencia, P2_precio_potencia, P3_precio_potencia, P4_precio_potencia, P5_precio_potencia, P6_precio_potencia, total_factura_actual, total_anual_actual, total_factura_propuesta, total_anual_propuesta, total_potencia_actual_actual, total_potencia_actual_anual, total_energia_actual_actual, total_energia_actual_anual, total_potencia_propuesta_actual, total_potencia_propuesta_anual, total_energia_propuesta_actual, total_energia_propuesta_anual, porcentaje_ahorro_actual, porcentaje_ahorro_anual } = req.body; 
        const PropuestaCreated = await propuestaModel.createUser(CUPS, factura_id, P1_consumo_anual, P2_consumo_anual, P3_consumo_anual, P4_consumo_anual, P5_consumo_anual, P6_consumo_anual, P1_precio_anual, P2_precio_anual, P3_precio_anual, P4_precio_anual, P5_precio_anual, P6_precio_anual, tipo_sistema, CIA, metodo, producto_CIA, fee_energia, P1_precio_mes, P2_precio_mes, P3_precio_mes, P4_precio_mes, P5_precio_mes, P6_precio_mes, P1_precio_potencia, P2_precio_potencia, P3_precio_potencia, P4_precio_potencia, P5_precio_potencia, P6_precio_potencia, total_factura_actual, total_anual_actual, total_factura_propuesta, total_anual_propuesta, total_potencia_actual_actual, total_potencia_actual_anual, total_energia_actual_actual, total_energia_actual_anual, total_potencia_propuesta_actual, total_potencia_propuesta_anual, total_energia_propuesta_actual, total_energia_propuesta_anual, porcentaje_ahorro_actual, porcentaje_ahorro_anual);
        if (PropuestaCreated.error) {
        res.status(500).json({ message: "no se ha podido crear la propuesta" });
        } else {
        res.status(201).json({ message: "Propuesta Creada", PropuestaCreated });
        }
        } catch (error) {
        res.status(400).json( {error: error} );
    }
}

const propuesta = {
    getPropuesta,
    postPropuesta
};

module.exports = propuesta;