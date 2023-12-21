import { Directive, ElementRef } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appPanel]',
})
export class PanelDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.height = '100%';
    this.el.nativeElement.style.width = '100%';
    this.el.nativeElement.style.borderRadius = '20px';
    this.el.nativeElement.style.padding = '10px';
    this.el.nativeElement.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
    this.el.nativeElement.style.backdropFilter =
      'blur(40px) saturate(100%) contrast(100%) brightness(50%)';
    this.el.nativeElement.style.boxShadow = '0 0px 20px 5px #000';
    this.el.nativeElement.style.border = '2px solid #0e0e0e';
  }
}
