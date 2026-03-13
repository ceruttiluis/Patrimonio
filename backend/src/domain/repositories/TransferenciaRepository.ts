import { Transferencia } from "../entities/transferencia";

export interface TransferenciaRepository {
  salvar(transferencia: Transferencia): Promise<void>;
  listar(): Promise<Transferencia[]>;
}