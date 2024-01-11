const routes = require("express").Router();
const billsController = require("../controllers/bills.controller");


routes.post("/create", billsController.createBill);
routes.get("/:id", billsController.getBillById);

module.exports = routes;