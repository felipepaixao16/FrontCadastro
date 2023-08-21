import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'cpfCnpj'
})
  export class CpfCnpjPipe implements PipeTransform {
    transform(value: number | string, zenkaku: boolean = true): string {
      const valueStr = value.toString();
      if (!valueStr || valueStr.length < 11) {
        return valueStr;
      } 
      if (valueStr.length === 11) {
        return `${valueStr.substr(0, 3)}.${valueStr.substr(3, 3)}.${valueStr.substr(6, 3)}-${valueStr.substr(9, 2)}`;
      } else if (valueStr.length === 14) {
        return `${valueStr.substr(0, 2)}.${valueStr.substr(2, 3)}.${valueStr.substr(5, 3)}/${valueStr.substr(8, 4)}-${valueStr.substr(12)}`;
      }
      return valueStr;
    }
}