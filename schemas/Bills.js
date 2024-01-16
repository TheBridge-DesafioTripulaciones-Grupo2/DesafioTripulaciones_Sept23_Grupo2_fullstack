const { DataTypes } = require("sequelize");
const { db } = require("../config/db_pgsql");
const { CUPS } = require("./CUPS");
const { Propuesta } = require("./Propuesta");


const Bill = db.define(
  "facturas",
  {
    factura_id: {
      field: "factura_id",
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      field: "factura_id",
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    CIA: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    tarifa: {
      type: DataTypes.STRING(255),
      allowNull: false,
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    P1_consumo_actual: {
      type: DataTypes.BIGINT,
      allowNull: false,
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    P2_consumo_actual: {
      type: DataTypes.BIGINT,
      allowNull: false,
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    P3_consumo_actual: {
      type: DataTypes.BIGINT,
      allowNull: false,
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    P4_consumo_actual: {
      type: DataTypes.BIGINT,
      allowNull: true,
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P5_consumo_actual: {
      type: DataTypes.BIGINT,
      allowNull: true,
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P6_consumo_actual: {
      type: DataTypes.BIGINT,
      allowNull: true,
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P1_precio_mes: {
      type: DataTypes.BIGINT,
      allowNull: false,
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    P2_precio_mes: {
      type: DataTypes.BIGINT,
      allowNull: false,
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    P3_precio_mes: {
      type: DataTypes.BIGINT,
      allowNull: false,
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    P4_precio_mes: {
      type: DataTypes.BIGINT,
      allowNull: true,
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P5_precio_mes: {
      type: DataTypes.BIGINT,
      allowNull: true,
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P6_precio_mes: {
      type: DataTypes.BIGINT,
      allowNull: true,
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P1_descuento_energia: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P2_descuento_energia: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P3_descuento_energia: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P4_descuento_energia: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P5_descuento_energia: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P6_descuento_energia: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    dias_facturacion: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    energia_reactiva: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    impuesto_electrico: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    otros_precio: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    otros_propuesta: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    otros_anual: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    alquiler_equipo: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P1_potencia_contratada: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    P2_potencia_contratada: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P3_potencia_contratada: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P4_potencia_contratada: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P5_potencia_contratada: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P6_potencia_contratada: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P1_precios_potencia: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    P2_precios_potencia: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P3_precios_potencia: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P4_precios_potencia: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P5_precios_potencia: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P6_precios_potencia: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P1_descuento_potencia: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P2_descuento_potencia: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P3_descuento_potencia: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P4_descuento_potencia: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P5_descuento_potencia: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P6_descuento_potencia: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    IVA: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    CUPS_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: CUPS,
        key: "CUPS_id",
      },
    },
    fecha_indexada: {
      type: DataTypes.DATE,
      allowNull: false,
    },
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
    P4_precio_anual: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P5_precio_anual: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    P6_precio_anual: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
  },
  {
    modelName: "Bill",
    tableName: "facturas",
    timestamps: true,
  }
);

Bill.hasMany(Propuesta, { foreignKey: "factura_id" });
// Propuesta.belongsTo(Bill, { foreignKey: "factura_id" });

//Bill.sync({ alter: true });

module.exports = { Bill };