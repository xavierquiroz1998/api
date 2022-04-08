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
exports.deleteMovimiento = exports.putMovimiento = exports.postMovimiento = exports.getMovimiento = exports.getMovimientosIdPro = exports.getMovimientos = void 0;
const movimiento_1 = __importDefault(require("../models/movimiento"));
const getMovimientos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movimiento = yield movimiento_1.default.findAll();
    res.json(movimiento);
});
exports.getMovimientos = getMovimientos;
const getMovimientosIdPro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const movimiento = yield movimiento_1.default.findAll({
        where: {
            idProducto: id
        }
    });
    res.json(movimiento);
});
exports.getMovimientosIdPro = getMovimientosIdPro;
const getMovimiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const movimiento = yield movimiento_1.default.findByPk(id);
    if (movimiento) {
        res.json(movimiento);
    }
    else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }
});
exports.getMovimiento = getMovimiento;
const postMovimiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const objeto = movimiento_1.default.build(body);
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
exports.postMovimiento = postMovimiento;
const putMovimiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const movimiento = yield movimiento_1.default.findByPk(id);
        if (!movimiento) {
            return res.status(404).json({
                msg: 'No existe un movimiento con el id ' + id
            });
        }
        yield movimiento.update(body);
        res.json(movimiento);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putMovimiento = putMovimiento;
const deleteMovimiento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const movimiento = yield movimiento_1.default.findByPk(id);
    if (!movimiento) {
        return res.status(404).json({
            msg: 'No existe un movimiento con el id ' + id
        });
    }
    yield movimiento.update({ stsPro: false });
    // await movimiento.destroy();
    res.json(movimiento);
});
exports.deleteMovimiento = deleteMovimiento;
//# sourceMappingURL=movimientos.js.map