import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minimise'
})
export class MinimisePipe implements PipeTransform {

  transform(value: string, length: number): string {
    return value.substring(0, length);
  }

}
