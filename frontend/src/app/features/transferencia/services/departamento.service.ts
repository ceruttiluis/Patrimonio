import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private api = 'http://localhost:3000/departamento';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<any[]>(this.api);
  }

}