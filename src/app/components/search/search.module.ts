import { PriceFilter } from '../../pipes/priceFilter.pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './search.component';
import { DataService } from './../services/data.service';
import { SearchResultCardComponent } from './search-result-card/search-result-card.component';
import { FlightSearchByPriceComponent } from './sidebar/flight-search-by-price/flight-search-by-price.component';
import { FlightSearchPanelComponent } from './sidebar/flight-search-panel/flight-search-panel.component';
import { HeaderComponent } from './header/header.component';
import { SearchRoutingModule } from './search-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
    imports: [
        CommonModule,
        SearchRoutingModule,
        HttpClientModule,
        FormsModule,
        Ng5SliderModule
    ],
    declarations: [
        SearchComponent,
        HeaderComponent,
        FlightSearchPanelComponent,
        FlightSearchByPriceComponent,
        SearchResultCardComponent,
        PriceFilter
    ],
    providers: [DataService]
})
export class SearchModule { }
