const { Sequelize } = require("sequelize");

const db = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_USER}`
);

const connectSQL = async () => {
  try {
    await db.authenticate();
    console.log("PostgreSQL database connected...");
  } catch (error) {
    console.error("Unable to connect to SQL database:", error);
  }
};
   
connectSQL();
console.log('DB Connection Info:', { 
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD ? '***' : undefined,
    port: process.env.DB_PORT,
    url: `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_USER}`
  });

module.exports = {
  connectSQL,
  db,
};

