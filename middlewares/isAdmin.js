function checkAdmin(req, res, next) {
    if (req.user.admin == true) {
      return next();
    }
    res.status(400).json({error: "error"});
}

module.exports = checkAdmin;