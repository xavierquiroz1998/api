import { Router } from 'express';
import { getPermiso, getPermisos, postPermiso, putPermiso, deletePermiso, getPermisosUsuario } from '../controllers/permisos';


const router = Router();


router.get('/get/:usuario', getPermisosUsuario);
router.get('/', getPermisos);
router.get('/:id', getPermiso);
router.post('/', postPermiso);
router.put('/:id', putPermiso);
router.delete('/:id', deletePermiso);



export default router;