import { Router } from 'express';
import { getDetalleRegistro, getDetalleRegistros, postDetalleRegistro, putDetalleRegistro, deleteDetalleRegistro } from '../controllers/detalle_registros';


const router = Router();


router.get('/', getDetalleRegistros);
router.get('/:id', getDetalleRegistro);
router.post('/', postDetalleRegistro);
router.put('/:id', putDetalleRegistro);
router.delete('/:id', deleteDetalleRegistro);



export default router;