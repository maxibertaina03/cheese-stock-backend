import { Router } from 'express';
import { Request, Response } from 'express';
import { AppDataSource } from '../config/database';
import { TipoQueso } from '../entities/TipoQueso';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const tipoQuesoRepo = AppDataSource.getRepository(TipoQueso);
    const tipos = await tipoQuesoRepo.find();
    res.json(tipos);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;