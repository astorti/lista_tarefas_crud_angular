import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedColor]'
})
export class RedColorDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.backgroundColor = '#F01717'
  }

}
