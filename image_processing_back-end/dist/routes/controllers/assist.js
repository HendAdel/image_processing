"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
//call sharp tool to resize image
var sharp = require('sharp');
// Check if the image exist. the file_name argument is the path + the image name ex"./images/thumbnail/fjord_200_200.jpg"
function file_exist(file_name) {
    if (fs_1.default.existsSync(file_name)) {
        return true;
    }
    return false;
}
//Check if the width and hight are valid
function valid_width(width, hight) {
    if (width > 0 && hight > 0) {
        return true;
    }
    return false;
}
// Resize the image using sharp
function resize_image(file_name, file_wdith, file_height, n_file_path) {
    sharp(file_name)
        .resize(file_wdith, file_height, {
        kernel: sharp.kernel.nearest,
        fit: 'contain',
        position: 'right top',
        background: { r: 255, g: 255, b: 255, alpha: 0.5 }
    })
        .toFile("".concat(n_file_path, ".jpg"))
        .then(function () {
    });
}
exports.default = { file_exist: file_exist, valid_width: valid_width, resize_image: resize_image };
