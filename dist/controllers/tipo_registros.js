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
exports.deleteTipo = exports.putTipo = exports.postTipo = exports.getTipo = exports.getTipos = void 0;
const tipo_registro_1 = __importDefault(require("../models/tipo_registro"));
const getTipos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tipo = yield tipo_registro_1.default.findAll();
    res.json(tipo);
});
exports.getTipos = getTipos;
const getTipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tipo = yield tipo_registro_1.default.findByPk(id);
    if (tipo) {
        res.json(tipo);
    }
    else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }
});
exports.getTipo = getTipo;
const postTipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const exite = yield tipo_registro_1.default.findOne({
            where: {
                codigo: body.codigo
            }
        });
        if (exite) {
            return res.status(400).json({
                msg: 'Ya existe codigo' + body.codigo
            });
        }
        const objeto = tipo_registro_1.default.build(body);
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
exports.postTipo = postTipo;
const putTipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const tipo = yield tipo_registro_1.default.findByPk(id);
        if (!tipo) {
            return res.status(404).json({
                msg: 'No existe un tipo con el id ' + id
            });
        }
        yield tipo.update(body);
        res.json(tipo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putTipo = putTipo;
const deleteTipo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const tipo = yield tipo_registro_1.default.findByPk(id);
    if (!tipo) {
        return res.status(404).json({
            msg: 'No existe un tipo con el id ' + id
        });
    }
    yield tipo.update({ stsPro: false });
    // await tipo.destroy();
    res.json(tipo);
});
exports.deleteTipo = deleteTipo;
//# sourceMappingURL=tipo_registros.js.map