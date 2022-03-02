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
exports.deleteGrupo = exports.putGrupo = exports.postGrupo = exports.getGrupo = exports.getGrupos = void 0;
const grupo_1 = __importDefault(require("../models/grupo"));
const getGrupos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const grupo = yield grupo_1.default.findAll();
    res.json({ grupo });
});
exports.getGrupos = getGrupos;
const getGrupo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const grupo = yield grupo_1.default.findByPk(id);
    if (grupo) {
        res.json(grupo);
    }
    else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }
});
exports.getGrupo = getGrupo;
const postGrupo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeCodRef = yield grupo_1.default.findOne({
            where: {
                codRef: body.codRef
            }
        });
        if (existeCodRef) {
            return res.status(400).json({
                msg: 'Ya existe un usuario con el email ' + body.email
            });
        }
        const objeto = grupo_1.default.build(body);
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
exports.postGrupo = postGrupo;
const putGrupo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const grupo = yield grupo_1.default.findByPk(id);
        if (!grupo) {
            return res.status(404).json({
                msg: 'No existe un grupo con el id ' + id
            });
        }
        yield grupo.update(body);
        res.json(grupo);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putGrupo = putGrupo;
const deleteGrupo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const grupo = yield grupo_1.default.findByPk(id);
    if (!grupo) {
        return res.status(404).json({
            msg: 'No existe un grupo con el id ' + id
        });
    }
    yield grupo.update({ stsPro: false });
    // await grupo.destroy();
    res.json(grupo);
});
exports.deleteGrupo = deleteGrupo;
//# sourceMappingURL=grupos.js.map