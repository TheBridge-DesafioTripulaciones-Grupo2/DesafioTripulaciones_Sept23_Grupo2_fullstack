const { User } = require("../schemas/User");

const createUser = async (email, hashedPassword, admin, acceso, contacto, delegacion, asesor) => {
    try {
        const newUser = await User.create({
            email,
            password: hashedPassword,
            admin,
            acceso,
            contacto,
            delegacion,
            asesor,
          });
        return newUser;
    } catch (err) {
        console.log(err);
        return "error";
    } 
}

const updateUser = async (user_id, email, hashedPassword, admin, acceso, contacto, delegacion, asesor) => {
    try {
        console.log(hashedPassword);
        const user = await User.findByPk(user_id);
        if (user) {
        const updatedUser = await user.update({
            email,
            password: hashedPassword,
            admin,
            acceso,
            contacto,
            delegacion,
            asesor,
          });
        return updatedUser;
        } else {
            return "error User"
        }
    } catch (error) {
        console.log(error);
        return "error"
    }
}

const userModel = {
    createUser,
    updateUser
}

module.exports = userModel;