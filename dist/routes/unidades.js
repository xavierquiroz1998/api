"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const unidades_1 = require("../controllers/unidades");
const router = (0, express_1.Router)();
router.get('/', unidades_1.getUnidades);
router.get('/:id', unidades_1.getUnidad);
router.post('/', unidades_1.postUnidad);
router.put('/:id', unidades_1.putUnidad);
router.delete('/:id', unidades_1.deleteUnidad);
exports.default = router;
//# sourceMappingURL=unidades.js.map