import { Filial } from "../entities/Filial";

export interface FilialRepository {
  buscarPorId(id: number): Promise<Filial | null>;
}