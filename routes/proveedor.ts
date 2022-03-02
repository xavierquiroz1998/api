import { Router } from 'express';
import { getProveedor, getProveedores, postProveedor, putProveedor, deleteProveedor } from '../controllers/proveedores';


const router = Router();


router.get('/', getProveedores);
router.get('/:id', getProveedor);
router.post('/', postProveedor);
router.put('/:id', putProveedor);
router.delete('/:id', deleteProveedor);



export default router;