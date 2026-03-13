import { Departamento } from "../entities/Departamento";

export interface DepartamentoRepository {
  buscarPorId(id: number): Promise<Departamento | null>;
}