import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element : ElementRef) {
    console.log(this.element);
    
   }

   @HostListener('mouseenter') addHighlight(){
    this.element.nativeElement.style.backgroundColor='yellow'
   }

   @HostListener('mouseleave') removeHighlight(){
    this.element.nativeElement.style.backgroundColor=null;
   }

}
