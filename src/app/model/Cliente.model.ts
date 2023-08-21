export class Cliente {
    id?: any;
    nome?: any;
    tipo_pessoa?: any;
    cpfCnpj?: number;
    rg_ie?: number;
    data_cadastro?: any;
    ativo?: any;
    telefones?: any[] = [{ numero: '' }];
  }