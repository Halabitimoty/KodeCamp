const express = require("express");
const route = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("dotenv").config;
const { userCollection } = require("../schema/userSchema");
const { isUserLoggedIn } = require("./middlewares");

route.post("/register", async (req, res) => {
  const salt = bcrypt.genSaltSync(10);
  const hashpassword = bcrypt.hashSync(req.body.password, salt);

  await userCollection.create({
    fullname: req.body.fullname,
    email: req.body.email,
    password: hashpassword,
    role: req.body.role,
  });

  res.status(201).send("Created Successfully");
});

/**
 *
 */
route.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const userDetail = await userCollection.findOne({ email });

  if (!userDetail) return res.status(404).send("user-not-found");

  const doesPasswordMatch = bcrypt.compareSync(password, userDetail.password);

  if (!doesPasswordMatch) return res.status(400).send("Invalid-Credentials");

  const { email: userEmail, _id, role } = userDetail;

  const token = jwt.sign(
    {
      email: userEmail,
      userId: _id,
      role: role,
    },
    process.env.secret
  );

  res.send({
    message: "Sign in Succesfull",
    token,
  });
});

route.get("/profile", isUserLoggedIn, async (req, res) => {});
module.exports = route;
