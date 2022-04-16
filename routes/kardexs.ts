import { Router } from 'express';
import { getKardex, getKardexs, postKardex, putKardex, deleteKardex, getKardexProducto, getKardexProductoUltimo } from '../controllers/kardexs';


const router = Router();


router.get('/', getKardexs);
router.get('/:id', getKardex);
router.get('/getproducto/:id', getKardexProducto);
router.get('/getproducto/ultimo/:id', getKardexProductoUltimo);
router.post('/', postKardex);
router.put('/:id', putKardex);
router.delete('/:id', deleteKardex);



export default router;