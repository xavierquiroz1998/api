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
exports.deleteUnidad = exports.putUnidad = exports.postUnidad = exports.getUnidad = exports.getUnidades = void 0;
const unidad_1 = __importDefault(require("../models/unidad"));
const getUnidades = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const unidades = yield unidad_1.default.findAll();
    res.json({ unidades });
});
exports.getUnidades = getUnidades;
const getUnidad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const unidad = yield unidad_1.default.findByPk(id);
    if (unidad) {
        res.json(unidad);
    }
    else {
        res.status(404).json({
            msg: `No existe un Unidad con el id ${id}`
        });
    }
});
exports.getUnidad = getUnidad;
const postUnidad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeunidad = yield unidad_1.default.findOne({
            where: {
                codigo: body.codigo
            }
        });
        if (existeunidad) {
            return res.status(400).json({
                msg: 'Ya existe codigo' + body.codigo
            });
        }
        const unidad = unidad_1.default.build(body);
        yield unidad.save();
        res.json(unidad);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postUnidad = postUnidad;
const putUnidad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const unidad = yield unidad_1.default.findByPk(id);
        if (!unidad) {
            return res.status(404).json({
                msg: 'No existe un Unidad con el id ' + id
            });
        }
        yield unidad.update(body);
        res.json(unidad);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putUnidad = putUnidad;
const deleteUnidad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const unidad = yield unidad_1.default.findByPk(id);
    if (!unidad) {
        return res.status(404).json({
            msg: 'No existe un Unidad con el id ' + id
        });
    }
    yield unidad.update({ estado: false });
    // await Unidad.destroy();
    res.json(unidad);
});
exports.deleteUnidad = deleteUnidad;
//# sourceMappingURL=unidades.js.map