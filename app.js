const express = require("express");
const app = express();

app.get("/", (req, resp) => {
  resp.json("Hello World!");
});

app.listen(3000, () => {
  console.log("Server is now running");
});
