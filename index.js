require("dotenv").config();
const express = require("express");
const passport = require("./config/passport-config");
const session = require("express-session");
const app = express();
const PORT = process.env.PORT || 5000;
var cors = require("cors");
// const morgan = require("./middlewares/morgan");
// const helmet = require('helmet');

const secret = process.env.ULTRA_SECRET_KEY;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public", { index: false, redirect: false }));
app.use(
  session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
// Logger
// app.use(morgan(":method :host :status :url :response-time ms :body"));

//Routes
const userRoutes = require("./routes/user.routes.js");
const clientsRoutes = require("./routes/clients.routes.js");
const CUPSRoutes = require("./routes/CUPS.routes.js");
const billsRoutes = require("./routes/bills.routes.js");
const propuestaRoutes = require("./routes/propuesta.routes.js");

app.use("/user", userRoutes);
app.use("/client", clientsRoutes);
app.use("/CUPS", CUPSRoutes);
app.use("/propuesta", propuestaRoutes);
app.use("/bills", billsRoutes);

//Server
app.listen(PORT, () => {
  console.log(`Backend listening on PORT ${PORT}`);
});

