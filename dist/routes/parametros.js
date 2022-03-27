"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const parametros_1 = require("../controllers/parametros");
const router = (0, express_1.Router)();
router.get('/', parametros_1.getParametros);
router.get('/:id', parametros_1.getParametro);
router.post('/', parametros_1.postParametro);
router.put('/:id', parametros_1.putParametro);
router.delete('/:id', parametros_1.deleteParametro);
exports.default = router;
//# sourceMappingURL=parametros.js.map