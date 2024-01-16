const routes = require("express").Router();
const clientsController = require("../controllers/clients.controller");

routes.get('/:id', clientsController.getClientById);
routes.get('/all/get', clientsController.getAllClients);
routes.post('/create', clientsController.createClient);
routes.put('/update', clientsController.updateClientById);




module.exports = routes;