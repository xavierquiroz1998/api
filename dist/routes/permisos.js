"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const permisos_1 = require("../controllers/permisos");
const router = (0, express_1.Router)();
router.get('/get/:usuario', permisos_1.getPermisosUsuario);
router.get('/', permisos_1.getPermisos);
router.get('/:id', permisos_1.getPermiso);
router.post('/', permisos_1.postPermiso);
router.put('/:id', permisos_1.putPermiso);
router.delete('/:id', permisos_1.deletePermiso);
exports.default = router;
//# sourceMappingURL=permisos.js.map