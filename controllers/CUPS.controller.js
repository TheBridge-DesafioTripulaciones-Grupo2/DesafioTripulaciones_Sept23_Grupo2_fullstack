const { CUPS } = require("../schemas/CUPS");


const getCUPSById = async (req, res) => {
    try {
        const id = req.params.id
        const regexId = /^\d+$/ //Para comprobar que sea un número entero
        if (regexId.test(id)) {
            const cups = await CUPS.findOne({ where: { CUPS_id: req.params.id }});
            res.status(200).json(cups);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createCUPS = async (req, res) => {
    const newCUPS = req.body; 
    // console.log(req.body);
    const response = await CUPS.create(newCUPS);
    res.status(201).json({
        "CUPS_created": response,
        data: newCUPS
    });
}

module.exports = {
    getCUPSById,
    createCUPS
};