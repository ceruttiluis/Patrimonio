import { PatrimonioRepository } from '../../domain/repositories/PatrimonioRepository';
import { TransferenciaRepository } from '../../domain/repositories/TransferenciaRepository';
import { StatusPatrimonio } from '../../domain/enums/StatusPatrimonio';
import { Transferencia } from '../../domain/entities/transferencia';
import { Departamento } from '../../domain/entities/Departamento';
import { Patrimonio } from '../../domain/entities/patrimonio';
import { Filial } from '../../domain/entities/Filial';

interface TransferirPatrimonioInput {
  patrimonioId: number;
  departamentoDestino: Departamento;
  observacao?: string;
  filialOrigem: Filial;
  filialDestino: Filial;
}

export class TransferirPatrimonioUseCase {
  constructor(
    private readonly patrimonioRepository: PatrimonioRepository,
    private readonly transferenciaRepository: TransferenciaRepository
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
    
    patrimonio.alterarDepartamento(input.departamentoDestino);
    patrimonio.alterarStatus(StatusPatrimonio.TRANSFERIDO);

    const transferencia = new Transferencia(
      0,
      patrimonio.numero,
    patrimonio.id,
    departamentoOrigem,
    input.departamentoDestino,
    input.filialOrigem, 
    input.filialDestino,
    new Date(),
    input.observacao
    );

    await this.transferenciaRepository.salvar(transferencia);
    await this.patrimonioRepository.atualizar(patrimonio);

    return patrimonio;
  }
}