const { Bill } = require("../schemas/Bills");


const getBillById = async (req, res) => {
    try {
        const id = req.params.id
        const regexId = /^\d+$/ //Para comprobar que sea un número entero
        if (regexId.test(id)) {
            const bill = await Bill.findOne({ where: { factura_id: req.params.id }});
            res.status(200).json(bill);
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createBill = async (req, res) => {
    const newBill = req.body; 
    // console.log(req.body);
    const response = await Bill.create(newBill);
    res.status(201).json({
        "bill_created": response,
        data: newBill
    });
}

module.exports = {
    getBillById,
    createBill
};