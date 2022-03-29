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
exports.deleteProveedor = exports.putProveedor = exports.postProveedor = exports.getProveedor = exports.getProveedores = void 0;
const proveedor_1 = __importDefault(require("../models/proveedor"));
const getProveedores = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const provedores = yield proveedor_1.default.findAll();
    res.json(provedores);
});
exports.getProveedores = getProveedores;
const getProveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const proveedor = yield proveedor_1.default.findByPk(id);
    if (proveedor) {
        res.json(proveedor);
    }
    else {
        res.status(404).json({
            msg: `No existe un proveedor con el id ${id}`
        });
    }
});
exports.getProveedor = getProveedor;
const postProveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        // const existeproveedor = await Proveedor.findOne({
        //     where: {
        //         codigo: body.codigo
        //     }
        // });
        // if (existeproveedor) {
        //     return res.status(400).json({
        //         msg: 'Ya existe codigo' + body.codigo
        //     });
        // }
        const proveedor = proveedor_1.default.build(body);
        yield proveedor.save();
        res.json(proveedor);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postProveedor = postProveedor;
const putProveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const proveedor = yield proveedor_1.default.findByPk(id);
        if (!proveedor) {
            return res.status(404).json({
                msg: 'No existe un proveedor con el id ' + id
            });
        }
        yield proveedor.update(body);
        res.json(proveedor);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putProveedor = putProveedor;
const deleteProveedor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const proveedor = yield proveedor_1.default.findByPk(id);
    if (!proveedor) {
        return res.status(404).json({
            msg: 'No existe un proveedor con el id ' + id
        });
    }
    yield proveedor.update({ estado: false });
    // await proveedor.destroy();
    res.json(proveedor);
});
exports.deleteProveedor = deleteProveedor;
//# sourceMappingURL=proveedores.js.map