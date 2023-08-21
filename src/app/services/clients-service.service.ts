import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente.model';

const baseUrl = "http://localhost:8080/api/v1/clientes";

@Injectable({
  providedIn: 'root'
})
export class ClientsServiceService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${baseUrl}`);
  }

  getId(id: any): Observable<Cliente> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(cliente: any): Observable<any> {
    const dataCadastroFormatted = this.formatarData(cliente.data_cadastro);
    cliente.data_cadastro = dataCadastroFormatted;
    return this.http.post(`${baseUrl}`, cliente);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  deleteClient(id: number): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  //Métodos Telefone

  createTel(clienteId: any, ): Observable<any> {
    return this.http.post(`${baseUrl}/adicionar-telefone`, clienteId);
  }

  private formatarData(data: string): string {
    const partes = data.split('-');
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
  }
}
