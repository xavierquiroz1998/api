import { Router } from 'express';
import { getUnidad, getUnidades, postUnidad, putUnidad, deleteUnidad } from '../controllers/unidades';


const router = Router();


router.get('/', getUnidades);
router.get('/:id', getUnidad);
router.post('/', postUnidad);
router.put('/:id', putUnidad);
router.delete('/:id', deleteUnidad);



export default router;