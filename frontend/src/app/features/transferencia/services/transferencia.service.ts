import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private api = 'http://localhost:3000/transferencias'

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<any[]>(this.api);
  }

  transferir(data: any) {
    return this.http.post(this.api, data);
  }

}