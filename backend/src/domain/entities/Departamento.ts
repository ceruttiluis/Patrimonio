import { Filial } from "./Filial";

export class Departamento {

  constructor(
    public readonly id: number,
    public nome?: string,
    public filial?: Filial
  ) {}

}