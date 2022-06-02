"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import the express to build the server
var express = require("express");
var img_rout_1 = __importDefault(require("./routes/img_rout"));
var app = express();
var port = 3000;
//Use routes
app.use('/api', img_rout_1.default);
// resize image endpoint function
// start server function
app.listen(port, function () {
    console.log("The server runing at localhost: ".concat(port));
});
exports.default = app;
