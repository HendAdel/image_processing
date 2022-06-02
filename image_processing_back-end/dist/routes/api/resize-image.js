"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var assist_1 = __importDefault(require("../controllers/assist"));
var resize = express_1.default.Router();
var image_name = "";
var n_img_w = 0;
var n_img_h = 0;
var o_img_path = "../../images/original-images";
var t_img_path = "../../images/thumbnail";
resize.get('/', function (req, res) {
    image_name = req.query.image_name;
    var o_fullname = o_img_path + image_name;
    var n_fullname = '';
    if (assist_1.default.file_exist(o_fullname) === true) {
        if (assist_1.default.valid_width(n_img_w, n_img_h) === true) {
            n_fullname = t_img_path + image_name + '_' + n_img_w + '_' + n_img_h;
            if (assist_1.default.file_exist(n_fullname) === true) {
                console.log("image exist with same dimensions!");
                // send the exist image
                res.sendFile(n_fullname);
            }
            else {
                //TODO: resize the image with new dimensions, and send it.
                assist_1.default.resize_image(o_fullname, n_img_w, n_img_h, n_fullname);
                res.sendFile(n_fullname);
            }
        }
        else {
            console.log("invalid dimensions!");
            res.send("Please enter a valid dimensions!");
        }
    }
    else {
        console.log("invalid Image!");
        res.send("Please choose a valid Image!");
    }
});
exports.default = resize;
