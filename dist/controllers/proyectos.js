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
exports.deleteProyecto = exports.putProyecto = exports.postProyecto = exports.getProyecto = exports.getProyectos = void 0;
const proyecto_1 = __importDefault(require("../models/proyecto"));
const getProyectos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const proyectos = yield proyecto_1.default.findAll();
    res.json(proyectos);
});
exports.getProyectos = getProyectos;
const getProyecto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const proyecto = yield proyecto_1.default.findByPk(id);
    if (proyecto) {
        res.json(proyecto);
    }
    else {
        res.status(404).json({
            msg: `No existe un proyecto con el id ${id}`
        });
    }
});
exports.getProyecto = getProyecto;
const postProyecto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeproyecto = yield proyecto_1.default.findOne({
            where: {
                codigo: body.codigo
            }
        });
        if (existeproyecto) {
            return res.status(400).json({
                msg: 'Ya existe codigo' + body.codigo
            });
        }
        const proyecto = proyecto_1.default.build(body);
        yield proyecto.save();
        res.json(proyecto);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postProyecto = postProyecto;
const putProyecto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const proyecto = yield proyecto_1.default.findByPk(id);
        if (!proyecto) {
            return res.status(404).json({
                msg: 'No existe un proyecto con el id ' + id
            });
        }
        yield proyecto.update(body);
        res.json(proyecto);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putProyecto = putProyecto;
const deleteProyecto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const proyecto = yield proyecto_1.default.findByPk(id);
    if (!proyecto) {
        return res.status(404).json({
            msg: 'No existe un proyecto con el id ' + id
        });
    }
    yield proyecto.update({ estado: false });
    // await proyecto.destroy();
    res.json(proyecto);
});
exports.deleteProyecto = deleteProyecto;
//# sourceMappingURL=proyectos.js.map