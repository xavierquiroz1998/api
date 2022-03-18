"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productos_1 = require("../controllers/productos");
const router = (0, express_1.Router)();
router.get('/', productos_1.getProductos);
router.get('/fill', productos_1.getProductosExt);
router.get('/:id', productos_1.getProducto);
router.post('/', productos_1.postProducto);
router.put('/:id', productos_1.putProducto);
router.delete('/:id', productos_1.deleteProducto);
router.get('/validar/:id', productos_1.validarProducto);
exports.default = router;
//# sourceMappingURL=productos.js.map