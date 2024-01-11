const routes = require("express").Router();
const CUPSController = require("../controllers/CUPS.controller");


routes.post("/create", CUPSController.createCUPS);
routes.get("/:id", CUPSController.getCUPSById);

module.exports = routes;