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
var express_1 = __importDefault(require("express"));
var assist_1 = __importDefault(require("../controllers/assist"));
var node_path_1 = __importDefault(require("node:path"));
var resize = express_1.default.Router();
var image_name = '';
var image_ext = '';
var name_w_ext = '';
var n_img_w = 0;
var n_img_h = 0;
// Set images pathes with path packge
var o_img_path = node_path_1.default.resolve(__dirname, '..', '..', '..', 'images', 'original-images');
var t_img_path = node_path_1.default.resolve(__dirname, '..', '..', '..', 'images', 'thumbnail');
resize.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var o_fullname, n_fullname, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                res.status(200);
                image_name = req.query.image_name;
                if (!image_name) {
                    res.status(400).send('Bad request The Image name is required!');
                    return [2 /*return*/];
                }
                image_ext = node_path_1.default.extname(image_name);
                name_w_ext = node_path_1.default.parse(image_name).name;
                n_img_w = parseInt(req.query.width);
                if (!n_img_w) {
                    res.status(400).send('Bad request The Image new width is required!');
                    return [2 /*return*/];
                }
                n_img_h = parseInt(req.query.hight);
                if (!n_img_h) {
                    res.status(400).send('Bad request The Image new hight is required!');
                    return [2 /*return*/];
                }
                o_fullname = o_img_path + '/' + image_name;
                n_fullname = '';
                assist_1.default.file_exist(o_fullname);
                if (!(assist_1.default.file_exist(o_fullname) === true)) return [3 /*break*/, 7];
                if (!(assist_1.default.valid_width(n_img_w, n_img_h) === true)) return [3 /*break*/, 5];
                n_fullname = node_path_1.default.resolve(t_img_path +
                    '/' +
                    name_w_ext +
                    '_' +
                    n_img_w +
                    '_' +
                    n_img_h +
                    image_ext);
                if (!(assist_1.default.file_exist(n_fullname) === true)) return [3 /*break*/, 1];
                res.sendFile(n_fullname);
                return [2 /*return*/];
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, assist_1.default.resize_image(o_fullname, n_img_w, n_img_h, n_fullname)];
            case 2:
                _a.sent();
                res.sendFile(n_fullname);
                return [2 /*return*/];
            case 3:
                error_1 = _a.sent();
                throw new Error("Cannot get the new image, Please try again later! ".concat(error_1));
            case 4: return [3 /*break*/, 6];
            case 5:
                res.send('Please enter a valid dimensions!');
                return [2 /*return*/];
            case 6: return [3 /*break*/, 8];
            case 7:
                res.send('Please choose a valid Image!');
                return [2 /*return*/];
            case 8: return [2 /*return*/];
        }
    });
}); });
exports.default = resize;
