import { PatrimonioRepository } from '../../domain/repositories/PatrimonioRepository';
import { Patrimonio } from '../../domain/entities/patrimonio';
import { StatusPatrimonio } from '../../domain/enums/StatusPatrimonio';
import { TipoPatrimonio } from '../../domain/enums/TipoPatrimonio';

interface Input {
  descricao: string;
  numero: string;
  status: StatusPatrimonio;
  tipo: TipoPatrimonio;
  departamentoId: number;
  filialId: number;
}

export class CadastrarPatrimonioUseCase {
  constructor(
    private patrimonioRepository: PatrimonioRepository
  ) {}

  async executar(input: Input): Promise<void> {
    const patrimonio = Patrimonio.criar(
      input.descricao,
      input.numero,
      input.status,
      input.tipo,
      input.departamentoId,
      input.filialId
    );

    return await this.patrimonioRepository.salvar(patrimonio);
  }
}