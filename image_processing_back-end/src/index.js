"use strict";
exports.__esModule = true;
// import the express to build the server
var express = require("express");
//call sharp tool to resize image
var sharp = require('sharp');
var app = express();
var port = 3000;
// resize image endpoint function
app.get('/rimage', function (req, res) {
    sharp(req)
        .resize(req.query.wdith, req.query.height, {
        kernel: sharp.kernel.nearest,
        fit: 'contain',
        position: 'right top',
        background: { r: 255, g: 255, b: 255, alpha: 0.5 }
    })
        .toFile("".concat(req.query.fname, ".jpg"))
        .then(function () {
    });
    res.send("Image size changed!");
});
// start server function
app.listen(port, function () {
    console.log("The server strted at localhost: ".concat(port));
});
exports["default"] = app;
