const { DataTypes } = require("sequelize");
const { db } = require("../config/db_pgsql");
const { User } = require("./User");
const { CUPS } = require("./CUPS");

const Client = db.define(
  "Client",
  {
    client_id: {
      field: "client_id",
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      field: "user_id",
      type: DataTypes.BIGINT,
      references: {
        model: User,
        key: "user_id",
      },
    },
    titular: {
      field: "titular",
      type: DataTypes.TEXT,
      allowNull: false,
    },
    imagen: {
      field: "imagen",
      type: DataTypes.TEXT,
      allowNull: true,
    },
    email: {
      field: "email",
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone_number: {
      field: "phone_number",
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    modelName: "Client",
    tableName: "clients",
    timestamps: false,
  }
);

Client.hasMany(CUPS, { foreignKey: "client_id" });
CUPS.belongsTo(Client, { foreignKey: "client_id" });
Client.sync({ alter: true });

module.exports = { Client };