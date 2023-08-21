import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente.model';
import { ClientsServiceService } from 'src/app/services/clients-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  cliente: Cliente = new Cliente();
  mensagemErro: string = '';

  constructor(
    private service: ClientsServiceService) { }

  ngOnInit(): void {
  }

  save(): void {
    if(this.cliente) {
      const cliente = {
        nome:this.cliente.nome,
        tipo_pessoa:this.cliente.tipo_pessoa,
        cpf_cnpj:this.cliente.cpfCnpj,
        rg_ie:this.cliente.rg_ie,
        data_cadastro:this.cliente.data_cadastro,
        ativo:this.cliente.ativo,
        telefones: this.cliente.telefones?.map((telefone: any) => ({ numero: telefone.numero }))
      };
        console.log(cliente)
        this.service.create(cliente)
        .subscribe(
        response => {
        this.clearForm();
        window.location.reload();
        console.log(response);
    },
    error => {
      this.mensagemErro = error.error.message;
          window.alert('Ocorreu um erro: ' + this.mensagemErro);
      }
    );
  }
}

  adicionarTelefone(): void {
    this.cliente.telefones?.push({ numero: '' });
  }

  clearForm(): void {
    this.cliente.nome = '';
    this.cliente.tipo_pessoa = '';
    this.cliente.cpfCnpj = 0;
    this.cliente.rg_ie = 0;
    this.cliente.data_cadastro = '';
    this.cliente.ativo = '';
    this.cliente.telefones = [];
  }
}
