import { PatrimonioRepository } from '../../domain/repositories/PatrimonioRepository';
import { BaixaRepository } from '../../domain/repositories/BaixaRepository';
import { StatusPatrimonio } from '../../domain/enums/StatusPatrimonio';
import { Baixa } from '../../domain/entities/Baixa';
import { Patrimonio } from '../../domain/entities/patrimonio';

interface BaixarPatrimonioInput {
  patrimonioId: number;
  motivo?: string;
}

export class BaixarPatrimonioUseCase {
  constructor(
    private readonly patrimonioRepository: PatrimonioRepository,
    private readonly baixaRepository: BaixaRepository
  ) {}

  async executar(input: BaixarPatrimonioInput): Promise<Patrimonio> {
    const patrimonio = await this.patrimonioRepository.buscarPorId(input.patrimonioId);

    if (!patrimonio) {
      throw new Error('Patrimônio não encontrado');
    }

    if (patrimonio.status !== StatusPatrimonio.ATIVO) {
      throw new Error('Somente patrimônio ATIVO pode ser baixado');
    }

    patrimonio.alterarStatus(StatusPatrimonio.BAIXADO);

    const baixa = new Baixa(
      0,
      patrimonio.id,
      new Date(),
      input.motivo
    );

    await this.baixaRepository.salvar(baixa);
    await this.patrimonioRepository.atualizar(patrimonio);

    return patrimonio;
  }
}