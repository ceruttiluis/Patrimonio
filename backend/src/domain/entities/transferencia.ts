import { Departamento } from './Departamento';
import { Filial } from './Filial';

export class Transferencia {
  constructor(
    readonly id: number,
    readonly patrimonioNumero: string,
    readonly patrimonioId: number,

    readonly departamentoOrigem: Departamento,
    readonly departamentoDestino: Departamento,

    readonly filialOrigem: Filial,
    readonly filialDestino: Filial,

    readonly dataTransferencia: Date,
    readonly observacao?: string
  ) {}
}