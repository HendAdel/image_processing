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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
//call sharp tool to resize image
var sharp = require('sharp');
// Check if the image exist. the file_name argument is the path + the image name ex"./images/thumbnail/fjord_200_200.jpg"
// async function file_exist(file_name: string): Promise<boolean>{
//     try {
//         const files = await readdir( "../../image_processing/image_processing_back-end/images/original-images");
//         for (const file of files)
//           console.log(file);
//       } catch (err) {
//         console.error(err);
//       }
//     console.log('assist: ' + file_name);
//     if(fs.existsSync(file_name)){
//         return true;
//     }
//     return false;
// }
function file_exist(file_name) {
    console.log('assist: ' + file_name);
    if (fs_1.default.existsSync(file_name)) {
        console.log('assist: file exist ');
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
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    console.log("first line");
                    return [4 /*yield*/, sharp(file_name)
                            .resize({ file_wdith: file_wdith, file_height: file_height
                            // kernel: sharp.kernel.nearest,
                            // fit: 'contain',
                            // position: 'right top',
                            // background: { r: 255, g: 255, b: 255, alpha: 0.5 }
                        })
                            // .toFile(`${n_file_path}.jpg`)
                            .toFile(n_file_path)];
                case 1:
                    _b.sent();
                    // .then(() => {
                    console.log("last line");
                    return [3 /*break*/, 3];
                case 2:
                    _a = _b.sent();
                    console.log("can not process the image!");
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.default = { file_exist: file_exist, valid_width: valid_width, resize_image: resize_image };
