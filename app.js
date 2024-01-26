const express = require("express");
const todoRoutes = require("./routes/todo.route");
const mongodb = require("./mongodb/mongodb.connect");
const app = express();

app.disable("x-powered-by");

mongodb.connect();

app.use(express.json());

app.use("/todos", todoRoutes);

app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});

module.exports = app;
