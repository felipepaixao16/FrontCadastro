import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Cliente } from 'src/app/model/Cliente.model';
import { ClientsServiceService } from 'src/app/services/clients-service.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  clients: Cliente[] = [];
  clientesPeloNome: Cliente[] = [];
  clientesAtivos: Cliente[] = [];
  nomePesquisado = '';

  constructor(private clientsService: ClientsServiceService) {}

  ngOnInit() {
    this.clientsService.getAll().subscribe((data: Cliente[]) => {
      this.clients = data;
    });
  }

  buscarClientesPeloNome() {
    this.clientesPeloNome = this.clients.filter(cliente =>
      cliente.nome.toLowerCase().includes(this.nomePesquisado.toLowerCase())
    );
  }

  buscarClientesAtivos() {
    this.clientesPeloNome = this.clients.filter(cliente =>
      cliente.ativo &&
      cliente.nome.toLowerCase().includes(this.nomePesquisado.toLowerCase())
    );
  }
}
