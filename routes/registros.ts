import { Router } from 'express';
import { getRegistro, getRegistros, postRegistro, putRegistro, deleteRegistro, getRegistrosTipo, getRegistrosDetalle } from '../controllers/registros';


const router = Router();


router.get('/', getRegistros);
router.get('/:id', getRegistro);
router.get('/gettipo/:id', getRegistrosTipo);
router.get('/getfactura/:id', getRegistrosDetalle);
router.post('/', postRegistro);
router.put('/:id', putRegistro);
router.delete('/:id', deleteRegistro);



export default router;