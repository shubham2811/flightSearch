import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByPrice'
})
export class FilterByPricePipe implements PipeTransform {


  // Filter search result for all the flights whose fare is less than given price in the range
  transform(values: any, range: any): any {

    range = parseInt(range, 10);

    // tslint:disable-next-line:curly
    if (!range) return values;

    // returning filtered values
    return values.filter((flight) => {
      return parseInt(flight.fare, 10) <= range;
    });
  }

}
