import { Router } from 'express';
import { ProductoController } from '../controllers/producto.controller';

const router = Router();

router.post('/', ProductoController.create);
router.get('/', ProductoController.getAll);
router.put('/:id/precio', ProductoController.updatePrecio);

export default router;