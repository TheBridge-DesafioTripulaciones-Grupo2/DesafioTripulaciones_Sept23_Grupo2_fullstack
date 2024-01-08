require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes


//Server
app.listen(PORT, () => {
    console.log(`Backend listening on PORT ${PORT}`);
  });