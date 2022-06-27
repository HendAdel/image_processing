"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
//call sharp tool to resize image
const sharp = require('sharp');
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
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield sharp(file_name)
                .resize({ file_wdith, file_height })
                .toFile(n_file_path);
        }
        catch (error) {
            throw new Error(`Cannot get the new image, Please try again later! ${error}`);
        }
    });
}
exports.default = { file_exist, valid_width, resize_image };
