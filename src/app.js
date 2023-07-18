const express = require("express");
const app = express();
const hbs = require("hbs");
const port = process.env.PORT || 1214;

//public static path
const path = require("path");
const staticpath = path.join(__dirname, "../public");
const templatepath = path.join(__dirname, "../templates/views");
const partialspath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", templatepath);
hbs.registerPartials(partialspath);

app.use(express.static(staticpath));

// routing
app.get("/", (req, res) => {
  // res.send("home page");
  res.render("index");
});
app.get("/about", (req, res) => {
  // res.send("about page");
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req, res) => {
  res.render("404error", {
    errormsg: " opps! page not found",
  });
});
app.listen(port);
