import { Router } from 'express';
import { getGrupo, getGrupos, postGrupo, putGrupo, deleteGrupo } from '../controllers/grupos';


const router = Router();


router.get('/', getGrupos);
router.get('/:id', getGrupo);
router.post('/', postGrupo);
router.put('/:id', putGrupo);
router.delete('/:id', deleteGrupo);



export default router;