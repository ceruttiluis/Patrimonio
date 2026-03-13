import { Patrimonio } from '../entities/patrimonio';

export interface PatrimonioRepository {
  buscarPorId(id: number): Promise<Patrimonio | null>;
  salvar(patrimonio: Patrimonio): Promise<void>;
  atualizar(patrimonio: Patrimonio): Promise<void>;
}