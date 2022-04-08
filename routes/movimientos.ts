import { Router } from 'express';
import { getMovimiento, getMovimientos, postMovimiento, putMovimiento, deleteMovimiento, getMovimientosIdPro } from '../controllers/movimientos';


const router = Router();


router.get('/', getMovimientos);
router.get('/:id', getMovimiento);
router.post('/', postMovimiento);
router.put('/:id', putMovimiento);
router.delete('/:id', deleteMovimiento);
router.get('/getMovimientosIdPro/:id', getMovimientosIdPro);




export default router;