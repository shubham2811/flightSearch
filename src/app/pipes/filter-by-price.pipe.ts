import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByPrice'
})
export class FilterByPricePipe implements PipeTransform {
  transform(values: any, range: any): any {
    // returning filtered values
    return values.filter((flight) => {
      return flight.price >=range.min && flight.price <=range.max;
    });
  }

}
