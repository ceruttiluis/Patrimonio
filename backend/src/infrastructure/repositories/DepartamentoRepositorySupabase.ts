import { DepartamentoRepository } from "../../domain/repositories/DepartamentoRepository";
import { Departamento } from "../../domain/entities/Departamento";
import { Filial } from "../../domain/entities/Filial";
import { supabase } from "../database/supabase";

export class DepartamentoRepositorySupabase implements DepartamentoRepository {

    async buscarPorId(id: number): Promise<Departamento | null> {

        const { data, error } = await supabase
            .from("departamento")
            .select(`
        id,
        nome,
        filial:filial_id (
          id,
          nome
        )
      `)
            .eq("id", id)
            .single();

        if (error) {
            throw new Error(error.message);
        }

        if (!data.filial || data.filial.length === 0) {
            throw new Error("Departamento sem filial vinculada");
        }

        return new Departamento(
            data.id,
            data.nome,
            new Filial(
                data.filial[0].id,
                data.filial[0].nome
            )
        );

    }

}