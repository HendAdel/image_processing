"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    res.send("Hi the server response!");
});
app.listen(port, function () {
    console.log("The server strted at localhost: ".concat(port));
});
exports["default"] = app;
