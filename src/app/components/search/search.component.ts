import { Component } from '@angular/core';
@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
    constructor() {
        // resetting sessionStorage for fresh API call on page refresh !
        sessionStorage.removeItem('allFlights');
    }


}
