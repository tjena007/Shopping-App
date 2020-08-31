var express = require("express"),
    app = express(),
    webpack = require("webpack");

app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
    res.render("home");
})

app.set("view engine", "ejs");

app.listen("3000", function () {
    console.log("live at 3000");
})