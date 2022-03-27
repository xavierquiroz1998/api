import { Router } from 'express';
import { getKardex, getKardexs, postKardex, putKardex, deleteKardex, getKardexProducto } from '../controllers/kardexs';


const router = Router();


router.get('/', getKardexs);
router.get('/:id', getKardex);
router.get('/getproducto/:id', getKardexProducto);
router.post('/', postKardex);
router.put('/:id', putKardex);
router.delete('/:id', deleteKardex);



export default router;