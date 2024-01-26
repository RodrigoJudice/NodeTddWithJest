const express = require("express");
const todoRoutes = require("./routes/todo.route");
const mongodb = require("./mongodb/mongodb.connect");
const app = express();

app.disable("x-powered-by");

mongodb.connect();

app.use(express.json());

app.use("/todos", todoRoutes);

app.get("/", (req, resp) => {
  resp.json("Hello World!");
});

module.exports = app;
