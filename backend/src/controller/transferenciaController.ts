import { Request, Response } from 'express';

export class TransferenciaController {

  constructor(private transferirUseCase: any
    , private transferenciaRepository: any
  ) { }

  async transferir(req: Request, res: Response) {

    try {
      console.log("BODY RECEBIDO:", req.body);
      await this.transferirUseCase.executar(req.body);

      return res.json({
        message: 'Transferência realizada com sucesso'
      });

    } catch (error: any) {

      return res.status(400).json({
        error: error.message
      });

    }

  }
  async listar(req: Request, res: Response) {

    try {

      const transferencias = await this.transferenciaRepository.listar();

      return res.json(transferencias);

    } catch (error) {

      console.error(error);

      return res.status(500).json({
        erro: 'Erro ao listar transferências'
      });

    }

  }

}