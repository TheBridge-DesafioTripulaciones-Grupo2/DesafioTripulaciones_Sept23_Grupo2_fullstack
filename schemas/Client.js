const { DataTypes } = require('sequelize');
const { db } = require('../config/db_pgsql');
const { User } = require('./User');
const { CUPS } = require("../schemas/CUPS");

const Client = db.define("Client", {
  client_id: {
    field: 'client_id',
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    field: 'user_id',
    type: DataTypes.BIGINT,
    references: {
      model: User, // This should match the model name given in User model definition
      key: 'user_id',
    }
  },
  titular: {
    field: 'titular',
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imagen: {
    field: 'imagen',
    type: DataTypes.TEXT,
    allowNull: false,
  }
}, {
  modelName: 'Client',
  tableName: 'clients',
  timestamps: false,
});

Client.hasMany(CUPS, { foreignKey: 'client_id' });

Client.sync({alter: true});

module.exports = {Client};

  