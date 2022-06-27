"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import the express to build the server
const express = require("express");
const img_rout_1 = __importDefault(require("./routes/img_rout"));
const app = express();
const port = 3000;
//Use routes
app.use('/api', img_rout_1.default);
app.get('/', (req, res) => {
    res.send(`Image processing project main end point!`);
});
// resize image endpoint function
// start server function
app.listen(port, () => {
    console.log(`The server runing at localhost: ${port}`);
});
exports.default = app;
