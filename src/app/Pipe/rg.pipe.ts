import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rg'
})
export class RgPipe implements PipeTransform {

  transform(rg: any): string {
    if (rg) {
      const value = rg.toString().replace(/\D/g, '');

      if (value.length >= 2) {
        const firstPart = value.substr(0, 2);
        const remainingPart = value.substr(2);

        if (remainingPart.length >= 3) {
          const secondPart = remainingPart.substr(0, 3);
          const thirdPart = remainingPart.substr(3, 3);
          const lastPart = remainingPart.substr(6);

          return `${firstPart}.${secondPart}.${thirdPart}-${lastPart}`;
        } else {
          return `${firstPart}.${remainingPart}`;
        }
      }
      
      return value;
    }
    
    return ''; // Retornar uma string vazia se o valor de entrada for nulo ou indefinido
  }
}
