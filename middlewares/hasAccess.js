function checkAccess(req, res, next) {
    console.log("prueba5");
    if (req.user.acceso == true) {
      return next();
    }
    res.status(400).json({error: "error"});
}

module.exports = checkAccess;