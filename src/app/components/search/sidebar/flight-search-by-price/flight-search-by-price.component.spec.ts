import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearchByPriceComponent } from './flight-search-by-price.component';

describe('FlightSearchByPriceComponent', () => {
  let component: FlightSearchByPriceComponent;
  let fixture: ComponentFixture<FlightSearchByPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlightSearchByPriceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchByPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
