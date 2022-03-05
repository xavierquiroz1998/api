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
exports.deleteBodega = exports.putBodega = exports.postBodega = exports.getBodega = exports.getBodegas = void 0;
const bodega_1 = __importDefault(require("../models/bodega"));
const getBodegas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bodegas = yield bodega_1.default.findAll();
    res.json({ bodegas });
});
exports.getBodegas = getBodegas;
const getBodega = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const bodega = yield bodega_1.default.findByPk(id);
    if (bodega) {
        res.json(bodega);
    }
    else {
        res.status(404).json({
            msg: `No existe un bodega con el id ${id}`
        });
    }
});
exports.getBodega = getBodega;
const postBodega = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const bodega = bodega_1.default.build(body);
        yield bodega.save();
        res.json(bodega);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postBodega = postBodega;
const putBodega = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const bodega = yield bodega_1.default.findByPk(id);
        if (!bodega) {
            return res.status(404).json({
                msg: 'No existe un bodega con el id ' + id
            });
        }
        yield bodega.update(body);
        res.json(bodega);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putBodega = putBodega;
const deleteBodega = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const bodega = yield bodega_1.default.findByPk(id);
    if (!bodega) {
        return res.status(404).json({
            msg: 'No existe un bodega con el id ' + id
        });
    }
    yield bodega.update({ estado: false });
    // await bodega.destroy();
    res.json(bodega);
});
exports.deleteBodega = deleteBodega;
//# sourceMappingURL=bodegas.js.map