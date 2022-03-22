import { Router } from 'express';
import { getRegistro, getRegistros, postRegistro, putRegistro, deleteRegistro } from '../controllers/registros';


const router = Router();


router.get('/', getRegistros);
router.get('/:id', getRegistro);
router.post('/', postRegistro);
router.put('/:id', putRegistro);
router.delete('/:id', deleteRegistro);



export default router;