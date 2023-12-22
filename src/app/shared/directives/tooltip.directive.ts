import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true,
})
export class TooltipDirective {
  @Input({ required: true, alias: 'appTooltip' }) tooltipText!: string;

  private tooltipElement!: HTMLElement | null;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip() {
    this.tooltipElement = this.renderer.createElement('div');
    const tooltipContent = this.renderer.createText(this.tooltipText);
    this.renderer.appendChild(this.tooltipElement, tooltipContent);

    this.renderer.addClass(this.tooltipElement, 'tooltip');
    this.renderer.appendChild(document.body, this.tooltipElement);

    const hostElement = this.elementRef.nativeElement;
    const hostRect = hostElement.getBoundingClientRect();
    if (this.tooltipElement) {
      const tooltipRect = this.tooltipElement.getBoundingClientRect();

      const top = hostRect.top - tooltipRect.height / 2 + hostRect.height / 2;
      const left = hostRect.left + hostRect.width + 10;

      this.renderer.setStyle(this.tooltipElement, 'top', `${top}px`);
      this.renderer.setStyle(this.tooltipElement, 'left', `${left}px`);
    }
  }

  private hideTooltip() {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = null;
    }
  }
}
