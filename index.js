require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
var cors = require("cors");
const morgan = require("morgan");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Logger
app.use(morgan(":method :host :status :url :response-time ms :body"));

//Routes
const billsRoutes = require("./routes/bills.routes.js");

app.use("/bills", billsRoutes);

//Server
app.listen(PORT, () => {
    console.log(`Backend listening on PORT ${PORT}`);
  });