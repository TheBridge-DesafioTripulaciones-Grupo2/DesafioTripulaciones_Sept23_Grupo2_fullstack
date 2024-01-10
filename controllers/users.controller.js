const { User } = require("../schemas/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const regex = require("../utils/auth_regex");
const jwt_secret = process.env.ULTRA_SECRET_KEY;
const saltRounds = 10;

// Get user by email
const getUserByEmail = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.params.email } });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new user (admin dashboard)
const createUser = async (req, res) => {
  try {
    const { email, password, admin, acceso, contacto, delegacion, asesor } =
      req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await User.create({
      email,
      password: hashedPassword,
      admin,
      acceso,
      contacto,
      delegacion,
      asesor,
    });
    res.status(201).json({ message: "User Created!", newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      return res.status(401).json({ message: "Incorrect email or password" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (match) {
      const userForToken = {
        userId: user.userId,
        email: user.email,
      };
      const token = jwt.sign(userForToken, jwt_secret);
      res.status(200).json({ message: "Logged in", token });
    } else {
      res.status(401).json({ message: "Incorrect email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// // Register a new user
// const signUpUser = async (req, res) => {
//   try {
//     const { email, password, admin, acceso, contacto, delegacion, asesor } = req.body;
//     if (regex.validateEmail(email) && regex.validatePassword(password)) {
//       const hashedPassword = await bcrypt.hash(password, saltRounds);
//       const newUser = await User.create({
//         email,
//         password: hashedPassword,
//         admin,
//         acceso,
//         contacto,
//         delegacion,
//         asesor
//       });
//       res.status(201).json({ message: "User registered successfully", newUser });
//     } else {
//       res.status(400).json({ message: "Invalid email or password" });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Logout user
const logoutUser = async (req, res) => {
    try {
      const decoded = jwt.verify(req.headers['authorization'].split(' ')[1], jwt_secret);
      const user = await User.findOne({ where: { email: decoded.email } });
  
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
  
      user.logged = false;
      await user.save();
  
      res.status(200).json({ message: "Successfully logged out" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

// Update a user
const updateUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const { email, password, admin, acceso, contacto, delegacion, asesor } =
      req.body;
    const user = await User.findByPk(userId);
    if (user) {
      const hashedPassword = password
        ? await bcrypt.hash(password, saltRounds)
        : user.password;
      const updatedUser = await user.update({
        email,
        password: hashedPassword,
        admin,
        acceso,
        contacto,
        delegacion,
        asesor,
      });
      res
        .status(200)
        .json({ message: "User updated successfully", updatedUser });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId);
    if (user) {
      await user.destroy();
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getUserByEmail,
  createUser,
  loginUser,
//   signUpUser,
  logoutUser,
  updateUser,
  deleteUser,
};
