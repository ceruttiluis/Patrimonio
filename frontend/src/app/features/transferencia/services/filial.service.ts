import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FilialService {

  private api = 'http://localhost:3000/filial';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get<any[]>(this.api);
  }

}