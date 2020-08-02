import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// importing xyz-Env constants for URL endpoints via env specific constants
import { endPoints } from './env-endpoints';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  filteredFlight;
  twoWaySearch = false;

  constructor(private http: HttpClient) { }

  // EvenEmitters for component communication via Service
  @Output() search: EventEmitter<any> = new EventEmitter();
  @Output() priceFilterEvent: EventEmitter<any> = new EventEmitter();
  @Output() bookingDetails: EventEmitter<any> = new EventEmitter();

  getAllFlights(formVal) {

    this.http.get(endPoints.flightData)
      .subscribe(allFlights => {

        // setting in sessionStorage for quick access and searching sorting operation on UI
        sessionStorage.setItem('allFlights', JSON.stringify(allFlights));

        // call method to filter
        this.emitDataForComponents(this.filterFlights(allFlights, formVal));

      });
  }

  flightSearch(formVal) {

    /* check if data is present in session then emit it for components to reuse,
    if not then call getAllFlight API to fetch data from JSON
    */
   console.log('form',formVal)
    const allFlights = JSON.parse(sessionStorage.getItem('allFlights'));
    allFlights ?
      this.emitDataForComponents(this.filterFlights(allFlights, formVal)) :
      this.getAllFlights(formVal);

  }

  emitDataForComponents(filteredFlight) {
    if (filteredFlight) {

      // setting flag for type of search : one way or two way
      filteredFlight.twoWaySearch = this.twoWaySearch;

      // pass data into SearchResultCardComponent
      this.search.emit(filteredFlight);

    }
  }

  filterFlights(allFlights, formVal) {
    /*
      if return date is present in search parameter, that means user is looking for round trip
      hence updating filter criteria accordingly
    */
    if (formVal.returnDate) {

      this.twoWaySearch = true;
      return allFlights.filter((flight) => {
        return flight.date === formVal.startDate &&
          flight.round_trip_date === formVal.returnDate &&
          flight.destination === formVal.destination &&
          flight.origin === formVal.origin;
      });

    } else {
      this.twoWaySearch = false;
      return allFlights.filter((flight) => {
        console.log(flight.date);
        console.log(formVal.startDate)
        return flight.origin === formVal.origin &&
          flight.destination === formVal.destination &&
          flight.date === formVal.startDate;
      });
    }

  }

  filterByPrice(rangeObj) {
    // emitting priceFilter event for SearchResultCardComponent so as to re-use this value in Pipe
    this.priceFilterEvent.emit(rangeObj);
  }

  getCities() {
    // api call for list of cities to be displayed in From and To list in searchBox
    return this.http.get(endPoints.cities);
  }

  getBookingDetails(val, data) {
    console.log(val);
    // return val;
    const obj = {
      flag: val,
      data: data
    };
    this.bookingDetails.emit(obj);
  }

}
