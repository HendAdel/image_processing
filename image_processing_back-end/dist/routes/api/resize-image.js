"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resize = express_1.default.Router();
resize.get('/', function (req, res) {
    console.log("Hallo from resize images rout");
    res.send("Resize Image rout!");
});
exports.default = resize;
