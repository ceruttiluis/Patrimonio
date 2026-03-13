import { PatrimonioRepository } from '../../domain/repositories/PatrimonioRepository';
import { Patrimonio } from '../../domain/entities/patrimonio';
import { supabase } from '../database/supabase';
import { StatusPatrimonio } from '../../domain/enums/StatusPatrimonio';
import { TipoPatrimonio } from '../../domain/enums/TipoPatrimonio';
import { Departamento } from '../../domain/entities/Departamento';
import { Filial } from '../../domain/entities/Filial';

export class PatrimonioRepositorySupabase implements PatrimonioRepository {

  async buscarPorId(id: number): Promise<Patrimonio | null> {
    const { data, error } = await supabase
      .from('patrimonio')
      .select(`
        id,
        descricao,
        numero,
        status,
        tipo,
        data_baixa,
        departamento:departamento_id (
          id,
          nome
        ),
        filial:filial_id (
          id,
          nome
        )
      `)
      .eq('id', id)
      .single();

    if (error || !data) return null;

    return new Patrimonio(
      data.id,
      data.descricao,
      data.numero,
      data.status as StatusPatrimonio,
      data.tipo as TipoPatrimonio,
      new Departamento(data.departamento[0].id, data.departamento[0].nome),
      new Filial(data.filial[0].id, data.filial[0].nome),
      data.data_baixa
    );
  }

  async salvar(patrimonio: Patrimonio): Promise<void> {
    const { error } = await supabase
      .from('patrimonio')
      .insert({
        descricao: patrimonio.descricao,
        numero: patrimonio.numero,
        status: patrimonio.status,
        tipo: patrimonio.tipo,
        departamento_id: patrimonio.departamentoAtual.id,
        filial_id: patrimonio.filialAtual.id
      });

    if (error) throw error;
  }

  async atualizar(patrimonio: Patrimonio): Promise<void> {
    const { error } = await supabase
      .from('patrimonio')
      .update({
        status: patrimonio.status,
        departamento_id: patrimonio.departamentoAtual.id,
        data_baixa: patrimonio.status === StatusPatrimonio.BAIXADO
          ? new Date()
          : null
      })
      .eq('id', patrimonio.id);

    if (error) throw error;
  }
  async listar() {
  const { data, error } = await supabase
    .from('patrimonio')
    .select(`
      id,
      descricao,
      numero,
      status,
      tipo,
      data_baixa
    `);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
}