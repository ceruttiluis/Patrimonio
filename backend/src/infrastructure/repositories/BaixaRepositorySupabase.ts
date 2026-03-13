import { BaixaRepository } from '../../domain/repositories/BaixaRepository';
import { Baixa } from '../../domain/entities/Baixa';
import { supabase } from '../database/supabase';

export class BaixaRepositorySupabase implements BaixaRepository {

  async salvar(baixa: Baixa): Promise<void> {
    const { error } = await supabase
      .from('baixa')
      .insert({
        patrimonio_id: baixa.patrimonioId,
        data_baixa: baixa.dataBaixa,
        motivo: baixa.motivo
      });

    if (error) throw error;
  }
}