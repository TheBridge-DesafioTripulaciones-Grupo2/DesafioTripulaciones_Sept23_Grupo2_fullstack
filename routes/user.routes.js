const routes = require("express").Router();
const usersController = require("../controllers/users.controller");
const tokenController = require("../controllers/token.controller");
const verifyToken = require("../middlewares/verifyToken");
const checkAdmin = require("../middlewares/isAdmin");
const checkAccess = require("../middlewares/hasAccess");

routes.post("/login", usersController.loginMiddleware, usersController.loginUser);
routes.post("/admin/create", /*verifyToken, checkAccess, checkAdmin,*/ usersController.createUser);
routes.post("/logout", verifyToken, /*checkAccess,*/ usersController.logoutUser);
routes.post("/updateUser/:userId", verifyToken, /*checkAccess,*/ checkAdmin, usersController.updateUser);
routes.post("/getUser/:id", verifyToken, /*checkAccess,*/ usersController.getUserbyId);
routes.post("/loginToken", verifyToken, tokenController.loginToken);


module.exports = routes;

