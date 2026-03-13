import { Request, Response } from "express";
import { supabase } from "../infrastructure/database/supabase";

export class DepartamentoController {

  async listar(req: Request, res: Response) {

    const { data, error } = await supabase
      .from('departamento')
      .select(`
      id,
      nome,
      filial:filial_id (
        id,
        nome
      )
    `)
      .order('nome');

    if (error) {
      return res.status(500).json(error);
    }

    return res.json(data);

  }

}