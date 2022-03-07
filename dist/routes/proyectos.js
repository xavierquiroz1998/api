"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proyectos_1 = require("../controllers/proyectos");
const router = (0, express_1.Router)();
router.get('/', proyectos_1.getProyectos);
router.get('/:id', proyectos_1.getProyecto);
router.post('/', proyectos_1.postProyecto);
router.put('/:id', proyectos_1.putProyecto);
router.delete('/:id', proyectos_1.deleteProyecto);
exports.default = router;
//# sourceMappingURL=proyectos.js.map