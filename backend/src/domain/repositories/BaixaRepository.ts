import { Baixa } from '../entities/Baixa';

export interface BaixaRepository {
  salvar(baixa: Baixa): Promise<void>;
}