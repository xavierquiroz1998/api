"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const movimientos_1 = require("../controllers/movimientos");
const router = (0, express_1.Router)();
router.get('/', movimientos_1.getMovimientos);
router.get('/:id', movimientos_1.getMovimiento);
router.post('/', movimientos_1.postMovimiento);
router.put('/:id', movimientos_1.putMovimiento);
router.delete('/:id', movimientos_1.deleteMovimiento);
exports.default = router;
//# sourceMappingURL=movimientos.js.map