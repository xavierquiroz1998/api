import { Router } from 'express';
import { getBodega, getBodegas, postBodega, putBodega, deleteBodega } from '../controllers/bodegas';


const router = Router();


router.get('/', getBodegas);
router.get('/:id', getBodega);
router.post('/', postBodega);
router.put('/:id', putBodega);
router.delete('/:id', deleteBodega);



export default router;