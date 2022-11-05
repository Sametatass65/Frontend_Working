import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {
//          u bizim kendi unicPricımız // rate bizim yeni vereceğimiz değer 
  transform(value: number, rate:number): number {
    return (value + ((rate * value)/100));
  }

}
