const { Client } = require("../schemas/Client");
const { Propuesta } = require("../schemas/Propuesta");
const { CUPS } = require("../schemas/CUPS");
const { Bill } = require("../schemas/Bills");

const getClientById = async (req, res) => {
    try {
        const id = req.params.id
        const regexId = /^\d+$/ //Para comprobar que sea un número entero
        if (regexId.test(id)) {
            const client = await Client.findAll({
                where: { Client_id: id },
                include: [
                    {
                      model: CUPS,
                      required: true, 
                      include: [
                        {
                          model: Bill,
                          attributes: ['factura_id', 'createdAt'], 
                          required: true, 
                          include: [
                            {
                              model: Propuesta,
                              attributes: ['Propuesta_id', 'createdAt', 'CIA'], 
                              required: true, 
                            },
                          ],
                        },
                      ],
                    },
                  ], });
            res.status(200).json(client);
        } else {
            res.status(400).json({error: "el id no es un numero"});
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllClients = async (req, res) => {
    try {
        const clients = await Client.findAll();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createClient = async (req, res) => {
    const newClient = req.body;
    // console.log(req.body);
    const response = await Client.create(newClient);
    res.status(201).json({
        "client_created": response,
        data: newClient
    });
}

const updateClientById = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedClientData = req.body;

        const regexId = /^\d+$/; // Para comprobar que sea un número entero
        if (!regexId.test(id)) {
            throw new Error("ID debe ser un número entero.");
        }

        const [updatedRowsCount, updatedClient] = await Client.update(updatedClientData, {
            where: { client_id: id },
            returning: true, // Devolver los registros actualizados
        });

        if (updatedRowsCount === 0) {
            throw new Error(`Cliente con ID ${id} no encontrado.`);
        }

        res.status(200).json({
            "client_updated": updatedClient[0],
            data: updatedClientData
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getClientById,
    getAllClients,
    createClient,
    updateClientById
}