import { Router } from 'express';
import { getProyecto, getProyectos, postProyecto, putProyecto, deleteProyecto } from '../controllers/proyectos';


const router = Router();


router.get('/', getProyectos);
router.get('/:id', getProyecto);
router.post('/', postProyecto);
router.put('/:id', putProyecto);
router.delete('/:id', deleteProyecto);



export default router;