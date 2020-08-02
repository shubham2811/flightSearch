import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { FilterByPricePipe } from './../../pipes/filter-by-price.pipe';
import { PreviousDateDirective } from './../../directives/previous-date.directive';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { DataService } from './../services/data.service';
import { SearchResultCardComponent } from './content/search-result-card/search-result-card.component';
import { FlightSearchByPriceComponent } from './sidebar/flight-search-by-price/flight-search-by-price.component';
import { FlightSearchBoxComponent } from './sidebar/flight-search-box/flight-search-box.component';
import { HeaderComponent } from './header/header.component';
import { SearchRoutingModule } from './search-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        SearchRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    declarations: [
        SearchComponent,
        HeaderComponent,
        FlightSearchBoxComponent,
        FlightSearchByPriceComponent,
        SearchResultCardComponent,
        BookingDetailsComponent,
        PreviousDateDirective,
        FilterByPricePipe
    ],
    providers: [DataService]
})
export class SearchModule { }
