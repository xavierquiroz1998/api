import { Router } from 'express';
import { getParametro, getParametros, postParametro, putParametro, deleteParametro } from '../controllers/parametros';


const router = Router();


router.get('/', getParametros);
router.get('/:id', getParametro);
router.post('/', postParametro);
router.put('/:id', putParametro);
router.delete('/:id', deleteParametro);



export default router;