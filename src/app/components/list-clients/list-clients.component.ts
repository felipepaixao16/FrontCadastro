import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/model/Cliente.model';
import { ClientsServiceService } from 'src/app/services/clients-service.service';
import { SharedServiceService } from 'src/app/services/shared-service.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit {
  clientes: any;
  cliente: Cliente = new Cliente();
  data: any;

  @Input() viewMode = false;
  message = '';

  constructor(
    private service: ClientsServiceService, 
    private sharedService: SharedServiceService,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.exibirClientes();
    if (!this.viewMode) {
      this.message = '';
      this.getCliente(this.route.snapshot.params["id"]);
    }
  }

  exibirClientes(): void {
    this.service.getAll().subscribe(
      data => {
        this.clientes = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteCliente(id: number) {
      this.service.deleteClient(id).subscribe(
        data => {
          this.clientes = data;
          console.log(data);
          this.exibirClientes();
          window.location.reload();
        },
        error => {
          console.log(error);
        }
      );
  }
  
  getCliente(id: number): void {
    this.service.getId(id)
      .subscribe({
        next: (data) => {
          this.cliente = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updateCliente(): void {
    this.message = '';
    this.service.update(this.cliente.id, this.cliente)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This tutorial was updated successfully!';
          this.exibirClientes();
          window.location.reload();
        },
        error: (e) => console.error(e)
      });
  }

  adicionarTelefone(): void {
    this.cliente.telefones?.push({ numero: '' });
  }
}
