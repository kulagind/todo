import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inversionPercent'
})
export class InversionPercentPipe implements PipeTransform {

  transform(value: number): number {
    const inversionPercent = Math.round((1 - value) * 100);
    return inversionPercent;
  }

}
