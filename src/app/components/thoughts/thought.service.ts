import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Pensamento } from './thought';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThoughtService {

  private readonly API = 'http://localhost:3000/pensamentos';

  constructor(private http: HttpClient) { }

  //create
  criar(pensamento: Pensamento): Observable<Pensamento>{
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  //read
  listar():  Observable<Pensamento[]>{
    return this.http.get<Pensamento[]>(this.API)
  }

  //update
  editar(pensamento: Pensamento): Observable<Pensamento>{
    const url = `${this.API}/${pensamento.id}`
    return  this.http.put<Pensamento>(url, pensamento)
  }

  //delete
  excluir(id: number): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: number): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }
}
