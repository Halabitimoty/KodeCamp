const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const port = process.env.PORT || 4001;
const app = express();

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
