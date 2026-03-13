export class Departamento {
  constructor(
    public readonly id: number,
    public nomeDepartamento?: string,
    public data_transferencia?: Date,
    public filialId?: number
  ) {}
}