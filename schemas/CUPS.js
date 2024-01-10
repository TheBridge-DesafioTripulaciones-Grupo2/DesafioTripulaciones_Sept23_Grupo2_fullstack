const { DataTypes } = require('sequelize');
const { db } = require('../config/db_pgsql');

const CUPS = db.define("CUPS", {
  CUPS: {
    field: 'CUPS',
    type: DataTypes.STRING,
    primaryKey: true,
  },
  clientId: {
    field: 'client_id',
    type: DataTypes.BIGINT,
    references: {
      model: 'Client', // This should match the model name given in Client model definition
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
  timestamps: true,
});

// CUPS.sync();

module.exports = CUPS;
