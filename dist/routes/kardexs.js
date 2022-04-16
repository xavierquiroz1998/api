"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const kardexs_1 = require("../controllers/kardexs");
const router = (0, express_1.Router)();
router.get('/', kardexs_1.getKardexs);
router.get('/:id', kardexs_1.getKardex);
router.get('/getproducto/:id', kardexs_1.getKardexProducto);
router.get('/getproducto/ultimo/:id', kardexs_1.getKardexProductoUltimo);
router.post('/', kardexs_1.postKardex);
router.put('/:id', kardexs_1.putKardex);
router.delete('/:id', kardexs_1.deleteKardex);
exports.default = router;
//# sourceMappingURL=kardexs.js.map