import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertorPipe'
})
export class ConvertorPipe implements PipeTransform {

  transform(value: number, type: string = 'none'): string {
    let finalValue = '';
    switch (type) {
      case 'feetToMeter':
        finalValue = (value * .3054).toFixed(1);
        break;
      case 'cmToMeter':
        finalValue = (value / 10).toFixed(1);
    }
    return finalValue
  }

}
