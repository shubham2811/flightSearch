import { DataService } from '../../../services/data.service';
import { Component, ViewChild } from '@angular/core';
import { Cities } from '../../../../models/cities';
@Component({
  selector: 'app-flight-search-panel',
  templateUrl: './flight-search-panel.component.html',
  styleUrls: ['./flight-search-panel.component.css'],
})
export class FlightSearchPanelComponent {
  // view child to get hold of form for resetting it on tab change
  @ViewChild('form') form: any;
 model: any = {};
 searchBoxFlag = false;
  cities: object;

  constructor(private dataServ: DataService) {
    // service call to get all cities
    this.dataServ.getCities().subscribe((data: Cities) => {

      this.cities = data.cities;
    });
  }

  searchFlight(formVal) {
    // service call for flight search for given search parameters
    const obj = {
      dest: "DEL",
origin: "PNQ",
passengers: 1,
startDate: "2019-07-24"
    }
    console.log('formVal',formVal)
    this.dataServ.flightSearch(obj);
  }

  toggleButton(value) {
    this.form.reset();
    this.searchBoxFlag = !value;
  }
}
