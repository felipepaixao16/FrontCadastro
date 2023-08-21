import { Injectable } from '@angular/core';
import { Cliente } from '../model/Cliente.model';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  clienteParaEditar: Cliente | null = null;
}
