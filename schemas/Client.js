const { DataTypes } = require('sequelize');
const { db } = require('../config/db_pgsql');

const Client = db.define("Client", {
  clientId: {
    field: 'client_id',
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    field: 'user_id',
    type: DataTypes.BIGINT,
    references: {
      model: 'User', // This should match the model name given in User model definition
      key: 'user_id',
    }
  },
  titular: {
    field: 'titular',
    type: DataTypes.TEXT,
    allowNull: false,
  }
}, {
  modelName: 'Client',
  tableName: 'clients',
  timestamps: false,
});

Client.sync();

module.exports = Client;

  