import { StatusPatrimonio } from '../enums/StatusPatrimonio';
import { TipoPatrimonio } from '../enums/TipoPatrimonio';
import { Departamento } from './Departamento';
import { Filial } from './Filial';

export class Patrimonio {
  constructor(
    public readonly id: number,
    public descricao: string,
    public numero: string,
    public _status: StatusPatrimonio,
    public tipo: TipoPatrimonio,
    public _departamentoAtual: Departamento,
    readonly filialAtual: Filial,
    readonly dataBaixa?: Date
  ) {}

  get status(): StatusPatrimonio {
    return this._status;
  }

  get departamentoAtual(): Departamento {
    return this._departamentoAtual;
  }

  alterarStatus(novoStatus: StatusPatrimonio): void {
    this._status = novoStatus;
  }

  alterarDepartamento(novoDepartamento: Departamento): void {
    this._departamentoAtual = novoDepartamento;
  }

  static criar(
    descricao: string,
    numero: string,
    status: StatusPatrimonio,
    tipo: TipoPatrimonio,
    departamentoId: number,
    filialId: number
  ): Patrimonio {
    return new Patrimonio(
      0,
      descricao,
      numero,
      status,
      tipo,
      new Departamento(departamentoId),
      new Filial(filialId)
    );
  }
}