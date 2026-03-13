import { Request, Response } from "express";
import { supabase } from "../infrastructure/database/supabase";

export class FilialController {

  async listar(req: Request, res: Response) {

    const { data, error } = await supabase
      .from('filial')
      .select('*')
      .order('nome');

    if (error) {
      return res.status(500).json(error);
    }

    return res.json(data);

  }

}