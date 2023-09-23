const express = require("express");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");

const port = process.env.PORT || 4001;
const app = express();
const taskRoute = require("./routes/tasks");
const authRoute = require("./routes/auth");

mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

/**
 * Route's
 */
app.use(express.json());
app.use("/v1/tasks", taskRoute);
app.use("/v1/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Welcome!!!");
});
app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
