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
exports.deleteKardex = exports.putKardex = exports.postKardex = exports.getKardexProducto = exports.getKardex = exports.getKardexs = void 0;
const kardex_1 = __importDefault(require("../models/kardex"));
const producto_1 = __importDefault(require("../models/producto"));
const getKardexs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const kardexs = yield kardex_1.default.findAll();
    res.json(kardexs);
});
exports.getKardexs = getKardexs;
/* export const getKardexsExclude = async (req: Request, res: Response) => {

    const kardexs = await Kardex.findAll({
        attributes: { exclude: ['idProducto'] }
    });

    res.json(kardexs);
}

 */
const getKardex = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const kardex = yield kardex_1.default.findByPk(id);
    if (kardex) {
        res.json(kardex);
    }
    else {
        res.status(404).json({
            msg: `No existe un kardex con el id ${id}`
        });
    }
});
exports.getKardex = getKardex;
const getKardexProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const kardex = yield kardex_1.default.findAll({
        include: [producto_1.default],
        where: {
            idProducto: id
        }
    });
    res.json(kardex);
});
exports.getKardexProducto = getKardexProducto;
const postKardex = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const kardex = kardex_1.default.build(body);
        yield kardex.save();
        res.json(kardex);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postKardex = postKardex;
const putKardex = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const kardex = yield kardex_1.default.findByPk(id);
        if (!kardex) {
            return res.status(404).json({
                msg: 'No existe un kardex con el id ' + id
            });
        }
        yield kardex.update(body);
        res.json(kardex);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putKardex = putKardex;
const deleteKardex = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const kardex = yield kardex_1.default.findByPk(id);
    if (!kardex) {
        return res.status(404).json({
            msg: 'No existe un kardex con el id ' + id
        });
    }
    yield kardex.update({ estado: false });
    // await kardex.destroy();
    res.json(kardex);
});
exports.deleteKardex = deleteKardex;
//# sourceMappingURL=kardexs.js.map