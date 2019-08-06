import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    function reverseString(str) {
      const splitString = str.split('');
      const reverseArray = splitString.reverse();
      const joinArray = reverseArray.join('');
      return joinArray;
    }
    return reverseString(value);
  }

}
