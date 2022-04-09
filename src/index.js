/*jshint esversion: 6 */
const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

//Settings
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//Middlewares

//Routes
app.use(require("./routes/routes.js"));

//Static files
app.use(express.static(path.join(__dirname, "public")));

//Listening server
app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
