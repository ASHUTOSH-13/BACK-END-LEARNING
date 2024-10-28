require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//first route
app.get("/", function (req, res) {
  res.send("<h1>server is running on port 3000</h1>");
});
app.listen(3000);
