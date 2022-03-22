"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tipo_registros_1 = require("../controllers/tipo_registros");
const router = (0, express_1.Router)();
router.get('/', tipo_registros_1.getTipos);
router.get('/:id', tipo_registros_1.getTipo);
router.post('/', tipo_registros_1.postTipo);
router.put('/:id', tipo_registros_1.putTipo);
router.delete('/:id', tipo_registros_1.deleteTipo);
exports.default = router;
//# sourceMappingURL=tipo_registros.js.map