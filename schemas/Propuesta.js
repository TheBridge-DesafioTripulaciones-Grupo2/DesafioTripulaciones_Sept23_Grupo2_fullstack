const { DataTypes } = require('sequelize');
const { db } = require('../config/db_pgsql');
const { CUPS } = require('./CUPS');
const { Bill } = require('./Bills');


const Propuesta = db.define(
  "Propuesta", {
    propuesta_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    CUPS: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: CUPS,
        key: 'CUPS_id'
    }
    },
    factura_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: Bill,
        key: 'factura_id'
    }
    },
    P1_consumo_anual: DataTypes.BIGINT,
    P2_consumo_anual: DataTypes.BIGINT,
    P3_consumo_anual: DataTypes.BIGINT,
    P4_consumo_anual: DataTypes.BIGINT,
    P5_consumo_anual: DataTypes.BIGINT,
    P6_consumo_anual: DataTypes.BIGINT,
    P1_precio_anual: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    P2_precio_anual: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    P3_precio_anual: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    P4_precio_anual: DataTypes.BIGINT,
    P5_precio_anual: DataTypes.BIGINT,
    P6_precio_anual: DataTypes.BIGINT,
    tipo_sistema: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    CIA: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    metodo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    producto_CIA: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fee_energia: DataTypes.TEXT,
    P1_precio_mes: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    P2_precio_mes: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    P3_precio_mes: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    P4_precio_mes: DataTypes.BIGINT,
    P5_precio_mes: DataTypes.BIGINT,
    P6_precio_mes: DataTypes.BIGINT,
    P1_precio_potencia: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    P2_precio_potencia: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    P3_precio_potencia: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    P4_precio_potencia: DataTypes.BIGINT,
    P5_precio_potencia: DataTypes.BIGINT,
    P6_precio_potencia: DataTypes.BIGINT,
    total_factura_actual: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    total_anual_actual: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    total_factura_propuesta: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    total_anual_propuesta: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    total_potencia_actual_actual: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    total_potencia_actual_anual: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    total_energia_actual_actual: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    total_energia_actual_anual: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    total_potencia_propuesta_actual: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    total_potencia_propuesta_anual: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    total_energia_propuesta_actual: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    total_energia_propuesta_anual: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    porcentaje_ahorro_actual: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    porcentaje_ahorro_anual: {
      type: DataTypes.BIGINT,
      allowNull: false,
    }
  },
  {
    modelName: "Propuesta",
    tableName: "propuestas",
    timestamps: true,
  }
);

Propuesta.sync({alter:true});

module.exports = { Propuesta };
