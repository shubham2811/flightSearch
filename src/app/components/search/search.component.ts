import { DataService } from './../services/data.service';
import { Component, ViewChild, AfterViewChecked, AfterViewInit, OnInit } from '@angular/core';
import { SearchResultCardComponent } from './search-result-card/search-result-card.component';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

    // @ViewChild(SearchResultCardComponent) child;
    flag = false;
    bookingData;
    constructor(private dataServ: DataService) {
        // resetting sessionStorage for fresh API call on page refresh !
        sessionStorage.removeItem('allFlights');
    }

    ngOnInit() {
        this.dataServ.bookingDetails.subscribe((obj) => {
            this.flag = obj.flag;
            this.bookingData = obj.data;
        });
    }
}
