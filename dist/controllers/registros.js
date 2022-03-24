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
exports.deleteRegistro = exports.putRegistro = exports.postRegistro = exports.getRegistro = exports.getRegistrosTipo = exports.getRegistros = void 0;
const registro_1 = __importDefault(require("../models/registro"));
const tipo_registro_1 = __importDefault(require("../models/tipo_registro"));
const getRegistros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const registro = yield registro_1.default.findAll({
        include: [tipo_registro_1.default]
    });
    res.json(registro);
});
exports.getRegistros = getRegistros;
const getRegistrosTipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const registro = yield registro_1.default.findAll({
        include: [tipo_registro_1.default],
        where: {
            idTipo: id
        }
    });
    res.json(registro);
});
exports.getRegistrosTipo = getRegistrosTipo;
const getRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const registro = yield registro_1.default.findByPk(id);
    if (registro) {
        res.json(registro);
    }
    else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }
});
exports.getRegistro = getRegistro;
const postRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const objeto = registro_1.default.build(body);
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
exports.postRegistro = postRegistro;
const putRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const registro = yield registro_1.default.findByPk(id);
        if (!registro) {
            return res.status(404).json({
                msg: 'No existe un registro con el id ' + id
            });
        }
        yield registro.update(body);
        res.json(registro);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putRegistro = putRegistro;
const deleteRegistro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const registro = yield registro_1.default.findByPk(id);
    if (!registro) {
        return res.status(404).json({
            msg: 'No existe un registro con el id ' + id
        });
    }
    yield registro.update({ stsPro: false });
    // await registro.destroy();
    res.json(registro);
});
exports.deleteRegistro = deleteRegistro;
//# sourceMappingURL=registros.js.map