import { Directive, Output, EventEmitter, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
})
export class ClickOutsideDirective {

  @Output() clickOutside = new EventEmitter<void>();

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('document:click', ['$event.target'])
  public onClick(target: any) {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    const backdrop = target.className === 'backdrop';
    const button = target.className.includes('toggle-button');
    if (!clickedInside && backdrop || !button) {
      this.clickOutside.emit();
    }

  }
}
