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
exports.deleteParametro = exports.putParametro = exports.postParametro = exports.getParametro = exports.getParametros = void 0;
const parametro_1 = __importDefault(require("../models/parametro"));
const getParametros = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const parametros = yield parametro_1.default.findAll();
    res.json(parametros);
});
exports.getParametros = getParametros;
const getParametro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const parametro = yield parametro_1.default.findByPk(id);
    if (parametro) {
        res.json(parametro);
    }
    else {
        res.status(404).json({
            msg: `No existe un parametro con el id ${id}`
        });
    }
});
exports.getParametro = getParametro;
const postParametro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const parametro = parametro_1.default.build(body);
        yield parametro.save();
        res.json(parametro);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postParametro = postParametro;
const putParametro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const parametro = yield parametro_1.default.findByPk(id);
        if (!parametro) {
            return res.status(404).json({
                msg: 'No existe un parametro con el id ' + id
            });
        }
        yield parametro.update(body);
        res.json(parametro);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putParametro = putParametro;
const deleteParametro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const parametro = yield parametro_1.default.findByPk(id);
    if (!parametro) {
        return res.status(404).json({
            msg: 'No existe un parametro con el id ' + id
        });
    }
    yield parametro.update({ estado: false });
    // await parametro.destroy();
    res.json(parametro);
});
exports.deleteParametro = deleteParametro;
//# sourceMappingURL=parametros.js.map