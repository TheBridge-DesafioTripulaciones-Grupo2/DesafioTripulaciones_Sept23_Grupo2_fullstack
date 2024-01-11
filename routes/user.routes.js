const routes = require("express").Router();
const usersController = require("../controllers/users.controller");
const verifyToken = require("../middlewares/verifyToken");
const checkAdmin = require("../middlewares/isAdmin");
const checkAccess = require("../middlewares/hasAccess");

routes.post("/login", usersController.loginMiddleware, usersController.loginUser);
routes.post("/admin/create", verifyToken, checkAccess, checkAdmin, usersController.createUser);
routes.post("/logout", verifyToken, checkAccess, usersController.logoutUser);

module.exports = routes;