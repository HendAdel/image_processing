"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var resize_image_1 = __importDefault(require("./api/resize-image"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    console.log("Hallo from images rout");
    res.send("Image rout!");
});
routes.use('/resize', resize_image_1.default);
exports.default = routes;
