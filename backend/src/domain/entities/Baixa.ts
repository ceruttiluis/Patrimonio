export class Baixa {
  constructor(
    readonly id: number,
    readonly patrimonioId: number,
    readonly dataBaixa: Date,
    readonly motivo?: string
  ) {}
}