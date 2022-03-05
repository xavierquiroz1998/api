"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bodegas_1 = require("../controllers/bodegas");
const router = (0, express_1.Router)();
router.get('/', bodegas_1.getBodegas);
router.get('/:id', bodegas_1.getBodega);
router.post('/', bodegas_1.postBodega);
router.put('/:id', bodegas_1.putBodega);
router.delete('/:id', bodegas_1.deleteBodega);
exports.default = router;
//# sourceMappingURL=bodegas.js.map