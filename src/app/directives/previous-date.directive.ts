import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPreviousDate]'
})
export class PreviousDateDirective implements OnInit {

  pastMonth;
  pastDay;
  futureMonth;

  constructor(public renderer: Renderer2, public hostElement: ElementRef) { }

  ngOnInit() {

    this.pastMonth = new Date().getMonth() + 1;
    this.pastDay = new Date().getDate();
    this.futureMonth = parseInt(this.pastMonth, 10) + 2;

    if (this.pastMonth < 10) {
      this.pastMonth = '0' + this.pastMonth.toString();
    }

    if (this.futureMonth < 10) {
      this.futureMonth = '0' + this.futureMonth.toString();
    } else {
      this.futureMonth = this.futureMonth.toString();
    }

    if (this.pastDay < 10) {
      this.pastDay = '0' + this.pastDay.toString();
    }

    // tslint:disable-next-line:max-line-length

    // setting min attr on date via Renderer
    this.renderer.setAttribute(this.hostElement.nativeElement, 'min', new Date().getFullYear() + '-' + this.pastMonth + '-' + this.pastDay);


    // setting max attr on date via Renderer
    // tslint:disable-next-line:max-line-length
    this.renderer.setAttribute(this.hostElement.nativeElement, 'max', new Date().getFullYear() + '-' + this.futureMonth + '-' + this.pastDay);
  }
}
