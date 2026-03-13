import { FilialRepository } from "../../domain/repositories/FilialRepository";
import { Filial } from "../../domain/entities/Filial";
import { supabase } from "../database/supabase";

export class FilialRepositorySupabase implements FilialRepository {

  async buscarPorId(id: number): Promise<Filial | null> {

    const { data, error } = await supabase
      .from("filial")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    if (!data) return null;

    return new Filial(
      data.id,
      data.nome
    );

  }

}