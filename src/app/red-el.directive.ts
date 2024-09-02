import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedEl]',
  standalone: true,
})
export class RedElDirective {
  constructor(private el: ElementRef) {
    this.highlight('red');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
