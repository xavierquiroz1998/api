"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const grupos_1 = require("../controllers/grupos");
const router = (0, express_1.Router)();
router.get('/', grupos_1.getGrupos);
router.get('/:id', grupos_1.getGrupo);
router.post('/', grupos_1.postGrupo);
router.put('/:id', grupos_1.putGrupo);
router.delete('/:id', grupos_1.deleteGrupo);
exports.default = router;
//# sourceMappingURL=grupos.js.map