const { DataTypes } = require('sequelize');
const { db } = require('../config/db_pgsql');
const { Client } = require('./Client');


const CUPS = db.define("CUPS", {
  CUPS_id: {
    field: "CUPS_id",
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  CUPS: {
    field: 'CUPS',
    type: DataTypes.STRING,
    allowNull: false,
  },
  client_id: {
    field: 'client_id',
    type: DataTypes.BIGINT,
    references: {
      model: Client, 
      key: 'client_id',
    }
  },
  direccionSuministro: {
    field: 'direccion_suministro',
    type: DataTypes.BIGINT,
    allowNull: false,
  }
}, {
  modelName: 'CUPS',
  tableName: 'CUPS',
  timestamps: false,
});

CUPS.sync();

module.exports = {CUPS};
