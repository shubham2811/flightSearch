import { DataService } from './../../../services/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-flight-search-by-price',
  templateUrl: './flight-search-by-price.component.html',
  styleUrls: ['./flight-search-by-price.component.css']
})
export class FlightSearchByPriceComponent {

  minPrice = 1000;
  maxPrice = 12000;

  constructor(private dataServ: DataService) { }

  filterByPrice(value: number) {
    // call to service to pass range value for filtering search results by that price
    this.dataServ.filterByPrice(value);
  }

}
