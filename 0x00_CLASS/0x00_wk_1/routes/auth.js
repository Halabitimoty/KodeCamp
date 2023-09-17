const express = require("express");
const route = express.Router();
const bcrypt = require("bcrypt");
const { userCollection } = require("../schema/userSchema");

route.post("/register", async (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const hashpassword = bcrypt.hashSync(req.body.password, salt);

  await userCollection.create({
    fullname: req.body.fullname,
    email: req.body.email,
    password: hashpassword,
  });

  res.status(201).send("Created Successfully");
});

module.exports = route;
