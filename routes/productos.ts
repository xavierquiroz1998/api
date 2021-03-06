import { Router } from 'express';
import { getProducto, getProductos, postProducto, putProducto, deleteProducto, getProductosExt, validarProducto } from '../controllers/productos';


const router = Router();


router.get('/', getProductos);
router.get('/fill', getProductosExt);
router.get('/:id', getProducto);
router.post('/', postProducto);
router.put('/:id', putProducto);
router.delete('/:id', deleteProducto);
router.get('/validar/:id', validarProducto);



export default router;