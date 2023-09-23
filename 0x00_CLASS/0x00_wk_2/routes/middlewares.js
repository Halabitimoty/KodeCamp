const env = require("dotenv").config;
const jwt = require("jsonwebtoken");

function isUserLoggedIn(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).send("no-authorization");
    return;
  }

  const value = authHeader.split(" ");
  const tokenType = value[0];
  const tokenValue = value[1];

  if (tokenType === "Bearer") {
    const decoded = jwt.verify(token, process.env.secret);

    req.decoded = decoded;
    next();
    return;
  }

  res.status(401).send("not-authorised");
}

function adminsOnly(req, res, next) {
  if (req.decoded.role === "admin") {
    next();
  } else {
    res.status(401).send("You are not an Admin!!!");
  }
}

module.exports = {
  isUserLoggedIn,
  adminsOnly,
};
