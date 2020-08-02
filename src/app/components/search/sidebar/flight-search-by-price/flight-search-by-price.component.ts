import { DataService } from './../../../services/data.service';
import { Component } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
@Component({
  selector: 'app-flight-search-by-price',
  templateUrl: './flight-search-by-price.component.html',
  styleUrls: ['./flight-search-by-price.component.css']
})
export class FlightSearchByPriceComponent {
  minValue: number = 1000;
  maxValue: number = 12000;
  options: Options = {
    floor: 1000,
    ceil: 12000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          this.dataServ.filterByPrice({min:this.minValue,max:this.maxValue});
          return '<b>Min:</b> Rs ' + value;
        case LabelType.High:
          this.dataServ.filterByPrice({min:this.minValue,max:this.maxValue});
          return '<b>Max:</b> Rs ' + value;
        default:
          return 'Rs' + value;
      }
    }
  };
  constructor(private dataServ: DataService) { }
}
