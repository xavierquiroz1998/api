"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const registros_1 = require("../controllers/registros");
const router = (0, express_1.Router)();
router.get('/', registros_1.getRegistros);
router.get('/:id', registros_1.getRegistro);
router.get('/gettipo/:id', registros_1.getRegistrosTipo);
router.post('/', registros_1.postRegistro);
router.put('/:id', registros_1.putRegistro);
router.delete('/:id', registros_1.deleteRegistro);
exports.default = router;
//# sourceMappingURL=registros.js.map