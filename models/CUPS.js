const { DataTypes } = require('sequelize');
const { db } = require('../config/db_pgsql');

const CUP = db.define("CUP", {
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
  modelName: 'CUP',
  tableName: 'CUPS',
  timestamps: true,
});

CUP.sync();

module.exports = CUP;
