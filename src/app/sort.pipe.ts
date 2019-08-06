import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, valueToSort: string): any {
    return value.sort((a, b) => {
      if (a[valueToSort] > b[valueToSort]){
        return 1;
      } else {
        return -1;
      }
    });
  }

}
