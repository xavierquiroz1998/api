import { Router } from 'express';
import { getTipo, getTipos, postTipo, putTipo, deleteTipo } from '../controllers/tipo_registros';


const router = Router();


router.get('/', getTipos);
router.get('/:id', getTipo);
router.post('/', postTipo);
router.put('/:id', putTipo);
router.delete('/:id', deleteTipo);



export default router;