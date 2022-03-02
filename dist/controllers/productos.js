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
exports.deleteProducto = exports.putProducto = exports.postProducto = exports.getProducto = exports.getProductosExt = exports.getProductos = void 0;
const producto_1 = __importDefault(require("../models/producto"));
const proveedor_1 = __importDefault(require("../models/proveedor"));
const getProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const producto = yield producto_1.default.findAll();
    res.json({ producto });
});
exports.getProductos = getProductos;
const getProductosExt = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const producto = yield producto_1.default.findAll({
        include: proveedor_1.default
    });
    res.json({ producto });
});
exports.getProductosExt = getProductosExt;
const getProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const producto = yield producto_1.default.findByPk(id);
    if (producto) {
        res.json(producto);
    }
    else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        });
    }
});
exports.getProducto = getProducto;
const postProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const existeReferencia = yield producto_1.default.findOne({
            where: {
                referencia: body.referencia
            }
        });
        if (existeReferencia) {
            return res.status(400).json({
                msg: 'Ya existe es codigo de referencia ' + body.referencia
            });
        }
        const objeto = producto_1.default.build(body);
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
exports.postProducto = postProducto;
const putProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const producto = yield producto_1.default.findByPk(id);
        if (!producto) {
            return res.status(404).json({
                msg: 'No existe un producto con el id ' + id
            });
        }
        yield producto.update(body);
        res.json(producto);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.putProducto = putProducto;
const deleteProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const producto = yield producto_1.default.findByPk(id);
    if (!producto) {
        return res.status(404).json({
            msg: 'No existe un producto con el id ' + id
        });
    }
    yield producto.update({ estado: false });
    // await producto.destroy();
    res.json(producto);
});
exports.deleteProducto = deleteProducto;
//# sourceMappingURL=productos.js.map