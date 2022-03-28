import { Router } from 'express';
import { getDetalleRegistro, getDetalleRegistros, postDetalleRegistro, putDetalleRegistro, deleteDetalleRegistro, getDetalleRegistro2 } from '../controllers/detalle_registros';


const router = Router();


router.get('/', getDetalleRegistros);
router.get('/:id', getDetalleRegistro);
router.get('/getdetalles/:id', getDetalleRegistro2);
router.post('/', postDetalleRegistro);
router.put('/:id', putDetalleRegistro);
router.delete('/:id', deleteDetalleRegistro);



export default router;