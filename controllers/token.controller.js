const jwt = require("jsonwebtoken");
const jwt_secret = process.env.ULTRA_SECRET_KEY;
const { User } = require("../schemas/User");


const loginToken = async function (req, res) {
  try {
      const {token} = req.body;
      const decoded = jwt.verify(token, jwt_secret);
      const userSigned = await User.findOne({ where: { email: decoded.email } });
    if (userSigned != null) {
        const user = userSigned;
        console.log("final1");
        return res.status(200).json(user);
    } else {
      return res.status(400).json('error');
    }  
  } catch (error) {
      console.log(error);
      res.status(500).json('error');
  }
}

module.exports = {
  loginToken
};
