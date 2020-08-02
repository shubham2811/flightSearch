import { DataService } from './../../../services/data.service';
import { Component, ViewChild } from '@angular/core';
import { Cities } from '../../../../models/cities';
@Component({
  selector: 'app-flight-search-box',
  templateUrl: './flight-search-box.component.html',
  styleUrls: ['./flight-search-box.component.css'],
})
export class FlightSearchBoxComponent {
  // view child to get hold of form for resetting it on tab change
  @ViewChild('form') form: any;

  public model: any = {};
  searBoxTab = false;
  cities: object;

  constructor(private dataServ: DataService) {
    // service call to get all cities
    this.dataServ.getCities().subscribe((data: Cities) => {
      // debugger;
      this.cities = data.cities;
    });
  }

  flightSearch(formVal) {
    // service call for flight search for given search parameters
    this.dataServ.flightSearch(formVal);
  }

  toggleButton(value) {
    this.form.reset();
    this.searBoxTab = !value;
  }
}
