import { Router } from 'express';

import { PatrimonioRepositorySupabase } from '../infrastructure/repositories/PatrimonioRepositorySupabase';
import { CadastrarPatrimonioUseCase } from '../application/useCases/CadastrarPatrimonio';
import { PatrimonioController } from '../controller/patrimonioController';

const router = Router();

const patrimonioRepository = new PatrimonioRepositorySupabase();

const cadastrarUseCase = new CadastrarPatrimonioUseCase(
  patrimonioRepository
);

const controller = new PatrimonioController(
  cadastrarUseCase,
  patrimonioRepository
);

router.get('/', (req, res) => controller.listar(req, res));

router.post('/cadastrar', (req, res) => controller.cadastrar(req, res));

export default router;