require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
var cors = require("cors");
const morgan = require("morgan");
//helmet

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Logger
app.use(morgan(":method :host :status :url :response-time ms :body"));

//Routes
const userRoutes = require("./routes/user.routes.js");

app.use("/user", userRoutes);

//Server
app.listen(PORT, () => {
  console.log(`Backend listening on PORT ${PORT}`);
});

