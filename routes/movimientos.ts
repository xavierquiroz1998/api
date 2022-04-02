import { Router } from 'express';
import { getMovimiento, getMovimientos, postMovimiento, putMovimiento, deleteMovimiento } from '../controllers/movimientos';


const router = Router();


router.get('/', getMovimientos);
router.get('/:id', getMovimiento);
router.post('/', postMovimiento);
router.put('/:id', putMovimiento);
router.delete('/:id', deleteMovimiento);



export default router;