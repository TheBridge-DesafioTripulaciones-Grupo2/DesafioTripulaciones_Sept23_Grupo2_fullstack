const { Propuesta } = require("../schemas/Propuesta");
const { Bill } = require("../schemas/Bills");
const { CUPS } = require("../schemas/CUPS");
const { Client } = require("../schemas/Client");
const { User } = require("../schemas/User");
const { db } = require('../config/db_pgsql');

const getPropuesta = async (id) => {
    try {
        Propuesta.findAll({
            where: { Propuesta_id: id },
            include: [
              {
                model: Bill,
                where: db.literal('Bill.Factura_id = Propuesta.Factura_id'),
                include: [
                  {
                    model: CUPS,
                    where: db.literal('CUPS.CUPS_id = Bill.CUPS_id'),
                    include: [
                        {
                          model: Client,
                          where: db.literal('Client.Client_id = CUPS.Client_id'),
                          include: [
                            {
                              model: User,
                              where: db.literal('User.User_id = Client.User_id'),
                            },
                          ],
                        },
                      ],
                  },
                ],
              },
            ],
          })
            .then((result) => {
              return result
            })
            .catch((error) => {
              return { error: error}
            });
        return ;
    } catch (err) {
        console.log(err);
        return "error";
    } 
}

const postPropuesta = async (CUPS, factura_id, P1_consumo_anual, P2_consumo_anual, P3_consumo_anual, P4_consumo_anual, P5_consumo_anual, P6_consumo_anual, P1_precio_anual, P2_precio_anual, P3_precio_anual, P4_precio_anual, P5_precio_anual, P6_precio_anual, tipo_sistema, CIA, metodo, producto_CIA, fee_energia, P1_precio_mes, P2_precio_mes, P3_precio_mes, P4_precio_mes, P5_precio_mes, P6_precio_mes, P1_precio_potencia, P2_precio_potencia, P3_precio_potencia, P4_precio_potencia, P5_precio_potencia, P6_precio_potencia, total_factura_actual, total_anual_actual, total_factura_propuesta, total_anual_propuesta, total_potencia_actual_actual, total_potencia_actual_anual, total_energia_actual_actual, total_energia_actual_anual, total_potencia_propuesta_actual, total_potencia_propuesta_anual, total_energia_propuesta_actual, total_energia_propuesta_anual, porcentaje_ahorro_actual, porcentaje_ahorro_anual) => {
    try {
        const newPropuesta = await Propuesta.create({
            CUPS,
            factura_id,
            P1_consumo_anual,
            P2_consumo_anual,
            P3_consumo_anual,
            P4_consumo_anual,
            P5_consumo_anual,
            P6_consumo_anual,
            P1_precio_anual,
            P2_precio_anual,
            P3_precio_anual,
            P4_precio_anual,
            P5_precio_anual,
            P6_precio_anual,
            tipo_sistema,
            CIA,
            metodo,
            producto_CIA,
            fee_energia,
            P1_precio_mes,
            P2_precio_mes,
            P3_precio_mes,
            P4_precio_mes,
            P5_precio_mes,
            P6_precio_mes,
            P1_precio_potencia,
            P2_precio_potencia,
            P3_precio_potencia,
            P4_precio_potencia,
            P5_precio_potencia,
            P6_precio_potencia,
            total_factura_actual,
            total_anual_actual,
            total_factura_propuesta,
            total_anual_propuesta, 
            total_potencia_actual_actual, 
            total_potencia_actual_anual, 
            total_energia_actual_actual, 
            total_energia_actual_anual, 
            total_potencia_propuesta_actual, 
            total_potencia_propuesta_anual, 
            total_energia_propuesta_actual, 
            total_energia_propuesta_anual, 
            porcentaje_ahorro_actual, 
            porcentaje_ahorro_anual,
          });
        return newPropuesta;
    } catch {
        return "error"
    }
}

const PropuestaModel = {
    getPropuesta,
    postPropuesta
}

module.exports = PropuestaModel;