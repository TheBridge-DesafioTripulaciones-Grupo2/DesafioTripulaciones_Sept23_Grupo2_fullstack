const routes = require("express").Router();
const propuestaController = require("../controllers/propuesta.controller");
const verifyToken = require("../middlewares/verifyToken");
const checkAccess = require("../middlewares/hasAccess");

routes.get("/getPropuesta/:id", propuestaController.getPropuesta);
routes.post("/postPropuesta", verifyToken, checkAccess, propuestaController.postPropuesta);

module.exports = routes;