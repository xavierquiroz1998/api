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
exports.deleteDetalleRegistro = exports.putDetalleRegistro = exports.postDetalleRegistro = exports.getDetalleRegistro = exports.getDetalleRegistros = void 0;
const detalle_registro_1 = __importDefault(require("../models/detalle_registro"));
const producto_1 = __importDefault(require("../models/producto"));
const registro_1 = __importDefault(require("../models/registro"));
const getDetalleRegistros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const detalle = yield detalle_registro_1.default.findAll({
        include: [producto_1.default, registro_1.default]
    });
    res.json(detalle);
});
exports.getDetalleRegistros = getDetalleRegistros;
const getDetalleRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const detalle = yield detalle_registro_1.default.findByPk(id);
    if (detalle) {
        res.json(detalle);
    }
    else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }
});
exports.getDetalleRegistro = getDetalleRegistro;
const postDetalleRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const objeto = detalle_registro_1.default.build(body);
        yield objeto.save();
        res.json(objeto);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postDetalleRegistro = postDetalleRegistro;
const putDetalleRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const detalle = yield detalle_registro_1.default.findByPk(id);
        if (!detalle) {
            return res.status(404).json({
                msg: 'No existe un detalle con el id ' + id
            });
        }
        yield detalle.update(body);
        res.json(detalle);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putDetalleRegistro = putDetalleRegistro;
const deleteDetalleRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const detalle = yield detalle_registro_1.default.findByPk(id);
    if (!detalle) {
        return res.status(404).json({
            msg: 'No existe un detalle con el id ' + id
        });
    }
    yield detalle.update({ stsPro: false });
    // await detalle.destroy();
    res.json(detalle);
});
exports.deleteDetalleRegistro = deleteDetalleRegistro;
//# sourceMappingURL=detalle_registros.js.map