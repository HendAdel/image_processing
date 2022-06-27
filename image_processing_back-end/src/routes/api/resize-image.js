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
const express_1 = __importDefault(require("express"));
const assist_1 = __importDefault(require("../controllers/assist"));
const node_path_1 = __importDefault(require("node:path"));
const resize = express_1.default.Router();
let image_name = '';
let image_ext = '';
let name_w_ext = '';
let n_img_w = 0;
let n_img_h = 0;
// Set images pathes with path packge
let o_img_path = node_path_1.default.resolve(__dirname, '..', '..', '..', 'images', 'original-images');
let t_img_path = node_path_1.default.resolve(__dirname, '..', '..', '..', 'images', 'thumbnail');
resize.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(200);
    image_name = req.query.image_name;
    if (!image_name) {
        res.status(400).send('Bad request The Image name is required!');
        return;
    }
    image_ext = node_path_1.default.extname(image_name);
    name_w_ext = node_path_1.default.parse(image_name).name;
    n_img_w = parseInt(req.query.width);
    if (!n_img_w) {
        res.status(400).send('Bad request The Image new width is required!');
        return;
    }
    n_img_h = parseInt(req.query.hight);
    if (!n_img_h) {
        res.status(400).send('Bad request The Image new hight is required!');
        return;
    }
    let o_fullname = o_img_path + '/' + image_name;
    let n_fullname = '';
    assist_1.default.file_exist(o_fullname);
    if (assist_1.default.file_exist(o_fullname) === true) {
        if (assist_1.default.valid_width(n_img_w, n_img_h) === true) {
            n_fullname = node_path_1.default.resolve(t_img_path +
                '/' +
                name_w_ext +
                '_' +
                n_img_w +
                '_' +
                n_img_h +
                image_ext);
            if (assist_1.default.file_exist(n_fullname) === true) {
                res.sendFile(n_fullname);
                return;
            }
            else {
                // Resize the image with new dimensions, and send it.
                try {
                    yield assist_1.default.resize_image(o_fullname, n_img_w, n_img_h, n_fullname);
                    res.sendFile(n_fullname);
                    return;
                }
                catch (error) {
                    throw new Error(`Cannot get the new image, Please try again later! ${error}`);
                }
            }
        }
        else {
            res.send('Please enter a valid dimensions!');
            return;
        }
    }
    else {
        res.send('Please choose a valid Image!');
        return;
    }
}));
exports.default = resize;
