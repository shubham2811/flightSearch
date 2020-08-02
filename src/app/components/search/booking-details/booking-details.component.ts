import { DataService } from './../../services/data.service';
import { Component, OnInit, Input, ViewChild, AfterViewChecked } from '@angular/core';
import { SearchResultCardComponent } from '../content/search-result-card/search-result-card.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  @Input() booking;

  constructor(private dataServ: DataService) {

  }

  ngOnInit() {


    console.log(this.booking);
  }

}
