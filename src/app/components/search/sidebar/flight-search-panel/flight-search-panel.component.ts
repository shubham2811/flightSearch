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

  constructor(private _dataService: DataService) {
    // service call to get all cities
    this._dataService.getCities().subscribe((data: Cities) => {
      this.cities = data.cities;
    });
  }

  searchFlight(values) {
    const obj = {
      destination: 'Mumbai (BOM)',
      origin: 'Delhi (DEL)',
      passengers: 1,
      startDate: '2020-11-02',
      returnDate: '2020-11-02',
    };

    console.log('values', values);
    this._dataService.flightSearch(obj);
  }

  toggleButton(value) {
    this.form.reset();
    this.searchBoxFlag = !value;
  }
}
