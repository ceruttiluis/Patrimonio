import { Router } from 'express';

import { PatrimonioRepositorySupabase } from '../infrastructure/repositories/PatrimonioRepositorySupabase';
import { TransferenciaRepositorySupabase } from '../infrastructure/repositories/TransferenciaRepositorySupabase';

import { TransferirPatrimonioUseCase } from '../application/useCases/TransferirPatrimonio';

import { TransferenciaController } from '../controller/transferenciaController';

const router = Router();

const patrimonioRepository = new PatrimonioRepositorySupabase();
const transferenciaRepository = new TransferenciaRepositorySupabase();

const transferirUseCase = new TransferirPatrimonioUseCase(
  patrimonioRepository,
  transferenciaRepository
);

const controller = new TransferenciaController(transferirUseCase, transferenciaRepository);

router.get('/', (req, res) => controller.listar(req, res));
router.post('/', (req, res) => controller.transferir(req, res));

export default router;