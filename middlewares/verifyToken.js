const express = require("express");
const jwt = require("jsonwebtoken");
const jwt_secret = process.env.ULTRA_SECRET_KEY;

const verifyToken = express.Router();

verifyToken.use(async (req, res, next) => {
  const {token} = req.body 

  if (!token) {
    return res.status(401).json("error");
  } else {
    try {
      const decoded = jwt.verify(token, jwt_secret);
      next();
    } catch (error) {
      return res.status(401).json("error")
    }
  }
});

module.exports = verifyToken;
