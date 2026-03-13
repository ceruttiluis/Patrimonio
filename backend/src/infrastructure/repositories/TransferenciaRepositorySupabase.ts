import { TransferenciaRepository } from '../../domain/repositories/TransferenciaRepository';
import { Transferencia } from '../../domain/entities/transferencia';
import { Departamento } from '../../domain/entities/Departamento';
import { supabase } from '../database/supabase';
import { Filial } from '../../domain/entities/Filial';

export class TransferenciaRepositorySupabase implements TransferenciaRepository {

  async salvar(transferencia: Transferencia): Promise<void> {
    const { error } = await supabase
      .from('transferencia')
      .insert({
        patrimonio_id: transferencia.patrimonioId,

        departamento_origem_id: transferencia.departamentoOrigem.id,
        filial_origem_id: transferencia.filialOrigem.id,

        departamento_destino_id: transferencia.departamentoDestino.id,
        filial_destino_id: transferencia.filialDestino.id,

        data_transferencia: transferencia.dataTransferencia,
        observacao: transferencia.observacao
      });

    if (error) throw error;

  }

  async listar(): Promise<Transferencia[]> {

    const { data, error } = await supabase
      .from('transferencia')
      .select(`
  id,
  observacao,
  data_transferencia,
  patrimonio:patrimonio_id (
      id,
      numero
    ),

  departamento_origem:departamento_origem_id (
    id,
    nome
  ),

  departamento_destino:departamento_destino_id (
    id,
    nome
  ),
  filial_origem:filial_origem_id (
    id,
    nome
  ),
  filial_destino:filial_destino_id (
    id,
    nome
  )
`)

    if (error) {
      throw new Error(error.message);
    }

    if (!data) return [];

    return (data as any[]).map(d =>
      new Transferencia(
        d.id,
        d.patrimonio.numero,
        d.patrimonio.id,

        new Departamento(
          d.departamento_origem.id,
          d.departamento_origem.nome
        ),

        new Departamento(
          d.departamento_destino.id,
          d.departamento_destino.nome
        ),

        new Filial(
          d.filial_origem.id,
          d.filial_origem.nome
        ),

        new Filial(
          d.filial_destino.id,
          d.filial_destino.nome
        ),

        new Date(d.data_transferencia),

        d.observacao
      )
    );

  }
}
