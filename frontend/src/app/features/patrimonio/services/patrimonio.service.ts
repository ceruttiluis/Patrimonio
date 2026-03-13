import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patrimonio } from '../models/patrimonio.model';

@Injectable({
  providedIn: 'root'
})
export class PatrimonioService {

  private api = 'http://localhost:3000/patrimonios'

  constructor(private http: HttpClient) { }

  listar(): Observable<Patrimonio[]> {
    return this.http.get<Patrimonio[]>(this.api);
  }
  criar(dados: any) {
    return this.http.post(`${this.api}/cadastrar`, dados);
  }

}