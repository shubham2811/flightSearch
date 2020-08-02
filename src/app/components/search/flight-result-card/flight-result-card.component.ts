import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-result-card',
  templateUrl: './flight-result-card.component.html',
  styleUrls: ['./flight-result-card.component.css'],
})
export class FlightResultCardComponent implements OnInit {
  showMultipleView: boolean = false;
  flights;
  priceFilter: number;
  constructor(private dataServ: DataService) {}

  ngOnInit() {
    // recieving emitted event for filtered flights
    this.dataServ.search.subscribe(
      (filteredFlights) => (this.flights = filteredFlights)
    );

    // recieving emitted event for filtering flights as per provided range
    this.dataServ.priceFilterEvent.subscribe((val) => (this.priceFilter = val));
  }

  toggleMultipleView(value) {
    this.showMultipleView = !value;
  }
}
