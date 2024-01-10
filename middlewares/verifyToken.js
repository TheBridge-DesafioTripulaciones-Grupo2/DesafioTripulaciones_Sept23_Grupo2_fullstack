const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const jwt_secret = process.env.ULTRA_SECRET_KEY;

const verifyToken = express.Router();

verifyToken.use(async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Assuming 'Bearer TOKEN'

  if (!token) {
    return res.status(401).json({ message: "Token not provided" });
  }

  try {
    const decoded = jwt.verify(token, jwt_secret);
    const user = await User.findOne({ where: { email: decoded.email } });

    if (!user || !user.logged) {
      return res
        .status(401)
        .json({ message: "Invalid token or user not logged in" });
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid token", error: err.message });
  }
});

module.exports = verifyToken;
