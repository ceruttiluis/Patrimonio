import { Request, Response } from 'express';
import { Departamento } from '../domain/entities/Departamento';
import { CadastrarPatrimonioUseCase } from '../application/useCases/CadastrarPatrimonio';
import { PatrimonioRepositorySupabase } from '../infrastructure/repositories/PatrimonioRepositorySupabase';

export class PatrimonioController {
  constructor(
    private cadastrarUseCase: CadastrarPatrimonioUseCase,
    private readonly patrimonioRepository: PatrimonioRepositorySupabase
  ) {}

   async cadastrar(req: Request, res: Response) {
    try {
      const patrimonio = await this.cadastrarUseCase.executar(req.body);
      return res.status(201).json(patrimonio);
    } catch (err: any) {
      return res.status(400).json({ error: err.message });
    }
  }
  async listar(req: Request, res: Response) {

  try {

    const patrimonios = await this.patrimonioRepository.listar();

    return res.json(patrimonios);

  } catch (error) {

    return res.status(500).json({
      erro: 'Erro ao listar patrimônios'
    });

  }

}
}