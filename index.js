const express = require("express")
const app = express()
const bodyParser = require("body-parser")
var mixpanel = require('mixpanel-browser');

mixpanel.init("d5d588f7d38b9c1a1b4e6133ca1af840");

app.set("view engine", "ejs")
app.use(express.static("public"))

app.get('/', (req, res) => {
    res.render("index", {data : "EMPTY"}) 
})

app.get('/projects', function(req, res) {
  res.render("projects", {date : "EMPTY"});
});

app.get('/blog', function(req, res) {
  res.render("blog", {date : "EMPTY"});
});

app.get('/about', function(req, res) {
  res.render("about", {date : "EMPTY"});
});

app.listen(8000, () => {
    console.log("Running")
})