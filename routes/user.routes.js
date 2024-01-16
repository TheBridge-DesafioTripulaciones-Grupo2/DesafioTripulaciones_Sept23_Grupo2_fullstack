const routes = require("express").Router();
const usersController = require("../controllers/users.controller");
const verifyToken = require("../middlewares/verifyToken")

routes.post("/login", usersController.loginUser);
routes.post("/create", usersController.createUser);
routes.post("/logout", verifyToken, usersController.logoutUser);
routes.get("/:id/clients", usersController.getAllClientsByUser);

module.exports = routes;