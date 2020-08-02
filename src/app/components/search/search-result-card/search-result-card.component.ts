import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search-result-card',
  templateUrl: './search-result-card.component.html',
  styleUrls: ['./search-result-card.component.css']
})
export class SearchResultCardComponent implements OnInit {
  showMultipleView:boolean=false
  flights;
  priceFilter: number;
  flag = false;
  constructor(private dataServ: DataService) {

  }

  ngOnInit() {
    // recieving emitted event for filtered flights
    this.dataServ.search.subscribe(filteredFlights =>  this.flights = filteredFlights);

    // recieving emitted event for filtering flights as per provided range
    this.dataServ.priceFilterEvent.subscribe(val => this.priceFilter = val);
  }

  showBookingDetails(data) {
    this.flag = true;
  }

  toggleMultipleView(value){
this.showMultipleView = !value
  }
}
