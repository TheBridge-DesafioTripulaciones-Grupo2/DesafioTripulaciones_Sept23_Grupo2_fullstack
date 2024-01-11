const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const regex = require("../utils/auth_regex");
const jwt_secret = process.env.ULTRA_SECRET_KEY;
const saltRounds = 10;
const userModel= require("../models/UserModel");
const passport = require("../config/passport-config");
const { User } = require("../schemas/User");


// Create a new user (admin dashboard)
const createUser = async (req, res) => {
  try {
    const { email, password, admin, acceso, contacto, delegacion, asesor } =
      req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const userCreated = await userModel.createUser(email, hashedPassword, admin, acceso, contacto, delegacion, asesor);
    if (userCreated == "error") {
      res.status(500).json({ message: "no se ha podido crear usuario" });
    } else {
      res.status(201).json({ message: "User Created!", userCreated });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login user
const loginUser = async (req, res) => {
  try {
    const payload = {
      name: req.user.userId,
      email: req.user.email
      };
    const token = jwt.sign(payload, jwt_secret);
    res.status(200).json({ message: "Logged in", token, user: req.user});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const loginMiddleware = async function (req, res, next) {
  try {
    const hashedPassword = await bcrypt.hash("123abcABC!", saltRounds);
    console.log(hashedPassword);
      passport.authenticate('local', (err, user, info) => {
          if (err) {
            console.log(err);
            res.status(500).json("error");
          } else if (!user) {
            console.log("noUser");
            res.status(200).json("error");
          } else {
              req.login(user, (err) => {
                  if (err) {
                    console.log(err);
                      return res.status(500).json("error");
                  }
                  return next();
              });
          }
      })(req, res, next); 
  } catch (error) {
      console.log('Error en loginMiddleware:', error);
      res.status(500).send('Error interno del servidor');
  }
}

// Logout user
const logoutUser = async (req, res) => {
    try {
      const user = await User.findOne({ where: { email: req.user.email } });
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
      user.logged = false;
      await user.save();
      req.logout(function (err) {
        if (err) { return res.status(401).json({ message: "error" }); }
        req.session.destroy();
        res.status(200).json({ message: "Successfully logged out" });
    });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

// Update a user
const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!/^[0-9]+$/.test(userId)) {
      return res.status(500).json({ message: "el id no es un numero" });
    } 
    const { email, password, admin, acceso, contacto, delegacion, asesor } =
      req.body;
    const hashedPassword = bcrypt.hash(password, saltRounds);
    let userUpdated = await userModel.updateUser(userId, email, hashedPassword, admin, acceso, contacto, delegacion, asesor)
    if (userUpdated == "error") {
      res.status(404).json({ message: "User not updated" });
    } else if (userUpdated == "error User") {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json({ message: "User updated successfully", user: userUpdated });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createUser,
  loginUser,
  loginMiddleware,
  logoutUser,
  updateUser
};