import { PatrimonioRepository } from '../../domain/repositories/PatrimonioRepository';
import { TransferenciaRepository } from '../../domain/repositories/TransferenciaRepository';
import { StatusPatrimonio } from '../../domain/enums/StatusPatrimonio';
import { Transferencia } from '../../domain/entities/transferencia';
import { Patrimonio } from '../../domain/entities/patrimonio';

interface TransferirPatrimonioInput {
  patrimonioId: number;
  departamentoDestinoId: number;
  observacao?: string;
}

export class TransferirPatrimonioUseCase {
  constructor(
    private readonly patrimonioRepository: PatrimonioRepository,
    private readonly transferenciaRepository: TransferenciaRepository,
    private readonly departamentoRepository: any,
  ) {}

  async executar(input: TransferirPatrimonioInput): Promise<Patrimonio> {

    const patrimonio = await this.patrimonioRepository.buscarPorId(input.patrimonioId);

    if (!patrimonio) {
      throw new Error('Patrimônio não encontrado');
    }

    if (patrimonio.status !== StatusPatrimonio.ATIVO) {
      throw new Error('Somente patrimônio ATIVO pode ser transferido');
    }

    const departamentoOrigem = patrimonio.departamentoAtual;
    const filialOrigem = patrimonio.filialAtual;

    const departamentoDestino =
      await this.departamentoRepository.buscarPorId(input.departamentoDestinoId);

      if (!departamentoDestino) {
      throw new Error('Departamento destino não encontrado');
    }

    const filialDestino = departamentoDestino.filial;
    
    patrimonio.alterarDepartamento(departamentoDestino);
    patrimonio.alterarFilial(filialDestino);
    patrimonio.alterarStatus(StatusPatrimonio.TRANSFERIDO);

    const transferencia = new Transferencia(
      0,
    patrimonio.id,
    departamentoOrigem,
    departamentoDestino,
    filialOrigem, 
    filialDestino,
    new Date(),
    input.observacao
    );

    await this.transferenciaRepository.salvar(transferencia);

    return patrimonio;
  }
}