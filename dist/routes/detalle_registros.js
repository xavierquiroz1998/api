"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detalle_registros_1 = require("../controllers/detalle_registros");
const router = (0, express_1.Router)();
router.get('/', detalle_registros_1.getDetalleRegistros);
router.get('/:id', detalle_registros_1.getDetalleRegistro);
router.get('/getdetalles/:id', detalle_registros_1.getDetalleRegistro2);
router.post('/', detalle_registros_1.postDetalleRegistro);
router.put('/:id', detalle_registros_1.putDetalleRegistro);
router.delete('/:id', detalle_registros_1.deleteDetalleRegistro);
exports.default = router;
//# sourceMappingURL=detalle_registros.js.map