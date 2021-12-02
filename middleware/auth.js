const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // Get jwt token from header
  const token = req.header("x-auth-token");
  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, not authorized" });
  }
  // Verify token if the user has it
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (e) {
    res.status(401).json({ msg: "Invalid token" });
  }
};
